// World Clock demo: a small working copy of the extension popup's time scroll
// (world-clock extension 8.2, popup.js: wall(), tick(), setShift(), onWheel()),
// run on the visitor's own clock with real IANA zones. Strings and cities come
// from data- attributes on [data-demo-clock]; without this script the store
// image stays in place.
(function () {
  var root = document.querySelector("[data-demo-clock]");
  if (!root || !window.Intl || !Intl.DateTimeFormat.prototype.formatToParts) return;
  var d = root.dataset;
  var $ = function (name) {
    return root.querySelector("[data-" + name + "]");
  };
  var HOUR = 36e5;
  var DAY = 864e5;
  var MAX = 72;
  var AHEAD = 14 * DAY;
  var lang = document.documentElement.lang || "en";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  var cities = JSON.parse(d.cities);
  var known = JSON.parse(d.localNames)
    .concat(cities)
    .filter(function (c) {
      return c.zone === localTz;
    })[0];
  var list = [
    {
      name: known ? known.name : localTz.split("/").pop().replace(/_/g, " "),
      zone: localTz,
      // A zone we can't place in a country gets no weekend dimming, rather
      // than the browser language's region (an en-GB visitor in Jerusalem).
      country: known ? known.country : undefined,
      local: true,
    },
  ].concat(
    cities.filter(function (c) {
      return c.zone !== localTz;
    }),
  );

  // One cached formatter per zone; the wall clock as numbers, offset in minutes.
  var WD = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  var parts = {};
  function wall(tz, date) {
    var f = (parts[tz] =
      parts[tz] ||
      new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hourCycle: "h23",
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }));
    var p = {};
    f.formatToParts(date).forEach(function (x) {
      p[x.type] = x.value;
    });
    var hour = +p.hour % 24;
    var ms = Date.UTC(+p.year, +p.month - 1, +p.day, hour, +p.minute);
    return {
      hour: hour,
      weekday: WD[p.weekday],
      day: Math.floor(ms / DAY),
      offset: Math.round((ms - Math.floor(date / 6e4) * 6e4) / 6e4),
    };
  }
  var h12 = /h1[12]/.test(new Intl.DateTimeFormat(lang, { hour: "numeric" }).resolvedOptions().hourCycle);
  var times = {};
  function clock(tz, date) {
    var f = (times[tz] =
      times[tz] ||
      new Intl.DateTimeFormat(lang, { timeZone: tz, hour: h12 ? "numeric" : "2-digit", minute: "2-digit" }));
    var out = { main: "", ap: "", apFirst: false };
    f.formatToParts(date).forEach(function (x, i) {
      if (x.type === "dayPeriod") {
        out.ap = x.value;
        out.apFirst = i === 0;
      } else out.main += x.value;
    });
    out.main = out.main.trim();
    return out;
  }
  // Weekend days from CLDR week data, as the popup dims them.
  function weekend(cc) {
    if (!cc) return [];
    try {
      var l = new Intl.Locale("und-" + cc);
      return (l.getWeekInfo ? l.getWeekInfo() : l.weekInfo).weekend || [6, 7];
    } catch (e) {
      return [6, 7];
    }
  }
  function fmtOffset(min) {
    if (!min) return "±0h";
    var a = Math.abs(min);
    var m = a % 60;
    return (min > 0 ? "+" : "−") + Math.floor(a / 60) + (m ? ":" + String(m).padStart(2, "0") : "h");
  }
  function dayWord(n) {
    if (!n) return "";
    if (n === 1) return d.tomorrow;
    if (n === -1) return d.yesterday;
    return (n > 0 ? "+" : "−") + Math.abs(n) + "d";
  }
  // The next change of a city's offset from yours within two weeks (daylight saving).
  var shortDate = new Intl.DateTimeFormat(lang, { month: "numeric", day: "numeric" });
  function upcoming(tz, t) {
    var rel = function (x) {
      return wall(tz, new Date(x)).offset - wall(localTz, new Date(x)).offset;
    };
    var now = rel(t);
    if (rel(t + AHEAD) === now) return "";
    var lo = t;
    var hi = t + AHEAD;
    while (hi - lo > HOUR) {
      var mid = (lo + hi) / 2;
      if (rel(mid) === now) lo = mid;
      else hi = mid;
    }
    return "→ " + fmtOffset(rel(hi)) + " " + shortDate.format(hi);
  }

  var el = function (tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  };
  var rows = list.map(function (c) {
    var li = el("li", "clock-row");
    var who = el("div", "clock-who");
    var r = {
      c: c,
      li: li,
      weekend: weekend(c.country),
      name: el("p", "clock-name", c.name),
      meta: el("p", "clock-meta"),
    };
    r.time = el("p", "clock-time");
    r.hm = el("span", "clock-hm");
    r.ap = el("span", "clock-ap");
    who.append(r.name, r.meta);
    r.time.append(r.hm, r.ap);
    li.append(who, r.time);
    return r;
  });
  $("rows").replaceChildren.apply(
    $("rows"),
    rows.map(function (r) {
      return r.li;
    }),
  );

  var shift = 0;
  var target = function () {
    if (!shift) return new Date();
    var t = new Date();
    t.setMinutes(0, 0, 0);
    return new Date(+t + shift * HOUR);
  };
  var label = function () {
    return shift ? (shift > 0 ? "+" : "−") + Math.abs(shift) + "h" : d.now;
  };

  function tick(animate) {
    var date = target();
    var here = wall(localTz, date);
    var today = shift ? wall(localTz, new Date()).day : here.day;
    rows.forEach(function (r) {
      var w = wall(r.c.zone, date);
      var t = clock(r.c.zone, date);
      var rel = r.c.local ? d.local : fmtOffset(w.offset - here.offset);
      var dst = r.c.local ? "" : upcoming(r.c.zone, +date);
      var day = dayWord(w.day - today);
      r.text =
        r.c.name + " " + (t.apFirst ? t.ap + t.main : t.main + (t.ap ? " " + t.ap : "")) + (day ? ", " + day : "");
      if (r.hm.textContent !== t.main) {
        r.hm.textContent = t.main;
        if (animate && !reduce.matches) {
          r.li.classList.remove("is-tick");
          void r.li.offsetWidth;
          r.li.classList.add("is-tick");
        }
      }
      r.ap.textContent = t.ap;
      r.ap.classList.toggle("is-first", t.apFirst);
      if (t.apFirst) r.hm.before(r.ap);
      else r.hm.after(r.ap);
      r.meta.replaceChildren(rel, dst ? " " : "", dst ? el("span", "clock-dst", dst) : "", day ? " · " + day : "");
      var off = r.weekend.indexOf(w.weekday) >= 0 || w.hour < 9 || w.hour >= 18;
      r.li.classList.toggle("is-off", off);
    });
  }

  var slider = $("slider");
  var chip = $("shift-chip");
  var status = $("status");
  var announce;
  function setShift(n) {
    n = Math.max(-MAX, Math.min(MAX, n));
    if (n === shift) return;
    shift = n;
    slider.value = String(shift);
    slider.setAttribute("aria-valuetext", label());
    chip.textContent = label();
    chip.hidden = !shift;
    root.classList.toggle("is-shifted", shift !== 0);
    tick(true);
    clearTimeout(announce);
    announce = setTimeout(function () {
      status.textContent =
        label() +
        ": " +
        rows
          .map(function (r) {
            return r.text;
          })
          .join("; ");
    }, 600);
  }

  slider.addEventListener("input", function () {
    setShift(+slider.value);
  });
  root.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && shift) {
      e.preventDefault();
      setShift(0);
    }
  });
  $("now-button").addEventListener("click", function () {
    setShift(0);
  });

  // Wheel over the cities shifts by the hour, as in the popup; a page scroll
  // that merely passes over it keeps scrolling the page.
  var popup = root.querySelector(".clock-popup");
  var lastScroll = 0;
  var acc = 0;
  window.addEventListener(
    "scroll",
    function () {
      lastScroll = Date.now();
    },
    { passive: true },
  );
  popup.addEventListener(
    "wheel",
    function (e) {
      if (Date.now() - lastScroll < 300 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      acc += e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      if (Math.abs(acc) >= 50) {
        setShift(shift + Math.sign(acc));
        acc = 0;
      }
    },
    { passive: false },
  );

  // Dragging the cities sideways scrubs the hours (touch and mouse).
  var list$ = $("rows");
  var drag = null;
  list$.addEventListener("pointerdown", function (e) {
    if (e.button) return;
    drag = { x: e.clientX, from: shift };
    list$.setPointerCapture(e.pointerId);
  });
  list$.addEventListener("pointermove", function (e) {
    if (!drag) return;
    setShift(drag.from + Math.round((e.clientX - drag.x) / 28));
  });
  var end = function () {
    drag = null;
  };
  list$.addEventListener("pointerup", end);
  list$.addEventListener("pointercancel", end);

  function schedule() {
    tick(false);
    setTimeout(schedule, 60000 - (Date.now() % 60000) + 20);
  }
  schedule();
  slider.setAttribute("aria-valuetext", label());
  $("demo-fallback").hidden = true;
  $("demo-live").hidden = false;
})();

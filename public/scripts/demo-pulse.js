// Pulse demo: the menu-bar lamp and the tray step through a few scenes and
// loop, as Pulse 30 shows them (EXPERIENCE.md §3–4):
// - one lamp everywhere, shape and colour together: solid red needs you,
//   green ring running, hollow grey your turn, dashed grey process only;
// - the menu-bar title only while something waits: the count and the
//   oldest wait ("1 · 4m"), the count alone under a minute;
// - a new wait dims the lamp once, never a running animation (and not at
//   all under reduced motion);
// - the tray keeps its row order while open, and only waiting, stalled and
//   running rows have a second line: the question, or the last step.
// Scenes come from data-demo-pulse; the still in the HTML is one of them
// (data-start). It starts once on screen, pauses off screen, and never starts
// by itself under reduced motion; Pause / Play is always there.
(function () {
  var root = document.querySelector("[data-demo-pulse]");
  if (!root) return;
  var scenes = JSON.parse(root.dataset.demoPulse);
  var index = Number(root.dataset.start) || 0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var toggle = root.querySelector("[data-pulse-toggle]");
  var glanceLamp = root.querySelector("[data-glance-lamp]");
  var glanceTitle = root.querySelector("[data-glance-title]");
  var sentence = root.querySelector("[data-sentence]");
  var header = root.querySelector("[data-header]");
  var rows = Array.prototype.map.call(root.querySelectorAll("[data-row]"), function (li) {
    return {
      li: li,
      lamp: li.querySelector("[data-lamp]"),
      title: li.querySelector("[data-title]"),
      meta: li.querySelector("[data-meta]"),
      chip: li.querySelector("[data-chip]"),
    };
  });
  var STATES = ["waiting", "running", "stalled", "recent", "process"];
  function setState(el, prefix, state) {
    STATES.forEach(function (s) {
      el.classList.toggle(prefix + s, s === state);
    });
  }
  // Each scene's time on screen, in milliseconds: a wait stays a little longer.
  var hold = function (scene) {
    return scene.lamp === "waiting" ? 3200 : 2600;
  };

  function show(i) {
    var before = scenes[index];
    var scene = scenes[i];
    index = i;
    setState(glanceLamp, "pulse-lamp-", scene.lamp);
    glanceTitle.textContent = scene.glanceTitle || "";
    if (sentence) sentence.textContent = scene.lampSentence;
    header.textContent = scene.headerStatus;
    setState(header, "is-", scene.lamp);
    scene.rows.forEach(function (row, r) {
      var el = rows[r];
      if (!el) return;
      setState(el.li, "pulse-row-", row.state);
      setState(el.lamp, "pulse-lamp-", row.state);
      el.title.textContent = row.title;
      if (el.meta) el.meta.textContent = row.meta || "";
      if (el.chip) el.chip.textContent = row.chip || "";
    });
    // A new wait: the lamp dims once.
    if (scene.lamp === "waiting" && before.lamp !== "waiting" && !reduce.matches) {
      glanceLamp.classList.remove("is-new");
      void glanceLamp.offsetWidth;
      glanceLamp.classList.add("is-new");
    }
  }

  var timer = 0;
  var playing = false;
  var userPaused = reduce.matches;
  var inView = false;
  function tick() {
    show((index + 1) % scenes.length);
    timer = setTimeout(tick, hold(scenes[index]));
  }
  function play() {
    if (playing) return;
    playing = true;
    timer = setTimeout(tick, hold(scenes[index]));
    label();
  }
  function pause() {
    playing = false;
    clearTimeout(timer);
    label();
  }
  function label() {
    toggle.textContent = playing ? toggle.dataset.pauseLabel : toggle.dataset.playLabel;
  }
  toggle.addEventListener("click", function () {
    userPaused = playing;
    if (playing) pause();
    else play();
  });
  label();

  if (!("IntersectionObserver" in window)) {
    if (!userPaused) play();
    return;
  }
  new IntersectionObserver(
    function (entries) {
      inView = entries[0].isIntersecting;
      if (inView && !userPaused) play();
      else if (!inView) pause();
    },
    { threshold: 0.3 },
  ).observe(root);
})();

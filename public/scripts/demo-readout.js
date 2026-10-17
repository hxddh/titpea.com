// Readout demo: a small pane receives a few writes, and each new block is
// marked the way Readout 3.6 marks it (readout web/src/reader):
// - a new block gets a 3 px bar in the margin (reader.css .blk.m-inserted)
//   and, arriving on screen, a brief tint (reader.css "arrive", 1.2 s);
// - it counts as read once at least half of it has been visible for 800 ms
//   while the window has focus (marks.js DWELL_MS, readObserver; design.md);
// - read, the bar thins to a grey hairline (m-read, a 600 ms transition) and
//   is gone 10 s later (marks.js markRead);
// - blocks are inserted in place, so the text above stays where it is.
// The HTML holds the final state with its marks, which is what shows without
// JS and under reduced motion. Starts once on screen, pauses off screen, and
// loops; Pause / Play stops and resumes it.
(function () {
  var root = document.querySelector("[data-demo-readout]");
  if (!root || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var d = root.dataset;
  var writes = JSON.parse(d.writes);
  var doc = root.querySelector("[data-doc]");
  var toggle = root.querySelector("[data-readout-toggle]");
  var status = root.querySelector("[data-status]");
  var DWELL_MS = 800;
  var CLEAR_MS = 10000;
  var FIRST_MS = 1200;
  var EVERY_MS = 3200;
  var REST_MS = 2500;

  // The written blocks, taken out until their write comes.
  var written = writes.map(function (_, i) {
    return doc.querySelector('[data-write="' + i + '"]');
  });
  // The pane keeps the height of the finished document, so nothing outside it moves.
  doc.style.minHeight = doc.offsetHeight + "px";
  function reset() {
    written.forEach(function (el) {
      el.classList.remove("m-inserted", "m-read", "is-arriving");
      seen.delete(el);
      el.remove();
    });
  }

  var step = 0;
  var cycle = 0;
  var playing = false;
  var userPaused = false;
  var inView = false;
  var timer = 0;
  var dwell = new Map();
  var clears = new Map();

  // Read detection: half the block on screen, for 800 ms, while focused.
  var seen = new Set();
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) seen.add(e.target);
        else seen.delete(e.target);
      });
      armAll();
    },
    { threshold: [0, 0.5, 1] },
  );
  function armAll() {
    written.forEach(function (el) {
      var unread = el.classList.contains("m-inserted") && !el.classList.contains("m-read");
      var ready = unread && playing && seen.has(el) && document.hasFocus() && !document.hidden;
      if (ready && !dwell.has(el)) {
        dwell.set(
          el,
          setTimeout(function () {
            dwell.delete(el);
            markRead(el);
          }, DWELL_MS),
        );
      } else if (!ready && dwell.has(el)) {
        clearTimeout(dwell.get(el));
        dwell.delete(el);
      }
    });
  }
  function markRead(el) {
    el.classList.add("m-read");
    observer.unobserve(el);
    clears.set(
      el,
      setTimeout(function () {
        clears.delete(el);
        el.classList.remove("m-inserted", "m-read");
      }, CLEAR_MS),
    );
  }
  window.addEventListener("focus", armAll);
  window.addEventListener("blur", armAll);
  document.addEventListener("visibilitychange", armAll);

  function write() {
    var w = writes[step];
    var el = written[step];
    var blocks = doc.querySelectorAll(".ro-blk");
    var after = blocks[w.after];
    if (after) after.after(el);
    else doc.append(el);
    el.classList.remove("is-arriving");
    void el.offsetWidth;
    el.classList.add("m-inserted", "is-arriving");
    observer.observe(el);
    if (cycle === 0) status.textContent = d.written.replace("{text}", el.textContent.trim());
    step += 1;
  }
  // Each block's whole life, write to fade, before the document starts over.
  function next() {
    if (step < writes.length) {
      write();
      timer = setTimeout(next, step < writes.length ? EVERY_MS : DWELL_MS + CLEAR_MS + REST_MS);
      return;
    }
    if (clears.size || dwell.size || written.some(unreadOrMarked)) {
      timer = setTimeout(next, 500);
      return;
    }
    reset();
    step = 0;
    cycle += 1;
    timer = setTimeout(next, FIRST_MS);
  }
  function unreadOrMarked(el) {
    return el.classList.contains("m-inserted");
  }

  function play() {
    if (playing) return;
    playing = true;
    timer = setTimeout(next, step === 0 ? FIRST_MS : EVERY_MS);
    // A mark already read resumes its fade from the start.
    written.forEach(function (el) {
      if (el.classList.contains("m-read") && !clears.has(el)) markRead(el);
    });
    armAll();
    label();
  }
  function pause() {
    playing = false;
    clearTimeout(timer);
    clears.forEach(clearTimeout);
    clears.clear();
    armAll();
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

  reset();
  label();
  new IntersectionObserver(
    function (entries) {
      inView = entries[0].isIntersecting;
      if (inView && !userPaused) play();
      else if (!inView) pause();
    },
    { threshold: 0.4 },
  ).observe(root);
})();

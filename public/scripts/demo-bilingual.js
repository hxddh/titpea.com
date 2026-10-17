// Bilingual demo: the extension's peek on one sample paragraph. Its key
// handling follows the extension (bilingual content.js 1.6.1):
// - the reveal key is ⌥ (Alt) on a Mac and Shift elsewhere (IS_MAC, peekKey);
// - Shift waits 100 ms first, so Shift+click and Shift+Tab never reveal;
// - any other key, another modifier, or a click while Shift is held cancels;
// - releasing the key, or leaving the window, hides the translation;
// - two quick taps (each under 250 ms, within 400 ms) keep both languages
//   shown, and two more go back (toggleFromKey);
// - nothing happens while typing in a field.
// The extension reads the paragraph under the pointer; this demo has one, so
// the key works while it is on screen. The toggle button does the same for
// touch, keyboard and screen readers, and each change is announced.
(function () {
  var root = document.querySelector("[data-demo-bilingual]");
  if (!root) return;
  var d = root.dataset;
  var note = root.querySelector("[data-note]");
  var toggle = root.querySelector("[data-toggle]");
  var status = root.querySelector("[data-status]");
  var hint = root.querySelector("[data-hint]");
  var IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  var KEY = IS_MAC ? "Alt" : "Shift";
  var touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  var translation = note.lastChild.textContent.trim();

  if (touch) hint.textContent = d.touchHint;
  else root.querySelector("[data-key]").textContent = IS_MAC ? "⌥" : "Shift";

  var held = false; // the key is showing it
  var pinned = false; // both languages, by double tap or the button
  var shown = false;
  function render(announce) {
    var next = held || pinned;
    toggle.setAttribute("aria-pressed", String(pinned));
    if (next === shown) return;
    shown = next;
    note.classList.toggle("is-shown", shown);
    if (announce) status.textContent = shown ? d.shown.replace("{text}", translation) : d.hidden;
  }

  toggle.addEventListener("click", function () {
    pinned = !pinned;
    render(true);
  });

  // On screen only: elsewhere on the page the key keeps its usual meaning.
  var inView = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      if (!inView) cancel();
    }).observe(root);
  } else inView = true;

  var keyDown = false;
  var keyDownAt = 0;
  var lastTap = -Infinity;
  var otherKey = false;
  var timer = 0;
  var typing = function (e) {
    var t = e.target;
    return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  };
  var otherMods = function (e) {
    return (KEY !== "Alt" && e.altKey) || e.ctrlKey || (KEY !== "Shift" && e.shiftKey) || e.metaKey;
  };
  function cancel() {
    keyDown = false;
    lastTap = -Infinity;
    clearTimeout(timer);
    if (held) {
      held = false;
      render(true);
    }
  }

  addEventListener(
    "keydown",
    function (e) {
      if (!inView || typing(e)) return;
      if (e.key === KEY) {
        if (e.repeat) return;
        if (otherMods(e)) return cancel();
        keyDown = true;
        keyDownAt = performance.now();
        otherKey = false;
        clearTimeout(timer);
        timer = setTimeout(
          function () {
            if (!keyDown) return;
            held = true;
            render(true);
          },
          KEY === "Shift" ? 100 : 0,
        );
      } else if (keyDown) {
        otherKey = true;
        cancel();
      }
    },
    true,
  );

  addEventListener(
    "keyup",
    function (e) {
      if (e.key !== KEY) return;
      var wasDown = keyDown;
      keyDown = false;
      clearTimeout(timer);
      if (!wasDown) return;
      var now = performance.now();
      if (now - keyDownAt < 250 && !otherKey) {
        if (now - lastTap < 400) {
          lastTap = -Infinity;
          pinned = !pinned;
        } else lastTap = now;
      }
      held = false;
      render(true);
    },
    true,
  );

  addEventListener(
    "mousedown",
    function () {
      if (keyDown && KEY === "Shift") {
        otherKey = true;
        cancel();
      }
    },
    true,
  );
  addEventListener("blur", cancel);
})();

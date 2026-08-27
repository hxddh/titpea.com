(function () {
  var KEY = "titpea-theme";
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    if (theme === "dark" || theme === "light") root.dataset.theme = theme;
    else delete root.dataset.theme;
  }

  function resolved() {
    var t = root.dataset.theme;
    if (t === "dark" || t === "light") return t;
    return media && media.matches ? "dark" : "light";
  }

  // Apply a saved choice as early as possible so it paints correctly.
  apply(stored());

  // The two media-based <meta name="theme-color"> tags follow the OS when no
  // manual choice is stored. When a choice IS stored, append an override tag
  // (no media query, last in <head>) so the browser chrome matches the chosen
  // theme instead of the OS preference.
  function paintMeta() {
    var ATTR = "data-theme-color-override";
    var pref = stored();
    var override = document.head.querySelector("meta[" + ATTR + "]");
    if (pref === "dark" || pref === "light") {
      if (!override) {
        override = document.createElement("meta");
        override.setAttribute("name", "theme-color");
        override.setAttribute(ATTR, "");
        document.head.appendChild(override);
      }
      override.setAttribute("content", pref === "dark" ? "#131210" : "#f2f1ec");
    } else if (override) {
      override.parentNode.removeChild(override);
    }
  }

  function sync(button) {
    paintMeta();
    var dark = resolved() === "dark";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    button.setAttribute("aria-label", dark ? button.dataset.labelLight : button.dataset.labelDark);
    button.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    sync(button);
    button.addEventListener("click", function () {
      var next = resolved() === "dark" ? "light" : "dark";
      apply(next);
      try {
        localStorage.setItem(KEY, next);
      } catch (e) {}
      sync(button);
    });
    if (media && media.addEventListener) {
      media.addEventListener("change", function () {
        if (!stored()) sync(button);
      });
    }
  });
})();

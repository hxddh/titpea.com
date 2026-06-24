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

  function sync(button) {
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

// Copy buttons: reveal them only where the Clipboard API exists, then swap
// the label to "Copied" for a moment after a successful write.
(function () {
  if (!navigator.clipboard) return;
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var timer;
    button.hidden = false;
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(button.getAttribute("data-copy")).then(
        function () {
          button.textContent = button.getAttribute("data-copied-label");
          button.setAttribute("data-state", "copied");
          clearTimeout(timer);
          timer = setTimeout(function () {
            button.textContent = button.getAttribute("data-copy-label");
            button.removeAttribute("data-state");
          }, 1600);
        },
        function () {},
      );
    });
  });
})();

// Home's index filter: one category (product line) at a time. Without this
// script the chips stay hidden and every product is listed.
(function () {
  var root = document.querySelector("[data-filters]");
  if (!root) return;
  root.hidden = false;
  var groups = document.querySelectorAll(".index-group");
  var buttons = root.querySelectorAll("[data-filter-line]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var line = button.getAttribute("data-filter-line");
      buttons.forEach(function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      groups.forEach(function (group) {
        group.hidden = line !== "all" && group.getAttribute("data-line") !== line;
      });
    });
  });
})();

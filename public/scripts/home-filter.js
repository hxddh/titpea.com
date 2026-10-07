// Home catalog filter: one product line at a time, or all. Without this
// script the filter stays hidden and every line shows, grouped.
(function () {
  var filter = document.querySelector("[data-home-filter]");
  var catalog = document.querySelector("[data-home-catalog]");
  if (!filter || !catalog) return;
  var buttons = Array.prototype.slice.call(filter.querySelectorAll("button[data-filter]"));
  function show(line) {
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.filter === line ? "true" : "false");
    });
    if (line === "all") catalog.removeAttribute("data-filter");
    else catalog.setAttribute("data-filter", line);
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      show(button.dataset.filter);
    });
  });
  filter.hidden = false;
})();

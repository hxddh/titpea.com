// Home's index filters: one kind (line) and one platform at a time. Without
// this script the filters stay hidden and every product is listed.
(function () {
  var root = document.querySelector("[data-filters]");
  if (!root) return;
  root.hidden = false;
  var rows = document.querySelectorAll(".index-rows > li");
  var groups = document.querySelectorAll(".index-group");
  var empty = document.querySelector("[data-filter-empty]");
  var state = { line: "all", platform: "all" };

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var lineOk = state.line === "all" || row.dataset.line === state.line;
      var platformOk = state.platform === "all" || row.dataset.platforms.split(" ").indexOf(state.platform) !== -1;
      row.hidden = !(lineOk && platformOk);
      if (!row.hidden) shown += 1;
    });
    var filtering = state.line !== "all" || state.platform !== "all";
    groups.forEach(function (group) {
      group.hidden = !group.querySelector(".index-rows > li:not([hidden])");
      // A group's total stops being true while rows are filtered out.
      var count = group.querySelector("[data-group-count]");
      if (count) count.hidden = filtering;
    });
    // A live region that stays in the DOM, so the empty result is announced.
    if (empty) empty.textContent = shown > 0 ? "" : empty.dataset.emptyText;
  }

  function wire(attribute, key) {
    var buttons = root.querySelectorAll("[" + attribute + "]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        state[key] = button.getAttribute(attribute);
        buttons.forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
        apply();
      });
    });
  }

  wire("data-filter-line", "line");
  wire("data-filter-platform", "platform");
})();

// Home's index filter: one platform at a time (the groups already part the lines). Without
// this script the filters stay hidden and every product is listed.
(function () {
  var root = document.querySelector("[data-filters]");
  if (!root) return;
  root.hidden = false;
  var rows = document.querySelectorAll(".index-rows > li");
  var groups = document.querySelectorAll(".index-group");
  var empty = document.querySelector("[data-filter-empty]");
  var state = { platform: "all" };

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      row.hidden = !(state.platform === "all" || row.dataset.platforms.split(" ").indexOf(state.platform) !== -1);
      if (!row.hidden) shown += 1;
    });
    groups.forEach(function (group) {
      group.hidden = !group.querySelector(".index-rows > li:not([hidden])");
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

  wire("data-filter-platform", "platform");
})();

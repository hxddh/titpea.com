// Home catalog facets: one "For" value and one "Runs on" value at a time,
// combined (both must match). Without this script the facets stay hidden and
// every card shows.
(function () {
  var facets = document.querySelector("[data-home-filter]");
  var catalog = document.querySelector("[data-home-catalog]");
  if (!facets || !catalog) return;
  var buttons = Array.prototype.slice.call(facets.querySelectorAll("button[data-facet]"));
  var cards = Array.prototype.slice.call(catalog.children);
  var count = facets.querySelector("[data-count-template]");
  var chosen = { purpose: "all", platform: "all" };
  function matches(list, value) {
    return value === "all" || (list || "").split(" ").indexOf(value) !== -1;
  }
  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var visible = matches(card.dataset.purposes, chosen.purpose) && matches(card.dataset.platforms, chosen.platform);
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", chosen[button.dataset.facet] === button.dataset.value ? "true" : "false");
    });
    if (count) {
      count.textContent = shown ? count.dataset.countTemplate.replace("{count}", String(shown)) : count.dataset.none;
    }
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var facet = button.dataset.facet;
      // Pressing the chosen value again goes back to all.
      chosen[facet] = chosen[facet] === button.dataset.value ? "all" : button.dataset.value;
      apply();
    });
  });
  facets.hidden = false;
})();

(() => {
  const root = document.querySelector("[data-feed-filter]");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll("[data-filter]"));
  const rows = Array.from(document.querySelectorAll(".feed-row"));

  const apply = (filter) => {
    tabs.forEach((tab) => {
      const active = tab.getAttribute("data-filter") === filter;
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
    rows.forEach((row) => {
      const group = row.getAttribute("data-group");
      const visible = filter === "all" || group === filter;
      row.hidden = !visible;
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      apply(tab.getAttribute("data-filter") ?? "all");
    });
  });
})();

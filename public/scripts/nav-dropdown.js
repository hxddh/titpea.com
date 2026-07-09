const dropdowns = document.querySelectorAll(".nav-dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    dropdowns.forEach((other) => {
      if (other !== dropdown) other.open = false;
    });
  });

  // Close when keyboard focus leaves the open dropdown (tabbing away).
  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.open) return;
    const next = event.relatedTarget;
    if (next instanceof Node && dropdown.contains(next)) return;
    // Defer so a click on a panel link can still register first.
    window.requestAnimationFrame(() => {
      if (!dropdown.open) return;
      const active = document.activeElement;
      if (active instanceof Node && dropdown.contains(active)) return;
      dropdown.open = false;
    });
  });
});

document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    if (dropdown.open && !dropdown.contains(event.target)) dropdown.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  dropdowns.forEach((dropdown) => {
    if (dropdown.open) {
      dropdown.open = false;
      dropdown.querySelector("summary")?.focus();
    }
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.querySelectorAll(".nav-dropdown-panel a").forEach((link) => {
    link.addEventListener("click", () => (dropdown.open = false));
  });
});

const dropdowns = document.querySelectorAll(".nav-dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    dropdowns.forEach((other) => {
      if (other !== dropdown) other.open = false;
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

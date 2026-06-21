const menus = document.querySelectorAll(".mobile-menu");

menus.forEach((menu) => {
  menu.addEventListener("toggle", () => {
    if (!menu.open) return;
    menus.forEach((other) => {
      if (other !== menu) other.open = false;
    });
  });
});

document.addEventListener("click", (event) => {
  menus.forEach((menu) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  menus.forEach((menu) => {
    if (menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
});

menus.forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => (menu.open = false)));
});

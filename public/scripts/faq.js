// FAQ on phones: the first answer stays open and the rest fold, so a short
// page stays short. Desktop keeps the two-column grid fully open. Without
// this script every answer the page opened stays open.
(function () {
  if (!window.matchMedia("(max-width: 640px)").matches) return;
  document.querySelectorAll(".faq-list").forEach(function (list) {
    list.querySelectorAll("details.faq-item").forEach(function (item, index) {
      if (index > 0) item.open = false;
    });
  });
})();

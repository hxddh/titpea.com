// Gallery paddles: page a scroll-snap row one card at a time. Without this
// script the row still scrolls by swipe, trackpad and keyboard.
(function () {
  var galleries = document.querySelectorAll("[data-gallery]");
  galleries.forEach(function (gallery) {
    var section = gallery.closest(".gallery-section");
    var paddles = section && section.querySelector("[data-gallery-paddles]");
    if (!paddles) return;
    var prev = paddles.querySelector("[data-gallery-prev]");
    var next = paddles.querySelector("[data-gallery-next]");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function step() {
      var card = gallery.querySelector(".g-card");
      if (!card) return gallery.clientWidth;
      var gap = parseFloat(getComputedStyle(card.parentElement).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    function update() {
      var max = gallery.scrollWidth - gallery.clientWidth - 2;
      prev.disabled = gallery.scrollLeft <= 2;
      next.disabled = gallery.scrollLeft >= max;
      paddles.hidden = max <= 0;
    }

    function go(direction) {
      gallery.scrollBy({ left: direction * step(), behavior: reduce.matches ? "auto" : "smooth" });
    }

    prev.addEventListener("click", function () {
      go(-1);
    });
    next.addEventListener("click", function () {
      go(1);
    });
    gallery.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();

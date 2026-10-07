// Scroll reveal: cards and screenshots below the fold rise into place once as
// they enter the viewport. Skipped entirely when the reader prefers less motion.
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var targets = document.querySelectorAll(
    ".feature-card, .show-shot, .show-figure, .home-featured-card .shot, .stat",
  );
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = entry.target;
        target.classList.add("is-visible");
        observer.unobserve(target);
        target.addEventListener("transitionend", function done(event) {
          if (event.target !== target || event.propertyName !== "transform") return;
          target.removeEventListener("transitionend", done);
          target.classList.remove("reveal", "is-visible");
          target.style.removeProperty("--reveal-delay");
        });
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  targets.forEach(function (target) {
    if (target.getBoundingClientRect().top < window.innerHeight) return;
    // Siblings in one grid row arrive a beat apart.
    var item = target.closest("li") || target;
    var index = Array.prototype.indexOf.call(item.parentElement.children, item) % 3;
    target.style.setProperty("--reveal-delay", index * 70 + "ms");
    target.classList.add("reveal");
    observer.observe(target);
  });
})();

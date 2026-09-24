// Showcase recordings: play muted while on screen, pause off screen, and never
// start under reduced motion (the poster stays). A Pause / Play button gives
// the reader control, as moving content longer than five seconds needs.
(function () {
  var videos = document.querySelectorAll("video[data-autoplay]");
  if (!videos.length) return;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  videos.forEach(function (video) {
    var toggle = video.parentElement.querySelector("[data-video-toggle]");
    var userPaused = reduced;

    function label() {
      if (!toggle) return;
      toggle.textContent = video.paused ? toggle.dataset.playLabel : toggle.dataset.pauseLabel;
    }
    function play() {
      var attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(function () {});
    }

    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener("click", function () {
        userPaused = !video.paused;
        if (video.paused) play();
        else video.pause();
      });
    }
    video.addEventListener("play", label);
    video.addEventListener("pause", label);
    label();

    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !userPaused) play();
          else if (!entry.isIntersecting) video.pause();
        });
      },
      { threshold: 0.4 },
    ).observe(video);
  });
})();

// Terminal replay: types a command and prints its captured output line by
// line, once, when the terminal scrolls into view. The text is never changed:
// every character stays in the page from the start (screen readers and copy
// get all of it) and only turns visible in order. Play replays it, Pause
// holds it. Under reduced motion, or without this script, the whole output
// simply shows.
(function () {
  var figures = document.querySelectorAll("[data-replay]");
  if (!figures.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var TYPE_MS = 38;
  var LINE_MS = 170;
  var PAUSE_AFTER_COMMAND_MS = 450;

  figures.forEach(function (figure) {
    var screen = figure.querySelector("[data-replay-screen]");
    var toggle = figure.querySelector("[data-replay-toggle]");
    var text = screen.textContent;
    var lines = text.split("\n");
    var command = lines.shift();

    // Rebuild the same text as spans: the command's characters, then one span per line.
    var chars = Array.prototype.map.call(command, function (ch) {
      var span = document.createElement("span");
      span.textContent = ch;
      return span;
    });
    var rows = lines.map(function (line) {
      var span = document.createElement("span");
      span.className = "replay-line";
      span.textContent = line;
      return span;
    });
    var commandLine = document.createElement("span");
    commandLine.className = "replay-command";
    chars.forEach(function (span) {
      commandLine.append(span);
    });
    var parts = [commandLine];
    rows.forEach(function (row) {
      parts.push("\n", row);
    });
    screen.replaceChildren.apply(screen, parts);
    if (screen.textContent !== text) {
      // Never show anything but the captured text.
      screen.textContent = text;
      return;
    }
    var items = chars.concat(rows);

    var shown = 0;
    var timer = 0;
    var playing = false;
    function hideAll() {
      items.forEach(function (item) {
        item.classList.add("is-pending");
      });
      shown = 0;
    }
    function step() {
      if (shown >= items.length) return finish();
      items[shown].classList.remove("is-pending");
      shown += 1;
      var wait = shown < chars.length ? TYPE_MS : shown === chars.length ? PAUSE_AFTER_COMMAND_MS : LINE_MS;
      timer = setTimeout(step, wait);
    }
    function play() {
      if (shown >= items.length) hideAll();
      playing = true;
      figure.classList.add("is-playing");
      label();
      timer = setTimeout(step, TYPE_MS);
    }
    function pause() {
      playing = false;
      clearTimeout(timer);
      figure.classList.remove("is-playing");
      label();
    }
    function finish() {
      playing = false;
      figure.classList.remove("is-playing");
      label();
    }
    function label() {
      toggle.textContent = playing ? toggle.dataset.pauseLabel : toggle.dataset.playLabel;
    }
    toggle.addEventListener("click", function () {
      if (playing) pause();
      else play();
    });

    hideAll();
    label();
    var observer = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        play();
      },
      { threshold: 0.5 },
    );
    observer.observe(screen);
  });
})();

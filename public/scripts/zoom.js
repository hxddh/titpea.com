// Screenshot zoom: each product screenshot becomes a button that opens the
// full image in a modal dialog. Esc, the close button, or a click closes it.
(function () {
  var shots = document.querySelectorAll(".product-screenshot-visual img, .show-shot img, .show-figure img");
  if (!shots.length || typeof HTMLDialogElement !== "function") return;
  var zh = document.documentElement.lang.indexOf("zh") === 0;
  var dialog;
  var image;

  // Built on first use, so the page never carries an empty <img>.
  function ensureDialog() {
    if (dialog) return;
    dialog = document.createElement("dialog");
    dialog.className = "zoom-dialog";
    image = document.createElement("img");
    var close = document.createElement("button");
    close.type = "button";
    close.className = "zoom-close";
    close.textContent = zh ? "关闭" : "Close";
    dialog.append(close, image);
    document.body.append(dialog);
    dialog.addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("zoom-open");
    });
  }

  shots.forEach(function (shot) {
    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "zoom-trigger";
    trigger.setAttribute("aria-label", (zh ? "放大查看：" : "Enlarge: ") + shot.alt);
    shot.replaceWith(trigger);
    trigger.append(shot);
    trigger.addEventListener("click", function () {
      ensureDialog();
      image.src = shot.currentSrc || shot.src;
      image.alt = shot.alt;
      document.documentElement.classList.add("zoom-open");
      dialog.showModal();
      dialog.scrollTo(0, 0);
    });
  });
})();

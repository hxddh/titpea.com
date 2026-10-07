// Chessboard demo: one puzzle from the app's shipped set, solved on the page.
// No engine: a move counts only when it is the next move of the solution line
// (data-line); the forced reply then plays itself. The board is already drawn
// in the HTML; this script adds selection, keyboard focus, moves and Reset.
(function () {
  var root = document.querySelector("[data-demo-chess]");
  if (!root) return;
  var d = root.dataset;
  var board = root.querySelector("[data-board]");
  var message = root.querySelector("[data-message]");
  var resetButton = root.querySelector("[data-reset]");
  var line = JSON.parse(d.line);
  var colors = JSON.parse(d.colors);
  var names = JSON.parse(d.pieces);
  var solver = d.fen.split(" ")[1];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var squares = Array.prototype.slice.call(board.querySelectorAll("[data-sq]"));
  var at = {};
  squares.forEach(function (square) {
    at[square.dataset.sq] = square;
  });
  var start = squares.map(function (square) {
    return square.innerHTML;
  });
  var prompt = message.textContent;
  var step = 0;
  var selected = null;
  var busy = false;
  var done = false;
  var timer;

  var fill = function (template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return values[key] || "";
    });
  };
  var codeAt = function (sq) {
    var img = at[sq].querySelector("img");
    return img ? img.dataset.pieceCode : "";
  };
  var pieceName = function (code) {
    return fill(d.piece, { color: colors[code[0]], piece: names[code[1]] });
  };
  function label(sq) {
    var code = codeAt(sq);
    at[sq].setAttribute("aria-label", code ? fill(d.square, { square: sq, piece: pieceName(code) }) : sq);
  }
  function say(text, tone) {
    message.textContent = text;
    message.dataset.tone = tone || "";
  }
  function select(sq) {
    if (selected) at[selected].classList.remove("is-selected");
    selected = sq;
    if (sq) at[sq].classList.add("is-selected");
  }

  // Roving focus: one square is in the tab order; arrow keys move it.
  var cursor = 0;
  function setCursor(index, focus) {
    squares[cursor].tabIndex = -1;
    cursor = Math.max(0, Math.min(63, index));
    squares[cursor].tabIndex = 0;
    if (focus) squares[cursor].focus();
  }
  for (var i = 0; i < 64; i += 1) {
    var code = codeAt(squares[i].dataset.sq);
    if (code && code[0] === solver && code[1] === "q") cursor = i;
  }
  setCursor(cursor, false);

  function move(m) {
    var from = at[m.from];
    var to = at[m.to];
    var piece = from.querySelector("img");
    var taken = to.querySelector("img");
    var a = from.getBoundingClientRect();
    var b = to.getBoundingClientRect();
    if (taken) taken.remove();
    to.append(piece);
    if (!reduce.matches) {
      piece.style.setProperty("--piece-dx", a.left - b.left + "px");
      piece.style.setProperty("--piece-dy", a.top - b.top + "px");
      piece.classList.add("is-moving");
      void piece.offsetWidth;
      piece.classList.remove("is-moving");
    }
    squares.forEach(function (square) {
      square.classList.remove("is-last");
    });
    from.classList.add("is-last");
    to.classList.add("is-last");
    label(m.from);
    label(m.to);
    step += 1;
  }

  function finish() {
    done = true;
    board.classList.add("is-done");
    var king = board.querySelector('[data-piece-code="' + (solver === "w" ? "b" : "w") + 'k"]');
    if (king) king.parentNode.classList.add("is-check");
    say(d.solved, "solved");
  }

  function attempt(from, to) {
    var next = line[step];
    select(null);
    if (from !== next.from || to !== next.to) {
      say(d.wrong, "wrong");
      at[to].classList.add("is-wrong");
      setTimeout(function () {
        at[to].classList.remove("is-wrong");
      }, 600);
      return;
    }
    move(next);
    resetButton.hidden = false;
    if (step >= line.length) return finish();
    // The forced reply plays itself after a beat; at once under reduced motion.
    var playReply = function () {
      var reply = line[step];
      move(reply);
      busy = false;
      if (step >= line.length) return finish();
      say(fill(d.reply, { move: reply.san }));
    };
    if (reduce.matches) return playReply();
    busy = true;
    say(d.good, "good");
    timer = setTimeout(playReply, 700);
  }

  function press(sq) {
    if (busy || done) return;
    var code = codeAt(sq);
    if (code && code[0] === solver) {
      if (selected === sq) {
        select(null);
      } else {
        select(sq);
        say(fill(d.selected, { piece: pieceName(code), square: sq }));
      }
      return;
    }
    if (selected) attempt(selected, sq);
  }

  board.addEventListener("click", function (e) {
    var square = e.target.closest("[data-sq]");
    if (!square) return;
    setCursor(squares.indexOf(square), false);
    press(square.dataset.sq);
  });
  board.addEventListener("keydown", function (e) {
    var delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -8, ArrowDown: 8 }[e.key];
    if (delta) {
      e.preventDefault();
      var col = cursor % 8;
      if ((delta === -1 && col === 0) || (delta === 1 && col === 7)) return;
      setCursor(cursor + delta, true);
    } else if (e.key === "Escape" && selected) {
      e.preventDefault();
      select(null);
      say(prompt);
    }
  });

  resetButton.addEventListener("click", function () {
    clearTimeout(timer);
    squares.forEach(function (square, index) {
      square.innerHTML = start[index];
      square.classList.remove("is-last", "is-check", "is-selected", "is-wrong");
      label(square.dataset.sq);
    });
    board.classList.remove("is-done");
    step = 0;
    selected = null;
    busy = false;
    done = false;
    say(prompt);
    resetButton.hidden = true;
    squares[cursor].focus();
  });

  root.classList.add("is-live");
})();

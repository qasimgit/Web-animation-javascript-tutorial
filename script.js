window.addEventListener("load", function () {
    var shape = document.querySelector(".shape");
    var frames = [{ background: "red" }, { background: "yellow" }];

    var timing = {
      duration: 2000,
      iteration: Infinity
    };

    shape.animate(frames, timing);
});
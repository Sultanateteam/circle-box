const boxes = document.querySelectorAll(".boxes");
const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");

let i = 0;

btn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  boxes[i].classList.add("zIndex");
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (i < 2) {
      boxes[i].classList.remove("zIndex");
      i++;
      boxes[i].classList.add("zIndex");
    } else {
      boxes[i].classList.remove("zIndex");
      overlay.classList.add("hidden");
      i=0
    }
  });
});

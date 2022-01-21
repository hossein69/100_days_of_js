const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
function formatColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML == 0) {
    count.style.color = "white";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  }
}
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
  }
  formatColor();
});

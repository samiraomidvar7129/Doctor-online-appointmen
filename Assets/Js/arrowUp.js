
const ArrowUp = document.getElementById("arrow-up");window.addEventListener("scroll", (e) => {
  if (window.scrollY > 600) { ArrowUp.style.display = "block";ArrowUp.classList.add("scrollshow");} else {ArrowUp.style.display = "";ArrowUp.classList.remove("scrollshow")}});ArrowUp.addEventListener("click", (e) => {
  if (ArrowUp.classList.contains("scrollshow")) {window.scrollTo({ top: 0, behavior: "smooth" });}});function ArrowAnimate() {setInterval(function () {ArrowUp.style.animation = "ArrowAnimate 1s linear infinite";ArrowAnimate();}, 1000);}ArrowAnimate();
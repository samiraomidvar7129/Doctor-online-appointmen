//Loading -----------------------

const loadingElement = document.querySelector(".loader");

window.addEventListener("load", () => {
  loadingElement.classList.add("hidden");
});

//  Hamburger Menu-----------------

let hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", () => {
  let hamburger_menu_list = document.querySelector(".hamburger-menu-list");
  hamburger_menu_list.classList.toggle("active");
});

//Sticky Navbar----------------------

let item_1 = document.getElementById("header-nav");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    item_1.classList.add("position");
  } else {
    item_1.classList.remove("position");
  }
});

//Start Dedicated Scroll ----------

let DedicatedScroll = document.getElementById("dedicatedScroll");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  DedicatedScroll.style.width = scrollPercentRounded + "%";
});

//END Dedicated Scroll --------------

//OnlineConsultation Animate-------------

// var onlineConsultation = document.querySelector(".Online-consultation-text");

// const fadeOut = () => {
//   setInterval(function () {
//     onlineConsultation.style.animation = "opacity 0.7s linear infinite";
//     fadeOut();
//   }, 100);
// };

// fadeOut();



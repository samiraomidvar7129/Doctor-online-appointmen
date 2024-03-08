

const SwitchElem = document.querySelector(".switch");

darkTheme = () => {
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    //boolean
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

SwitchElem.addEventListener("click", darkTheme);

window.onload = () => {
  let localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  }
};
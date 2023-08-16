//Sticky Navbar
const item_1=document.getElementById('item-1')
document.addEventListener('scroll',function(){
  if(document.documentElement.scrollTop > 0){
    item_1.classList.add('position')
  }else{
    item_1.classList.remove('position')
  }
})

//Scroll Top

const arrow=document.getElementById('arrow-up')
window.addEventListener("scroll", e => {
  if (window.scrollY > 0) {
      arrow.classList.add("scrollshow")
  } else {
      arrow.classList.remove("scrollshow")
  }
})

arrow.addEventListener("click", e => {
  if (arrow.classList.contains("scrollshow")) {
      window.scrollTo({top: 0, behavior: "smooth"})
  }
})




//Loader Func-----------------------------

const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

//ShowTime func---------------------------

function ShowTime() {
  var myData = new Date();
  var Hour = myData.getHours();
  var Minutes = myData.getMinutes();
  var Seconds = myData.getSeconds();
  var p = "AM";
  if (Hour > 12) {
    Hour = Hour - 12;
    p = "PM";
  }
  if (Hour < 10) {
    Hour = "0" + Hour;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }

  var result = document.getElementById("time-result");
  result.innerHTML = Hour + ":" + Minutes + ":" + Seconds;
}
setInterval(ShowTime, 1000);
ShowTime();



//Menu-----------------------
const home = document.querySelector("#home");
const doctors = document.querySelector("#doctors");
const sections = document.querySelector("#sections");
const nobat = document.querySelector("#nobat");
const about = document.querySelector("#about");
const topMenu = document.querySelector(".animate-ul");

home.addEventListener("mouseenter", function () {
  topMenu.style.width = "80px";
  topMenu.style.marginRight = "-430px";
});
doctors.addEventListener("mouseenter", function () {
  topMenu.style.width = "100px";
  topMenu.style.marginRight = "-250px";
});

sections.addEventListener("mouseenter", function () {
  topMenu.style.width = "100px";
  topMenu.style.marginRight = "10px";
});

nobat.addEventListener("mouseenter", function () {
  topMenu.style.width = "100px";
  topMenu.style.marginRight = "200px";
});

about.addEventListener("mouseenter", function () {
  topMenu.style.width = "100px";
  topMenu.style.marginRight = "420px";
});

//modal func--------------------

const btnModal = document.querySelector(".btn-modal");
const closeBtn = document.querySelector(".close-btn");

const modalParent = document.querySelector(".modal-parent");

showModal = () => {
  (modalParent.style.display = "block"),
    (document.body.style.filter = "blur(1px)");
};

hideModal = () => {
  (modalParent.style.display = "none"),
    (document.body.style.filter = "blur(0px)");
};
hideModalWithEsc = (e) => {
  if (e.keyCode === 27) {
    (modalParent.style.display = "none"),
      (document.body.style.filter = "blur(0px)");
  }
};

btnModal.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
document.body.addEventListener("keyup", hideModalWithEsc);

//Start Light Mode Scripts---------------------

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

// END Light Mode Scripts-----------------------

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();

  //step 2:
  xhttp.open("GET", "/Assets/json/ghalb.json");

  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myData = JSON.parse(xhttp.responseText);
      createMainBox(myData);
    }
  };
  xhttp.send();
});

function createMainBox(myData) {
  var mainBox = document.getElementById("main-box");
  mainBox.style.display="flex"
  mainBox.style.flexWrap="wrap"
  mainBox.style.justifyContent="center"
  mainBox.style.alignItems="center"
  
  for (const item in myData.doctors) {
    var mainBoxElem = createGroupBox(
      myData.doctors[item].groupId,
      myData.doctors[item].groupTitle,
      myData.doctors[item].groupImage
    );
    mainBox.appendChild(mainBoxElem);
  }
}

function createGroupBox(groupId, groupTitle, groupImage) {

  var boxItem = document.createElement("div");
  boxItem.classList.add("main-box");
  boxItem.style.width = "200px";
  boxItem.style.margin="10px"
  boxItem.style.padding="10px";
  boxItem.style.display = "flex";
  boxItem.style.flexDirection = "column";
  boxItem.style.justifyContent = "center";
  boxItem.style.alignItems="center"
  boxItem.style.backgroundColor="darkBlue";
  boxItem.style.borderRadius="30px";
  

  var itemImg = document.createElement("img");
  itemImg.setAttribute("src", groupImage);
  itemImg.style.width = "100px";
  itemImg.style.height = "100px";
  itemImg.style.borderRadius = "100%";
  itemImg.style.margin = "auto";

  var itemCaption = document.createElement("div");
  itemCaption.classList.add("caption");
  itemCaption.style.width = "100%";
  itemCaption.style.height = "50%";

  var itemTitle = document.createElement("h5");
  itemTitle.classList.add("title");
  itemTitle.style.textAlign = "center";

  var itemLink = document.createElement("a");
  itemLink.style.color="white"
  var itemLinkText = document.createTextNode(groupTitle);
  itemLink.appendChild(itemLinkText);

  itemLink.setAttribute("href", "details.html?group=" + groupId);


  itemTitle.appendChild(itemLink);
  itemCaption.appendChild(itemTitle);

  boxItem.appendChild(itemImg);
  boxItem.appendChild(itemCaption);

  return boxItem;
}


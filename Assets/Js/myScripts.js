

// Menu Burger----------------------
const menuBurger=document.querySelector('.menu-burger');
const menuBurgerList=document.querySelector('.menu-burger-list');

var booleanFlag=true;

menuBurger.addEventListener('click', () =>{
  if(booleanFlag == true){
    menuBurger.classList.add('open');
    menuBurgerList.style.top="0";
    booleanFlag=false;
  }else{
    menuBurger.classList.remove('open');
    menuBurgerList.style.top="-35%";
    booleanFlag=true;
  }
});


//Sticky Navbar----------------------

const item_1 = document.getElementById("item-1");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    item_1.classList.add("position");
  } else {
    item_1.classList.remove("position");
  }
});

//Start Dedicated Scroll ----------

let DedicatedScroll = document.getElementById("DedicatedScroll");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  // console.log(scrollTop);
  let documentHeight = document.body.clientHeight;
  // console.log(documentHeight);
  let windowHeight = window.innerHeight;
  // console.log(windowHeight);
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  // console.log(scrollPercent);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  // console.log(scrollPercentRounded);
  DedicatedScroll.style.width = scrollPercentRounded + "%";
});

//END Dedicated Scroll --------------

// Animate Effect Arrow-Up-----------

const ArrowUp = document.getElementById("arrow-up");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 600) {
    ArrowUp.style.display = "block";
    ArrowUp.classList.add("scrollshow");
  } else {
    ArrowUp.style.display = "";
    ArrowUp.classList.remove("scrollshow");
  }
});

ArrowUp.addEventListener("click", (e) => {
  if (ArrowUp.classList.contains("scrollshow")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

function ArrowAnimate() {
  setInterval(function () {
    ArrowUp.style.animation = "ArrowAnimate 1s linear infinite";
    ArrowAnimate();
  }, 1000);
}
ArrowAnimate();

//Loader Function-----------------------

const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

// --------------------------------------

//OnlineConsultation Animate-------------
var OnlineConsultation =document.querySelector(".Online-consultation-text");

function fadeOut() {
  setInterval(function () {
    OnlineConsultation.style.animation = "opacity 0.7s linear infinite";
    fadeOut();
  },100);
}

fadeOut();

// -------------------------------------
// SearchBar

let  searchBtn=document.querySelector('.search-btn');
let searchInput=document.getElementById('search-input')
let searchBar=document.querySelector('.search-bar');
let closeBtnIcon=document.querySelector('.close-btn-icon');

searchBtn.addEventListener('click',()=>{
  searchBar.classList.add('active');
  searchBar.style.transition='all 0.5s cubic-bezier(0.7,-0.5, 0.3 ,1.5)';
  closeBtnIcon.style.transition='all 0.5s cubic-bezier(0.7,-0.5, 0.3 ,1.5)';
});
closeBtnIcon.addEventListener('click',()=>{
  searchBar.classList.remove('active');
  searchInput.value=""
})


//modal Element---------------------

const btnModal = document.querySelector(".btn-modal");
const closeBtn = document.querySelector(".close-btn");
const modalParent = document.querySelector(".modal-parent");

showModal = () => {
  modalParent.style.display = "block";
  modalParent.style.transition = "all 0.5s cubic-bezier(0.7,-0.5,0.3,1.5)";
};
hideModal = () => {
  modalParent.style.display = "none";
};
hideModalWithEsc = (e) => {
  if (e.keyCode === 27) {
    modalParent.style.display = "none";
  }
};
btnModal.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
document.body.addEventListener("keyup", hideModalWithEsc);

// Form Validation with class-----

let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");

class formValidation {
  constructor(myForm) {
    this.__myForm = myForm;
    this.submitHandler();
    this.focusHandler();
  }

  submitHandler = () => {
    this.__myForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  };

  focusHandler = () => {
    this.__myForm.addEventListener("focusin", (e) => {
      console.log(e.target);
    });
    this.__myForm.addEventListener("focusout", (e) => {
      let dataSetValidation = e.target.dataset.validation;
      console.log(dataSetValidation);
      // console.log(validationArray);

      if (dataSetValidation) {
        let validationArray = dataSetValidation.split(" ");
        for (let index = 0; index < validationArray.length; index++) {
          const result = validationArray[index];
          let errorMessage = this[result](e.target);

          var siblingElem = e.target.nextElementSibling;
          siblingElem.innerHTML += errorMessage + "<br>";
          if (errorMessage.length > 0) {
            siblingElem.classList.remove("display-hide");
            siblingElem.style.color = "red";
            siblingElem.style.fontSize = "10px";
            siblingElem.style.marginTop = "10px";
          } else {
            siblingElem.classList.add("display-hide");
          }
        }
      }
    });
  };

  notEmpty = (element) => {
    if (element.value === "") {
      return "کاربر محترم !  این فیلد نباید خالی باشد";
    }
    return "";
  };


isEmail(element){
  const reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (!reg.test(element.value)){
 return 'قالب ایمیل نادرست است'
} else{
 return "";
 }
}


isPassword(element){
const reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8 ِ})");
if(!reg.test(element.value)){
  return 'قالب رمز عبور نامعتبر است'
}
return "";

};

}
new formValidation(document.getElementById("form-modal"));


// Light Mode Scripts----------

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

//----------------------------------


//-----------------------------------

//Get Data With Ajax , Api-------------

var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();

  //step 2:
   
  var url="/Assets/json/ghalb.json";
  xhttp.open("GET", url);

  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data =JSON.parse(xhttp.responseText);
      createMainBox(data);
    }
  };
  xhttp.send();
});

function createMainBox(data) {
  myData=data;
  
  var mainBox = document.querySelector(".mySwiper-list");
  mainBox.style.display = "flex";
  mainBox.style.flexWrap = "wrap";
  mainBox.style.justifyContent = "space-around";
  mainBox.style.alignItems = "center";

  for (const item in myData.doctors) {
    var mainBoxElem = createGroupBox(
      myData.doctors[item].id,
      myData.doctors[item].Name,
      myData.doctors[item].ImageUrl,
      myData.doctors[item].Speciallity
    );

    mainBox.appendChild(mainBoxElem);
  }
}

function createGroupBox(id, Name, ImageUrl,Speciallity) {
  var boxItem = document.createElement("div");
  boxItem.classList.add("mySwiprt-list_item");

  var swiperLink = document.createElement("a");
  swiperLink.classList.add("mySwiprt-list_items-link");
  swiperLink.setAttribute("href", "details.html?group=" + id);

  var itemCaption = document.createElement("div");
  itemCaption.classList.add("mySwiprt-list_items");
  itemCaption.style.width = "250px";
  itemCaption.style.height = "200px";
  itemCaption.style.marginTop = "12px";
  itemCaption.style.padding = "5px";
  itemCaption.style.display = "flex";
  itemCaption.style.flexDirection = "column";
  itemCaption.style.justifyContent = "center";
  itemCaption.style.alignItems = "center";
  itemCaption.style.borderRadius = "10px";
  itemCaption.style.border = "1px solid #c7c7c7";
  itemCaption.style.transition = "0.5s ease";

  var itemsTitle = document.createElement("div");
  itemsTitle.classList.add("mySwiprt-list_items-title");
  itemsTitle.style.display = "flex";
  itemsTitle.style.justifyContent = "center";
  itemsTitle.style.alignItems = "center";

  var titleText = document.createElement("div");
  titleText.classList.add("mySwiprt-list_items-title--text");

  var H61 = document.createElement("h6");
  H61.innerText = Name;
  H61.style.fontSize = "12px";
  H61.style.marginLeft = "15px";

  var H5 = document.createElement("h5");
  H5.textContent = Speciallity,
  H5.style.display = "block";
  H5.style.fontSize = "13px";
  H5.style.marginTop="22px"

  

  var spanImg = document.createElement("span");
  spanImg.classList.add("mySwiprt-list_items-title--img");
  spanImg.style.width = "60px";
  spanImg.style.height = "60px";
  spanImg.style.display = "flex";
  spanImg.style.justifyContent = "center";
  spanImg.style.alignItems = "center";

  var itemImg = document.createElement("img");
  itemImg.setAttribute("src", ImageUrl);
  itemImg.style.width = "100%";
  itemImg.style.height = "100%";
  itemImg.style.objectFit = "cover";
  itemImg.style.borderRadius="100%";
  itemImg.style.marginLeft="22px"

  spanImg.append(itemImg);

  titleText.append(H61, H5);

  itemsTitle.append(titleText, spanImg);

  itemCaption.append(itemsTitle);

  swiperLink.append(itemCaption);

  boxItem.append(swiperLink);
  
  
  return boxItem;
}
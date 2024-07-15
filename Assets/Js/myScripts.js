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

var onlineConsultation = document.querySelector(".Online-consultation-text");

const fadeOut = () => {
  setInterval(function () {
    onlineConsultation.style.animation = "opacity 0.7s linear infinite";
    fadeOut();
  }, 100);
};

fadeOut();

// -------------------------------------
// SearchBar Scripts

// let  searchBtn=document.querySelector('.search-btn');
// let searchInput=document.getElementById('search-input')
// let searchBar=document.querySelector('.search-bar');
// let closeBtnIcon=document.querySelector('.close-btn-icon');

// searchBtn.addEventListener('click',()=>{
//   searchBar.classList.add('active');
//   searchBar.style.transition='all 0.5s cubic-bezier(0.7,-0.5, 0.3 ,1.5)';
//   closeBtnIcon.style.transition='all 0.5s cubic-bezier(0.7,-0.5, 0.3 ,1.5)';
// });
// closeBtnIcon.addEventListener('click',()=>{
//   searchBar.classList.remove('active');
//   searchInput.value=""
// })

//Get Data With Ajax , Api-------------

var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();

  //step 2:

  var url = "/Assets/json/ghalb.json";
  xhttp.open("GET", url);

  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      createMainBox(data);
    }
  };
  xhttp.send();
});

const createMainBox = (data) => {
  myData = data;

  for (const item in myData.doctors) {
    var mainBoxElem = createGroupBox(
      myData.doctors[item].id,
      myData.doctors[item].Name,
      myData.doctors[item].ImageUrl,
      myData.doctors[item].NezamCode,
      myData.doctors[item].Speciallity
    );

    mainBox.appendChild(mainBoxElem);
  }
};

const createGroupBox = (id, Name, ImageUrl, NezamCode, Speciallity) => {
  var mainBox = document.querySelector(".swiper-wrapper");
  mainBox.innerHTML+= `
   <div class="swiper-slide ">
         <a href=${ "details.html?group=" + id } 
         class="mySwiper-list_item d-flex flex-column justify-content-center align-items-center   d-block w-100 h-100 ">
           <div class="class="mySwiper-list_item--imgBox">
               <img src=${ImageUrl} class="rounded-pill d-block w-100 h-100 cover" alt="doctor-img">
           </div>
           <div class="name pt-3">${Name} </div>
           <div class="pt-3">${Speciallity}</div>
             <div class="pt-3">${NezamCode}  : کد نظام پزشکی </div>      
           </a>
      </div>
          
  `;
};

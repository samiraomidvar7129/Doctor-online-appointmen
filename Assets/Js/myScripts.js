//Loading -----------------------

const loadingElement = document.querySelector(".loader");

window.addEventListener("load",  () =>{
  loadingElement.classList.add("hidden");

});



//  Hamburger Menu-----------------

let hamburgerIcon=document.querySelector('.hamburger-icon');
hamburgerIcon.addEventListener('click',()=>{
  let hamburger_menu_list=document.querySelector('.hamburger-menu-list')
  hamburger_menu_list.classList.toggle('active')
})



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

let DedicatedScroll = document.getElementById("DedicatedScroll");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  DedicatedScroll.style.width = scrollPercentRounded + "%";
});

//END Dedicated Scroll --------------



// --------------------------------------

//OnlineConsultation Animate-------------

var onlineConsultation =document.querySelector(".Online-consultation-text");

const fadeOut =() =>{
  setInterval(function () {
    onlineConsultation.style.animation="opacity 0.7s linear infinite"
    fadeOut();
  },100);
}

fadeOut();

// -------------------------------------
// SearchBar Scripts

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

const createMainBox =(data) =>{
  myData=data;
  
  var mainBox = document.querySelector(".mySwiper-list");


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
}

const createGroupBox =(id, Name, ImageUrl,NezamCode,Speciallity)=> {

  let boxItem = document.createElement("div");
  boxItem.classList.add("mySwiprt-list_item");

  let swiperWrapper=document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper')

  let swiperLink = document.createElement("a");
  swiperLink.classList.add("mySwiprt-list_items-link");
  swiperLink.setAttribute("href", "details.html?group=" + id);

  let itemCaption = document.createElement("div");
  itemCaption.classList.add("mySwiprt-list_items");
  

  let itemsTitle = document.createElement("div");
  itemsTitle.classList.add("mySwiprt-list_items-title");


  let titleText = document.createElement("div");
  titleText.classList.add("mySwiprt-list_items-title--text");

  let H61 = document.createElement("h6");
  H61.classList.add('doctor-name')
  H61.innerText = Name;


  let H5 = document.createElement("h5");
  H5.classList.add('Speciallity')
  H5.textContent = Speciallity;

  let ratingAndCode=document.createElement('div');
  ratingAndCode.classList.add('ratingAndCode')

  let nezamCodeH6=document.createElement('h6');
  nezamCodeH6.classList.add('nezamCodeH6')
  let nezamCodeH6Txt=document.createTextNode('  :  نظام پزشکی ');
  nezamCodeH6.innerText=NezamCode;
  
  nezamCodeH6.append(nezamCodeH6Txt);
  ratingAndCode.append(nezamCodeH6)

  let spanImg = document.createElement("span");
  spanImg.classList.add("mySwiprt-list_items-title--img");

  let itemImg = document.createElement("img");
  itemImg.setAttribute("src", ImageUrl);
  // 

  spanImg.append(itemImg);

  titleText.append(H61, H5,nezamCodeH6);

  itemsTitle.append(titleText, spanImg);

  itemCaption.append(itemsTitle);

  swiperLink.append(itemCaption);



  boxItem.append(swiperLink);
  


  return boxItem;

}


// const createGroupBox =(id, Name, ImageUrl,NezamCode,Speciallity)=> {

//   let mySwiper_List=document.getElementById('mySwiper-list');

//   mySwiper_List.innerHTML+=`

//   <div class="swiper mySwiper">
//                    <div class="swiper-wrapper">
//       <div class="swiper-slide ">
//         <a href=${"details.html?group=" + id} class="mySwiper-list_item bg-danger ">
//           <div class="d-flex justify-content-around align-items-center">
//             <span class="d-block w-25 h-25">
//               <img src=${ImageUrl} class="rounded-pill" alt="">
//             </span>
//             <div class="name">${Name} </div>
//           </div>
//           <div class="pt-5">
//             <div>${Speciallity}</div>
//             <h6 class="pt-3">${NezamCode}  : کد نظام پزشکی </h6>
//           </div>
         
//         </a>
//       </div>

//                    </div>
//                    <div class="swiper-pagination"></div>
//               </div>
  
//   `
// }










      

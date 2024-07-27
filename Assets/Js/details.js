import { fetchDoctorsList } from "./scripts/fetchDoctors.js";
import { validatetReservationForm } from "./scripts/RerservationValidation.js";


const reservationForm = document.getElementById("reservation-form_parent");


document.addEventListener("DOMContentLoaded",  () => {
  getQueryParams();
});



const getQueryParams=async()=>{
  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get("group"); //return query string

  const doctorList = await fetchDoctorsList();

  for (const doctor in doctorList.doctors) {
 
         if (group === doctorList.doctors[doctor].id) {

          document.getElementById("doctor-title").innerHTML=doctorList.doctors[doctor].Name;
          document.getElementById("doctor-Speciallity").innerHTML=doctorList.doctors[doctor].Speciallity;
          document.querySelector(".state").innerHTML =doctorList.doctors[doctor].state;
          document.querySelector(".doctor-address").innerHTML = doctorList.doctors[doctor].city;
          document.getElementById("nezamCode").innerHTML =doctorList.doctors[doctor].NezamCode;
      document
        .getElementById("doctor-image")
        .setAttribute("src",doctorList.doctors[doctor].ImageUrl);
        document.getElementById("doctors-address").innerHTML += `
          <div class="d-flex justify-content-center align-items-center">
          <i class="fa fa-map-marker address-icon"></i>
          <span>آدرس مطب : </span>
          <div>${doctorList.doctors[doctor].officeAddress}</div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <i class="fa fa-mobile address-icon"></i>
           <span> شماره تماس : </span>
          <div>${doctorList.doctors[doctor].phoneNumber}</div>
          </div>
          `;
  
        let doctorsInformationItems = document.querySelector(
          "#doctors-information_items"
        );
        doctorsInformationItems.innerHTML = `
         <div class="row mt-3">
           <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1 ">
          <div class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa fa-gift"></i>                
            <span class="doctors-information_item mt-2">
              <h6 class="doctors-information_item--title">جوایز</h6>
              <span  class="gifts doctors-information_item--number">${doctorList.doctors[doctor].gifts}</span>
            </span>
          </div>
        </div>
  
  
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
         <div class="d-flex flex-column justify-content-center align-items-center"> 
         <i class="fa fa-file"></i>                
          <span class="doctors-information_item mt-2">
            <h6  class="doctors-information_item--title" >مقالات</h6>
            <span class="article doctors-information_item--number">${doctorList.doctors[doctor].articles}</span>
          </span></div>
        </div>
         </div>
  
  
   <div class="row mt-5">
  
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
          <div class="d-flex flex-column justify-content-center align-items-center">
          <i class=" fa fa-comments"></i>                
          <span class="doctors-information_item mt-2">
            <h6 class="doctors-information_item--title">نظرات</h6>
            <span class="comments doctors-information_item--number">${doctorList.doctors[doctor].comments}</span>
          </span></div>
        </div>
  
  
  
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
          <div class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa fa-exclamation"></i>                
           <span class="doctors-information_item mt-2">
            <h6 class="doctors-information_item--title">پاسخ ها</h6>
            <span class="answers doctors-information_item--number">${doctorList.doctors[doctor].answers}</span>
           </span></div>
        </div>
   </div>
  
  <div class="row mt-5">
  
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5 mt-sm-1">               
  <div class="d-flex flex-column justify-content-center align-items-center">
  <div id="star-rating" class=" d-flex justify-content-center align-items-center">
  <span class="star px-1" data-value="1">&#9733;</span>
  <span class="star px-1" data-value="2">&#9733;</span>
  <span class="star px-1" data-value="3">&#9733;</span>
  <span class="star px-1" data-value="4">&#9733;</span>
  <span class="star px-1" data-value="5">&#9733;</span>
  </div>
  <p id="result" class="mt-3"></p>
  </div>
  </div>
  </div>
      
          `;
  
      // Stars Rating  --------------------------------------------------------------------
  
      const stars = document.querySelectorAll(".star");
      const result = document.getElementById("result");
  
      const previousRating = localStorage.getItem("user-rating");
      if (previousRating) {
        highlightStars(previousRating);
        result.textContent = `امتیاز پزشک: ${previousRating} ستاره`;
      }
  
      stars.forEach((star) => {
        star.addEventListener("click", () => {
          const value = star.getAttribute("data-value");
          highlightStars(value);
          result.textContent = `امتیاز پزشک: ${value} ستاره`;
  
          //   save in localStorage
          localStorage.setItem("user-rating", value);
        });
      });
  
      function highlightStars(rating) {
        stars.forEach((star) => {
          const value = star.getAttribute("data-value");
          if (value <= rating) {
            star.classList.add("selected");
          } else {
            star.classList.remove("selected");
          }
        });
      }
    }

  }


  if (reservationForm) {
    reservationForm.addEventListener("submit", validatetReservationForm);
}

}



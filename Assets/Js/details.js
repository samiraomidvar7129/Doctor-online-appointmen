import { fetchDoctorsList } from "./scripts/fetchDoctors.js";

document.addEventListener("DOMContentLoaded", async () => {
  const doctors = await fetchDoctorsList();

  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = urlParams.get("group"); //return query string


  for (const index in doctors) {
    if (doctorId === doctors[index].id) {
      document.getElementById("doctor-title").innerHTML = doctors[index].Name;
      document.getElementById("doctor-Speciallity").innerHTML =doctors[index].Speciallity;
      document.querySelector(".state").innerHTML = doctors[index].state;
      document.querySelector(".doctor-address").innerHTML = doctors[index].city;
      document.getElementById("nezamCode").innerHTML = doctors[index].NezamCode;
      document
        .getElementById("doctor-image")
        .setAttribute("src", doctors[index].ImageUrl);
      document.getElementById("doctors-address").innerHTML += `
        <div class="d-flex justify-content-center align-items-center">
        <i class="fa fa-map-marker address-icon"></i>
        <span>آدرس مطب : </span>
        <div>${doctors[index].officeAddress}</div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <i class="fa fa-mobile address-icon"></i>
         <span> شماره تماس : </span>
        <div>${doctors[index].phoneNumber}</div>
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
            <span  class="gifts doctors-information_item--number">${doctors[index].gifts}</span>
          </span>
        </div>
      </div>


      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
       <div class="d-flex flex-column justify-content-center align-items-center"> 
       <i class="fa fa-file"></i>                
        <span class="doctors-information_item mt-2">
          <h6  class="doctors-information_item--title" >مقالات</h6>
          <span class="article doctors-information_item--number">${doctors[index].articles}</span>
        </span></div>
      </div>
       </div>


 <div class="row mt-5">
 
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
        <div class="d-flex flex-column justify-content-center align-items-center">
        <i class=" fa fa-comments"></i>                
        <span class="doctors-information_item mt-2">
          <h6 class="doctors-information_item--title">نظرات</h6>
          <span class="comments doctors-information_item--number">${doctors[index].comments}</span>
        </span></div>
      </div>



      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4 mt-sm-1">
        <div class="d-flex flex-column justify-content-center align-items-center">
        <i class="fa fa-exclamation"></i>                
         <span class="doctors-information_item mt-2">
          <h6 class="doctors-information_item--title">پاسخ ها</h6>
          <span class="answers doctors-information_item--number">${doctors[index].answers}</span>
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



  let reservationForm = document.querySelector(".reservation-form_parent");
  // console.log(reservationForm)

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let reservation = {
      fullName: document.getElementById("reservation-fullName").value,
      phoneNumber: document.getElementById("reservation-phoneNumber").value,
      nationalCode: document.getElementById("national-code").value,
      reserveDate: document.getElementById("reserve-date").value,
      reserveTime: document.getElementById("reserve-time").value,
      doctorGroup: doctorId,
    };

    localStorage.setItem("reservation", JSON.stringify(reservation));

    if (reservation) {
      swal({
        title: "سپاسگزاریم ! ",
        text: "نوبت شما با موفقیت ثبت شد",
        icon: "success",
        button: "تایید",
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      swal({
        title: "متاسفیم ! ",
        text: " اطلاعات ثبت نشد لطفا مجدد تلاش کنید",
        icon: "danger",
        button: "تایید",
      }).then(() => {
        window.location.href = "details.html";
      });
    }
  });
});

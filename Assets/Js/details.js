var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();

   //step 2:
  const BASE_URL="/Assets/json"
   
   //step 3:

   var url = `${BASE_URL}/doctorsList.json`;
  xhttp.open("GET", url);

  //step 4:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data =JSON.parse(xhttp.responseText);
      myData=data
      createItems(myData)
    }
  };
  xhttp.send();
});


//Show Data In Elements------------------------------------------------------

    const createItems =(myData) =>{

        const urlParams=new URLSearchParams(window.location.search);
        const group =urlParams.get('group')  //return query string

        for(const index in myData.doctors){  

         if(group === myData.doctors[index].id){

            document.getElementById('doctor-title').innerHTML=myData.doctors[index].Name;
            document.getElementById('doctor-Speciallity').innerHTML=myData.doctors[index].Speciallity;
            document.querySelector('.state').innerHTML=myData.doctors[index].state;
            document.querySelector('.doctor-address').innerHTML=myData.doctors[index].city;
            document.getElementById('nezamCode').innerHTML=myData.doctors[index].NezamCode;
            document.getElementById('doctor-image').setAttribute('src',myData.doctors[index].ImageUrl);

            let doctorsInformationItems=document.querySelector('#doctors-information_items');
            doctorsInformationItems.innerHTML=`
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-4 mt-sm-1 ">
            <div class="d-flex flex-column justify-content-center align-items-center">
            <i class="fa fa-gift"></i>                
              <span class="doctors-information_item mt-2">
                <h6 class="doctors-information_item--title">جوایز</h6>
                <span  class="gifts doctors-information_item--number">${myData.doctors[index].gifts}</span>
              </span>
            </div>
          </div>


          <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-4 mt-sm-1">
           <div class="d-flex flex-column justify-content-center align-items-center"> 
           <i class="fa fa-file"></i>                
            <span class="doctors-information_item mt-2">
              <h6  class="doctors-information_item--title" >مقالات</h6>
              <span class="article doctors-information_item--number">${myData.doctors[index].articles}</span>
            </span></div>
          </div>



          <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-4 mt-sm-1">
            <div class="d-flex flex-column justify-content-center align-items-center">
            <i class=" fa fa-comments"></i>                
            <span class="doctors-information_item mt-2">
              <h6 class="doctors-information_item--title">نظرات</h6>
              <span class="comments doctors-information_item--number">${myData.doctors[index].comments}</span>
            </span></div>
          </div>



          <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-4 mt-sm-1">
            <div class="d-flex flex-column justify-content-center align-items-center">
            <i class="fa fa-exclamation"></i>                
             <span class="doctors-information_item mt-2">
              <h6 class="doctors-information_item--title">پاسخ ها</h6>
              <span class="answers doctors-information_item--number">${myData.doctors[index].answers}</span>
             </span></div>
          </div>


          <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-5 mt-sm-1">               
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
          
            `





 // Stars Rating  --------------------------------------------------------------------

               const stars = document.querySelectorAll(".star");
               const result = document.getElementById("result");

               const previousRating = localStorage.getItem("user-rating");
               if (previousRating) {
  highlightStars(previousRating);
  result.textContent = `امتیاز پزشک: ${previousRating} ستاره`;
               }

               stars.forEach(star => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    highlightStars(value);
    result.textContent = `امتیاز پزشک: ${value} ستاره`;
    
    //   save in localStorage
    localStorage.setItem("user-rating", value);
  });
               });

               function highlightStars(rating) {
  stars.forEach(star => {
    const value = star.getAttribute("data-value");
    if (value <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });  
 }}
    }};










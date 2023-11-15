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

            let doctorsInformationItems=document.querySelector('.doctors-information_items');
            doctorsInformationItems.innerHTML=`
            <div class="doctors-information_items-inner">
            <i class="fa fa-gift"></i>                
              <span>
                <h6>جوایز</h6>
                <span  class="gifts">${myData.doctors[index].gifts}</span>
              </span>
          </div>
          <div class="doctors-information_items-inner">
            <i class="fa fa-file"></i>                
            <span>
              <h6  >مقالات</h6>
              <span class="article">${myData.doctors[index].articles}</span>
            </span>
          </div>
          <div class="doctors-information_items-inner">
            <i class=" fa fa-comments"></i>                
            <span>
              <h6>نظرات</h6>
              <span class="comments">${myData.doctors[index].comments}</span>
            </span>
          </div>
          <div class="doctors-information_items-inner">
            <i class="fa fa-exclamation"></i>                
             <span>
              <h6>پاسخ ها</h6>
              <span class="answers">${myData.doctors[index].answers}</span>
             </span>
          </div>
          <div class="doctors-information_items-inner">               
             <div>
              <div id="star-rating">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span>
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
              </div>
              <p id="result"></p>
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
               }

 // Get Hospitals Data---------------------------------------------------------------

            const hospitalData=myData.doctors[index].hospitals;

            hospitalData.forEach(key=>{
             const hospitalListContainer = document.querySelector('.health-centersـinformation');
            
             hospitalListContainer.innerHTML+=`
              <div class="content-box">
                    <div class="health-centersـinformation--head">
                     <div class="health-centersـinformation--head-boxleft">
                       <div class="information--head-boxleft_item">
                         <div class="information--head-boxleft_item-img ">
                          <img src=${key.img} alt="">
                         </div>
                       </div>
                     </div>
                     <div class="health-centersـinformation--head-boxright">
                       <div class="information--head-boxright_item">
                         <h6 class="hospital-name">${key.name}</h6>
                         <i class="fa fa-location head-boxright_item-icon"></i>
                       </div>
                       <p class="hospital-address">${key.address}</p>
                     </div>
                    </div>  
                    <div class="health-centersـinformation--head-table"> </div>  
                  </div> 
              `
            
// Get workShifts Data-------------------------------------------------------------

            const workShiftsData=key.workShifts;
          
            workShiftsData.forEach(item=>{
             let test=document.querySelector('.health-centersـinformation--head-table')
             test.innerHTML+=`
            <div class="information--head-table_item">
                     <div>${item.workingTime}</div>
            </div>
            `
            })

          })
           

          
// Create Accordion---------------------------------------------------------------

                  const accordion=document.getElementsByClassName('content-box');
                    for(let i=0;i<accordion.length;i++){
                    accordion[i].addEventListener('click',()=>{
                    accordion[i].classList.toggle('active')
                   }
                   )
                  }}
               }};










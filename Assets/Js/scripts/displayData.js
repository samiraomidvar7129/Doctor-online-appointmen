export const displayDoctors = (doctors) => {
  const doctorsContainer = document.querySelector(".swiper-wrapper");
  for (let doctor in doctors) {
    doctorsContainer.innerHTML = doctors[doctor].map(
      (item) => `
  
    <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
          <a href=${"details.html?group=" + item.id} 
          class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
            <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
                <img src=${
                  item.ImageUrl
                } class="doctor-ImageUrl rounded-pill d-block w-100 h-100 cover  alt="doctor-img">
            </div>
            <div class="doctor-name pt-3">${item.Name} </div>
            <div class=" doctor-Speciallity pt-3">${item.Speciallity}</div>
            <div class="d-flex justify-content-between align-items-center w-100">
                         <div class=" doctor-NezamCode pt-3">    ن-پ :  ${
                           item.NezamCode
                         } </div>
                         <div class=" doctor-city pt-3">  ${item.city} </div>
 
            </div>
                 
            </a>
       </div>      
   
  `
    );
  }
};

export const displayComments = (comments) => {
  const commentsContainer = document.querySelector("#comments");

  for (let comment in comments) {
    commentsContainer.innerHTML = comments[comment].map(
      (item) => `
    <div class="swiper-slide bg-info p-3 d-flex flex-column justify-content-center align-items-center text-center">
         <div class="comments-imgBox">
         <img src=${item.userImg} alt="user-img"/>
         </div>
         <div class="comments-textBox mt-2"><p class="comments-textBox_p">${item.userComment}</p></div>
         <div class="comments-nameBox mt-2">${item.userName}</div>
       </div>      
   `
    );
  }
};

export const displayBlogs = (blogs) => {
  const blogsContainer = document.querySelector("#blogs");

  for (let blog in blogs) {
    blogsContainer.innerHTML = blogs[blog].map(
      (item) => `
    <div class="swiper-slide bg-info  p-3 d-flex flex-column justify-content-center align-items-center text-center">
         <div>
         <img src=${item.img} class="d-block w-100 h-100 cover" alt="user-img"/>
         </div>
         <div><p>${item.desc}</p></div>
       </div>      
   `
    );
  }
};

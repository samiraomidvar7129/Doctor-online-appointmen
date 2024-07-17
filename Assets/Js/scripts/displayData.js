

export const displayDoctors = (doctors) => {
  const doctorsContainer = document.querySelector(".swiper-wrapper");
  console.log(doctors)

  doctorsContainer.innerHTML = doctors.map(doctor => `
  
    <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
          <a href=${"details.html?group=" + doctor.id} 
          class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
            <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
                <img src=${
                  doctor.ImageUrl
                } class="doctor-ImageUrl rounded-pill d-block w-100 h-100 cover  alt="doctor-img">
            </div>
            <div class="doctor-name pt-3">${doctor.Name} </div>
            <div class=" doctor-Speciallity pt-3">${doctor.Speciallity}</div>
            <div class="d-flex justify-content-between align-items-center w-100">
                         <div class=" doctor-NezamCode pt-3">    ن-پ :  ${
                           doctor.NezamCode
                         } </div>
                         <div class=" doctor-city pt-3">  ${doctor.city} </div>
 
            </div>
                 
            </a>
       </div>      
   
  `).join('');
};

export const displayComments = (comments) => {
  const commentsContainer = document.querySelector(".swiper-wrapper");

  commentsContainer.innerHTML = comments.map(comment =>`
    <div class="swiper-slide bg-info d-flex justify-content-center align-items-center text-center">
         <div>
         <img src=${comment.userImg} alt="user-img"/>
         </div>
         <div><p>${comment.userComment}</p></div>
         <div>${comment.userName}</div>
       </div>      
   `).join('');
};

export const displayBlogs = (blogs) => {
  const blogsContainer = document.querySelector(".swiper-wrapper");

  blogsContainer.innerHTML = blogs.map(blog => `
    <div class="swiper-slide bg-info d-flex justify-content-center align-items-center text-center">
         <div>
         <img src=${blog.img} alt="user-img"/>
         </div>
         <div><p>${blog.desc}</p></div>
       </div>      
   `).join('');
};

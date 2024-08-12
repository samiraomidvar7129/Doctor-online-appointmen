
export const displayDoctors=doctors=>{let doctorsContainer=document.querySelector(".swiper-wrapper");for(let doctor in doctors)doctors[doctor].forEach(doctor=>{doctorsContainer.innerHTML+=`  
  <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
        <div class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
          <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
              <img src=${doctor.ImageUrl} class="doctor-ImageUrl  d-block w-100 h-100 cover  alt="doctor-img">
          </div>
          <div class="doctor-name pt-3">${doctor.Name} </div>
          <div class=" doctor-Speciallity pt-3">${doctor.Speciallity}</div>
          <div class="d-flex justify-content-between align-items-center w-100">
          <div class=" doctor-NezamCode pt-3">    ن-پ :  ${doctor.NezamCode} </div>
          <div class=" doctor-city pt-3">  ${doctor.city} </div>
          </div>
          <div class=" doctor-reserve_box d-flex justify-content-center align-items-center w-100 mt-4 py-2">
          <a class"doctor-reserve_link d-block w-100 h-100 " href="details.html?group=${doctor.id}&doctorName=${doctor.Name}&speciallity=${doctor.Speciallity}
          ">نوبت بگیرید</a>
           <i class="fa fa-arrow-left doctor-reserve_icon"></i>
          </div>
          </div>
     </div> 
 `})};
 export const displayComments=comments=>{let commentsContainer=document.querySelector("#comments");for(let comment in comments)comments[comment].forEach(item=>{commentsContainer.innerHTML+= `
          <div class="swiper-slide swiper-slide_comment h-100 d-flex flex-column justify-content-around align-items-center text-center">
          <div class="comments-imgBox w-100 h-100"> <img src=${item.userImg} class="d-block w-100 h-100 cover" alt="user-img"/> </div>
           <div class="comments-nameBox mt-2">${item.userName}</div>
           <div class="comments-textBox w-75 mt-2"><p class="comments-textBox_p">${item.userComment}</p></div> 
        </div>  `
})};
export const displayBlogs=blogs=>{let blogsContainer=document.querySelector("#blogs");for(let blog in blogs)blogs[blog].forEach(blog=>{blogsContainer.innerHTML+= `
        <div class="swiper-slide  swiper-slide_blog  d-flex flex-column justify-content-center align-items-center text-center">
          <div class="blog-imgBox">
          <img src=${blog.img} class="d-block w-100 h-100 cover" alt="user-img"/></div>
          <div class="blog-description mt-4"><p>${blog.desc}</p></div>
        </div>`
})};


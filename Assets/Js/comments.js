
    // Get Comments Data With Ajax-------------------------------------

let commentsData;
 
document.addEventListener('DOMContentLoaded',()=>{
  
  //step 1:
  let xhttp = new XMLHttpRequest();

  //step 2:
   
  let url="/Assets/json/comments.json";
  xhttp.open("GET", url);

  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data =JSON.parse(xhttp.responseText);
      createCommentsBox(data);
    }
  };
  xhttp.send();
})

   createCommentsBox =(data) =>{
  
    commentsData=data;
  
  let  commentsSwiper= document.getElementById("comments-swiper");

  for (const i in commentsData.comments) {
    var mainCommentsBoxElem = createGroupCommentsBox(
      commentsData.comments[i].userImg,
      commentsData.comments[i].userName,
      commentsData.comments[i].userComment,
    );

    commentsSwiper.appendChild(mainCommentsBoxElem);
  }
}

createGroupCommentsBox = (userImg,userName,userComment) => {
  let commentsWrapperBox = document.querySelector(".swiper-wrapper");

  let swiperSlide=document.querySelector('.swiper-slide');
 swiperSlide.innerHTML+=`
 <div class="userImgBox">
 <img class="userImg" src="${userImg}" alt="">
</div>
<h5 class="userName">${userName}</h5>
<p class="userComment">${userComment}</p>
 `
 commentsWrapperBox.append(swiperSlide)

 return commentsWrapperBox;
}
  
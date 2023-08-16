

document.addEventListener('DOMContentLoaded',()=>{
  const mainConfigSwiper={
    slidesPerView:1,
    spaceBetween:20,
    slidesPerGroup:1,
    speed:500,
    lazy:true,
  }
  if($(".swiper-slider-home")){
   const swiperSliderHome=new Swiper('.swiper-slider-home',{
    breapoints:{
      0:{
        slidesPerView:1,
        spaceBetween:10,
      },
      640:{
        slidesPerView:2,
        spaceBetween:10,
      },
      1024:{
        slidesPerView:3,
        spaceBetween:20,
      },
      1280:{
        slidesPerView:4,
        spaceBetween:20,
      },
    },
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
   })
  }
})
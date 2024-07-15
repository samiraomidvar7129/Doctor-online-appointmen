var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 600,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
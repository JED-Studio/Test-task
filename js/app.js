var swiper = new Swiper('.mySwiper', {
  loop: true,
  preventClicks:true,
  effect: 'coverflow',
  grabCursor: true,
  spaceBetween: 200,
  centeredSlides: true,
  
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
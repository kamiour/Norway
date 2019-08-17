$(document).ready(function(){

	var swiper1 = new Swiper('.swiper1', {
	  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
	  },
	  autoplay: {
		  delay: 4000,
    },
    autoHeight: false,
    roundLengths: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpointsInverse: true,
      breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
  
  var swiper2 = new Swiper('.swiper2', {
	  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
	  },
	  autoplay: {
		  delay: 3500,
    },
    autoHeight: false,
    roundLengths: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    breakpointsInverse: true,
      breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 30
      },
	  1140: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  
})
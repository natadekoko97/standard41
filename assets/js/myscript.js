$(document).scroll(function () {
  var $nav = $(".sticky-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});



$('.slide-material').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4
});


$('.slide-jasa').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4
});
	


// $( ".slide-material" ).hover(function() {

//   $('.slick-arrow').css({

//     'cssText': 'display : inline-block !important',

//   });
 
// });


// var swiper = new Swiper('.swiper-container', {
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     freeMode: true,
//     sliderPerGroup: 4,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     }
//   });






  
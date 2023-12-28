$(document).ready(function(){
  $('.slick_money__slick').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
});
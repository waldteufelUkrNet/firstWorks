$(document).ready(function(){
  var date = new Date();
  // різниця між часом в Києві і Лондоні - 3 години,
  // відповідно 10:00-19:00 буде 07:00-16:00
  var UTCHours = date.getUTCHours();

  if (UTCHours >= 7 && UTCHours < 16) {
     setTimeout(openCallUs, 10000);
  }

  $('.call-us-btn__reopen').click(openCallUs);
  $('.call-us-btn__close').click(closeCallUs);

  function openCallUs() {
    $('.call-us-btn__wrapper').animate({"right":"3px"}, 500);
    $('.call-us-btn__reopen').css({"display":"none"});
  };
  function closeCallUs() {

    $('.call-us-btn__reopen').css({"transition-delay":".5s","display":"block"});
    if (document.documentElement.clientWidth <= 992) {
      $('.call-us-btn__wrapper').animate({"right":"-200px"}, 500);
    } else {
      $('.call-us-btn__wrapper').animate({"right":"-120px"}, 500);
    }
  };
})
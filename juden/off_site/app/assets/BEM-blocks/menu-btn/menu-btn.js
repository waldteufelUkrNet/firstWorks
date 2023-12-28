$(document).ready(function(){

  var isMenuOpen;
  var isClickAble = true;
  $('.menu-btn').click(function(){
    if (isClickAble) {
      isClickAble = false;
      setTimeout(function() {
        isClickAble = true;
      }, 500);

      $('.menu-btn').click = null;
      if (!isMenuOpen) {
        $('.menu-btn__1-line').css({'transition':'.5s','top':'9px'});
        $('.menu-btn__3-line').css({'transition':'.5s','top':'9px'});
        $('.menu-btn__2-line').css({'transition':'.5s','opacity':'0'});
        setTimeout(function(){
          $('.menu-btn__1-line').css({'transition':'.5s','transform':'rotate(45deg)'});
          $('.menu-btn__3-line').css({'transition':'.5s','transform':'rotate(-45deg)'});
        },500);
        isMenuOpen = true;

        toggleMenu(true);
        return
      }
      if (isMenuOpen) {
        $('.menu-btn__1-line').css({'transition':'.5s','transform':'rotate(0deg)'});
        $('.menu-btn__3-line').css({'transition':'.5s','transform':'rotate(0deg)'});
        $('.menu-btn__2-line').css({'transition-delay':'.5s','transition-duration':'.5s','opacity':'1'});
        setTimeout(function(){
          $('.menu-btn__1-line').css({'transition-duration':'.5s','top':'0px'});
          $('.menu-btn__3-line').css({'transition-duration':'.5s','top':'18px'});
        },500);
        isMenuOpen = false;

        toggleMenu(false);
        return
      }
    }
  });

  function toggleMenu (arg) {
    //var arrOfLinks = $('.menu-list-a');

    if (arg == true) {
      var tempheight = $(window).height() - 60 + 'px';
      $('.header__small-menu').css({'border-color':'dodgerblue','padding':'15px','height': tempheight});
    }
    if (arg == false) {
      $('.header__small-menu').css({'height': '0px'});
      setTimeout(function(){
        $('.header__small-menu').css({'padding':'0px','border-color':'transparent'});
      },360);
    }
  };

});
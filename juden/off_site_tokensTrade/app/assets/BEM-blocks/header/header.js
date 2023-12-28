$(document).ready(function(){

  //header scroll-behavior
  $(document).scroll(function(){

    if ( $('.header').offset().top >= 35 ) {
      $('.header__part1-wrapper').css('display','none')
      $('.header__part2-wrapper').css('background-color','black');
      $('.header__part2-logo-wrapper img').css('width','35px');

      if ( $('.header').outerWidth() < 768  ) {
        $('.header__part2').css('height', '60px');
      }

    } else {
      $('.header__part1-wrapper').css('display','block');
      $('.header__part2-wrapper').css('background-color','rgba(0,0,0,.7)');
      $('.header__part2-logo-wrapper img').css('width','50px');

      if ( $('.header').outerWidth() < 768  ) {
        $('.header__part2').css('height', '90px');
      }

    }
  });

  // menu-behavior
  $('.header__part2-navigation-sublist').click(function(){

    var tempArr = $('.header__part2-navigation-sublist');
    for (var i = 0; i<tempArr.length; i++) {
      $( $(tempArr[i]).find('.header__part2-navigation-sublist-items') ).css({'height':'0px','display':'none','overflow':'hidden'});
    }

    $( $(this).find('.header__part2-navigation-sublist-items') ).css({'height':'auto','display':'block','overflow':'visible'});

  });

  $(window).click(function(e){
    if ( e.target.className != 'header__part2-navigation-sublist') {
      var tempArr = $('.header__part2-navigation-sublist');
      for (var i = 0; i<tempArr.length; i++) {
        $( $(tempArr[i]).find('.header__part2-navigation-sublist-items') ).css({'height':'0px','display':'none','overflow':'hidden'});
      }
    }
  });

  $('.header__nav-btn').click(function(){
    $('.header__part3-wrapper').css('width','300px');
  });

  $('.header__nav-btn-close').click(function(){
    $('.header__part3-wrapper').css('width','0px');
  });

  // small-menu-behavior
  var isSmallMeny1Open = isSmallMeny2Open = false;
  $('.header__part3-navigation-sublist:eq(1)').click(function() {
    if (!isSmallMeny1Open) {
      $( $(this).find('.header__part3-navigation-sublist-items') ).css('height','auto');
      isSmallMeny1Open = true
    } else {
      $( $(this).find('.header__part3-navigation-sublist-items') ).css('height','0');
      isSmallMeny1Open = false
    }
  });

  $('.header__part3-navigation-sublist:eq(2)').click(function() {
    if (!isSmallMeny2Open) {
      $( $(this).find('.header__part3-navigation-sublist-items') ).css('height','auto');
      isSmallMeny2Open = true
    } else {
      $( $(this).find('.header__part3-navigation-sublist-items') ).css('height','0');
      isSmallMeny2Open = false
    }
  });
});
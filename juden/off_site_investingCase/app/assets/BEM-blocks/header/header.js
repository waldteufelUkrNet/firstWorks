$(document).ready(function(){
  // open
  $('.header__menu1').click(function(event){
    event.preventDefault();
    var menuList1Posiion = $('.header__menu2').position().left - $('.header__menu-list').width() - 1 + 'px';
    $('.header__menu-list1').css({'border-width':'1px', 'left': menuList1Posiion,'height':'146px'});
  });

  $('.header__menu2').click(function(event){
    event.preventDefault();
    var menuList2Posiion = $('.header__menu2').position().left + 1 + 'px';
    $('.header__menu-list2').css({'border-width':'1px', 'left': menuList2Posiion,'height':'320px'});
    isHeader__menu2Open = true;
  });

  // close
  $(document).click(function(event){
    if(event.target.className.indexOf('header__menu1') < 0){
      $('.header__menu-list1').css({'height':'0px'});
      setTimeout(function(){
        $('.header__menu-list1').css({'border-width':'0px'});
      },200);
    }
    if(event.target.className.indexOf('header__menu2') < 0){
      $('.header__menu-list2').css({'height':'0px'});
      setTimeout(function(){
        $('.header__menu-list2').css({'border-width':'0px'});
      },200);
    }
  });
});
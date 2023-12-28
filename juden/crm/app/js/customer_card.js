$('.client-menu__dropdown-btn').click(function(event){

  var menuList = $(this).siblings('.client-menu__dropdown-options-holder')[0];
  // відкрити на мілісекунди елемент, вимірти висоту, закрити
  $(menuList).css({'display':'block',
                   'height' :'auto'});
  var tempHeight = $(menuList).css('height');
  $(menuList).css({'display':'none',
                   'height' :'0px'});

  // проанімувати відкриття
  $(menuList).css({'display'   :'block',
                   'transition':'height .5s',
                  'height'     :tempHeight});

  var svgArrow = $(this).children('.client-menu__dropdown-btn-right').children('svg')[0];
  $(svgArrow).css({'transition':'transform .5s','transform':'rotate(180deg)'});
});

// анімація закриття
$('.client-menu__dropdown-btn').blur(function(event){
  var menuList = $(this).siblings('.client-menu__dropdown-options-holder')[0];
  $(menuList).css({'transition':'height .5s',
                   'height'    :'0px'});
  setTimeout(function(){
    $(menuList).css({'display':'none'});
  },500);

  var svgArrow = $(menuList).siblings('.client-menu__dropdown-btn').children('.client-menu__dropdown-btn-right').children('svg')[0];
  $(svgArrow).css({'transition':'transform .5s','transform':'rotate(0deg)'});
});
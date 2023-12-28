$(document).ready(function(){

  /* ↓↓↓ menu buttons ↓↓↓ */
  var arrOfBtns   = $('.client-menu__dropdown-btn');
  var arrOfArrows = $('.client-menu__dropdown-btn-right');
  var arrOfMenus  = $('.client-menu__dropdown-options-holder');

  $(document).click(function(e){
    if(e.target.className == 'client-menu__dropdown-btn') {

      for (var i = 0; i < arrOfBtns.length; i++) {
        if (arrOfBtns[i] == e.target) {
          var columnNumber = i;
        }
      }

      if (e.target.isOpen) {
        $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
        $(arrOfMenus[columnNumber]).css({"display":"none"}).css({"transition":".5s","height":"0px"});
        e.target.isOpen = false;
        return
      }

      if (!e.target.isOpen) {

        for (var i = 0; i < arrOfBtns.length; i++) {
          $(arrOfArrows[i]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
          $(arrOfMenus[i]).css({"display":"none"}).css({"transition":".5s","height":"0px"});
          arrOfBtns[i].isOpen = false;
        }

        $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(180deg)"});
        $(arrOfMenus[columnNumber]).css({"display":"block"}).css({"transition":".5s","height":"90%"});
        e.target.isOpen = true;
        return
      }
    } else {
      for (var i = 0; i < arrOfBtns.length; i++) {
        $(arrOfArrows[i]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
        $(arrOfMenus[i]).css({"display":"none"}).css({"transition":".5s","height":"0px"});
        arrOfBtns[i].isOpen = false;
      }
    }
  });
  /* ↑↑↑ /menu buttons ↑↑↑ */

});
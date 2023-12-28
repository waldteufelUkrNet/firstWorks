$(document).ready(function(){

  /* ↓↓↓ menu buttons ↓↓↓ */
  var arrOfBtns   = $('.client-menu__dropdown-btn');
  var arrOfArrows = $('.client-menu__dropdown-btn-right');
  var arrOfMenus  = $('.client-menu__dropdown-options-holder');

  $(arrOfBtns).click(function(){

    for (var i = 0; i < arrOfBtns.length; i++) {
      if (arrOfBtns[i] == this) {
        var columnNumber = i;
      }
    }

    if (this.isOpen) {
      $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
      $(arrOfMenus[columnNumber]).css({"display":"none"}).css({"transition":".5s","height":"0px"});
      this.isOpen = false;
      return
    }

    if (!this.isOpen) {

      for (var i = 0; i < arrOfBtns.length; i++) {
        $(arrOfArrows[i]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
        $(arrOfMenus[i]).css({"display":"none"}).css({"transition":".5s","height":"0px"});
        arrOfBtns[i].isOpen = false;
      }

      $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(180deg)"});
      $(arrOfMenus[columnNumber]).css({"display":"block"}).css({"transition":".5s","height":"90%"});
      this.isOpen = true;
      return
    }

    // for (var i = 0; i < arrOfBtns.length; i++) {
    //   if (arrOfBtns[i] == this) {
    //     var columnNumber = i;
    //   }

    //   $(arrOfArrows[i]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
    //   $(arrOfMenus[i]).css({"display":"none"}).css({"height":"0px"});
    //   $(arrOfBtns[i]).isOpen = false;
    // }
    // console.log(arrOfBtns[0].isOpen, arrOfBtns[1].isOpen, arrOfBtns[2].isOpen, arrOfBtns[3].isOpen);

    // if (!this.isOpen) {
    //   $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(180deg)"});
    //   $(arrOfMenus[columnNumber]).css({"display":"block"}).css({"height":"auto"});
    //   this.isOpen = true;
    //   return
    // }

    // if (this.isOpen) {
    //   $(arrOfArrows[columnNumber]).css({"transition":".5s","transform":"translate(0, -50%) rotate(0deg)"});
    //   $(arrOfMenus[columnNumber]).css({"display":"none"}).css({"height":"0px"});
    //   this.isOpen = false;
    //   return
    // }

  });
  /* ↑↑↑ /menu buttons ↑↑↑ */

});
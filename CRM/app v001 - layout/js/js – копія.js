$(document).ready(function(){

  /* ↓↓↓ navigation datetimer ↓↓↓ */
  var datetimer = document.getElementById('nav-datetimer');

  setInterval(function() {
    var date = new Date();

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var mn = date.getMinutes();
    if (mn < 10) mn = '0' + mn;

    var ss = date.getSeconds();
    if (ss < 10) ss = '0' + ss;

    datetimer.innerHTML = dd + "." + mm + "." + yy + "   " + hh + ":" + mn + ":" + ss;
  }, 1000);
  
  /* ↑↑↑ /navigation datetimer ↑↑↑ */

  /* ↓↓↓ highlighting clicked memu item ↓↓↓ */

  var arrMenuItem = $(".aside-list-li");
  arrMenuItem.click(function(e){
    e.preventDefault();
    for (var i = 0; i < arrMenuItem.length; i++) {
      $(arrMenuItem[i]).css({"background-color":"transparent"});
    }
    $(this).css({"background-color":"black"});
  });

  /* ↑↑↑ /highlighting clicked memu item ↑↑↑ */

  /* ↓↓↓ accordion ↓↓↓ */
  var arrAsideLi = $(".aside-list-li");

  arrAsideLi.click(function(e){
    e.preventDefault();

    //close all
    for (var i = 0; i < arrAsideLi.length; i++) {
      $(arrAsideLi[i]).find(".submenu-indicator svg").css({"transform":"rotate(0deg)"});
      $(arrMenuItem[i]).css({"background-color":"transparent"});
      //this.open = false;

      var arrSubMenus = $(arrAsideLi[i]).find(".aside-submenu-list-li");
      for (var j = 0; j < arrSubMenus.length; j++){
        $(arrSubMenus[j]).css({"opacity":"0",
                               "height":"0px"});
      }
    }

    //close opened item
    if (this.open == true) {

      var plus = $(this).find(".submenu-indicator svg");
      plus.css({"transition-duration":"0.5s",
                "transform":"rotate(0deg)"});

      var arrSubMenus = $(this).find(".aside-submenu-list-li");

      for (var i = 0; i < arrSubMenus.length; i++){
        $(arrSubMenus[i]).css({"transition-duration":"0.5s",
                               "opacity":"0",
                               "height":"00px"});
      }
      this.open = false;
      return;
    }

    //open closed item
    if (this.open == false || this.open == undefined) {
      var plus = $(this).find(".submenu-indicator svg");
      plus.css({"transition-duration":"0.5s",
                "transform":"rotate(45deg)"});

      var arrSubMenus = $(this).find(".aside-submenu-list-li");

      for (var i = 0; i < arrSubMenus.length; i++){
        $(arrSubMenus[i]).css({"transition-duration":"0.5s",
                               "opacity":"1",
                               "height":"40px"});
      }
      this.open = true;
    }

    for (var i = 0; i < arrAsideLi.length; i++) {
      console.log(i + " : " + arrAsideLi[i].open);
    }
    console.log("==========");

  });
  
  /* ↑↑↑ /accordion ↑↑↑ */
  
});
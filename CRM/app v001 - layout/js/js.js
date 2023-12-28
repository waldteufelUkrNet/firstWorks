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

  /* ↓↓↓ accordion ↓↓↓ */
  var arrAccordionLinks = $(".accordion a");

  arrAccordionLinks.click(function(e){
    e.preventDefault();
    var context = this;

    if(context.open === true) {// якщо відкритий

      // код закриття
      var plus = $(context).find(".submenu-indicator svg");
      plus.css({"transition-duration":"0.5s",
                "transform":"rotate(0deg)"});

      var arrSubMenus = $(context).siblings("ul").children("li");
      for (var i = 0; i < arrSubMenus.length; i++){
        $(arrSubMenus[i]).css({"transition-duration":"0.5s",
                               "opacity":"0",
                               "height":"0px"});
      }


      context.open = false;
      return;

    } else {// якщо закритий

      // пройтися циклом - усе закрити
      for(var i = 0; i < arrAccordionLinks.length; i++) {

        if (context.classList.contains("aside-link")) { //якщо вкладений список - батькiвський не закривати
          var plus = $(arrAccordionLinks[i]).find(".submenu-indicator svg");
          plus.css({"transition-duration":"0.5s",
                    "transform":"rotate(0deg)"});

          var arrSubMenus = $(arrAccordionLinks[i]).siblings("ul").children("li");
          for (var j = 0; j < arrSubMenus.length; j++){
            $(arrSubMenus[j]).css({"transition-duration":"0.5s",
                                   "opacity":"0",
                                   "height":"0px"});
          }
        }

        $(arrAccordionLinks[i]).css({"background-color":"transparent"});

        arrAccordionLinks[i].open = false;
      }

      // код відкриття
      var plus = $(context).find(".submenu-indicator svg");
      plus.css({"transition-duration":"0.5s",
                "transform":"rotate(45deg)"});

      var arrSubMenus = $(context).siblings("ul").children("li");
      for (var i = 0; i < arrSubMenus.length; i++){
        $(arrSubMenus[i]).css({"transition-duration":"0.5s",
                               "opacity":"1",
                               "height":"40px"});
      }

      $(context).css({"background-color":"black"});

      context.open = true;
    }
    //$(this).css({"background-color":"red"});

  });

  


  /* ↑↑↑ /accordion ↑↑↑ */
  
});
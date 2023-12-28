/* ↓↓↓ NAVIGATION ↓↓↓ */
$(document).ready(function(){

  /* navigation button (small screen) */
  $(".navigation i").click(function(){
    $(".navigation ul").slideToggle("slow");
  });
  
  /* navigation button (medium screen) */
  $("#drop-button").click(function(){
    $(".dropdown-nav-content").toggleClass("show");
  });

  $(window).click(function(event){
    if (!event.target.matches('#drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-nav-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });

});
/* ↑↑↑ /NAVIGATION ↑↑↑ */

/* ↓↓↓ CAROUSEL (HEADER) ↓↓↓ */
$(document).ready(function(){

  var isHover = false;
  var slideIndex = 0;
  showSlides();
  function showSlides() {
    
    var i;
    var slidesContainer = document.getElementsByClassName("slideshow-container");
    var slides = document.getElementsByClassName("slideshow-item");
    var slideshowContent = document.getElementsByClassName("slideshow-content");

    $(slidesContainer).hover(
      function () {
        isHover = true;
      },
      function () {
        isHover = false;
      }
    );

    if(isHover == false) {

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";

    }

    var timer = setTimeout(showSlides, 4500);
  }

});

$(document).ready(function(){
    $('#home2-icon3').hover(function(){
        $(this).children("img").attr("src", "images/home2-icon3-hover.png");
    },
    function(){
        $(this).children("img").attr("src", "images/home2-icon3.png");
    });


    $('#home2-icon2').hover(function(){
        $(this).children("img").attr("src", "images/home2-icon2-hover.png");
    },
    function(){
        $(this).children("img").attr("src", "images/home2-icon2.png");
    });


    $('#home2-icon1').hover(function(){
        $(this).children("img").attr("src", "images/home2-icon1-hover.png");
    },
    function(){
        $(this).children("img").attr("src", "images/home2-icon1.png");
    });
});

/* ↑↑↑ /CAROUSEL ↑↑↑ */


/* ↓↓↓ CAROUSEL (SECTION7) ↓↓↓ */

$(document).ready(function(){

  var sliderContainer = document.getElementsByClassName("s7-section-container-1")[0];
  var sliderContainerWidth = getComputedStyle(sliderContainer).width; // визначаємо ширину контейнера
  var sliderContainerWidth = parseInt(sliderContainerWidth, 10);      // перетворення рядка у число
  
  var bigCircle = document.getElementById('s7-slider-img-2');
  var bigCircleRadius = getComputedStyle(bigCircle).width;
  var bigCircleRadius = parseInt(bigCircleRadius, 10)/2;

  var smallCircle = document.getElementById('s7-slider-img-1');
  var smallCircleDiameter = getComputedStyle(smallCircle).width;
  var smallCircleDiameter = parseInt(smallCircleDiameter, 10);

  var leftBigCoord = (sliderContainerWidth/2) - bigCircleRadius;      // ліва x-координата центрального малюнка
  var leftSmallCoord = sliderContainerWidth - smallCircleDiameter;    // ліва x-координата правого малюнка
  
  var imgArr = sliderContainer.getElementsByTagName('img');           // масив малюнків
  var textArr = document.getElementsByClassName('comment-text');


  var posit = 1;
  for (var i = 0; i < imgArr.length; i++) {                           // кожній картинці присвоїли позицію
    imgArr[i].position = posit;
    textArr[i].number = posit;
    posit++;
  }

  $(".fa-angle-left").click(function(){                               // лівий клік
    for (var i = 0; i < imgArr.length; i++) {
      switch (imgArr[i].position) {

        case 4: appearOnLeft(imgArr[i]);
                break;
        case 1: beBig(imgArr[i], textArr[i]);
                break;
        case 2: beRightSmall(imgArr[i], textArr[i]);
                break;
        case 3: beInvisible(imgArr[i]);
                break;
      }
    }
    
    for (var i = 0; i < imgArr.length; i++) {
      imgArr[i].position = imgArr[i].position + 1;
      if(imgArr[i].position==5) {
        imgArr[i].position = 1;
      }
    }
  })

  $(".fa-angle-right").click(function(){                               // правий клік
    for (var i = 0; i < imgArr.length; i++) {
      switch (imgArr[i].position) {

        case 4: appearOnRight(imgArr[i]);
                break;
        case 3: beBig(imgArr[i], textArr[i]);
                break;
        case 2: beLeftSmall(imgArr[i], textArr[i]);
                break;
        case 1: beInvisible(imgArr[i]);
                break;
      }
    }
    
    for (var i = 0; i < imgArr.length; i++) {
      imgArr[i].position = imgArr[i].position - 1;
      if(imgArr[i].position==0) {
        imgArr[i].position=4;
      }
    }
  }) 

  function beBig(arg, arg2) {
    $(arg).animate({
      width: "230px",
      height: "230px",
      top: "70px",
      left: leftBigCoord,
      zIndex: "20"
    }, "slow")
    $(arg2).css({
      display: "block"
    })
  }

  function beRightSmall(arg, arg2) {
    $(arg).animate({
      width: "160px",
      height: "160px",
      top: "115px",
      left: leftSmallCoord,
    },"slow")
    $(arg2).css({
      display: "none"
    })
  }

  function beInvisible(arg) {
    $(arg).css({
      "z-index":"10"
    })
  }

  function appearOnLeft(arg) {
    $(arg).css({
      "z-index":"10",
      "width":"160px",
      "height":"160px",
      "position":"absolute",
      "top":"115px",
      "left":"0px"      
    })
  }

  function beLeftSmall(arg, arg2) {
    $(arg).animate({
      zIndex:"20",
      width: "160px",
      height: "160px",
      top: "115px",
      left: "0px"      
    },"slow")
    $(arg2).css({
      display: "none"
    })
  }

  function appearOnRight(arg) {
    $(arg).css({
      "z-index":"10",
      "width":"160px",
      "height":"160px",
      "position":"absolute",
      "top":"115px",
      "left": leftSmallCoord      
    })
  }

});
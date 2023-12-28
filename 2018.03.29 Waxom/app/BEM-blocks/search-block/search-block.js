$(document).ready(function(){

  var isSearchOpen = false;

  // відкрити/закрити поле пошуку (використання кнопки)
  $(".search-block__btn").click(function(){

    if(!isSearchOpen){ // якщо поле закрите - відкрити
      $(".search-block__field").animate({"opacity":"1","width":"234px"}, 500);
      isSearchOpen = true;
      return;
    }
    if(isSearchOpen){ // якщо поле відкрите

      var searchValue = $(".search-block__field")[0].value; // значення, введене в поле
      if (searchValue) {
        alert('Пошук "' + searchValue + '" не дав результатів, оскільки не підключено пошуковий скрипт');
        $(".search-block__field")[0].value = ""; // очистити поле
      }

      $(".search-block__field").animate({"opacity":"0","width":"0px"}, 500); // закрити поле
      isSearchOpen = false;
    }
  });

  document.onclick = function(event) {
    console.log(event.target.className);
    if (isSearchOpen && // якщо поле відкрите, а клік - поза полем - закрити поле
      event.target.className != "search-block__btn" &&
      event.target.className != "search-block__img" &&
      event.target.className != "search-block__field") {
      $(".search-block__field")[0].value = ""; // очистити поле
      $(".search-block__field").animate({"opacity":"0","width":"0px"}, 500); // закрити поле
      isSearchOpen = false;
    };
  }

  document.onkeyup = function(event) {

    if (isSearchOpen && // якщо поле відкрите і натиснуто на enter
      event.keyCode == 13) {
      var searchValue = $(".search-block__field")[0].value; // значення, введене в поле
      if (searchValue) {
        alert('Пошук "' + searchValue + '" не дав результатів, оскільки не підключено пошуковий скрипт');
        $(".search-block__field")[0].value = ""; // очистити поле
        $(".search-block__field").animate({"opacity":"0","width":"0px"}, 500); // закрити поле
        isSearchOpen = false;
      } else {
        alert ("Введіть значення");
      }
    };
  }
});
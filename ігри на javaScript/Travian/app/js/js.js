$(document).ready(function(){

  /* ↓↓↓ trololo ↓↓↓ */
  /* ↑↑↑ /trololo ↑↑↑ */

  /* ↓↓↓ datetimer ↓↓↓ */
  // розраховує різницю між часом запуску сторінки і попереднього закриття сторінки
  var oldDatetimer = $('#datetimer').text();
  var newDatetimer = Date.now();
  var timeDifference = (newDatetimer - oldDatetimer)/1000;
  console.log("timeDifference", timeDifference);
  setInterval(function(){
    var datetimer = Date.now();
    $('#datetimer').text(newDatetimer);
  },1000);
  /* ↑↑↑ /datetimer ↑↑↑ */

  /* ↓↓↓ reality correctot ↓↓↓ */
  // бере час, проведений офлайн, та накручує ресурси
  var ArrOfProduction = $('div[id*="prod-res"]');      // значення видобутку
  var ArrOfStoff      = $('div[id*="stor-res"]');      // складські значення
  // for(var i = 0; i < ArrOfStoff.length; i++) {
  //   var stoff = +$(ArrOfStoff[i]).text() + timeDifference * +$(ArrOfProduction[i]).text();
  //   $(ArrOfStoff[i]).text(stoff);                    // перезберігаємо значення
  // }
  /* ↑↑↑ /reality correctot ↑↑↑ */

  /* ↓↓↓ збільшення ресурсів ↓↓↓ */
	// var ArrOfProduction = $('div[id*="prod-res"]');      // значення видобутку
	// var ArrOfStoff      = $('div[id*="stor-res"]');      // складські значення

  setInterval(function(){
  	for(var i = 0; i < ArrOfStoff.length; i++) {
  		var stoff = +$(ArrOfStoff[i]).text();            // беремо збережене значення
  		stoff += +$(ArrOfProduction[i]).text();          // збільшуємо значення
  		$(ArrOfStoff[i]).text(stoff);                    // перезберігаємо значення
  	}
  },1000);
  /* ↑↑↑ /збільшення ресурсів ↑↑↑ */

});
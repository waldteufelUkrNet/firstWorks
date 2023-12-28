$(document).ready(function(){
  calculateStars();
  highlightBestCommand();
  orderResults();
});

function calculateStars() {
// розраховує градації: чим більше депів - тим більше зірок
  var arrOfAmount = $('.team-member__amo');
  for (var i=0; i<arrOfAmount.length;i++) {
    var tempAmount = +$(arrOfAmount[i]).text();
    if ( tempAmount >= 31 ) {
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg').css('color','yellow');
    } else if ( tempAmount >= 26 ) {
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(0)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(1)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(2)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(3)').css('color','yellow');
    } else if ( tempAmount >= 21 ) {
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(0)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(1)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(2)').css('color','yellow');
    } else if ( tempAmount >= 16 ) {
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(0)').css('color','yellow');
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(1)').css('color','yellow');
    } else if ( tempAmount >= 11 ) {
      $(arrOfAmount[i]).siblings('.team-member__star').find('svg:eq(0)').css('color','yellow');
    }
  }
}

function highlightBestCommand() {
// порівнює сумарні депи команд, позначення кращої коменди картинкою кубка
  var firstCommandResult  = +$('.team-name:eq(0)').children('.total-amount').text();
  var secondCommandResult = +$('.team-name:eq(1)').children('.total-amount').text();

  $('.team-name').remove('.cup');
  if ( firstCommandResult > secondCommandResult ) {
    $('.team-name:eq(0)').append('<img class="cup" src="cup.png" alt="cup">');
  } else if ( firstCommandResult < secondCommandResult ) {
    $('.team-name:eq(1)').append('<img class="cup" src="cup.png" alt="cup">');
  } else if ( firstCommandResult == secondCommandResult ) {}
}

async function orderResults() {
// розташовує членів команд у порядку спадання кількості депів
  var arrOfCommands = $('.team-card');
  // перебір команд
  for (var i=0; i<arrOfCommands.length; i++) {

    var tempArrOfMember = $(arrOfCommands[i]).find('.team-member');
    // перебір членів команди
    for (var j=1; j<tempArrOfMember.length; j++) {
      if ( +$(tempArrOfMember[j-1]).find('.team-member__amo').text() < +$(tempArrOfMember[j]).find('.team-member__amo').text() ) {

        // затичка від помилки
        if ( j<1 ) continue

        var firstElTop  = $(tempArrOfMember[j-1]).position().top,
            secondElTop = $(tempArrOfMember[j]).position().top,
            elWidth     = $(tempArrOfMember[j]).outerWidth(),
            elHeight    = $(tempArrOfMember[j]).outerHeight();

        // створюємо підкладку для анімації
        $(tempArrOfMember[j-1]).before('<div class="ersatz" style="height:' + 2*elHeight + 'px; width: 100%;"></div>');

        // задаємо початкові стилі перед анімацією
        $(tempArrOfMember[j-1]).css({'background-color'   : 'white',
                                     'zIndex'             : 1,
                                     'top'                : firstElTop,
                                     'position'           : 'fixed',
                                     'width'              : elWidth,
                                     'height'             : elHeight
                                    });

        $(tempArrOfMember[j]).css({'background-color'     : 'silver',
                                   'zIndex'               : 2,
                                   'top'                  : secondElTop,
                                   'position'             : 'fixed',
                                   'width'                : elWidth,
                                   'height'               : elHeight
                                  });

        await sleep(600);

        // анімуємо
        $(tempArrOfMember[j-1]).css({'top'                : secondElTop});
        $(tempArrOfMember[j]).css({'top'                  : firstElTop});

        // робимо затримку на час анімації
        await sleep(1000);

        // повертаємо початкові стилі
        $(tempArrOfMember[j-1]).css({'background-color' : 'transparent',
                                     'position'         : 'static',
                                     'width'            : elWidth,
                                     'top'              : secondElTop,
                                     'height'           : 'auto'
                                     });

        $(tempArrOfMember[j]).css({'background-color'   : 'transparent',
                                   'position'           : 'static',
                                   'width'              : elWidth,
                                   'top'                : firstElTop,
                                   'height'             : 'auto'
                                   });

        // прибираємо підкладку для анімації
        $('.ersatz').remove();

        // переміщаємо елементи по DOM
        $(tempArrOfMember[j-1]).before( $(tempArrOfMember[j]) );

        //відновлюємо "полосатість"
        $('.team-member:odd').css('background-color', 'transparent');
        $('.team-member:even').css('background-color', 'rgba(0,0,0,.3)');

        var tempArrOfMember = $(arrOfCommands[i]).find('.team-member');
        j =  j - 2;

      }
    }
  }
}

$('#header-minus').click(function(){
  var headerFontSize = +$('.team-name').css('fontSize').slice(0,-2);
  $('.team-name').css('fontSize', headerFontSize - 1 + 'px');
});

$('#header-plus').click(function(){
  var headerFontSize = +$('.team-name').css('fontSize').slice(0,-2);
  $('.team-name').css('fontSize', headerFontSize + 1 + 'px');
});

$('#text-minus').click(function(){
  var headerFontSize = +$('.team-members').css('fontSize').slice(0,-2);
  $('.team-members').css('fontSize', headerFontSize - 1 + 'px');
});

$('#text-plus').click(function(){
  var headerFontSize = +$('.team-members').css('fontSize').slice(0,-2);
  $('.team-members').css('fontSize', headerFontSize + 1 + 'px');
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
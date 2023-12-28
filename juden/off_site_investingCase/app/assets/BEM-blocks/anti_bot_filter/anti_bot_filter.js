var antiBotFilterValue1 = randomInteger(0, 10);
var antiBotFilterValue2 = randomInteger(0, 10);
$('.anti_bot_filter__ansver').val('');

$('.anti_bot_filter__question').text(antiBotFilterValue1 + ' + ' + antiBotFilterValue2 + ' =');

$('.anti_bot_filter__ansver').keyup(function(){ console.log(1);
	confirmAntiBotFilterQuestion();
});

function randomInteger(min, max) {
	// генерує випадкові цілі числа в заданому діапазоні
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

function confirmAntiBotFilterQuestion () {
	// перевіряє, чи правильну відповідь вписав відвідувач
	if ( antiBotFilterValue1 + antiBotFilterValue2 == +$('.anti_bot_filter__ansver').val() ) {
		$('.anti_bot_filter, .anti_bot_filter__ansver').css({'border-color':'green', 'background-color':'rgba(0,128,0,.3)'});
		return true
	} else {
		$('.anti_bot_filter, .anti_bot_filter__ansver').css({'border-color':'red', 'background-color':'rgba(255,0,0,.3)'});
		return false
	}
}
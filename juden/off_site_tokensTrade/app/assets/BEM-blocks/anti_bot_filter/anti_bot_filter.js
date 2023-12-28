var antiBotFilterValue1 = randomInteger(0, 10);
var antiBotFilterValue2 = randomInteger(0, 10);
$('.anti_bot_filter__ansver').val('');

$('.anti_bot_filter__question').text(antiBotFilterValue1 + ' + ' + antiBotFilterValue2 + ' =');

$('.anti_bot_filter__ansver').keyup(function(){
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
		$('.anti_bot_filter').css({'border-color':'green'});
		return true
	} else {
		$('.anti_bot_filter').css({'border-color':'red'});
		return false
	}
}
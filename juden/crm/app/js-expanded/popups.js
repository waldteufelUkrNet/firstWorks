$('.popup__btn_cls').click(function(){
  $($(this).parents('.popup')[0]).css({'display':'none'});
  $('.popup__wrapper').css({'display':'none'});
});


function showPopupClientIsOnline(name,id) {

  var tmpID = Math.random();
  tmpID = tmpID.toString().substr(2,6);

	var message='\
      <div class="popup-clientIsOnline" data-attr="small-top-right-info-popup" id="' + tmpID + '">\
        <div class="popup-clientIsOnline__body">\
          <img class="popup-clientIsOnline__img" src="img/green-glossy-ball.jpg">\
          <p class="popup-clientIsOnline__info">Клиент\
            <a class="popup-clientIsOnline__clientLink" href="#">\
              <span class="popup-clientIsOnline__clientName"> ' + name + ' </span>(id\
              <span class="popup-clientIsOnline__clientId">' + id + '</span>)\
            </a>\
            сейчас онлайн\
          </p>\
          <button class="popup-clientIsOnline__btn">×</button>\
        </div>\
      </div>\
	';

  // перевірка, чи уже є повідомлення, якщо так - зсув існуючих
	if ( $('div[data-attr="small-top-right-info-popup"]')[0] ) {
  	var tempArr = $('div[data-attr="small-top-right-info-popup"]');
  	var elHeight = $( $('div[data-attr="small-top-right-info-popup"]')[0] ).outerHeight();
    var tempHeight = 5;

  	for (var i=tempArr.length; i>=0; i--) {
  		$(tempArr[i]).css('top', tempHeight );
      tempHeight = tempHeight + elHeight + 3
  	}
  }

  $('.main').append(message);
  setTimeout(function(){$('#' + tmpID).css('top','5px');}, 100);
  setTimeout(function(){$('#' + tmpID).remove()}, 10000);

  // видалення попапу по кліку
  $('.popup-clientIsOnline__btn').click(function(){
  	$( $(this).parents('div[data-attr="small-top-right-info-popup"]')[0] ).remove();
  	var tempArr = $('div[data-attr="small-top-right-info-popup"]');
  	var elHeight = $( $('div[data-attr="small-top-right-info-popup"]')[0] ).outerHeight();
    var tempHeight = 5 - 34;

  	for (var i=tempArr.length; i>=0; i--) {
  		$(tempArr[i]).css('top', tempHeight );
      tempHeight = tempHeight + elHeight + 3
  	}
  });
}

function showPopupNewClient(name,id) {

  var tmpID = Math.random();
  tmpID = tmpID.toString().substr(2,6);

  var message='\
      <div class="popup-newClient" data-attr="small-top-right-info-popup" id="' + tmpID + '">\
        <div class="popup-newClient__body">\
          <p class="popup-newClient__info">У Вас новый клиент:\
            <a class="popup-newClient__clientLink" href="#">\
              <span class="popup-newClient__clientName"> ' + name + ' </span>(id\
              <span class="popup-newClient__clientId">' + id + '</span>)\
            </a>\
          </p>\
          <button class="popup-newClient__btn">×</button>\
        </div>\
      </div>\
  ';

  // перевірка, чи уже є повідомлення, якщо так - зсув існуючих
  if ( $('div[data-attr="small-top-right-info-popup"]')[0] ) {
    var tempArr = $('div[data-attr="small-top-right-info-popup"]');
    var elHeight = $( $('div[data-attr="small-top-right-info-popup"]')[0] ).outerHeight();
    var tempHeight = 5;

    for (var i=tempArr.length; i>=0; i--) {
      $(tempArr[i]).css('top', tempHeight );
      tempHeight = tempHeight + elHeight + 3
    }
  }

  $('.main').append(message);
  setTimeout(function(){$('#' + tmpID).css('top','5px');}, 100);
  setTimeout(function(){$('#' + tmpID).remove()}, 10000);

  // видалення попапу по кліку
  $('.popup-newClient__btn').click(function(){
    $( $(this).parents('div[data-attr="small-top-right-info-popup"]')[0] ).remove();
    var tempArr = $('div[data-attr="small-top-right-info-popup"]');
    var elHeight = $( $('div[data-attr="small-top-right-info-popup"]')[0] ).outerHeight();
    var tempHeight = 5 - 34;

    for (var i=tempArr.length; i>=0; i--) {
      $(tempArr[i]).css('top', tempHeight );
      tempHeight = tempHeight + elHeight + 3
    }
  });
}
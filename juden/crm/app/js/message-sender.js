$(document).ready(function(){
  $('.message-sender__reset').click(function(){
  	$('.message-sender__subject, .message-sender__message-body').val('');
    $('.message-sender__checkbox').prop('checked', false);
    $('.message-sender__checkbox').attr('checked', false);
  });

  $('.message-sender__submit').click(function(event){
    if ( $('.message-sender__message-body').val() == '' || $('input.message-sender__checkbox:checked').length == 0 ) {
      event.preventDefault();
    }
  });

  $('.message-sender__checkbox-btns-check').click(function(event){
    event.preventDefault();
    var tempArr = $(this).parent()
                         .siblings('.message-sender__checkbox-holder')
                         .children('.message-sender__checkbox-list')
                         .children('li')
                         .children('label')
                         .children('input.message-sender__checkbox');
    for (var i = 0; i < tempArr.length; i++) {
    	$(tempArr[i]).attr('checked',true);
    	$(tempArr[i]).prop('checked',true);
    }
  });

  $('.message-sender__checkbox-btns-uncheck').click(function(event){
    event.preventDefault();
    var tempArr = $(this).parent()
                         .siblings('.message-sender__checkbox-holder')
                         .children('.message-sender__checkbox-list')
                         .children('li')
                         .children('label')
                         .children('input.message-sender__checkbox');
    for (var i = 0; i < tempArr.length; i++) {
    	$(tempArr[i]).attr('checked', false);
    	$(tempArr[i]).prop('checked', false);
    }
  });
});
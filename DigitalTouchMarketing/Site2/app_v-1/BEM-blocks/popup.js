$(document).ready(function(){
	$(document).mouseleave(function(event){

		// popup 1
	  if (event.clientY < 0) {
			if (document.body.scrollHeight/2 < window.pageYOffset && window.pageYOffset < document.body.scrollHeight*.9) {
				$(".popup__cover").css({"display":"block"});
			}
		// popup 2
			if (window.pageYOffset > document.body.scrollHeight*.9) {
				$(".popup2__cover").css({"display":"block"});
			}
		}
	});

	$(".popup1__btn").click(function(){
		$(".popup__cover").css({"display":"none"});
	});

	$(".popup2__btn").click(function(){
		$(".popup2__cover").css({"display":"none"});
		var x = document.body.scrollHeight - 744;
		window.scrollTo(0,x);
	});
});
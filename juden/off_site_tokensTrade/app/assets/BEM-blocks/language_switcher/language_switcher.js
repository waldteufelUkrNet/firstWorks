$(document).ready(function(){
  var isLangPanelOpen = false;
  $('.language-switcher').click(function(){
    if (isLangPanelOpen) {
      $('.language-switcher__panel').css('display','none');
      $('.language-switcher__btn').css({'border-color':'black', 'background-color':'transparent'});
      isLangPanelOpen = false;
    } else {
      $('.language-switcher__panel').css('display','block');
      $('.language-switcher__btn').css({'border-color':'lightgrey', 'background-color':'black'});
      isLangPanelOpen = true;
    }
  });

  $(document).click(function(event){
    if ( isLangPanelOpen && event.target.className != 'language-switcher__btn-cover-for-click' ) {
      // закрити меню
      $('.language-switcher__panel').css('display','none');
      $('.language-switcher__btn').css({'border-color':'black', 'background-color':'transparent'});
      isLangPanelOpen = false;
    }
  });

  // визначення мови в рядку браузера
  var href           = window.location.href;
  var languageMarker = href.slice(-8,-7);
  var currentLanguage;
  var hrefBody;
  var newHref;
  if ( languageMarker == '_' ) {
    currentLanguage = href.slice(-7,-5);
    hrefBody        = href.slice(0,-8);
  } else {
    currentLanguage = 'ru';
    hrefBody        = href.slice(0,-5);
  }

  // перевірка під час завантаження, яка мова включена, підстановка відповідного прапорця
	if ( currentLanguage == 'en') {
	  $('.language-switcher__btn-img').attr('src','assets/img/lang-en.png')
                                    .attr('alt','lang-en.png');
  } else if ( currentLanguage == 'ru') {
    $('.language-switcher__btn-img').attr('src','assets/img/lang-ru.png')
                                    .attr('alt','lang-ru.png');
  }

  // визначення мови на перекліку, щоб визначити, на яку локалізовану сторінку переправити
  $('.language-switcher__language-item').click(function(){
    var selectedLanguage = $(this).attr('data-lang');
    console.log("selectedLanguage", selectedLanguage);

    if ( selectedLanguage != currentLanguage ) {
      if (selectedLanguage == 'ru') {
        newHref = hrefBody + '.html'
      } else {
        if ( window.location.href.indexOf('.html') == -1 ) { console.log('q1');
          newHref = window.location.href + 'index_en.html'
        } else {
          newHref = hrefBody + '_' + selectedLanguage + '.html'
        }
      }
      $('a.language-switcher__language-item').attr('href',newHref);
    }
  });

});
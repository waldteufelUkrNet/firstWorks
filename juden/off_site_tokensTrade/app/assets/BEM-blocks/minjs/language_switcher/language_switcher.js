$(document).ready(function(){var n=!1;$(".language-switcher").click(function(){n=n?($(".language-switcher__panel").css("display","none"),$(".language-switcher__btn").css({"border-color":"black","background-color":"transparent"}),!1):($(".language-switcher__panel").css("display","block"),$(".language-switcher__btn").css({"border-color":"lightgrey","background-color":"black"}),!0)}),$(document).click(function(a){n&&"language-switcher__btn-cover-for-click"!=a.target.className&&($(".language-switcher__panel").css("display","none"),$(".language-switcher__btn").css({"border-color":"black","background-color":"transparent"}),n=!1)});var e,c,l,a=window.location.href,t=a.slice(-8,-7);c="_"==t?(e=a.slice(-7,-5),a.slice(0,-8)):(e="ru",a.slice(0,-5)),"en"==e?$(".language-switcher__btn-img").attr("src","assets/img/lang-en.png").attr("alt","lang-en.png"):"ru"==e&&$(".language-switcher__btn-img").attr("src","assets/img/lang-ru.png").attr("alt","lang-ru.png"),$(".language-switcher__language-item").click(function(){var a=$(this).attr("data-lang");console.log("selectedLanguage",a),a!=e&&(l="ru"==a?c+".html":-1==window.location.href.indexOf(".html")?(console.log("q1"),window.location.href+"index_en.html"):c+"_"+a+".html",$("a.language-switcher__language-item").attr("href",l))})});
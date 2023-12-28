$(".regform__show-hide-pass").click(function(){$(this).children().hasClass("fa-eye-slash")?($(this).siblings(".regform__input_pass").attr("type","text").focus(),$(".regform__input_pass").attr("type","text"),$(this).children(".fa-eye-slash").removeClass("fa-eye-slash").addClass("fa-eye")):($(this).siblings(".regform__input_pass").attr("type","password").focus(),$(this).children(".fa-eye").removeClass("fa-eye").addClass("fa-eye-slash"))});var selectedCountry,isCountriesListOpen=!1,blockedCountriesArr=["AU","IR","IL","CA","UA","US","JP","SY","KP"];function addCountryCode(r){var i=r,e=$(i).attr("data-phoneCode");$("#input-country-code").val(e);var s=$(i).attr("data-imgName"),n="assets/img/"+s;$(i).parent().siblings(".regform__flag-wrapper").find(".regform__flag-img").attr("src",n),$("#input-phone").removeAttr("readonly").focus(),selectedCountry=s.slice(0,-4)}function isEmailValid(r){return 1==calculateCharsInStr(r,"@")&&(!(calculateCharsInStr(r,".")<1)&&("@"!=r.charAt(0)&&"."!=r.charAt(0)&&"@"!=r.charAt(r.length-1)&&"."!=r.charAt(r.length-1)&&(-1==r.indexOf("@.")&&-1!=r.split("@")[1].indexOf("."))))}function calculateCharsInStr(r,i){for(var e=count=0;;){var s=r.indexOf(i,e);if(-1==s)break;count++,e=s+1}return count}function isNumeric(r){return!isNaN(parseFloat(r))&&isFinite(r)}$(".regform__flag-wrapper-cover-for-click").click(function(){if(isCountriesListOpen)$(".regform__countries-wrapper").css({height:"0px"}).css({display:"none"}),isCountriesListOpen=!1;else{if($(".regform__countries-wrapper").css({display:"block"}).css({height:"190px"}),isCountriesListOpen=!0,$(".regform__country").children().length)return;r:for(var r=0;r<countriesArr.length;r++){for(var i=0;i<blockedCountriesArr.length;i++)if(blockedCountriesArr[i]==countriesArr[r].ISOcode)continue r;var e='<div class="regform__country" data-phoneCode="'+countriesArr[r].phoneCode+'" data-imgName="'+countriesArr[r].imgName+'" onclick="addCountryCode(this)">                       <div class="regform__img-flag-wrapper">                         <img class="regform__flag-img" src="assets/img/'+countriesArr[r].imgName+'", alt="country-flag">                       </div>                       <div class="regform__country-name">'+countriesArr[r].nameEn+"</div>                     </div>";$(".regform__countries-wrapper").append(e)}}}),$(document).click(function(r){isCountriesListOpen&&"regform__flag-wrapper-cover-for-click"!=r.target.className&&($(".regform__countries-wrapper").css({height:"0px"}).css({display:"none"}),isCountriesListOpen=!1)}),$("#input-phone").keypress(function(r){if(!((r=r||event).ctrlKey||r.altKey||r.metaKey)){var i,e=null!=(i=r).which?0==i.which||0==i.charCode?null:i.which<32?null:String.fromCharCode(i.which):i.keyCode<32?null:String.fromCharCode(i.keyCode);if(null!=e&&(e<"0"||"9"<e))return!1}}),$("#btnsubmit").click(function(){if($("#input-firstName").val().length<2){var r=$(".regform__info.regform__info_error:eq(0)");if("0px"!=$(r).css("height"))return;$("#input-firstName").css({"box-shadow":"0 0 5px red","border-color":"red"}).focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});var i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}if($("#input-lastName").val().length<2){r=$(".regform__info.regform__info_error:eq(1)");if("0px"!=$(r).css("height"))return;$("#input-lastName").css({"box-shadow":"0 0 5px red","border-color":"red"}).focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}if($("#input-phone").val().length<7){r=$(".regform__info.regform__info_error:eq(2)");if("0px"!=$(r).css("height"))return;$("#input-phone").css({"box-shadow":"0 0 5px red","border-color":"red"}).focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}if(!isEmailValid($("#input-email").val())){r=$(".regform__info.regform__info_error:eq(3)");if("0px"!=$(r).css("height"))return;$("#input-email").css({"box-shadow":"0 0 5px red","border-color":"red"}).focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}for(var e=$("#input-password").val(),s=e.split(""),n=0,t=0;t<s.length;t++)isNumeric(s[t])&&n++;if(e.length<8||e.length==n||0==n){r=$(".regform__info.regform__info_error:eq(4)");if("0px"!=$(r).css("height"))return;$("#input-password").css({"box-shadow":"0 0 5px red","border-color":"red"}).focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}if($("#input-password").val()!=$("#input-confirm-pass").val()){r=$(".regform__info.regform__info_error:eq(5)");if("0px"!=$(r).css("height"))return;$("#input-password, #input-confirm-pass").css({"box-shadow":"0 0 5px red","border-color":"red"}),$("#input-confirm-pass").focus(),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}if(1!=$(".regform__agree-wrapper input:checked").length){r=$(".regform__info.regform__info_error:eq(6)");if("0px"!=$(r).css("height"))return;$(".regform__agree-checkbox-span").css({"box-shadow":"0 0 5px red","border-color":"red"}),$(r).css({height:"auto","min-height":"30px",padding:"3px 0"});i=$(r).css("height");return $(r).css({height:"0px","min-height":"0px",padding:"0px"}),void $(r).css({transition:"height .5s, padding-top .5s, margin .5s",height:i,padding:"3px",margin:"3px 0"})}var o={CustomerEmail:$("#input-email").val(),CustomerPassword:$("#input-password").val(),CustomerFirstName:$("#input-firstName").val(),CustomerLastName:$("#input-lastName").val(),CustomerPhone:$("#input-country-code").val()+$("#input-phone").val(),CustomerCountry:selectedCountry,CustomerCity:"unknown",CustomerIp:"0",CustomerLanguage:"unknown",CompanyId:0,Hash:"self"};$.ajax({url:"https://crm.etokenstrade.com/api/LidsSelfRegisr",type:"POST",data:o,success:function(r){if("Ok"!=r){var i=$(".regform__info.regform__info_error:eq(7)");if("0px"!=$(i).css("height"))return;$("#input-email").css({"box-shadow":"0 0 5px red","border-color":"red"}),$(i).css({height:"auto","min-height":"30px",padding:"3px 0"});var e=$(i).css("height");return $(i).css({height:"0px","min-height":"0px",padding:"0px"}),void $(i).css({transition:"height .5s, padding-top .5s, margin .5s",height:e,padding:"3px",margin:"3px 0"})}location.href="https://platform.etokenstrade.com/Home/LoginSite?email="+o.CustomerEmail+"&pass="+o.CustomerPassword}})}),$("#input-firstName").keyup(function(r){1<$("#input-firstName").val().length&&($(".regform__info.regform__info_error:eq(0)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-firstName").css({"box-shadow":"none","border-color":"lightgrey"}))}),$("#input-lastName").keyup(function(r){1<$("#input-lastName").val().length&&($(".regform__info.regform__info_error:eq(1)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-lastName").css({"box-shadow":"none","border-color":"lightgrey"}))}),$("#input-phone").keyup(function(r){6<$("#input-phone").val().length&&($(".regform__info.regform__info_error:eq(2)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-phone").css({"box-shadow":"none","border-color":"lightgrey"}))}),$("#input-email").keyup(function(){isEmailValid($("#input-email").val())&&($(".regform__info.regform__info_error:eq(3)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-email").css({"box-shadow":"none","border-color":"lightgrey"}))}),$("#input-password, #input-confirm-pass").keyup(function(){for(var r=$("#input-password").val(),i=r.split(""),e=0,s=0;s<i.length;s++)isNumeric(i[s])&&e++;8<=r.length&&r.length!=e&&0!=e&&($(".regform__info.regform__info_error:eq(4)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-password, #input-confirm-pass").css({"box-shadow":"none","border-color":"lightgrey"}))}),$("#input-password, #input-confirm-pass").keyup(function(){$("#input-password").val()==$("#input-confirm-pass").val()&&($(".regform__info.regform__info_error:eq(5)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$("#input-password, #input-confirm-pass").css({"box-shadow":"none","border-color":"lightgrey"}))}),$(".regform__agree-label").click(function(){1==$(".regform__agree-wrapper input:checked").length&&($(".regform__info.regform__info_error:eq(6)").css({transition:"height .5s, padding-top .5s, margin .5s",height:"0",padding:"0",margin:"0"}),$(".regform__agree-checkbox-span").css({"box-shadow":"none","border-color":"lightgrey"}))});
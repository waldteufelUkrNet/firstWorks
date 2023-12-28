window.onload = function() {

  var inp_name = document.querySelector("input[name='person-name']");
  var inp_phone = document.querySelector("input[name='person-phone']");
  var inp_sity = document.querySelector("input[name='person-sity']");
  var inp_email = document.querySelector("input[name='person-email']");
  var inp_comment = document.querySelector("textarea");
  var sel_sity = document.querySelector('select[name="sity"]');
  var sel_adress = document.querySelector('select[name="adress"]');
  var sel_pay = document.querySelector('select[name="pay"]');
  
  document.querySelector(".new-customer-form__btn").onclick = (function(e){
    e.preventDefault();

    var alertsArr = document.querySelectorAll(".fa-exclamation");
    for (var i = 0; i < alertsArr.length; i++) {
      alertsArr[i].remove();
    }

    var paramsArr = document.querySelectorAll("input");
    for (var i = 0; i < paramsArr.length; i++) {
      if (!paramsArr[i].value) {
        var attention = document.createElement("span");
        attention.classList.add("fas");
        attention.classList.add("fa-exclamation");
        attention.style.cssText = "color: red;\
                                  font-family: fa;\
                                  font-size: 20px;\
                                  position: relative;\
                                  ";
        paramsArr[i].after(attention);
        return
      }
    }

    var params = "person=" + inp_name.value + "&" + "phone=" + inp_phone.value + "&" + "sity=" + inp_sity.value + "&" + "email=" + inp_email.value + "&" + "comment=" + inp_comment.value + "&" + "sity=" + sel_sity.value + "&" + "adress=" + sel_adress.value + "&" + "pay=" + sel_pay.value;
    console.log(params);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert("Ваш заказ осуществлен. Ожидайте звонка!");
      }
    };
    xmlhttp.open("POST", "url");
    //xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);

  });

};
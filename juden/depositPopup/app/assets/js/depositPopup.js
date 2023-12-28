"use strict";
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ VARIABLES DECLARATION ↓↓↓
  /**
   * [pathToHeaders шлях до JSON з активними заголовками платіжок]
   * @type {String}
   */
  let pathToHeaders = 'assets/config/config.txt';

  /**
   * [pathToHeaders шлях до String-відповіді ('ok' або текст помилки)]
   * @type {String}
   */
  let pathToAmountControl = 'assets/config/amountAnswer.txt';

  /**
   * [pathToSendData шлях, куди відправляються зібрані дані]
   * @type {String}
   */
  let pathToSendData = 'localhost:3000';

  /**
   * [test вмикає/вимикає тестовий режим для fetch POST ]
   * @type {Boolean}
   */
  let test = true;

  /**
   * [formHeight акумулятор висоти форми]
   * @type {Number}
   */
  let formHeight = 0;

  /**
   * [formWidth акумулятор ширини форми]
   * @type {Number}
   */
  let formWidth = 0;
// ↑↑↑ /VARIABLES DECLARATION ↑↑↑
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ SIMPLE CLOSE ↓↓↓
  document.querySelector('.depositPopup__close-btn').onclick = closeDepositPopup;
// ↑↑↑ /SIMPLE CLOSE ↑↑↑
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ TRACKING CLICKS ON A PAPUP ↓↓↓
  // switching tabs
  document.querySelector('.depositPopup').addEventListener('click', switchingTabs);

  // form validation & send
  document.querySelector('.depositPopup').addEventListener('click', sendFormData);

  // close on redirect
  document.querySelector('.depositPopup').addEventListener('click', closeOnRedirect);
// ↑↑↑ /TRACKING CLICKS ON A PAPUP ↑↑↑
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ FUNCTIONS DECLARATION ↓↓↓
  /**
   * [closeDepositPopup закриття попапа з депозитом]
   */
  function closeDepositPopup() {
    document.getElementById('popups-wrapper').style.display = 'none';
    document.querySelector('.depositPopup').style.display = 'none';
    document.querySelector('.depositPopup__tab-wrapper').innerHTML = '';
    document.querySelector('.depositPopup__form-wrapper').innerHTML = '';
  }

  /**
   * [closeOnRedirect закрити попап при переході на зовнішню платіжку]
   * @param {[Object]} event [об'єкт події]
   */
  function closeOnRedirect (event) {
    if ( event.target.closest('.depositPopup__link-to-pay-system') ) {
      closeDepositPopup()
    }
  }

  /**
   * [openDepositPopup відриття попапа з депозитом]
   */
  async function openDepositPopup() {
    document.getElementById('popups-wrapper').style.display = 'block';
    document.querySelector('.depositPopup').style.display = 'block';

    // // запит на сервері списку заголовків і побудова заголовків попапа
    // let response = await fetch(pathToHeaders),
    //     result   = await response.text();

    // result = JSON.parse(result);

    // let headers = '';

    // result.forEach( item => {
    //   let headerInner = '';
    //   if (item.imgSrc) {
    //     headerInner += '<img class="depositPopup__terminal-img" src="'
    //                 + item.imgSrc
    //                 + '", alt="logo">';
    //   }
    //   if (item.name) {
    //     headerInner += '<span class="depositPopup__terminal-name">'
    //                 + item.name
    //                 + '</span>';
    //   }
    //   let header = '<div class="depositPopup__tab-header" data-terminal="'
    //                 + item.terminalId
    //                 +'" data-body-src="'
    //                 + item.bodySrc
    //                 + '">'
    //                 + headerInner
    //                 + '</div>';

    //   headers +=header;
    // } );
    // document.querySelector('.depositPopup__tab-wrapper').insertAdjacentHTML('beforeEnd',headers);
    // document.querySelector('.depositPopup__tab-header').classList.add('depositPopup__tab-header_active');

    downloadDepositBody();
  }

  /**
   * [downloadDepositBody завантаження потрібного тіла з формою]
   */
  async function downloadDepositBody() {
    let formWrapper = document.querySelector('.depositPopup__form-wrapper');

    let bodySrc     = 'assets/snippet/terminal1.html';

    let response = await fetch(bodySrc),
        bodyHtml = await response.text();

    formWrapper.innerHTML = bodyHtml;

    // фіксація розмірів попапа у форматі "не менше, ніж було"
    let width  = formWrapper.querySelector('form').clientWidth;
    if (width > formWidth) {
      formWidth = width;
    } else {
      formWrapper.querySelector('form').style.minWidth = formWidth + 'px';
    }

    let height  = formWrapper.querySelector('form').clientHeight;
    if (height > formHeight) {
      formHeight = height;
    } else {
      formWrapper.querySelector('form').style.minHeight = formHeight + 'px';
    }
  }

  /**
   * [switchingTabs перемикання вкладок з формами платіжок]
   * @param {[Object]} event [об'єкт події]
   */
  function switchingTabs(event) {
    if ( !event.target.closest('.depositPopup__tab-header') ||
          event.target.closest('.depositPopup__tab-header_active') ) return;

    document.querySelector('.depositPopup__tab-header_active')
            .classList.remove('depositPopup__tab-header_active');

    event.target.closest('.depositPopup__tab-header')
                .classList.add('depositPopup__tab-header_active');

    downloadDepositBody();
  }

  /**
   * [checkNumber перевірка на число]
   * @param {[String]} key [символ]
   * @return {Boolean} результат перевірки на число
   */
  function checkNumber(key) {
    return (key >= '0' && key <= '9')  ||
            key == 'ArrowLeft' ||
            key == 'ArrowRight' ||
            key == 'Delete' ||
            key == 'Backspace';
  }

  /**
   * [removeCheckingErrorMessage прибирає повідомлення, якщо є пташка]
   * @param {[Object]} input [DOM-елемент]
   */
  function removeCheckingErrorMessage(input) {
    if ( input.checked ) {
      document.querySelectorAll('.depositPopup__validation-error')[1]
              .classList.remove('depositPopup__validation-error_active');
    }
  }

  /**
   * [removeCheckingErrorMessage прибирає повідомлення, якщо інпут не пустий,
   * робить запит на сервер про достатність суми]
   * @param {[Object]} input [DOM-елемент]
   */
  async function checkAmount(input) {

    if(input.value) {

      let response;
      if (test) {
        response = await fetch(pathToAmountControl);
      } else {
        response = await fetch(pathToAmountControl, {
          method : 'POST',
          body   : input.value
        });
      }
      let ansver = await response.text();
      if (ansver.toLowerCase() != 'ok') {
        document.querySelector('.depositPopup__validation-error_from-server')
                .textContent = ansver;
        document.querySelector('.depositPopup__validation-error_from-server')
                .classList.add('depositPopup__validation-error_active');
      }

      // not empty
      document.querySelectorAll('.depositPopup__validation-error')[0]
              .classList.remove('depositPopup__validation-error_active');
    } else {
      document.querySelectorAll('.depositPopup__validation-error')[0]
              .classList.add('depositPopup__validation-error_active');
    }
  }

  /**
   * [sendFormData валідація полів форми та відправка форми]
   * @param {[Object]} event [об'єкт події]
   */
  function sendFormData (event) {
    if ( !event.target.closest('.depositPopup__deposit-btn') ) return;

    // is checked?
    let isChecked = document.querySelector('input[name="age18+"]').checked;
    if (!isChecked) {
      document.querySelectorAll('.depositPopup__validation-error')[1]
              .classList.add('depositPopup__validation-error_active');
    }

    // is amount input empty?
    let money = document.querySelector('.depositPopup__amount').value;
    if (!money) {
      document.querySelectorAll('.depositPopup__validation-error')[0]
              .classList.add('depositPopup__validation-error_active');
    }

    if ( document.querySelector('.depositPopup .depositPopup__validation-error_active') ) {
      return
    }

    // form data
    // pay systems?
    let paySystem = '';
    if ( document.querySelector('.depositPopup__paySystem-wrapper') ) {
      paySystem = document.querySelector('.depositPopup__card-select').value;
    }
    let terminal = document.querySelector('.depositPopup__tab-header_active')
                           .dataset.terminal;
    let amount = document.querySelector('.depositPopup__amount').value;
    let currency = document.querySelector('.depositPopup__currency-select').value;

    let data = {
      terminal  : terminal,
      paySystem : paySystem,
      amount    : amount,
      currency  : currency
    }

    // send data
    let response = fetch(pathToSendData, {
      method : 'POST',
      body   : data
    });

    // remove listener
    document.querySelector('.depositPopup').removeEventListener('click', sendFormData);

    // close popup
    closeDepositPopup()
  }
// ↑↑↑ FUNCTIONS DECLARATION ↑↑↑
////////////////////////////////////////////////////////////////////////////////
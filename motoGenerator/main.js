'use strict';
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ EVENT LISTENERS ↓↓↓ */
  document.addEventListener('click', clickHandler);
  document.addEventListener('input', inputHandler);
/* ↑↑↑ /EVENT LISTENERS ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ FUNCTIONS DECLARATION ↓↓↓ */
  /**
   * clickHandler активує обробники на подію click
   * @param {Object} event об'єкт події
   */
  function clickHandler(event) {
    if ( event.target.closest('#keygen') ) {
      renderTable('keys');
    }
    if ( event.target.closest('#wavegen') ) {
      renderTable('waves');
    }
    if ( event.target.closest('.keyCopyButton') ) {
      copyCellValue(event);
    }
  }

  /**
   * inputHandler активує обробники на подію input
   * @param {Object} event об'єкт події
   */
  function inputHandler(event) {
    if ( event.target.closest('[name="startValue"]')
        || event.target.closest('[name="finishValue"]')) {
      checkWavesInput(event);
    }
  }

  /**
   * generateKeys генерує масив з 16-ма ключами у форматі HEX
   * @return {Array} масив з ключами шифрування
   */
  function generateKeys() {
    const symbols = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let key = '';
    let keys = [];

    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 10; j ++) {
        key += symbols[randomInteger(0,15)];
      }

      keys.push(key);
      key = '';
    }

    return keys;
  }

  /**
   * generateWaves генерує масив з 16-ма хвилями
   * @return {Array} масив з хвилями
   */
  function generateWaves() {
    let startValue  = document.querySelector('form [name="startValue"]').value,
        finishValue = document.querySelector('form [name="finishValue"]').value,
        separators  = document.querySelectorAll('form [name="separator"]'),
        separator;

    if(separators[0].checked) {
      separator = separators[0].value;
    } else {
      separator = separators[1].value;
    }

    let startValueNum  = +startValue * 1000,
        finishValueNum = +finishValue * 1000, 
        wave  = '',
        waves = [];

    for (let i = 0; i < 16; i++) {
      wave = (randomInteger(startValueNum, finishValueNum) / 1000).toString();
      let waveAsArr = wave.split('.');
      wave = waveAsArr[0] + separator + waveAsArr[1];

      while (wave.length < 9) {
        wave += '0';
      }
      waves.push(wave);
    }

    if ( !checkWavesForUnic(waves) ) {
      generateWaves();
    }

    return waves;
  }

  /**
   * checkWavesForUnic перевіряє хвилі на унікальність
   * @param {Array} waves масив з 16-ма хвилями
   * @return {Boolean} результат перевірки
   */
  function checkWavesForUnic(waves) {
    for (let i = 0; i < waves.length; i++) {
      for (let j = i+1; j < waves.length; j++) {
        if (waves[i] == waves[j]) return false;
      }
    }
    return true;
  }

  /**
   * renderTable рендерить тиблиці
   * @param {String} name ідентифікатор таблиць
   */
  function renderTable(name) {
    let html = '';

    let values, table;

    if (name == 'keys') {
      values = generateKeys();
      table  = document.getElementById('keysTable');
        
    } else if (name == 'waves') {
      values = generateWaves();
      table  = document.getElementById('wavesTable');
    }

    table.innerHTML = '';

    for (let i = 0; i < values.length; i++) {
      let n = i+1;
      let string = '<div class="keyNumber">' + n + '</div>\
                    <div class="keyValue">' + values[i] + '</div>\
                    <div class="keyButtonWrapper">\
                      <button class="keyCopyButton">скопіювати</button>\
                    </div>';
      html += string;
    }
    table.innerHTML = html;
  }

  /**
   * copyCellValue проводить валідацію інпутів
   * @param {Object} event об'єкт події
   */
  function copyCellValue(event) {
    let value = event.target.closest('.keyButtonWrapper')
                            .previousElementSibling.innerHTML;
    navigator.clipboard.writeText(value);
  }

  /**
   * checkWavesInput проводить валідацію інпутів
   * @param {Object} event об'єкт події
   */
  function checkWavesInput(event) {
    let input = event.target,
        value = +input.value,
        range = input.dataset.val_range.split(','),
        minValue = +range[0],
        maxValue = +range[1];

    if (value > maxValue) {
      input.value = maxValue + '00'
    }

    if (value > 100 && value < minValue) {
      input.value = minValue + '00'
    }

    let str = value.toString();

    if (str.length > 9) {
      input.value = str.slice(0,9);
    }

    if ( str.includes('.') && value < minValue) {
      input.value = minValue + '00'
    }
  }

  /**
   * randomInteger повертає цілі числа із заданого діапазону
   * @param {Number} min нижня межа діапазону
   * @param {Number} max верхня межа діапазону
   * @return {Number} результат випадковості
   */
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  /**
   * checkPushedKey фільтрує клавіші при натисканні
   * @param {String} key значення натисненої кнопки
   * @return {Boolean} результат перевірки
   */
  function checkPushedKey(key) {
    console.log(typeof key);
    return (key >= '0' && key <= '9')
           || key == 'ArrowLeft' || key == 'ArrowRight'
           || key == 'Delete' || key == 'Backspace'
           || key == '.';
  }
/* ↑↑↑ /FUNCTIONS DECLARATION ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
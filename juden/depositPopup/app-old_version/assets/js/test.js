// ↓↓↓ OPEN POPUP ↓↓↓
  document.getElementById('showPopup').onclick = function(){
    openDepositPopup();
  }
// ↑↑↑ /OPEN POPUP ↑↑↑
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ CHANGING CONFIG FILE ↓↓↓
  let startSettings = [{
  "terminalId": "1",
    "name": "terminal1",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal1.html"
  },{
  "terminalId": "2",
    "name": "",
    "imgSrc": "assets/img/best.png",
    "bodySrc": "assets/snippet/bestchange.html"
  },
  {
  "terminalId": "3",
    "name": "",
    "imgSrc": "assets/img/inter.png",
    "bodySrc": "assets/snippet/interkassa.html"
  },
  {
  "terminalId": "4",
    "name": "terminal2",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal2.html"
  },
  {
  "terminalId": "5",
    "name": "terminal3",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal3.html"
  },
  {
  "terminalId": "6",
    "name": "",
    "imgSrc": "assets/img/safe.png",
    "bodySrc": "assets/snippet/safecurrency.html"
  },
  {
  "terminalId": "7",
    "name": "terminal4",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal4.html"
  },{
  "terminalId": "8",
    "name": "terminal5",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal5.html"
  },{
  "terminalId": "9",
    "name": "terminal6",
    "imgSrc": "",
    "bodySrc": "assets/snippet/terminal6.html"
  }];


  document.getElementById('changeCF').onclick =function() {
    let inputs = document.querySelectorAll('#settings-area form input');
    let currentSettings = [];

    inputs.forEach( item => {
      if( item.checked ) {
        currentSettings.push( startSettings[item.value-1] );
      }
    } );
    let settingsJson = JSON.stringify(currentSettings);

    let link = document.createElement('a');
    link.download = 'config.txt';
    let blob = new Blob([settingsJson],{type:'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }
// ↑↑↑ /CHANGING CONFIG FILE ↑↑↑
////////////////////////////////////////////////////////////////////////////////
// ↓↓↓ CHANGING AMAUNT ANSWER FILE ↓↓↓
  let startSettings2 = 'ok';

  document.getElementById('changeAA').onclick =function() {
    let value = document.querySelector('#settings-area2 form input[name="answer"]:checked').value;

    let link = document.createElement('a');
    link.download = 'amountAnswer.txt';
    let blob = new Blob([value],{type:'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }
// ↑↑↑ /CHANGING AMAUNT ANSWER FILE ↑↑↑
////////////////////////////////////////////////////////////////////////////////
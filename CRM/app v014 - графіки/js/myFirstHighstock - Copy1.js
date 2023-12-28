$.getJSON('http://stock.peoplesender.info:9000/api/Stock?timer=5&symbol=BTCETH', function (data) {

  // [{...},{...},{...}] -> [[...],[...],[...]]
  var arr = data;
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    var tempArr = [];
    for (var key in arr[i]) {
      tempArr.push(arr[i][key]);
    }
    resultArr.push(tempArr);
  }
  //console.log("resultArr", resultArr);
  //console.log(resultArr[143][0]);

  $(document).ready(function() {
    var chart1 = Highcharts.stockChart({
      chart             : {
        renderTo        : 'container'//,
        //type: 'bar'
      },
      title             : { text: 'Заголовок' },
      subtitle          : { text: 'Підзаголовок' },
      navigator         : { enabled: false },

      // rangeSelector: {
      //   buttons: [{
      //       count: 1,
      //       type: 'minute',
      //       text: '1M'
      //   }, {
      //       count: 5,
      //       type: 'minute',
      //       text: '5M'
      //   }, {
      //       type: 'all',
      //       text: 'All'
      //   }],
      //   inputEnabled: false,
      //   selected: 0
      // },

      xAxis             : { gridLineWidth: 1,
        //tickPixelInterval: 50,
        title           : { text: 'параметр осі x' },
        scrollbar       : { enabled: false },
        //categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8']
      },

      yAxis             : {
        gridLineWidth   : 1,
        title           : { text: 'параметр осі у' },
        scrollbar       : { enabled: false },
        //categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8']
      },

      series            : [{
        name            : 'лінія 1',
        data            : resultArr,
        showInNavigator : false
      }],
      // tooltip: {
      //   crosshairs: [true,true]
      // }
    });
  });
});

$.getJSON('http://stock.peoplesender.info:9000/api/Stock?timer=realOne&symbol=BTCUSD', function (data) {

  // [{"Symbol":"Symbol","Value":"Value","Date":"Date"}] -> [Date,Value]
  var arr2 = data;
  var tempArr2 = [];
  tempArr2.push(arr2[0].Date);
  tempArr2.push(arr2[0].Value);
  //console.log(tempArr2);
  //console.log(tempArr2[0]);

});
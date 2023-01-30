function cartOptionController(target){
  var dayFlag = 0;
  var firstDay;
	var firstDayParam;
	var secondDay;
	var secondDayParam;
	var dayNumber = 0;
  var deliveryDateList = $('#deliveryDateList');
  var optionItem = [];
  var optionItemHeight = [];
  var optionItemLabel = [];
  var optionItemWrap = [];
  var delay = 0; /*曜日・時間による配送日のスライド設定*/
  var today = new Date();
  var startDay;
  var y;
  var m;
  var paramM;
  var d;
  var paramD;
  var w;
  var paramW;
  var time;
  var num;
  var testFlg = Number(0);
  var correctDate = ['指定なし'];
  var wd = ['日', '月', '火', '水', '木', '金', '土'];
  var holiday = ['12/29', '12/30', '12/31', '1/1', '1/2', '1/3', '1/4', '1/10', '2/11', '2/23', '3/21', '4/29','4/30', '5/1', '5/2', '5/3', '5/4', '5/5', '7/18', '8/11', '9/19', '9/23', '10/10', '11/3', '11/23'];
  var setDayStatus = 0;

  function getDayDisplay(day, mode, flg){
    var date = new Date();
    date.setDate(date.getDate() + day + testFlg);
    y = date.getFullYear();
    m = date.getMonth() + 1;
    d = date.getDate();
    w = date.getDay() % 7;
    time = date.getHours();
    if(m < 10){ paramM = '0' + m }else{ paramM = m }
    if(d < 10){ paramD = '0' + d }else{ paramD = d }
    var dayParam = y + '-' + paramM + '-' + paramD;
    if(mode == 0){
      correctDate.push(dayParam);
    }
  }
  console.log('deliveryDateParam:' + deliveryDateParam);
  if(deliveryDateParam != undefined){
    $('#deliveryDate').val(deliveryDateParam);
  }
}

function setDayDisplay(num, mode){
  console.log('num:'+ num + '/' + 'mode:' + mode);
  var startSet = Number(num) + Number(1);
  for (var i= startSet; i<30; i++) {
    if(mode == 1){
      dayFlag = dayFlag + 1;
    }
    getDayDisplay(i, mode, dayFlag);
  }
  var selectDate = deliveryDate.val();
  if(mode == 1){
    console.log(correctDate);
    var checkDateLabel = correctDate.includes(selectDate);
    if(checkDateLabel || selectDate == '指定なし' || selectDate == undefined){
      $('#submitLoader').addClass('open');
    }else{
      event.preventDefault();
      alert('最短配送日時は' + firstDay + 'となります。申し訳ございませんが、配送指定日を再度選択お願いします。');
    }
  }
}

function setShippingDay2(delay, mode){
  today.setDate(today.getDate() + 1);
  var todayY = today.getFullYear();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayW = today.getDay() % 7;
  var dayTime = today.getHours();
  var todayDate = todayM + '/' + todayD;
  if(todayDate){
    if($.inArray(todayDate,holiday) != -1){
      delay = delay + 1;
      setShippingDay2(delay, mode);
    }else{
      setDayDisplay(delay, mode);
    }
  }
}

function setShippingDay(mode){
  today.setDate(today.getDate() + testFlg);
  var dayTime = today.getHours();
  var todayW = today.getDay() % 7;
  if(dayTime < 10){ /* 10時までの注文の場合 */
    if(todayW == 0){ /* 日曜日の場合 */
      setShippingDay2(1,mode) /* 配送を月曜日にする*/
    }else if(todayW == 6){ /* 土曜日の場合*/
      setShippingDay2(2,mode); /* 配送を月曜日にする*/
    }else{ /*月~金曜日の注文の場合*/
      setShippingDay2(0,mode); /*当日に配送する*/
    }
  }else{ /* 10時以降の注文の場合 */
    if(todayW == 6){ /* 土曜日の場合*/
      setShippingDay2(2,mode);/* 配送を月曜日にする*/
    }else if(todayW == 5){ /* 金曜日の場合*/
			if(dayTime < 14){ /* 14時までの注文の場合 */
				setShippingDay2(0,mode);/* 当日に配送する*/
			}else{
				setShippingDay2(3,mode);/* 配送を月曜日にする*/
			}
    }else{ /*月~木曜日の注文の場合*/
      setShippingDay2(1,mode);/*翌日に配送する*/
    }
  }
}


function init(){
  $.each(target.find('.comp-admin-button input'), function(index) {
    $(this).on({
      'click': function() {
        setShippingDay(1);
      }
    });
  });

  setShippingDay(0);

}

init();

}

if (document.getElementById('cart')) {
cartOptionController($('article'));
}

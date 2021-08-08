$(function() {
  var optionState = '';
  function controllProductQuantity(target){
  var minusButton = [];
  var plusButton = [];
  var quantityInput = [];
  var reloadButton = [];
  var quantityNum;

  function controllQuantity(num, vector){
    quantityNum = quantityInput[num].val();
    if(vector == 1){
      quantityInput[num].attr('value', Number(quantityNum) + 1);
      reloadButton[num].click();
    }else{
      if(quantityNum != 1){
        quantityInput[num].attr('value', Number(quantityNum) - 1);
        reloadButton[num].click();
      }
    }
  }

  function init(){
    $.each(target.find('.bag_item'), function(index) {
      minusButton[index] = $(this).find('.minus');
      plusButton[index] = $(this).find('.plus');
      quantityInput[index] = $(this).find('input[type="number"]');
      reloadButton[index] = $(this).find('.reload_button');
      var optionItemTxt =  $(this).find('.product_variants').html();
      optionState = optionState + optionItemTxt + ',';
      minusButton[index].on({
        'click': function() {
          event.preventDefault();
          controllQuantity(index, -1);
        }
      });
      plusButton[index].on({
        'click': function() {
          event.preventDefault();
          controllQuantity(index, 1);
        }
      });
    });

    if(optionState.indexOf('熨斗') !=  -1){
      $('#noshi1').css({'display': 'block'});
      $('#noshi2').css({'display': 'block'});
    }else{
      $('#noshi1').remove();
      $('#noshi2').remove();
    }
    if(optionState.indexOf('メッセージ') !=  -1){
      $('#message1').css({'display': 'block'});
    }else{
      $('#message1').remove();
    }
    if(optionState.indexOf('熨斗') ==  -1 && optionState.indexOf('メッセージ') ==  -1){
      $('#giftOptionSection').remove();
    }else{
      $('#giftOptionSection').css({'display': 'block'});
    }
  }

  init();
}

if (document.getElementById('cart')) {
  controllProductQuantity($('#cartItem'));
}

function cartOptionController(target){
  var dayFlag = 0;
  var firstDay;
  var deliveryDateList = $('#deliveryDateList');
  var optionItem = [];
  var optionItemHeight = [];
  var optionItemLabel = [];
  var optionItemWrap = [];
  var finalPrice = $('#finalPrice').html();
  var priceCulc = finalPrice.replace(/,/g, '');
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
  var holiday = [/*2021年度*/ '7/22', '7/23','8/9','9/20','9/23', '11/3', '11/23','12/29', '12/30', '12/31',/*2022年度*/ '1/1', '1/2', '1/3', '1/10', '2/11', '2/23', '3/21', '4/29', '5/3', '5/4', '5/5'];
  var setDayStatus = 0;
  var deliveryDate = $('#deliveryDate');
  var deliveryTime = $('#deliveryTime');
  var messageCard = $('textarea[name="messeage_card"]');

  /* アトリビュート保存用 */
  var cartAttributes = {{ cart | json }};
  var deliveryDateParam = cartAttributes.attributes['配送希望日:'];
  var deriveryTimeParam = cartAttributes.attributes['配送時間帯:'];


  function setMessageCardVal(){
    var messageTxt = messageCard.val();
    $('#messageCartContent').attr('value', messageTxt);
  }

  function getDayDisplay(day, mode, flg){
    var date = new Date();
    date.setDate(date.getDate() + day + testFlg);
    y  = date.getFullYear();
    m = date.getMonth() + 1;
    d = date.getDate();
    w = date.getDay() % 7;
    time = date.getHours();
    if(m < 10){ paramM = '0' + m }else{ paramM = m }
    if(d < 10){ paramD = '0' + d }else{ paramD = d }
    var dayParam = y + '-' + paramM + '-' + paramD;
    var dayDisplay = m + '月' + d + '日' + '(' + wd[w] + ')';
    if(mode == 0){
      deliveryDate.append('<option value="' + dayParam + '">' + dayDisplay + '</option>');
      $('#deliveryDate').val(deliveryDateParam);
      $('#deliveryTime').val(deriveryTimeParam);
    }else if(mode == 1){
      if(flg == 1){
        firstDay = dayDisplay;
      }
      correctDate.push(dayParam);
    }
  }

  function setDayDisplay(num, mode){
    var startSet = Number(num) + Number(2);
    for (var i= startSet; i<30; i++) {
      if(mode == 1){
        dayFlag = dayFlag + 1;
      }
      getDayDisplay(i, mode, dayFlag);
    }
    if(mode == 1){
      var selectDate = deliveryDate.val();
      var checkDateLabel = correctDate.includes(selectDate);
      if(checkDateLabel){
        $('#submitLoader').addClass('open');
      }else{
        event.preventDefault();
        alert('最短配送日時は' + firstDay + 'となります。申し訳ございませんが、配送指定日を再度選択お願いします。');
      }
    }
  }

  function setShippingDay2(delay, mode){
    today.setDate(today.getDate() + delay);
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
        setShippingDay2(3,mode);/* 配送を月曜日にする*/
      }else{ /*月~木曜日の注文の場合*/
        setShippingDay2(1,mode);/*翌日に配送する*/
      }
    }
  }

  function setMessageCardVal(){
    var messageTxt = messageCard.val();
    $('#messageCartContent').attr('value', messageTxt);
  }

  function init(){
    if(priceCulc > 5499){
      $('#shippingPrice').html('送料無料');
    }else if(optionState.indexOf('定期') == 1){
      $('#shippingPrice').html('送料無料');
    }else{
      var shippingTerm = Number(5500) - Number(priceCulc);
      $('#shippingPrice').html('<span class="amount_price">660円</span>(税込)');
      $('#shippingFree').html('※あと' + shippingTerm.toLocaleString() + '円で送料無料')
    }
    deliveryTime.on({
      'change': function() {
        var timeValue =  $(this).val();
        $('#delivery-time').val(timeValue);
        setMessageCardVal();
      }
    });
    $.each(target.find('.comp-submit-button input'), function(index) {
      $(this).on({
        'click': function() {
          setShippingDay(1);
          setMessageCardVal();
        }
      });
    });
    messageCard.on({
      'keyup': function() {
        setMessageCardVal();
      },
      'blur': function(){
        setMessageCardVal();
      },
      'change': function(){
        setMessageCardVal();
      }
    });

    setShippingDay(0);


    $.each(target.find('.option_item'), function(index) {
      optionItem[index] = $(this);
      optionItemLabel[index] = $(this).find('label');
      optionItemHeight[index] = optionItemLabel[index].outerHeight();
      $(this).css({'height': optionItemLabel[index].outerHeight() + 'px'});
      optionItemWrap[index] = $(this).find('.input_wrap').outerHeight();
      optionItemLabel[index].on({
        'click': function() {
          if($(this).find('input[type=checkbox]:checked').val() == 'true'){
            optionItem[index].css({height: optionItemHeight[index] + optionItemWrap[index] + 15 + 'px'});
          }else{
            optionItem[index].css({height: optionItemHeight[index] + 'px'});
          }
        }
      });
    });
  }

  init();

}

if (document.getElementById('cart')) {
  cartOptionController($('article'));
}

  function setCategoryName(){
    var domain = 'https://' + location.host;
    var upSellState = $('#upsellSection').text().length;
    var cartItem = $('#cartItem');
    var cartItemLength = 0;
    var cartItemCategory = [];
    var linkURL = [];
    var linkURLCart = [];
    var targetDom = [];
    var setCategory = 0;

    function ajaxLoad(){
      var upsellSection = $('#upsellSection');
      upsellSection.find(".rktheme-grid-item").each(function(index) {
        linkURL[index] = $(this).find('.rktheme-product-image-wrap').attr('href').split("products/").slice(-1)[0];
        targetDom[index] = $(this).find('.rktheme-product-details');
      });
      cartItem.find(".bag_item").each(function(index) {
        var linkHref = $(this).find('.item_img a').attr('href').split("products/").slice(-1)[0];
        linkURLCart[index] = linkHref.split("?")[0];
        cartItemCategory[index] = $(this).find('.category');
        cartItemLength = cartItemLength + 1;
      });
      $.ajax({
        url: domain + '/collections/ajax',
        cache: false,
        dataType: 'html',
        success: function(html) {
            var product_num = 40; //抜き出したい商品の数
            var prop = [];
            var category = [];
            $.each($(html).find('.item_box'), function(index) {
              prop[index] = $(this).attr('id');
              category[index] = $(this).find('.cat_ttl .ja');
              for (var i=0; i<4; i++) {
                if (prop[index] == linkURL[i]){
                  targetDom[i].prepend(category[index]);
                };
              }
              for (var j=0; j< cartItemLength; j++) {
                if(prop[index] == linkURLCart[j]){
                  cartItemCategory[j].text('');
                  cartItemCategory[j].prepend(category[index]);
                }
              }
            });
            if (document.getElementById('relatedSlider')) {
              relatedSlider();
            }
        }
      });
    }

    setInterval(function(){
      var upSellStateNew = $('#upsellSection').text().length;
      if(upSellState != upSellStateNew && setCategory == 0){
        ajaxLoad();
        setCategory = 1;
      }
    },2000);
  }

  setCategoryName();

  function setHistoryBackLink(){
    var ref = document.referrer;
    if ( ref.match(/collections/)) {

    }else if(ref.match(/products/)){

    }else{
      $('#customer_logout_link').attr('href', '/');
    }
  }

  setHistoryBackLink();

});

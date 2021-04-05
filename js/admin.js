$(function() {

  function cartOptionController(target){
    var optionItem = [];
    var optionItemHeight = [];
    var optionItemLabel = [];
    var optionItemWrap = [];
    var finalPrice = $('#finalPrice').html();
    var priceCulc = finalPrice.replace(/,/g, '');
    var today = new Date();
    var y;
    var m;
    var paramM;
    var d;
    var paramD;
    var w;
    var paramW;
    var wd = ['日', '月', '火', '水', '木', '金', '土'];
    var deliveryDate = $('#deliveryDate');
    var deliveryTime = $('#deliveryTime');
    var messageCard = $('textarea[name="messeage_card"]');
    var memoWrap = $('textarea[name="memo_wrap"]');
    var noshiType = $('input[name="noshi_type"]');
    var noshiName = $('input[name="noshi_name"]');
    var setValue;

    function getSpecialInstruction(){
      setValue = '';
      if(noshiType.val().length > 1) {
        setValue = setValue + '【熨斗の種類】' + noshiType.val();
      }
      if(noshiName.val().length > 1) {
        setValue = setValue + '【熨斗の名入れ】' + noshiName.val();
      }
      if(messageCard.val().length > 1) {
        setValue = setValue + '【メッセージカードの内容】' + messageCard.val();
      }
      if(memoWrap.val().length > 1) {
        setValue = setValue + '【備考】' + memoWrap.val();
      }

      console.log(setValue);
    }

    function setSpecialInstruction(){
      getSpecialInstruction();
      $('textarea[name="note"]').val(setValue);
    }

    function getDayDisplay(day){
      var date = new Date();
      date.setDate(date.getDate() + day);
      y  = date.getFullYear();
      m = date.getMonth() + 1;
      d = date.getDate();
      w = date.getDay() % 7;
      if(m < 10){ paramM = '0' + m }else{ paramM = m }
      if(d < 10){ paramD = '0' + d }else{ paramD = d }
      var dayParam = y + '-' + paramM + '-' + paramD;
      var dayDisplay = m + '月' + d + '日' + '(' + wd[w] + ')';
      deliveryDate.append('<option value="' + dayParam + '">' + dayDisplay + '</option>');
    }

    function setDayDisplay(){
      for (var i=0; i<14; i++) {
        getDayDisplay(i);
      }
      deliveryDate.on({
        'change': function() {
          var dateValue =  $(this).val();
          if(dateValue.length > 1){
            $('input:radio[name="attributes[配送日の指定]"]').val(["指定する"]);
            $('input:radio[name="attributes[配送日の指定]"]:checked').val(dateValue);
            $('#delivery-date').val(dateValue);
          }else{
            $('input:radio[name="attributes[配送日の指定]"]').val(["なし"]);
            $('input:radio[name="attributes[配送日の指定]"]:checked').click();
          }
        }
      });
    }

    function init(){
      if(priceCulc > 5499){
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
        }
      });
      memoWrap.on({
        'keyup': function() {
          setSpecialInstruction();
        }
      });
      messageCard.on({
        'keyup': function() {
          setSpecialInstruction();
        }
      });
      noshiType.on({
        'keyup': function() {
          setSpecialInstruction();
        }
      });
      noshiName.on({
        'keyup': function() {
          setSpecialInstruction();
        }
      });

      $.each(target.find('.option_item'), function(index) {
        optionItem[index] = $(this);
        optionItemHeight[index] = $(this).outerHeight();
        optionItemLabel[index] = $(this).find('label');
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

      setDayDisplay();
    }

    init();

  }

  if (document.getElementById('cart')) {
    cartOptionController($('article'));
  }

  function controllProductQuantity(target){
  var minusButton = [];
  var plusButton = [];
  var quantityInput = [];
  var reloadButton = [];
  var quantityNum;

  function controllQuantity(num, vector){
    quantityNum = quantityInput[num].val();
    console.log(vector);
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
  }

  init();
}

if (document.getElementById('cart')) {
  controllProductQuantity($('#cartItem'));
}
});

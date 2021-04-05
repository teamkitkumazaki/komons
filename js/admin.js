$(function() {

  function cartOptionController(target){
    var optionItem = [];
    var optionItemHeight = [];
    var optionItemLabel = [];
    var optionItemWrap = [];
    var deliveryDate = $('#deliveryDate');
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
    console.log('getDay:' + w);
    var wd = ['日', '月', '火', '水', '木', '金', '土'];

    function getDayDisplay(day){
      var date = new Date();
      date.setDate(date.getDate() + day);
      y  = date.getFullYear();
      m = date.getMonth() + 1;
      d = date.getDate();
      w = date.getDay() % 7;
      console.log(m + '月' + d + '日' + '(' + wd[w] + ')');
      if(m < 10){ paramM = '0' + m }else{ paramM = m }
      if(d < 10){ paramD = '0' + d }else{ paramD = d }
      var dayParam = y + '/' + paramM + '/' + paramD;
      var dayDisplay = m + '月' + d + '日' + '(' + wd[w] + ')';
      deliveryDate.append('<option value="' + dayParam + '">' + dayDisplay + '</option>');
    }

    function setDayDisplay(){
      for (var i=0; i<14; i++) {
        getDayDisplay(i);
      }
    }

    function init(){
      if(priceCulc > 5499){
        $('#shippingPrice').html('送料無料');
      }else{
        var shippingTerm = Number(5500) - Number(priceCulc);
        $('#shippingPrice').html('<span class="amount_price">660円</span>(税込)');
        $('#shippingFree').html('※あと' + shippingTerm.toLocaleString() + '円で送料無料')
      }
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

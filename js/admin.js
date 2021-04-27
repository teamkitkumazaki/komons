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

    console.log('optionState:' + optionState);
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

    function setMessageCardVal(){
      var messageTxt = messageCard.val();
      console.log(messageTxt);
      $('#messageCartContent').attr('value', messageTxt);
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
      for (var i=5; i<16; i++) {
        getDayDisplay(i);
      }
    }

    function init(){
      console.log('priceCulc:' + priceCulc);
      if(priceCulc > 5499){
        console.log('pattern1')
        $('#shippingPrice').html('送料無料');
      }else if(optionState.indexOf('定期') == 1){
        console.log('pattern3')
        $('#shippingPrice').html('送料無料');
      }else{
        console.log('pattern2')
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
      messageCard.on({
        'keyup': function() {
          setMessageCardVal();
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
        console.log(index + ':' + linkHref.split("?")[0]);
        linkURLCart[index] = linkHref.split("?")[0];
        cartItemCategory[index] = $(this).find('.category');
        cartItemLength = cartItemLength + 1;
      });
      $.ajax({
        url: domain + '/collections/ajax',
        cache: false,
        dataType: 'html',
        success: function(html) {
            console.log('success!');
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
                  console.log('j:' + j);
                  cartItemCategory[j].text('');
                  cartItemCategory[j].prepend(category[index]);
                }
              }
            });
            if (document.getElementById('relatedSlider')) {
              console.log('slick!')
              relatedSlider();
            }
        }
      });
    }

    setInterval(function(){
      var upSellStateNew = $('#upsellSection').text().length;
      if(upSellState != upSellStateNew && setCategory == 0){
        console.log('update!');
        ajaxLoad();
        setCategory = 1;
      }
    },2000);
  }

  setCategoryName();

  function setHistoryBackLink(){
    var ref = document.referrer;
    console.log('ref:' + ref);
    if ( ref.match(/collections/)) {

    }else if(ref.match(/products/)){

    }else{
      $('#customer_logout_link').attr('href', '/');
    }
  }

  setHistoryBackLink();


  function loadingSubmit(target){

    function init(){
      $.each(target.find('.comp-submit-button input'), function(index) {
        $(this).on({
          'click': function() {
            $('#submitLoader').addClass('open');
          }
        });
      });
    }

    init();

  }

  loadingSubmit($('article'));


});

$(function() {

  function backupProperty(target) {
    console.log('backupProperty');
    var submitButton = $('.checkout_button');
    var productList = '';

    function processOrderContent() {
      var noshiType = target.find("input[type=radio]:checked").val();
      var noshiOmote = target.find("#noshiType").val();
      var noshiName = target.find('#noshiName').val();
      var deliveryDate = target.find("#deliveryDateBox").val();
      var deliveryTime = target.find("#deliveryTime").val();
      var note = target.find('#CartSpecialInstructions').val();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5n5p-JgSmMrWRXVMTklprxBjbYWkgQshyFbepmSDa2Pesdg/formResponse",
        data: {
          "entry.377561598": productList, // 商品
          "entry.1605683860": noshiType, // 熨斗の種類
          "entry.988340836": noshiOmote, // 熨斗の表書き
          "entry.244598205": noshiName, // 熨斗の名入れ
          "entry.1818300244": deliveryDate, // お届け希望日程
          "entry.445062178": deliveryTime, // お届け希望時間
          "entry.1439783272": note, // 備考欄
        },
        type: "POST",
        dataType: "xml",
      }).done(function(){
        submitButton.attr('type','submit');
        submitButton.click();
      }).fail(function(){
        submitButton.attr('type','submit');
        submitButton.click();
      });
    }

    function init() {
      $('#cartItem').find(".links").each(function() {
        productList = productList + $(this).text() + ',';
      });
      console.log('productList:' + productList);
      submitButton.on({
        'click': function() {
          console.log($(this).attr('type'));
          if($(this).attr('type') == 'button'){
            console.log('click!');
            $('#submitLoader').addClass('open');
            processOrderContent();
          }
        }
      })
    }

    init();

  };

  backupProperty($('#cartSubmit'));

});

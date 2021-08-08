var parentWrap = window.parent.document; /* iframeから親ドキュメント(チェックアウト画面を指定)*/
/* 「次回のためこの情報を保存する」をデフォルトでチェック状態にする */
var rememberCheck = parentWrap.getElementById('checkout_remember_me');
if(rememberCheck != null){
  rememberCheck.setAttribute('checked', 'checked');
}

/* 決済方法欄からAmazon Payの表記を消す*/
var elems = parentWrap.querySelectorAll('[data-gateway-name]');
for (var i = 0; i < elems.length; i++) {
  if(elems[i].getAttribute('data-gateway-name') == 'amazon_pay')
    elems[i].remove();
}

/* 代引き決済手数料の表記 */
var inputDOM = parentWrap.querySelectorAll('.input-radio');
var subtotalWrap = parentWrap.querySelector('.total-line-table__tbody');
var subtotalContent = subtotalWrap.innerHTML;
var taxDisplay = parentWrap.querySelector('.payment-due-label__taxes span');
var taxPrice = taxDisplay.getAttribute('data-checkout-total-taxes-target');
var amountPrice = parentWrap.querySelector('.payment-due__price');
var amountPriceDisplay = amountPrice.getAttribute('data-checkout-payment-due-target');

for (var i = 0; i < inputDOM.length; i++) {
  console.log(inputDOM[i].getAttribute('value'));
  inputDOM[i].addEventListener("change", checkPaymentWay, false);
}

function checkPaymentWay(){
  var paymentWay = this.getAttribute('value');
  if(paymentWay == '64595198146'){
    var codPriceWrap = '<tr class="total-line total-line--shipping"><th class="total-line__name" scope="row"><span>代引手数料</span></th><td class="total-line__price"><span class="skeleton-while-loading order-summary__emphasis" data-checkout-total-shipping-target="66000">￥330</span></td></tr>'
    subtotalWrap.innerHTML = subtotalContent + codPriceWrap;
    var taxPriceNew = taxPrice / 100;
    taxPriceNew = taxPriceNew + 30;
    var amountPriceNew = amountPriceDisplay / 100;
    amountPriceNew = amountPriceNew + 330;
    taxDisplay.innerHTML = '¥' + taxPriceNew.toLocaleString();
    amountPrice.innerHTML = '¥' + amountPriceNew.toLocaleString();
  }else if(paymentWay == '62885691586'){
    subtotalWrap.innerHTML = subtotalContent;
    var taxPriceOld = taxPrice / 100;
    taxDisplay.innerHTML = '¥' + taxPriceOld.toLocaleString();
    var amountPriceOld = amountPriceDisplay / 100;
    amountPrice.innerHTML = '¥' + amountPriceOld.toLocaleString();
  }
}

/* アトリビュートの値を取得・処理 */

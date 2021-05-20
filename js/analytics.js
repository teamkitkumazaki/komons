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

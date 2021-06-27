<style>
.icon-svg{display: none;}
.map{display: none;}
.display-table .content-box__row{border-top: 0px;}
.sns_wrap ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
}
.sns_wrap ul li{
  width: 30px;
  margin-right: 7px;
}
.sns_wrap ul li:nth-last-of-type(1){
  margin-right: 0px;
}
.sns_wrap ul li a{
  transition: opacity .3s;
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  border: solid .6px #00381f;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 14px;
}
.sns_wrap ul li a.line{
  background-size: 24px;
}
</style>
<script type="text/javascript" src="https://cdn.shopify.com/s/files/1/0536/9544/7234/t/2/assets/jquery-3.3.1.min.js" charset="UTF-8"></script>
<script>
$(function() {
    function checkoutSet(){
      var i = 0;
      var attributeBox = [];
      var checkoutNote;
      var cartAttribute;
      var note = '{{ checkout.note }}';
      var paymentMethod = $('.payment-method-list__item__info').text();
      var attributeLength = 0;
      var totelPrice = '{{ checkout.total_price | money_without_currency }}';
      var taxPrice = '{{ checkout.tax_price | money_without_currency }}'
      $('#main-header').html('ご注文頂きありがとうございます。');

      function addCODPrice(){
        var plusCOD = Number(totelPrice.replace(/,/g, '')) + Number(330);
        var plusCODTax = Number(taxPrice.replace(/,/g, '')) + Number(30);
        $('.total-line-table__tbody').append('<tr class="total-line total-line--shipping"><th class="total-line__name" scope="row"><span>代引手数料</span></th><td class="total-line__price"><span class="skeleton-while-loading order-summary__emphasis" data-checkout-total-shipping-target="66000">￥330</span></td></tr>');
        $('.payment-due__price').text('¥' + plusCOD.toLocaleString());
        $('.payment-due-label__taxes span').text('¥' + plusCODTax.toLocaleString());
      }

      function addCartNoteDisplay(){
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>備考</h2></div><!-- content-box --><div class="content-box__row"><div class="section__content"><p>' + note + '</p></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');
      }

      function addCartAttributeDisplay(e, num){
        var splitText = e.split(':')
        console.log(splitText);
        if(num == 0){
          cartAttribute.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
        }else if(num == 1){
          cartAttribute2.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
        }else if(num == 2){
          giftAttribute.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
        }else if(num == 3){
          giftAttribute2.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
        }else{
          giftAttribute3.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
        }
      }

      function setContactLink(){
        var checkoutNote = '{{ checkout.note }}';
        var targetLink = $('.step__footer__info').find('a');
        targetLink.attr('href', 'https://journal.komons-japan.com/contact');
        targetLink.attr('target', '_blank');
      }

      function init(){
        {% for item in checkout.attributes %}
          attributeLength = attributeLength + 1;
        {% endfor %}
        console.log('attributeLength:' + attributeLength);
        setContactLink();
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>配送情報</h2></div><div class="content-box__row"><div class="section__content"><div class="section__content__column section__content__column--half"><div id="cartAttribute01" class="text-container"></div></div><!-- section__content__column --><div class="section__content__column section__content__column--half"><div id="cartAttribute02" class="text-container"></div></div><!-- section__content__column --></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');
        if(attributeLength > 2){
          $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>備考・ギフトオプション</h2></div><div class="content-box__row"><div class="section__content"><div class="section__content__column section__content__column--half"><div id="giftAttribute01" class="text-container"></div></div><!-- section__content__column --><div class="section__content__column section__content__column--half"><div id="giftAttribute02" class="text-container"></div></div><!-- section__content__column --></div><!-- section__content --><div class="section__content" style="margin-top: 2em"><div id="giftAttribute03" class="text-container"></div></div></div><!-- content-box__row --></div><!-- content-box -->');
        }
        cartAttribute = $('#cartAttribute01');
        cartAttribute2 = $('#cartAttribute02');
        giftAttribute = $('#giftAttribute01');
        giftAttribute2 = $('#giftAttribute02');
        giftAttribute3 = $('#giftAttribute03');
        commentMemo = $('#commentMemo');
        {% for item in checkout.attributes %}
          console.log('attributeBox[' + i + '] = {{ item }}');
          attributeBox[i] = '{{ item }}';
          addCartAttributeDisplay(attributeBox[i], i);
          i = i + 1;
        {% endfor %}

        if(note != undefined && note.length > 1){
          addCartNoteDisplay();
        }
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>マイページ・会員登録</h2></div><!-- content-box --><div class="content-box__row"><div class="section__content"><p style="display:block; margin-bottom: 5px;">▼注文内容・履歴の確認はこちらから</p><a href="/account" style="display: block; margin-bottom: 15px;">マイページ(アカウントをお持ちの方)</a><span class="register_ttl" style="display:block; margin-bottom: 5px;">▼アカウントをお持ちでない方は</span><a href="/account/register" style="display: block;">アカウントの作成</a></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>公式SNSアカウント</h2><div class="os-step__special-description"></div></div><!-- content-box --><div class="content-box__row"><p class="os-step__description">商品についての情報や、新商品の販売などの最新情報をお届けしています。</p><div class="section__content"><div class="sns_wrap"><ul><li><a class="tw" href="https://business.facebook.com/komons.japan/" target="_blank" style="background-image: url(https://cdn.shopify.com/s/files/1/0536/9544/7234/files/tw_icon_8bb48353-f5e2-4860-a354-16f715f99236.png?v=1623519333)"></a></li><li><a class="fb" href="https://business.facebook.com/komons.japan/" target="_blank" style="background-image: url(https://cdn.shopify.com/s/files/1/0536/9544/7234/files/fb_icon_747b4124-db39-4841-baaa-1dca0b54e6e9.png?v=1623519333)"></a></li><li><a class="ig" href="https://www.instagram.com/komons.jp/" target="_blank" style="background-image: url(https://cdn.shopify.com/s/files/1/0536/9544/7234/files/ig_icon_f4cb92c6-0f94-4a4a-84be-4b348afd04e5.png?v=1623519333)"></a></li><li><a class="line" href="https://line.me/R/ti/p/%40266mlpqk" target="_blank" style="background-image: url(https://cdn.shopify.com/s/files/1/0536/9544/7234/files/line_icon_99a97e0c-93fa-4466-ba66-d8bfd6c524ec.png?v=1623519333)"></a></li></ul></div></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');

        if(paymentMethod == '代金引換'){
          addCODPrice();
        }
      }

      init();

    }

    checkoutSet();

  });
</script>

{% if first_time_accessed %}
<span id="a8sales"></span>
<script src="https://statics.a8.net/a8sales/a8sales.js"></script>
<script>
a8sales({
"pid": "s00000020287001",
"order_number": "{{ order_number }}",
"currency": "{{ shop.currency }}",
"items": [
{
"code": "a8",
"price": {{ checkout.subtotal_price | money_without_currency | remove: ',' }},
"quantity": 1
},
],
"total_price": {{ checkout.subtotal_price | money_without_currency | remove: ',' }}
});
</script>
{% endif %}

<script type="text/javascript" src="https://cdn.shopify.com/s/files/1/0536/9544/7234/t/2/assets/jquery-3.3.1.min.js" charset="UTF-8"></script>
<script>
$(function() {
    /* checkout.attributes : {{ checkout.attributes }} */
    /* checkout.note : {{ checkout.note }}*/
    function checkoutSet(){
      var i = 0;
      var attributeBox = [];
      var checkoutNote;
      var cartAttribute;
      var note = '{{ checkout.note }}';
      var paymentMethod = $('.payment-method-list__item__info').text();
      var totelPrice = '{{ checkout.total_price | money_without_currency }}';
      var taxPrice = '{{ checkout.tax_price | money_without_currency }}'

      console.log('決済方法:' + paymentMethod);
      console.log('合計金額:' + totelPrice);
      console.log('消費税:' + taxPrice);

      function addCODPrice(){
        var plusCOD = Number(totelPrice.replace(/,/g, '')) + Number(330);
        var plusCODTax = Number(taxPrice.replace(/,/g, '')) + Number(30);
        $('.total-line-table__tbody').append('<tr class="total-line total-line--shipping"><th class="total-line__name" scope="row"><span>代引手数料</span></th><td class="total-line__price"><span class="skeleton-while-loading order-summary__emphasis" data-checkout-total-shipping-target="66000">￥330</span></td></tr>');
        $('.payment-due__price').text('¥' + plusCOD.toLocaleString());
        $('.payment-due-label__taxes span').text('¥' + plusCODTax.toLocaleString());
      }

      function addCartNoteDisplay(){
        commentMemo.append('<h3 class="heading-3">購入メモ</h3><p>' + note + '</p>');
      }

      function addCartAttributeDisplay(e, num){
        var splitText = e.split(':')
        console.log(splitText);
        cartAttribute.append('<h3 class="heading-3">' + splitText[0] + '</h3><p>' + splitText[1] + '</p>');
      }

      function setContactLink(){
        var checkoutNote = '{{ checkout.note }}';
        var targetLink = $('.step__footer__info').find('a');
        targetLink.attr('href', 'https://journal.komons-japan.com/contact');
        targetLink.attr('target', '_blank');
      }

      function init(){
        setContactLink();
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>配送・ギフトオプションなど</h2></div><div class="content-box__row"><div class="section__content"><div class="section__content__column section__content__column--half"><div id="cartAttribute" class="text-container"></div></div><!-- section__content__column --><div class="section__content__column section__content__column--half"><div id="commentMemo" class="text-container"></div></div><!-- section__content__column --></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');
        $('.step__sections').append('<div class="content-box"><div class="content-box__row content-box__row--no-border"><h2>マイページ・会員登録</h2></div><!-- content-box --><div class="content-box__row"><div class="section__content"><p style="display:block; margin-bottom: 5px;">▼注文内容・履歴の確認、定期購入の中断・再開などの変更はこちらから</p><a href="/account" style="display: block; margin-bottom: 15px;">マイページ(アカウントをお持ちの方)</a><span class="register_ttl" style="display:block; margin-bottom: 5px;">▼アカウントをお持ちでない方は</span><a href="/account/register" style="display: block;">アカウントの作成</a></div><!-- section__content --></div><!-- content-box__row --></div><!-- content-box -->');
        cartAttribute = $('#cartAttribute');
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
        if(paymentMethod == '代金引換'){
          addCODPrice();
        }
      }

      init();

    }

    checkoutSet();

  });
</script>

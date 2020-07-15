<script>
$(function() {
  function convSet(target){
    target.find('input[type="submit"]').each(function(index) {
      $(this).attr('onclick', 'gtag_report_conversion(); return false;');
    });
  }
  convSet($('article'));
});
</script>
<article id="itemDetail" class="dishwash">
  <section class="main" style="background-image: url(<{$product.ot1_url}>);">
    <div class="fil"></div>
    <{if $product.ot3_url != null }>
      <div class="sp_img">
        <img src="<{$product.ot3_url}>">
      </div>
    <{/if}>
  </section>
  <section class="cart_wrap01">
      <form id="cartIn" name="product_form" method="post" action="<{$cart_url}>">
    <div class="product_ex">
      <h2 class="product_cat"><{$product.simple_explain}></h2>
      <h1 class="prodcut_name"><{$product_name}></h1>
      <div id="excerpt" class="excerpt"></div>
    </div>
    <!-- product_ex -->
    <div class="product_detail">
      <div class="detail_block detail01">
        <{if $product.weight != null }>
          <span class="left_txt">内容量：<span class="weight"><{$product.weight}></span>ml</span>
        <{else}>
          <span class="left_txt">セット商品</span>
        <{/if}>
        <{if $product.soldout_flg == false}>
				<span class="right_txt stock">販売中</span>
        <{else}>
        <span class="right_txt stock">在庫切れ</span>
        <{/if}>
      </div>
      <div class="detail_block detail02">
        <span class="left_txt"><span>数量</span>：<input type="text" name="product_num" value="<{$product.init_num}>" class="product_init_num" /><span>個</span></span>
        <span class="right_txt">合計：<{$product.price}></span>
      </div>
    </div>
    <!-- product_detail -->
    <div class="cart_button">
      <{if $product.soldout_flg == false}>
      <{if $sid_name == "refill" || $sid_name == 'bottle-refill'}>
      <div class="cart_wrap">
        <div class="comp-flex-cart">
          <div class="cart_box">
            <div class="cart_item">
              <span class="button_wrap">
                <span class="title cart_in">通常購入する</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
              </span>
              <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
              <{$product.info}>
            </div>
          </div><!-- cart_box -->
          <div class="cart_box">
            <div id="subscriptionButton" class="cart_item">
              <span class="button_wrap">
                <span class="title subscription">定期購入する</span>
                <span class="sub_text">定価より15％OFF&amp;送料無料</span>
              </span>
              <a class="product_cart_btn colorme-repeat-checkout" href="https://colorme-repeat.jp/redirect/6d6f9f03/1624" data-user-slug="6d6f9f03" data-course-id="1624">購入する</a>
            </div>
            <div class="about_subscription">
              <a href="/?mode=f2#fqSubscription"><span>定期購入に関するFAQはこちら</span></a>
            </div>
          </div><!-- cart_box -->
        </div><!-- comp-flex-cart -->
      </div>
      <{else}>
      <div class="cart_wrap">
        <div class="comp-flex-cart no_flex">
          <div class="cart_box">
            <div class="cart_item">
              <span class="button_wrap">
          <span class="title cart_in">購入する</span>
              <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
              </span>
              <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
              <{$product.info}>
            </div>
          </div>
          <!-- cart_box -->
        </div>
      <{/if}>
      <{else}>
      <div class="cart_wrap">
        <{if $product.model == 'K0038' || $product.model == 'K0037'}>
        <div class="comp-waiting-button">
          <a href="https://journal.komons-japan.com/waiting-list/<{$product.model}>">
            <span class="title">再入荷リクエスト</span>
            <span class="desc">販売再開をメールでお知らせいたします</span>
          </a>
        </div>
        <{else}>
          <span class="sold_out">在庫切れ</span>
        <{/if}>
      </div>
      <{/if}>
    </div>
      </form>
  </section>
  <!-- cart_wrap01 -->
<{$product.explain}>
<section class="cart_wrap02">
  <div class="img_wrap">
    <img src="<{$product.ot2_url}>">
  </div>
  <div class="txt_wrap">
      <form name="product_form" method="post" action="<{$cart_url}>">
    <h3><{$product.simple_explain}></h3>
    <h2><{$product_name}></h2>
    <div class="product_detail">
      <div class="detail_block detail01">
        <{if $product.weight != null }>
          <span class="left_txt">内容量：<span class="weight"><{$product.weight}></span>ml</span>
        <{else}>
          <span class="left_txt">セット商品</span>
        <{/if}>
        <{if $product.soldout_flg == false}>
        <span class="right_txt stock">販売中</span>
        <{else}>
        <span class="right_txt stock">在庫切れ</span>
        <{/if}>
      </div>
      <div class="detail_block detail02">
        <span class="left_txt"><span>数量</span>：<input type="text" name="product_num" value="<{$product.init_num}>" class="product_init_num" /><span>個</span></span>
        <span class="right_txt">合計：<{$product.price}></span>
      </div>
    </div>
    <!-- product_detail -->
    <div class="cart_button">
      <{if $product.soldout_flg == false}>
      <{if $sid_name == "refill" || $sid_name == 'bottle-refill'}>
      <div class="cart_wrap">
        <div class="comp-flex-cart no_flex">
          <div class="cart_box">
          <div class="cart_item">
            <span class="button_wrap">
              <span class="title cart_in">通常購入する</span>
              <{if $product.price|replace:',':'' < 5000}>
              <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
              <{else}>
              <span class="sub_text">送料無料で配送致します</span>
              <{/if}>
            </span>
            <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
          </div>
        </div><!-- cart_box -->
        <div class="cart_box">
          <div id="subscriptionButton02" class="cart_item">
            <span class="button_wrap">
              <span class="title subscription">定期購入する</span>
              <span class="sub_text">定価より15％OFF&amp;送料無料</span>
            </span>
            <a class="product_cart_btn colorme-repeat-checkout" href="https://colorme-repeat.jp/redirect/6d6f9f03/1624" data-user-slug="6d6f9f03" data-course-id="1624">購入する</a>
          </div>
        </div><!-- cart_box -->
        </div><!-- comp-flex-cart -->
      </div>
      <{else}>
      <div class="cart_wrap">
        <div class="comp-flex-cart no_flex">
          <div class="cart_box">
            <div class="cart_item">
              <span class="button_wrap">
                <span class="title cart_in">通常購入する</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
              </span>
              <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
            </div>
          </div>
          <!-- cart_box -->
        </div>
      <{/if}>
      <{else}>
      <div class="cart_wrap">
        <{if $product.model == 'K0038' || $product.model == 'K0037'}>
        <div class="comp-waiting-button">
          <a href="https://journal.komons-japan.com/waiting-list/<{$product.model}>">
            <span class="title">再入荷リクエスト</span>
            <span class="desc">販売再開をメールでお知らせいたします</span>
          </a>
        </div>
        <{else}>
          <span class="sold_out">在庫切れ</span>
        <{/if}>
      </div>
      <{/if}>
    </form>
  </div>
</section>
<!-- cart_wrap02 -->
 <{if $together_product_num != 0}>
 <section class="related_item item_detail">
   <div class="detail_ttl">
     <h3><span class="en_ttl">Related Items</span><span class="jp_ttl">よく一緒に購入されている商品</span></h3>
   </div>
   <div id="productList" class="comp-related-product comp-product-list">
     <div id="relatedSlider" class="item_wrapper">
       <{section name=num loop=$together_product}>
       <div class="item_box slick-slide">
         <div class="img_wrap">
           <a href="?pid=134415561" style="background-image: url(<{$together_product[num].img_url}>)"></a>
         </div>
         <div class="txt_wrap">
           <div class="product_info">
             <span class="cat_ttl related"><{$together_product[num].s_expl}></span>
             <h3 class="prod_name">
               <{if $together_product[num].name|count_characters < 28}>
               <a class="normal"  href="<{$together_product[num].link_url}>"><{$together_product[num].name}></a>
               <{else}>
               <a class="small" href="<{$together_product[num].link_url}>"><{$together_product[num].name}></a>
               <{/if}>
             </h3>
           </div>
           <span class="product_detail"><{$together_product[num].teika}></span>
         </div>
         <div class="comp-list-cart-button related">
           <script type='text/javascript' src='https://komons-japan.shop-pro.jp/?mode=cartjs&pid=<{$together_product[num].id}>&style=normal_gray&name=n&img=n&expl=n&stock=n&price=n&inq=n&sk=n' charset='euc-jp'></script>
         </div>
       </div>
       <{/section}>
     </div>
   </div>
 </section><!-- related_item -->
 <{/if}>
 <section class="journal_wrap item_detail">
   <div class="section_ttl">
     <h2><span>Journal</span><font>Komonsについてもっと知る。</font></h2>
   </div>
    <div class="article_wrap">
 		<iframe class="autoHeight" src="https://journal.komons-japan.com/iframe-all" scrolling="no" frameborder="0"></iframe>
    </div>
  </section>
  <!-- journal_wrap -->
 <section class="section-back">
   <div class="section_back">
     <div class="comp-back-to-list">
       <div class="item_wrap">
         <a class="items" href="/?mode=cate&csid=0&cbid=2421809">
           <span class="txt_wrap">
             <span class="txt_en">Product List</span>
             <span class="txt_ja">通常商品一覧</span>
           </span>
         </a>
       </div>
       <div class="item_wrap">
         <a class="gifts" href="/?mode=f5">
           <span class="txt_wrap">
             <span class="txt_en">Gift Set</span>
             <span class="txt_ja">ギフト商品一覧</span>
           </span>
         </a>
       </div>
     </div>
   </div><!-- section_back -->
 </section>
</article>
<link rel="stylesheet" href="https://journal.komons-japan.com/wp-content/themes/komons-theme/slick/slick.css">
<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/js/conversion.js"></script>
<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/slick/slick.min.js" charset="UTF-8"></script>
<script>
$('#relatedSlider').slick({
  accessibility: false,
  infinite: false,
  dots: true,
  slidesToShow: 3,
  centerMode: true,
  autoplay: false,
  responsive: [{
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      centerPadding: '10%',
      centerMode: false,
    }
  }]
});
</script>

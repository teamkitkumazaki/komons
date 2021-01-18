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
  <{if $sid_name != "upcoming"}>
  <section id="main" class="main" style="background-image: url(<{$product.ot1_url}>);">
    <div class="fil"></div>
    <{if $product.ot3_url != null }>
      <div class="sp_img">
        <img src="<{$product.ot3_url}>">
      </div>
    <{/if}>
    <{else}>
    <section class="main upcoimng" style="background-image: url(<{$product.img_url}>);"></section>
    <{/if}>
  </section>
  <section id="wrap01" class="cart_wrap01">
      <form id="cartIn" name="product_form" method="post" action="<{$cart_url}>">
    <div class="product_ex">
      <{if $sid_name == "gift"}>
        <h2 class="product_cat"><span class="en">Gift Set</span><span class="ja">ギフトセット</span></h2>
      <{else}>
        <h2 class="product_cat"><{$product.simple_explain}></h2>
      <{/if}>
      <h1 class="prodcut_name"><{$product_name}></h1>
      <{if $sid_name == "upcoming"}>
      <span class="upcoming_tag">構想中</span>
      <{/if}>
      <div id="excerpt" class="excerpt"></div>
    </div>
    <{if $sid_name == "upcoming"}>
    <div class="comp-waiting-button upcoming_button">
      <a href="https://journal.komons-japan.com/waiting-list/<{$product.model}>">
        <span class="title">Waiting Listに登録</span>
        <span class="desc">発売時にメールにてお知らせいたします</span>
      </a>
    </div>
    <{/if}>
    <!-- product_ex -->
    <{if $sid_name == "upcoming"}>
    <hr class="upcoming_margin">
    <{/if}>
    <{if $sid_name != "upcoming"}>
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
    <{if $sid_name == "gift" && $product.model != "K0026"}>
    <div class="product_option_table">
      <{$option_table}>
    </div>
    <{/if}>
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
            <{if $sid_name != "gift" || $product.model == "K0026"}>
            <div class="cart_item">
              <span class="button_wrap">
                <span class="title cart_in">購入する</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
                </span>
              <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
              <{$product.info}>
            </div>
            <{else}>
            <div class="cart_item">
              <a id="optionSelect" href="javascript:void(0);" class="button_wrap option_select">
                <span class="title cart_in">オプションを選択して購入</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
                <{$product.info}>
              </a>
              <p class="cart_desc">※ギフトオプションに関する詳細は<a href="/?tid=1&mode=f6">こちら</a></p>
            </div>
              <{/if}>
          </div>
          <!-- cart_box -->
        </div>
      <{/if}>
      <{else}>
      <div class="cart_wrap">
        <{if $product.model == 'K0038' || $product.model == 'K0037' || $product.model == 'K0026' || $product.model == 'K0009'}>
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
    <{/if}>
      </form>
  </section>
  <!-- cart_wrap01 -->
<{$product.explain}>
<{if $sid_name != "upcoming"}>
<section id="wrap02" class="cart_wrap02">
  <div class="img_wrap">
    <img src="<{$product.ot2_url}>">
  </div>
  <div class="txt_wrap">
      <form name="product_form" method="post" action="<{$cart_url}>">
        <{if $sid_name == "gift"}>
          <h3><span>Gift Set</span>ギフトセット</h3>
        <{else}>
          <h3><{$product.simple_explain}></h3>
        <{/if}>
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
            <{if $sid_name != "gift" || $product.model == "K0026"}>
            <div class="cart_item">
              <span class="button_wrap">
                <span class="title cart_in">購入する</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
              </span>
              <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
            </div><!-- cart_item -->
            <{else}>
            <div class="cart_item">
              <a id="optionSelect02" href="javascript:void(0);" class="button_wrap option_select">
                <span class="title cart_in">オプションを選択して購入</span>
                <{if $product.price|replace:',':'' < 5000}>
                <span class="sub_text">5,000円以上(税別)お買い上げで送料無料</span>
                <{else}>
                <span class="sub_text">送料無料で配送致します</span>
                <{/if}>
              </a>
              <p class="cart_desc">※ギフトオプションに関する詳細は<a href="/?tid=1&mode=f6">こちら</a></p>
            </div>
            <{/if}>
          </div>
          <!-- cart_box -->
        </div>
      <{/if}>
      <{else}>
      <div class="cart_wrap">
        <{if $product.model == 'K0038' || $product.model == 'K0037' || $product.model == 'K0026' || $product.model == 'K0009'}>
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
<{/if}>
<!-- cart_wrap02 -->
 <{if $together_product_num != 0}>
 <section id="relation" class="related_item item_detail">
   <div class="detail_ttl">
     <h3><span class="en_ttl">Related Items</span><span class="jp_ttl">よく一緒に購入されている商品</span></h3>
   </div>
   <div id="productList" class="comp-related-product comp-product-list">
     <div id="relatedSlider" class="item_wrapper">
       <{section name=num loop=$together_product}>
       <div class="item_box slick-slide">
         <div class="img_wrap">
           <a href="<{$together_product[num].link_url}>" style="background-image: url(<{$together_product[num].img_url}>)"></a>
         </div>
         <div class="txt_wrap">
           <div class="product_info">
             <{if $together_product[num].option_price != null}>
             <span class="cat_ttl related"><span>Gift Set</span>ギフトセット</span>
             <{else}>
             <span class="cat_ttl related"><{$together_product[num].s_expl}></span>
             <{/if}>
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
         <{if $together_product[num].option_price != null}>
         <div class="comp-list-cart-button related wide">
           <a class="gift_detail_button" href="<{$together_product[num].link_url}>">
            <span>詳細を見る</span>
            </a>
          </div>
         <{else}>
         <div class="comp-list-cart-button related">
           <script type='text/javascript' src='https://komons-japan.shop-pro.jp/?mode=cartjs&pid=<{$together_product[num].id}>&style=normal_gray&name=n&img=n&expl=n&stock=n&price=n&inq=n&sk=n' charset='euc-jp'></script>
         </div>
         <{/if}>
       </div>
       <{/section}>
     </div>
   </div>
 </section><!-- related_item -->
 <{/if}>
 <section id="journal" class="journal_wrap item_detail">
   <div class="section_ttl">
     <h2><span>Journal</span><font>Komonsについてもっと知る。</font></h2>
   </div>
    <div class="article_wrap">
 		<iframe class="autoHeight" src="https://journal.komons-japan.com/iframe-all" scrolling="no" frameborder="0"></iframe>
    </div>
  </section>
  <!-- journal_wrap -->
 <section id="sectionBack" class="section-back">
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
<{if $sid_name == "onsale" || $sid_name == "refill" || $sid_name == "bottle-refill" || $sid_name == "preview" || $product.model == "K0026" || $product.model == "K0049"}>
<div id="fixedCartWrap" class="comp-fixed-cart-wrap">
  <div class="cart_inner">
    <div class="img_thumb">
      <img src="<{$product.ot2_url}>">
    </div>
    <div class="product_detail">
      <span class="category"><{$product.simple_explain}></span>
      <span class="item_name"><{$product_name}></span>
      <span class="price"><{$product.price}></span>
    </div>
    <div class="product_cart_button">
      <button id="fixedCartButton" class="fixed_cart_button" onclick="gtag_report_conversion(); return false;"><span>購入する</span></button>
    </div>
  </div>
</div>
<{/if}>
<{if $sid_name == "gift" && $product.model != "K0026" && $product.model != "K0049"}>
<div id="fixedCartWrap" class="comp-fixed-cart-wrap">
  <div class="cart_inner">
    <div class="img_thumb">
      <img src="<{$product.ot2_url}>">
    </div>
    <div class="product_detail">
      <span class="category"><span class="en">Gift Set</span>ギフトセット</span>
      <span class="item_name"><{$product_name}></span>
      <span class="price"><{$product.price}></span>
    </div>
    <div class="product_cart_button">
      <button id="fixedPopButton" class="fixed_cart_button"><span>オプションを選択</span></button>
    </div>
  </div>
</div>
<div id="optionPop" class="comp-gift-option-pop">
  <div id="popBg" class="pop_bg"></div>
  <form name="product_form" method="post" action="<{$cart_url}>">
  <div class="pop_flex">
    <div class="height_adjust"></div>
    <div class="pop_contents">
      <div id="popClose" class="pop_close"></div>
      <div class="contents_inner">
        <div class="item_thumb">
          <span class="pc_thumb" style="background-image: url(<{$product.ot1_url}>);"></span>
        </div>
          <p class="prod_name"><{$product_name}></p>
        <p class="pop_title">下記より有料オプションを<span>お選びいただけます</span></p>
        <{if $product.model == "K0027" || $product.model == "K0018"}>
        <p class="tesage_kami"><span>本商品は無償で手提げ紙袋をお付け可能です。</span><span>ご希望の方は購入手続きページの備考欄に<span class="sp_block">その旨ご記載ください。</span></span></p>
        <{/if}>
        <div class="option_select">
          <div class="option_item tesage">
            <label>
              <div class="img_wrap" style="background-image:url(https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/option_tesage_yv4i6v.jpg)"></div>
              <div class="input_wrap">
                <input type="checkbox" name="tesage" value="tesage">
                <span class="radio_checker"></span>
                <div class="option_name">
                  <span class="name">手提げ布バッグ</span>
                  <span class="price">+300円(税抜)</span>
                </div>
              </div>
            </label>
          </div>
          <div class="option_item nosi">
            <label>
              <div class="img_wrap" style="background-image:url(https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/option_mizuhiki_nl5vi0.jpg)"></div>
              <div class="input_wrap">
                <input type="checkbox" name="mizuhiki" value="mizuhiki">
                <span class="radio_checker"></span>
                <div class="option_name">
                  <span class="name">熨斗(のし)</span>
                  <span class="price">+100円(税抜)</span>
                </div>
              </div>
            </label>
            <p class="mizuhiki_desc">※水引の種類は、どのシーンのお祝い事にもお使いいただける「紅白梅結び」になります。</p>
          </div>
        </div><!-- option_select -->
        <div class="mizuhiki">
          <div class="mizuhiki_inner">
            <p class="pop_subtitle">熨斗の表書き</p>
            <div class="mizuhiki_option">
              <div class="option_item">
                <input id="mizu01" type="radio" name="mizuhiki_option" tesageAri="#0-0" tesageNashi="#0-1" value="表書き無し">
                <label for="mizu01">無地(表書きなし)</label>
              </div>
              <div class="option_item">
                <input id="mizu02" type="radio" name="mizuhiki_option" tesageAri="#1-2" tesageNashi="#1-3" value="御祝">
                <label for="mizu02">御祝</label>
              </div>
              <div class="option_item">
                <input id="mizu03" type="radio" name="mizuhiki_option" tesageAri="#2-4" tesageNashi="#2-5" value="内祝">
                <label for="mizu03">内祝</label>
              </div>
              <div class="option_item">
                <input id="mizu04" type="radio" name="mizuhiki_option" tesageAri="#3-6" tesageNashi="#3-7" value="御結婚祝">
                <label for="mizu04">御結婚祝</label>
              </div>
              <div class="option_item">
                <input id="mizu05" type="radio" name="mizuhiki_option" tesageAri="#4-8" tesageNashi="#4-9" value="御礼">
                <label for="mizu05">御礼</label>
              </div>
              <!--<div class="option_item">
                <input id="mizu07" type="radio" checked name="mizuhiki_option" tesageAri="#7-14" tesageNashi="#7-15" value="御歳暮">
                <label for="mizu07">御歳暮</label>
              </div> -->
              <div class="option_item">
                <input id="mizu06" type="radio" name="mizuhiki_option" tesageAri="#5-10" tesageNashi="#5-11" value="その他">
                <label for="mizu06">その他</label>
              </div>
              <div class="option_item" style="display: none;">
                <input id="mizu00" type="radio" checked name="mizuhiki_option" tesageAri="#6-12" tesageNashi="#6-13" value="無し">
                <label for="mizu00">無し</label>
              </div>
            </div><!-- mizuhiki_option -->
            <p class="mizuhiki_desc">※「その他」を選択した方は、表書きの内容を購入手続き画面の記入欄にご記入ください。ご記入のない場合は無地熨斗にて対応させていただきます。</p>
          </div>
        </div><!-- mizuhiki -->
      </div>
      <div class="fix_wrapper">
        <div class="option_fix">
          <button id="optionFix" class="option_fix_button" href="javascript:void(0);"><span>購入する</span></button>
          <input class="product_cart_btn product_addcart_btn" type="submit" value=" カートに入れる" onclick="gtag_report_conversion(); return false;">
          <{$product.info}>
        </div>
      </div>
    </div><!-- pop_contents -->
  </div><!-- pop_flex -->
  </form>
</div><!-- comp-gift-option-pop -->
<{/if}>
<link rel="stylesheet" href="https://journal.komons-japan.com/wp-content/themes/komons-theme/slick/slick.css">
<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/js/conversion.js"></script>
<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/slick/slick.min.js" charset="UTF-8"></script>
<{if $sid_name == "upcoming"}>
<script>
$('body').addClass('fixed2');
</script>
<{/if}>
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

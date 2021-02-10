<article id="itemGroupList" class="page-item-group-list">
  <section class="section-basic-item">
    <div class="section_inner">
      <div class="section_ttl search_ttl">
        <h1><span>Item List</span><font>“<{$search_keyword}>”の検索結果</font></h1>
        <div id="searchSubmit2" class="key_input">
          <input type="text" name="keyword" placeholder="キーワードを入れて検索" value="<{$search_keyword}>">
          <button class="search_submit">検索</button>
        </div>
      </div>
      <div class="comp-item-group">
        <{if $productlist_num != 0}>
        <{section name=num loop=$productlist}>
        <{if $productlist[num].model != "K0053-01"}>
        <div class="item_list">
          <div class="img_wrap">
            <a href="<{$productlist[num].link_url}>" style="background-image: url(<{$productlist[num].img_url}>)"></a>
          </div>
          <div class="txt_wrap">
            <a class="prod_name" href="<{$productlist[num].link_url}>">
              <{if $productlist[num].option_price != null || $productlist[num].model == "K0026" || $productlist[num].model == 'K0050'}>
              <span class="ja">ギフトセット</span>
              <{else}>
              <span class="ja"><{$productlist[num].s_expl}></span>
              <{/if}>
              <span class="en"><{$productlist[num].name}></span>
            </a>
            <span class="price"><{$productlist[num].regular_price}></span>
            <div class="button_wrap">
              <{if $productlist[num].option_price != null}>
              <a class="full" href="<{$productlist[num].link_url}>"><span>詳細を見る</span></a>
              <{else}>
              <a href="<{$productlist[num].link_url}>"><span>詳細を見る</span></a>
              <div class="comp-list-cart-button">
                <script type="text/javascript" src="https://komons-japan.shop-pro.jp/?mode=cartjs&amp;pid=<{$productlist[num].id}>&amp;style=normal_gray&amp;name=n&amp;img=n&amp;expl=n&amp;stock=n&amp;price=n&amp;inq=n&amp;sk=n" charset="euc-jp"></script>
              </div>
              <{/if}>
            </div>
            <p class="description">Free as a Birdの300mlボトルと500ml詰め替えパウチ（ボトル約1.7本分）の2点セット</p>
          </div>
        </div><!-- item_list -->
        <{/if}>
        <{/section}>
        <{else}>
        <p class="no_entry">該当する商品がありません。</p>
        <{/if}>
      </div><!-- comp-item-group -->
    </div><!-- section_inner -->
  </section>
  <section id="sectionBack" class="section-back">
  <div class="section_back">
   <div class="comp-back-to-list">
     <div class="item_wrap">
       <a class="items" href="/?mode=cate&amp;csid=0&amp;cbid=2421809">
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
 </div>
</article>
<script>
$(function() {
  $('body').addClass('fixed2');

  function keywordSearchControll(target){
    var wordInput = target.find('input[type="text"]');
    var submitButton = target.find('button');
    function init(){
      submitButton.on({
        'click': function() {
          var searchWord = wordInput.val();
          if(searchWord.length > 1 && searchWord != null){
            location.href = 'https://www.komons-japan.com/?mode=srh&keyword=' + searchWord;
          }
        }
      });
    };

    init();
  }

  keywordSearchControll($('#searchSubmit2'));

});
</script>

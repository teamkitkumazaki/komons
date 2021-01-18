<header>
  <div class="header_inner">
    <div id="humMenu">
      <a href="javascript:void(0);"></a>
    </div>
    <div id="hLogo">
      <a href="<{$home_url}>"></a>
    </div>
    <div id="hNavi">
      <div id="hLogin" class="nav_item">
        <a href="<{$view_myaccount_url}>">
          <{if $members_login_flg != true}>
            ログイン
           <{else}>
            マイページ
         <{/if}>
        </a>
      </div>
      <div id="hCart" class="nav_item">
        <a href="<{$view_cart_url}>">カート</a>
      </div>
    </div>
  </div>
  <!-- header_inner -->
</header>
<{include file = $file_name}>
<footer>
  <div class="footer_wrap">
    <div class="footer_menu">
      <div class="fmenu01 fmenu">
        <ul>
          <li><a href="/?mode=f1"><span>Concept</span></a></li>
          <li><a href="/?mode=srh"><span>Products</span></a></li>
          <!--<li><a href="aaaa"><span>Gift</span></a></li> -->
          <li><a href="https://journal.komons-japan.com/"><span>Journal</span></a></li>
      </div>
      <!-- fmenu -->
      <div class="fmenu02 fmenu">
        <ul><li><a href="/?tid=1&mode=f2#fqProduct" jump="#fqProduct">製品について</a></li>
          <li><a href="/?tid=1&mode=f2#fqPurchase" jump="#fqPurchase">ご購入に際して</a></li>
          <li><a href="/?tid=1&mode=f2#fqGift" jump="#fqGift">ギフトについて</a></li>
          <li><a href="/?tid=1&mode=f2#fqPurchase#fqDelivery" jump="#fqDelivery">配送について</a></li>
          <li><a href="/?mode=f2#fqCancel" jump="#fqCancel">キャンセルポリシー</a></li>
      </div>
      <!-- fmenu -->
      <div class="fmenu03 fmenu">
        <ul>
          <{if $members_login_flg != true}>
          <li><a href="<{$view_myaccount_url}>">ログイン</a></li>
           <{else}>
          <li><a href="<{$view_myaccount_url}>">マイページ</a></li>
          <li><a href="<{$members_login_url}>">ログアウト</a></li></li>
         <{/if}>
          <li><a href="<{$view_cart_url}>">カートを見る</a></li>
          <li><a href="<{$privacy_url}>">プライバシーポリシー</a></li>
          <li><a href="/?tid=1&mode=f2">FAQ</a></li>
          <li><a href="<{$sk_url}>">特定商取引法に基づく表記</a></li>
          <li><a href="https://unsungs-web.com/" target="_blank">運営会社</a></li>
          <li><a href="https://journal.komons-japan.com/contact">お問い合わせ</a></li>
        </ul>
      </div>
      <!-- fmenu -->
    </div>
    <div class="footer_sns">
      <div class="img_wrap">
        <a href="<{$home_url}>"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/footer_logo_v4o9g8.png" alt="komons"></a>
      </div>
      <ul>
        <li><a href="https://www.facebook.com/komons.japan" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/fb_icon_baav5a.png"></a></li>
        <li><a href="https://www.instagram.com/komons.jp/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/ig_icon_lbrgzr.png"></a></li>
        <li><a href="https://twitter.com/komons_jp" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/tw_icon_t4kisb.png"></a></li>
      </ul>
      <p class="copy_right">&#169; 2018 Komons.</p>
    </div>
  </div>
</footer>
<div id="slideMenuNew" class="comp-slide-menu">
  <button id="humClose" class="hum_close"></button>
  <div class="search_inner">
    <div class="content">
      <div class="content_left">
        <div class="pop_ttl">
          <span class="ttl_ja">商品を探す</span>
          <span class="ttl_en">Search Items</span>
        </div>
        <div class="pop_section">
          <div class="menu_item">
            <a class="parent" href="https://www.komons-japan.com/?mode=cate&csid=0&cbid=2421809">
              <span class="ja">商品一覧</span>
            </a>
            <div class="child">
              <a href="https://www.komons-japan.com/?mode=cate&cbid=2421809&csid=10">ボトル商品</a>
              <a href="https://www.komons-japan.com/?mode=cate&cbid=2421809&csid=11">レフィル商品</a>
              <a href="https://www.komons-japan.com/?mode=cate&cbid=2421809&csid=12">レフィル&amp;ボトルセット</a>
              <a href="https://www.komons-japan.com/?mode=cate&cbid=2421809&csid=9">UPCOMING商品</a>
            </div>
          </div>
          <div class="menu_item">
            <a class="parent" href="https://www.komons-japan.com/?mode=cate&cbid=2448903&csid=2">
              <span class="ja">ギフト商品一覧</span>
            </a>
          </div>
        </div><!-- pop_section -->
        <div class="pop_section">
          <div class="pop_subttl">カテゴリから探す</div>
          <div class="category">
            <a class="dish" href="https://www.komons-japan.com/?mode=grp&gid=2463431">
              <span class="en">Dish Wash</span>
              <span class="ja">食器用洗剤</span>
            </a>
            <a class="fabric" href="https://www.komons-japan.com/?mode=grp&gid=2463439">
              <span class="en">Fabric Mist</span>
              <span class="ja">除菌用消臭ミスト</span>
            </a>
            <a class="hand" href="https://www.komons-japan.com/?mode=grp&gid=2463435">
              <span class="en">Hand Wash</span>
              <span class="ja">ハンドソープ</span>
            </a>
            <a class="multi" href="https://www.komons-japan.com/?mode=grp&gid=2463438">
              <span class="en">Multi Clener</span>
              <span class="ja">マルチクリーナー</span>
            </a>
            <a class="bath" href="https://www.komons-japan.com/?mode=grp&gid=2463441">
              <span class="en">Bath Cleaner</span>
              <span class="ja">バスクリーナー</span>
            </a>
            <a class="toilet" href="https://www.komons-japan.com/?mode=grp&gid=2463440">
              <span class="en">Toilet Cleaner</span>
              <span class="ja">トイレクリーナー</span>
            </a>
          </div>
        </div><!-- pop_section -->
        <div class="pop_section">
          <div class="pop_subttl">キーワードから探す</div>
          <div class="key_input">
            <input type="text" name="keyword" placeholder="キーワードを入れて検索">
            <button id="searchSubmit" class="search_submit">検索</button>
          </div>
        </div><!-- pop_section -->
      </div><!-- content_left -->
      <div class="content_right">
        <div class="pop_ttl">
          <span class="ttl_ja">Komonsについて知る</span>
          <span class="ttl_en">About Komons</span>
        </div>
        <div class="pop_section b_none">
          <div class="menu_item">
            <a class="parent" href="https://www.komons-japan.com/?tid=1&mode=f1">
              <span class="ja">Komonsをつくるにあたって</span>
            </a>
          </div>
          <div class="menu_item">
            <a class="parent" href="https://www.komons-japan.com/?mode=f6">
              <span class="ja">ギフトサービスについて</span>
            </a>
          </div>
          <div class="menu_item">
            <a class="parent" href="https://journal.komons-japan.com/">
              <span class="ja">ジャーナル記事一覧</span>
            </a>
            <div class="child">
              <a href="https://journal.komons-japan.com/?tag=7">#Fans &amp; Users</a>
              <a href="https://journal.komons-japan.com/?tag=13">#イベント</a>
              <a href="https://journal.komons-japan.com/?tag=14">#キャンペーン</a>
              <a href="https://journal.komons-japan.com/?tag=9">#デザイン</a>
              <a href="https://journal.komons-japan.com/?tag=10">#モノづくり</a>
              <a href="https://journal.komons-japan.com/?tag=12">#原料</a>
              <a href="https://journal.komons-japan.com/?tag=8">#成分</a>
              <a href="https://journal.komons-japan.com/?tag=11">#香り</a>
            </div>
          </div>
          <div class="menu_item">
            <a class="parent" href="https://www.komons-japan.com/?mode=f2">
              <span class="ja">お買い物ガイド</span>
            </a>
            <div class="child">
              <a href="https://www.komons-japan.com/?tid=1&mode=f2#fqProduct">製品について</a>
              <a href="https://www.komons-japan.com/?tid=1&mode=f2#fqPurchase">ご購入に際して</a>
              <a href="https://www.komons-japan.com/?tid=1&mode=f2#fqGift">ギフトについて</a>
              <a href="https://www.komons-japan.com/?tid=1&mode=f2#fqDelivery">配送について</a>
              <a href="https://www.komons-japan.com/?mode=f2#fqCancel">キャンセルポリシー</a>
            </div>
          </div>
          <div class="menu_item">
            <a class="parent" href="https://journal.komons-japan.com/contact">
              <span class="ja">お問い合わせ</span>
            </a>
          </div>
        </div><!-- pop_section -->
        <div class="sns_wrap">
          <a class="tw" href="https://twitter.com/komons_jp" target="_blank"></a>
          <a class="fb" href="https://www.facebook.com/komons.japan" target="_blank"></a>
          <a class="ig" href="https://www.instagram.com/komons.jp/" target="_blank"></a>
        </div>
      </div><!-- content_right -->
    </div><!-- content -->
  </div><!-- search_inner -->
</div><!-- slideMenu comp-slide-menu -->
<!-- Twitter universal website tag code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o02n1');
twq('track','PageView');
</script>
<!-- End Twitter universal website tag code -->
<script type=”text/javascript”>
ga(‘require’, ‘linker’);
ga(‘linker:autoLink’, [‘shop-pro.jp’], false, true);
</script>

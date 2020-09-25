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
        <li><a href="https://business.facebook.com/komons.japan/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/tw_icon_t4kisb.png"></a></li>
        <li><a href="https://business.facebook.com/komons.japan/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/fb_icon_baav5a.png"></a></li>
        <li><a href="https://www.instagram.com/komons.jp/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/ig_icon_lbrgzr.png"></a></li>
      </ul>
      <p class="copy_right">&#169; 2018 Komons.</p>
    </div>
  </div>
</footer>
<div id="slideMenu">
  <div id="menuBg"></div>
  <div class="menu_wrap">
    <div id="closeBtn"><a href="javascript:void(0);"></a></div>
    <div class="menu_inner">
      <div class="hum_navi">
        <ul>
          <li><a href="<{$home_url}>"><span>Top</span>トップ</a></li>
          <li><a href="/?tid=1&mode=f1"><span>Concept</span>Komonsについて</a></li>
          <li><a href="/?mode=cate&csid=0&cbid=2421809"><span>Products</span>商品一覧</a></li>
          <li><a href="/?mode=cate&cbid=2448903&csid=2"><span>Gift</span>ギフトセット</a></li>
          <li><a href="https://journal.komons-japan.com/"><span>Journal</span>記事一覧</a></li>
          <li><a href="https://journal.komons-japan.com/contact"><span>Contact</span>お問い合わせ</a></li>
          <li><a href="/?mode=f2"><span>FAQ</span>よくある質問</a></li>
        </ul>
      </div>
      <!-- hum_navi -->
      <div class="menu_sns">
        <ul>
          <li><a href="https://business.facebook.com/komons.japan/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/tw_icon_t4kisb.png"></a></li>
          <li><a href="https://business.facebook.com/komons.japan/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/fb_icon_baav5a.png"></a></li>
          <li><a href="https://www.instagram.com/komons.jp/" target="_blank"><img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/common/ig_icon_lbrgzr.png"></a></li>
        </ul>
      </div>
      <!-- menu_sns -->
    </div>
    <!-- menu_inner -->
  </div>
  <!-- menu_wrap -->
</div>
<!-- slideMenu -->
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

<?php/*Template Name: 店舗一覧メール */?>
<!doctype html>
<?php
  $tokyo = SCF::get('tokyo', 1230);
  $kanto = SCF::get('kanto', 1230);
  $hokuriku = SCF::get('hokuriku', 1230);
  $chubu = SCF::get('chubu', 1230);
  $kansai = SCF::get('kansai', 1230);
  $kyusyu = SCF::get('kyusyu', 1230);
  $others = SCF::get('others', 1230);
;?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1">
    <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1">
    <meta name=”robots” content=”noindex , nofollow”>
    <title>コモンズのお取り扱い店舗 | Backstory of Komons Vol.03</title>
    <meta content="width=device-width, minimum-scale=1, maximum-scale=1" name="viewport"/>
    <style type="text/css">/* Mobile-specific Styles */
      body{
        font-family: "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "游明朝", YuMincho, "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", "Sawarabi Mincho", serif;
        color: #00381f;
      }
      @media only screen and (max-width: 660px) {
        table[class=w0], td[class=w0] { width: 0 !important; }
        table[class=w10], td[class=w10], img[class=w10] { width:10px !important; }
        table[class=w15], td[class=w15], img[class=w15] { width:5px !important; }
        table[class=w20], td[class=w20], img[class=w20] { width:10px !important; }
        table[class=w30], td[class=w30], img[class=w30] { width:10px !important; }
        table[class=w60], td[class=w60], img[class=w60] { width:10px !important; }
        table[class=w125], td[class=w125], img[class=w125] { width:80px !important; }
        table[class=w130], td[class=w130], img[class=w130] { width:55px !important; }
        table[class=w140], td[class=w140], img[class=w140] { width:90px !important; }
        table[class=w160], td[class=w160], img[class=w160] { width:180px !important; }
        table[class=w170], td[class=w170], img[class=w170] { width:100px !important; }
        table[class=w180], td[class=w180], img[class=w180] { width:70px !important; }
        table[class=w195], td[class=w195], img[class=w195] { width:80px !important; }
        table[class=w220], td[class=w220], img[class=w220] { width:80px !important; }
        table[class=w240], td[class=w240], img[class=w240] { width:180px !important; }
        table[class=w255], td[class=w255], img[class=w255] { width:185px !important; }
        table[class=w275], td[class=w275], img[class=w275] { width:135px !important; }
        table[class=w280], td[class=w280], img[class=w280] { width:135px !important; }
        table[class=w290], td[class=w290], img[class=w290] { width:135px !important; }
        table[class=w300], td[class=w300], img[class=w300] { width:140px !important; }
        table[class=w325], td[class=w325], img[class=w325] { width:95px !important; }
        table[class=w360], td[class=w360], img[class=w360] { width:140px !important; }
        table[class=w410], td[class=w410], img[class=w410] { width:180px !important; }
        table[class=w470], td[class=w470], img[class=w470] { width:200px !important; }
        table[class=w580], td[class=w580], img[class=w580] { width: 90vw !important; margin: 0 auto; }
        table[class=w600], td[class=w600], img[class=w600] { width:90vw !important; margin: 0 auto; }
        table[class=w640], td[class=w640], img[class=w640] { width:100vw !important; }
        table[class*=hide], td[class*=hide], img[class*=hide], p[class*=hide], span[class*=hide] { display:none !important; }
        table[class=h0], td[class=h0] { height: 0 !important; }
        #headline p { font-size: 30px !important; }
        .article-content, #left-sidebar{ -webkit-text-size-adjust: 90% !important; -ms-text-size-adjust: 90% !important; }
        .header-content, .footer-content-left {-webkit-text-size-adjust: 80% !important; -ms-text-size-adjust: 80% !important;}
        img { height: auto; line-height: 100%;}
      }
      /* Client-specific Styles */
      #outlook a { padding: 0; }      /* Force Outlook to provide a "view in browser" button. */
      body { width: 100% !important; }
      .ReadMsgBody { width: 100%; }
      .ExternalClass { width: 100%; display:block !important; } /* Force Hotmail to display emails at full width */
      /* Reset Styles */
      /* Add 100px so mobile switch bar doesn't cover street address. */
      body { background-color: #fff; margin: 0; padding: 0; }
      strong{font-weight: normal;}
      img { outline: none; text-decoration: none; display: block;}
      br, strong br, b br, em br, i br { line-height:100%; }
      h1 a, h2 a, h3 a, h4 a, h5 a, h6 a { color: blue !important; }
      h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active { color: red !important; }
      /* Preferably not the same color as the normal header link color.  There is limited support for psuedo classes in email clients, this was added just for good measure. */
      h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited { color: purple !important; }
      /* Preferably not the same color as the normal header link color. There is limited support for psuedo classes in email clients, this was added just for good measure. */
      table td, table tr { border-collapse: collapse; }
      .yshortcuts, .yshortcuts a, .yshortcuts a:link,.yshortcuts a:visited, .yshortcuts a:hover, .yshortcuts a span {
        color: black; text-decoration: none !important; border-bottom: none !important; background: none !important;
      }       /* Body text color for the New Yahoo.  This example sets the font of Yahoo's Shortcuts to black. */
      /* This most probably won't work in all email clients. Don't include code blocks in email. */
      code {
        white-space: normal;
        word-break: break-all;
      }
      #background-table { background-color: #dedede; }
      /* Webkit Elements */
      #top-bar { -webkit-font-smoothing: antialiased; color: #333333; }
      #top-bar a { font-weight: bold; color: #333333; text-decoration: none;}
      #footer { -webkit-font-smoothing: antialiased; }
      /* Fonts and Content */
      body, td { font-family: "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "游明朝", YuMincho, "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", "Sawarabi Mincho", serif; }
      .header-content, .footer-content-left, .footer-content-right { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; }
      /* Prevent Webkit and Windows Mobile platforms from changing default font sizes on header and footer. */
      .header-content { font-size: 12px; color: #ffffff; }
      .header-content a { font-weight: bold; color: #ffffff; text-decoration: none; }
      #headline p { color: #333333; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; font-size: 24px; text-align: left;  }
      #headline p a { color: #333333; text-decoration: none; }
      .article-title { font-size: 18px; line-height:24px; color: #19a9e5; font-weight:bold; margin-top:0px; margin-bottom:18px; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
      .article-title a { color: #333333; text-decoration: none; }
      .article-title.with-meta {margin-bottom: 0;}
      .article-meta { font-size: 13px; line-height: 20px; color: #ccc; font-weight: bold; margin-top: 0;}
      .article-content { font-size: 13px; line-height: 18px; color: #444444; margin-top: 0px; margin-bottom: 18px; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
      .article-content a { color: #2f82de; font-weight:bold; text-decoration:none; }
      .article-content img { max-width: 100% }
      .article-content ol, .article-content ul { margin-top:0px; margin-bottom:18px; margin-left:19px; padding:0; }
      .article-content li { font-size: 13px; line-height: 18px; color: #444444; }
      .article-content li a { color: #2f82de; text-decoration:underline; }
      .article-content p {margin-bottom: 15px;}
      .footer-content-left { font-size: 12px; line-height: 15px; color: #333333; margin-top: 0px; margin-bottom: 15px; }
      .footer-content-left a { color: #333333; font-weight: bold; text-decoration: none; }
      .footer-street-address { font-size: 12px; line-height: 15px; color: #ffffff; margin-top: 15px; margin-bottom: 15px; }
      .footer-street-address a { color: #ffffff; font-weight: bold; text-decoration: none; }
      .footer-content-right { font-size: 11px; line-height: 16px; color: #ffffff; margin-top: 0px; margin-bottom: 15px; }
      .footer-content-right a { color: #ffffff; font-weight: bold; text-decoration: none; }
      #footer { background-color: #ffffff; color: #ffffff; }
      #footer a { color: #ffffff; text-decoration: none;}
      #permission-reminder { white-space: normal; }
      #street-address { color: #ffffff; white-space: normal; }
      .recommend-title  { color: #19a9e5; text-decoration: none;font-size: 14px;line-height: 1.4;margin: 10px 0 5px; }
      .recommend-title a { color: #19a9e5; text-decoration: none; }
      .recommend-content { text-align: center;font-size: 13px; line-height: 18px; color: #444444; margin-top: 0px; margin-bottom: 18px;}
      #title-recommend { font-size: 18px; line-height:24px; color: #19a9e5; font-weight:bold; margin-top:0px; margin-bottom:18px; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
</style>
<!--[if gte mso 9]>
    <style _tmplitem="115" >
      .article-content ol, .article-content ul {
      margin: 0 0 0 24px;
      padding: 0;
      list-style-position: inside;
      }
    </style>
    <![endif]-->
    <?php wp_head(); ?>
  </head>
  <body>
    <table border="0" cellpadding="0" cellspacing="0" id="background-table" width="100%">
      <tbody>
        <tr>
          <td align="center" bgcolor="#ffffff">
            <table border="0" cellpadding="0" cellspacing="0" class="w640" style="margin:0;" width="640">
              <tbody>
                <tr>
                  <td align="center" bgcolor="#ffffff" class="w640" id="header" style="padding: 20px 0px 0;" width="640">
                    <div class="img_wrap" style="padding: 0 20px;">
                      <img class="logo" src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/header_logo.png?v=1621165398" width="100%"/>
                    </div>
                    <table border="0" cellpadding="0" cellspacing="0" class="w640" width="640">
                      <tbody>
                        <tr>
                          <td class="w600" width="600">
                            <div class="number" style="margin: 30px 20px; padding:15px 0; background: #f8f8f8; text-align: center;">                              <span style="color: #00381f; font-size: 20px; font-weight: normal; text-align: center; letter-spacing: 0.8px; text-indent: -0.1em;">Backstory of Komons</span>
                            </div>
                            <h1 style="margin: 0px 0px 30px; text-align: left; padding: 0px 20px; color: #00381f; font-size: 18px; font-weight: normal; letter-spacing: 0.5px; text-indent: -0.1em;">                              <span style="font-size: 14px; color: #00381f; font-weight: normal; text-align: center; letter-spacing: 0.5px; display: inline-block; padding-right: 10px;">Vol.03</span>コモンズの取り扱い店舗
                            </h1>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr id="simple-content-row">
                  <td bgcolor="#ffffff" class="w640" width="640">
                    <table border="0" cellpadding="0" cellspacing="0" class="w640" width="640">
                      <tbody>
                        <tr>
                          <td class="w20" width="20">
                            &nbsp;
                          </td>
                          <td class="w600" width="600">
                            <layout label="Text only">
                              <table border="0" cellpadding="0" cellspacing="0" class="w600" width="600">
                                <tbody>
                                  <tr>
                                    <td class="w600" height="15" width="600">
                                      <div style="margin-bottom: 30px;">
                                        <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/branding03.jpg?v=1621165474" style="display: block; margin: 0 auto;" width="100%"/>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="w600" width="600">
                                      <div class="main_txt_wrap" style="margin-top: 15px; margin-bottom: 50px;">
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          お客さまから「Komonsの商品を買えるお店はありますか？」というお問い合わせを多々頂きます。
                                        </p>
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          現在、Komonsは自社の公式オンラインストアを中心に販売しているので常時商品を購入いただけるお店はあまり多くありませんが、みなさまにご愛顧頂いているお陰で少しずつ取扱店舗が増えてきております。
                                        </p>
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          また、全国のホテルなどでも一部商品をアメニティとして客室においていただいております。
                                        </p>
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          以下に一部ですがご紹介させて頂きます。
                                        </p>
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          それぞれのお店ではKomonsの商品を手に取り、香りも実際に体験頂けます。
                                        </p>
                                        <p class="main_desc" style="font-size: 14px; line-height: 1.73; letter-spacing: 0.4px; color: #00381f; margin: 5px 0px 25px;">
                                          お近くにお越しの際は、ぜひお立ち寄りください。<br/>※店舗によってお取り扱い商品が異なります。事前に店舗までお問い合わせください。
                                        </p>
                                        <hr style="border: none; border-top: 1px solid #d8d8d8; margin-top: 40px; margin-bottom: 35px;"/>
                                        <p class="main_desc" style="font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">                                          <strong style="font-size: 16px; font-weight: normal;">お取り扱い店舗一覧</strong>
                                        </p>
                                        <p class="main_desc" style="font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px; background: #f1f1f1; padding: 10px 0; text-align: center;">                                          <strong style="font-size: 16px;">東京</strong>
                                        </p>
                                        <?php if (!empty($tokyo)) : ?>
                                          <div id="areaTokyo" class="store_list_wrap">
                                            <h3 class="area_ttl">東京都</h3>
                                          <?php foreach ($tokyo as $i) : ?>
                                            <a class="main_desc" href="<?= $i['google_map_tokyo'] ?>" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 10px;">
                                              <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607485774/journal/storelist/icon_house_gqdq1m.png" style="display: inline; margin-right: 10px; margin-bottom: -3px;" width="16"/><span><?= $i['shop_name_tokyo'] ?></span></a>
                                          <?php endforeach; ?>
                                        <?php endif; ?>
                                        <?php if (!empty($kanto)) : ?>
                                          <p class="main_desc" style="font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 40px 0 20px; background: #f1f1f1; padding: 10px 0; text-align: center;">                                     <strong style="font-size: 16px;">関東</strong>
                                          </p>
                                          <?php foreach ($kanto as $i) : ?>
                                            <a class="main_desc" href="<?= $i['google_map_kanto'] ?>" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 10px;">
                                              <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607485774/journal/storelist/icon_house_gqdq1m.png" style="display: inline; margin-right: 10px; margin-bottom: -3px;" width="16"/><span><?= $i['shop_name_kanto'] ?></span></a>
                                          <?php endforeach; ?>
                                        <?php endif; ?>
                                        <?php if (!empty($others)) : ?>
                                          <p class="main_desc" style="font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 40px 0 20px; background: #f1f1f1; padding: 10px 0; text-align: center;">                                          <strong style="font-size: 16px;">OTHER</strong>
                                          </p>
                                          <?php foreach ($others as $i) : ?>
                                            <a class="main_desc" href="<?= $i['google_map_others'] ?>" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 10px;">
                                              <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607485774/journal/storelist/icon_house_gqdq1m.png" style="display: inline; margin-right: 10px; margin-bottom: -3px;" width="16"/><span><?= $i['shop_name_others'] ?></span></a>
                                          <?php endforeach; ?>
                                        <?php endif; ?>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 30px 0 20px;">
                                          ※店舗によってお取り扱い商品が異なります。事前に店舗までお問い合わせください。
                                        </p>
                                        <hr style="border: none;border-top: 1px solid #d8d8d8; margin-top: 40px; margin-bottom: 35px;"/>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">
                                          今後もお取り扱い店舗やPOP-UPなどに関する情報は公式Instagram、Facebook, Twitterで随時発信していきますので、ぜひフォローお願いします。
                                        </p>
                                        <a class="main_desc" href="https://www.instagram.com/komons.jp/" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px; color: #00371f; margin: 5px 0 15px; ">
                                          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607486194/journal/storelist/icon_ig_kirgzs.png" style="display: inline-block; margin-right: 10px; margin-bottom: -3px;" width="18"/><span>Komons公式Instagram</span></a>
                                        <a class="main_desc" href="https://www.facebook.com/komons.japan" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px; color: #00371f; margin: 5px 0 15px; ">
                                          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607670135/journal/storelist/icon_fb_cpz5sd.png" style="display: inline-block; margin-right: 10px; margin-bottom: -3px;" width="18"/><span>Komons公式Facebook</span></a>
                                        <a class="main_desc" href="https://twitter.com/komons_jp" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px; color: #00371f; margin: 5px 0 15px;">
                                          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/v1607486194/journal/storelist/icon_tw_vsnu9n.png" style="display: inline-block; margin-right: 10px; margin-bottom: -3px;" width="18"/><span>Komons公式Twitter</span></a>
                                        <a class="main_desc" href="https://lin.ee/ID6naHI" style="display: flow-root; text-decoration: none; font-size: 14px;line-height: 1.73;letter-spacing: 0.4px; color: #00371f; margin: 5px 0 15px;">
                                          <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/icon_line_14468421-1dae-4d8e-9a8f-a3ed5ae1c3fb.png?v=1628447366" style="display: inline-block; margin-right: 10px; margin-bottom: -3px;" width="18"/><span>Komons公式LINE</span>
</a>
                                        <hr style="border: none;border-top: 1px solid #d8d8d8; margin-top: 40px; margin-bottom: 35px;"/>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">
                                          2018年夏から販売を開始したKomonsもおかげさまで少しずつ立ち上がり、生産の体制も整ってきました。
                                        </p>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">
                                          それに伴い今後は公式オンラインストアに加えて、Komonsの香りを実際に体験＆商品を手に取っていただける&rdquo;リアルでの場&rdquo;を全国に広げていきたい思っています。
                                        </p>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">
                                          日本各地でお店を運営されている方からの「うちのお店でKomonsを置きたい」といったご連絡や、ご愛顧いただいているお客様からの「私が好きなこのお店にKomonsをおいてほしい！」などのリクエストがございましたら、ぜひお気軽にお寄せください。
                                        </p>
                                        <p class="main_desc" style="  font-size: 14px;line-height: 1.73;letter-spacing: 0.4px;color: #00371f;margin: 5px 0 20px;">
                                          みなさまからのご連絡、お待ちしてます！
                                        </p>
                                        <a href="https://journal.komons-japan.com/contact?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="max-width: 300px;display:block;border: solid 1px #00381f;padding: 10px 0;text-align: center;color: #00381f;text-decoration: none; margin-top: 35px;"><span style="font-size: 16px;line-height: 1.73;letter-spacing: 0.3px;padding-right: 10px;">お問い合わせフォームはこちら</span>
                                          <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/link_arrow.png" style="display: inline;" width="25"/> </a>
                                        <div class="item_list" style="margin-top: 60px;">
                                          <div class="number" style="margin: 30px 0px; padding:15px 0; background: #f8f8f8; text-align: center;">                                            <span style="color: #00381f; font-size: 20px; font-weight: normal; text-align: center; letter-spacing: 0.8px; text-indent: -0.1em;">Item List</span>
                                          </div>
                                          <div class="item_flex" style="margin-bottom: 60px;">
                                            <div class="item_img" style="margin-bottom: 15px;">                                              <a href="https://komons-japan.com/products/k0002?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03">
                                                <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/products/thumb01_fa5bcb48-0b2b-4d39-96a4-3c64b59aabb3.jpg?v=1648100622&width=832" width="100%"/></a>
                                            </div>
                                            <div class="item_txt">
                                              <a class="item_name" href="https://komons-japan.com/products/k0002?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="display: block;font-weight:normal;text-decoration:none;margin-bottom:5px;font-size: 18px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">除菌消臭ミスト / Free as a Bird</a> <span class="item_price" style="display: block;margin-bottom:20px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">2,530円(税込)</span>
                                              <p class="item_desc" style="display: block;margin:5px 0 25px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">
                                                ソファーやベッド、お気に入りの衣類に。思わず深呼吸をしたくなるような、やさしい空気を届けます。ひと吹き、ふた吹き、鳥が戯れる木々の香りにつつまれる、除菌消臭ミスト。
                                              </p>
                                              <a class="item_link_button" href="https://komons-japan.com/products/k0002?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="width: 50%;display:block;border: solid 1px #00381f;padding: 7px 0;text-align: center;color: #00381f;text-decoration: none; "> <span style="font-size: 14px;line-height: 1.73;letter-spacing: 0.3px;padding-right: 5px;">詳細を見る</span>
                                                <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/link_arrow.png" style="display:inline;" width="25"/> </a>
                                            </div>
                                          </div><!-- item_flex -->
                                          <div class="item_flex" style="margin-bottom: 60px;">
                                            <div class="item_img" style="margin-bottom: 15px;">                                              <a href="https://komons-japan.com/products/k0003?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03">
                                                <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/products/thumb01_470b67da-993b-4d3c-939f-f67f0c067c1c.jpg?v=1648100617&width=832" width="100%"/></a>
                                            </div>
                                            <div class="item_txt">
                                              <a class="item_name" href="https://komons-japan.com/products/k0003?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="display: block;font-weight:normal;text-decoration:none;margin-bottom:5px;font-size: 18px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">ハンドソープ / I can hear music</a> <span class="item_price" style="display: block;margin-bottom:20px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">1,980円(税込)</span>
                                              <p class="item_desc" style="display: block;margin:5px 0 25px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">
                                                家に帰り、いちばん最初にする「手を洗う」という行為は、心も体もONからOFFへと切替えるスイッチ。手を洗うたびに気持ちの良いメロディが流れるような香りと手触りのハンドウォッシュを作りました。
                                              </p>
                                              <a class="item_link_button" href="https://komons-japan.com/products/k0003?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="width: 50%;display:block;border: solid 1px #00381f;padding: 7px 0;text-align: center;color: #00381f;text-decoration: none; "> <span style="font-size: 14px;line-height: 1.73;letter-spacing: 0.3px;padding-right: 5px;">詳細を見る</span>
                                                <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/link_arrow.png" style="display:inline;" width="25"/> </a>
                                            </div>
                                          </div>
                                          <div class="item_flex" style="margin-bottom: 60px;">
                                            <div class="item_img" style="margin-bottom: 15px;">                                              <a href="https://komons-japan.com/products/k0004?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03">
                                                <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/products/thumb01_97d4ecf0-f3fb-4d43-9c14-d34849b989e2.jpg?v=1648100639&width=832" width="100%"/></a>
                                            </div>
                                            <div class="item_txt">
                                              <a class="item_name" href="https://komons-japan.com/products/k0004?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="display: block;font-weight:normal;text-decoration:none;margin-bottom:5px;font-size: 18px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">マルチクリーナー / In a silent way</a> <span class="item_price" style="display: block;margin-bottom:20px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">2,530円(税込)</span>
                                              <p class="item_desc" style="display: block;margin:5px 0 25px;font-size: 14px;line-height: 1.6;letter-spacing: 0.4px;color: #00381f;">
                                                暮らす場所は、いつも清潔であってほしい。キッチンや洗面台、テーブルやフローリングや窓。清々しく、静かに、暮らしを支えてくれるものたちに。ほんのり香りが漂う、マルチクリーナーをつくりました。
                                              </p>
                                              <a class="item_link_button" href="https://komons-japan.com/products/k0004?utm_source=mailmag&amp;utm_medium=branding&amp;utm_campaign=branding03" style="width: 50%;display:block;border: solid 1px #00381f;padding: 7px 0;text-align: center;color: #00381f;text-decoration: none; "> <span style="font-size: 14px;line-height: 1.73;letter-spacing: 0.3px;padding-right: 5px;">詳細を見る</span>
                                                <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/link_arrow.png" style="display:inline;" width="25"/> </a>
                                            </div>
                                          </div>
                                        </div><!-- main_txt_wrap -->
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="w600" width="600">
                                      <div class="itemList" style="margin-top: 0px; padding-top: 40px; border-top: 1px solid #d8d8d8; margin-bottom: 50px;">
                                        <h2 style="margin: 0px 5px 40px; text-align: center; color: #00381f; font-size: 22px; font-weight: normal; letter-spacing: 0.5px; text-indent: -0.1em;">ITEM LIST</h2>
                                        <div class="list_banner" style="width: 90%; margin: 0 auto 15px;">
                                          <a href="https://komons-japan.com/collections/all-products"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/bn_products.jpg?v=1645350649" width=100%></a>
                                        </div>
                                        <div class="list_banner" style="width: 90%; margin: 0 auto;">
                                          <a href="https://komons-japan.com/collections/gift"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/bn_gift.jpg?v=1645350649" width=100%></a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
        														<td class="w600" width="600">
                                      <div class="instagram" style="margin-top: 0px; padding-top: 40px; border-top: 1px solid #d8d8d8; margin-bottom: 60px;">
                                        <h2 style="margin: 0px 5px 30px; text-align: center; color: #00381f; font-size: 22px; font-weight: normal; letter-spacing: 0.5px; text-indent: -0.1em;">INSTAGRAM</h2>
                                        <div class="insta_wrap">
                                          <a href="https://www.instagram.com/komons.jp/" style="display: block;"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/insta_feed.jpg?v=1636365964" width="100%"></a>
                                        </div>
                                        <a class="item_link_button" href="https://www.instagram.com/komons.jp/" style="width: 100%;display:block; padding: 18px 0; margin-top: 20px; text-align: center;color: #00381f;text-decoration: none; border: 1px solid #00381f"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/insta_button.png?v=1636365703" width="40%" style="margin: 0 auto; display: block; max-width: 180px;"></a>
                                      </div>
        														</td>
        													</tr>
                                </tbody>
                              </table>
                            </layout>
                          </td>
                          <td class="w20" width="20">
                            <div>
                              &nbsp;
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <layout label="Text with full-width image">
                    </layout>
                  </td>
                  <td class="w20" width="20">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" class="w640" valign="top" width="640">
                    <div style="text-align:center; padding-top:30px; border-top: 1px solid #00381f">
                      <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/spacer.png" style="display:inline;" width="100%"/>
                    </div>
                    <div class="footer_flex" style="padding:20px;">
                      <div class="footer_logo">                        <a href="https://www.komons-japan.com/" style="display:block;text-align:center;margin-bottom:20px;">
                          <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/logo_footer.png?ver2" style="display:inline;" width="80%"/></a>
                        <div class="footer_txt" style="font-size:14px;letter-spacing:0.5px;  line-height: 1.57;letter-spacing: 1px;text-align: center;color: #00381f; margin-bottom:30px;">
                          毎日の家事を「プラスな時間」に変える<br/>
                          ホームケアブランド
                        </div>
                      </div>
                      <div class="sns_wrap" style="text-align:center;">                        <a href="https://www.facebook.com/komons.japan" style="margin-right: 7px; text-decoration: none;">
                          <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/icon_fb.png" style="width: 35px; display: inline;"/>
</a>
                        <a href="https://www.instagram.com/komons.jp/" style="margin-right: 7px; text-decoration: none;">
                          <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/icon_ig.png" style="width: 35px; display: inline;"/>
</a>
                        <a href="https://twitter.com/komons_jp" style="margin-right: 7px; text-decoration: none;">
                          <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/mailmag/icon_tw.png" style="width: 35px; display: inline; "/>
</a>
                        <a href="https://lin.ee/ID6naHI" style="text-decoration: none;">
                          <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/icon_line.png?v=1623523522" style="width: 35px; margin-right: 0px; display: inline;"/>
</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" class="w640" valign="top" width="640">
                    <div class="footer_nav" style="font-size: 14px;line-height: 1.57;letter-spacing: 1px; font-weight: normal; padding: 0 20px;">                      <a href="https://komons-japan.com/collections/all-products" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">商品一覧</a> <a href="https://komons-japan.com/collections/gift" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">ギフト商品</a> <a href="https://komons-japan.com/pages/concept" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">Komonsについて</a> <a href="https://journal.komons-japan.com/" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">ジャーナル</a><a href="https://komons-japan.com/pages/faq" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">ご利用ガイド</a><a href="https://komons-japan.com/pages/privacy-policy" style="display: block;color:#003e1b;text-decoration:none;margin-bottom:10px;">プライバシー</a> <a href="{% unsubscribe_link %}" style="display: block;color: #003e1b;text-decoration:none;margin-bottom:10px;">メールの配信停止</a>
                    </div>
                    <p class="copyright" style="font-size: 12px;line-height: 1.57;letter-spacing: 1px; color: #003e1b; padding: 0 20px 40px;">
                      2018-2021 Komons All Rights Reserved
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  <?php wp_footer();?>
</html>

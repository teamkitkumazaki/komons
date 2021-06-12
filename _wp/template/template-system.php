<?php/*Template Name: システム移行のお知らせ */?>
<!doctype html>
<html>
<head>
<?php get_template_part("parts/head");?>
</head>
<body id="journal" class="">
<?php get_template_part("parts/header");?>
<article id="journalDetail" style="padding-bottom: 100px;">
  <section class="main" style="background-image: url(https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/product_list/main_psww0f.jpg);"></section>
  <section class="journal_detail">
    <div class="post_head" style="padding-bottom: 0; border-bottom: 0; margin-bottom: 25px;">
      <div class="post_date"><span>2021.04.21</span></div>
      <h1 class="post_title">システム変更に伴うお知らせ</h1>
    </div>
    <div class="post_body" style="padding-bottom: 0; border-bottom: 0; margin-bottom: 25px;">
      <p>この度、お客さまにより便利に、よりわかりやすくお買い物を楽しんで頂くために、公式ウェブサイトのシステムリニューアルを実施いたしました。</p>
      <hr>
      <p>本システム変更に伴い、会員情報の引き継ぎは行われないため、これまでアカウントをお持ちであったお客様においても、マイページをお作りの場合は再度アカウント登録を行っていただく必要がございます。お手数をおかけいたします。</p>
      <hr>
      <p>なお、クレジットカード情報等については、旧システムにおいても新システムにおいても、弊社では一切保持しておらず、専門の決済代行会社側のシステムにて保持する仕組みとなっております。</p>
      <hr>
      <p>また、旧システム時に登録いただいたクレジットカード情報などについては、今回のシステム変更に伴い削除されておりますので、ご安心いただければと存じます。</p>
      <hr>
      <p>お客様にはご不便をおかけいたしますが、ご理解いただけますと幸いです。</p>
      <hr>
      <p>今後もよりよい商品づくりに取り組んでまいりますので、ご愛顧の程よろしくお願いします。</p>
    </div>
  </section>
</article>
<style>
  #journalDetail .main{
    height: 600px;
    background-size: cover;
  }
  #journalDetail .main::after{
    display: none;
  }
  @media screen and (max-width: 760px){
    #journalDetail .main{
    height: 66vw;
  }
}
</style>
<?php get_template_part("parts/hummenu");?>
<?php get_template_part("parts/footer");?>
</body>
</html>

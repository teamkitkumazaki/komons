<?php/*Template Name: お問い合わせページ*/?>
<!doctype html>
<html>
<head>
<?php get_template_part("parts/head");?>		
</head>
<body id="journal" class="fixed-header rolled">
<?php get_template_part("parts/header");?>
<article id="contact" class="underPage">
<div class="section_ttl">
<h2><span>CONTACT</span><font>お問い合わせ</font></h2>
</div>
<div class="txt_main">
<div class="contact_lead">

ご不明のことがあればお気軽にお問い合わせください。なお、お客様から多く寄せられるご質問は、下記でご案内しています。併せてご参照ください。
<div id="guideNav">
<div class="item_wrap">
<h3 class="ttl_h3">ご利用ガイド</h3>
<ul>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqProduct">Komonsの商品について</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqPurchase">ご購入について</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqGift">ギフト対応について</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqDelivery">配送について</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqCancel">キャンセル・変更・返品について</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqBusiness">法人でご購入のお客様</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqWholesaler">流通業者（卸・小売等）のお客様</a></li>
 	<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2#fqContact">お問い合わせについて</a></li>
</ul>
</div>
</div>
※少人数で運営しているため、お電話でのお問い合わせは承っておりません。予めご了承頂けますと幸いです。

</div>
</div>
<!-- txt_main -->
<div class="form_outer">
<h3 class="ttl_h3">お問い合わせフォーム</h3>
<?php echo do_shortcode( '[contact-form-7 id="92" title="contact"]' ); ?>
</div>
</article>
<?php get_template_part("parts/hummenu");?>
<?php get_template_part("parts/footer");?>
</body>
</html>
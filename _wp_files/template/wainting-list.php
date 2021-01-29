<?php/*Template Name: WAINTING LIST登録画面*/?>
<!doctype html>
<html>
<head>
<meta name=”robots” content=”noindex,nofollow”>
<?php get_template_part("parts/head");?>
</head>
<body id="journal" class="fixed-header rolled">
<?php get_template_part("parts/header");?>
<?php if(have_posts()):while(have_posts()): the_post();?>
	<?php
	$id = get_the_ID();
	$tags = get_the_tags($id);
	$thumbnail_id = get_post_thumbnail_id($id);
	$image = wp_get_attachment_image_src( $thumbnail_id, 'full' );
	$src = $image[0];
	?>
<article id="waitingList">
	<section class="register">
	<div class="inner">
	<div
		class="img_wrap"
		style="background-image: url(<?php echo $src ;?>)"
	></div>
		<div class="comp-title center">
			<h1 class="ttl_ja"><?php the_title();?></h1>
			<span class="ttl_en">WAITING LIST</span>
		</div>
		<div class="description">
			<h2 class="title">販売開始情報を受け取る</h2>
			<p>下記よりメールアドレスをご登録頂くと、<span><?php the_title();?>の商品リリース・再販開始に関する情報をお受け取り頂けます。</span></p>
		</div>
		<?php the_content(); ?>
	</div>
	</section>
</article>
<?php endwhile; endif; ?>
<?php get_template_part("parts/footer");?>
<?php get_template_part("parts/hummenu");?>
</body>
<script>
$('.mailpoet_submit').click(function() {
  var formWrap = $(this).parents('p').parents('form');
  var userAddress = formWrap.find(".mailpoet_text").val();
  event.preventDefault();
	if(userAddress.match(/^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}$/)){
			formWrap.submit(),
	}else if( userAddress == '' || userAddress == null ){
		alert('メールアドレス入力してください。');
	}else{
		alert('メールアドレスを正しく入力してください。');
	}
});
</script>
<script>
$('header').addClass('loaded');
</script>
</html>

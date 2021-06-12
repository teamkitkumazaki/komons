<?php/*Template Name: iframe[インスタ]*/?>
<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.css">
</head>

<body id="iframe">
	<div class="comp-insta-wrap">
		<ul id="instafeed">
			<?php
				$paged = get_query_var('paged') ? get_query_var('paged') : 1 ;
				$wp_query = new WP_Query();
				$param = array(
					'order' => 'desc',
					'posts_per_page' => '6',
					'post_type' => 'instagram',
					'paged' => $paged,
				);
				$wp_query->query($param);
				if($wp_query->have_posts()): while($wp_query->have_posts()) : $wp_query->the_post();
				?>
				<li>
					<?php
						$thumb_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
					;?>
					<a href="<?php the_permalink();?>" target="_top">
						<img src="<?php echo $thumb_url ;?>">
					</a>
				</li>
			<?php endwhile; endif;?>
		</ul>
	</div>
</body>

</html>

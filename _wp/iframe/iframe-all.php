<?php/*Template Name: iframe[全記事]*/?>
<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.css">
</head>

<body id="iframe">
	<div class="article_wrap">
		<ul>
			<?php query_posts("posts_per_page=4&paged=$paged"); ?>
			<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
			<li>
				<div class="img_wrap">
					<?php if (has_post_thumbnail()) : ?>
						 <a class="<?php echo get_field('thumb_type');?>" href="<?php the_permalink(); ?>" target="_top">
							 <?php the_post_thumbnail('medium'); ?>
						 </a>
    				<?php else : ?>
        			<a href="<?php the_permalink(); ?>" target="_top">
								<img src="<?php bloginfo('template_url'); ?>/img/journal_img01.jpg">
							</a>
    				<?php endif ; ?>
				</div>
				<div class="txt_wrap">
					<h3><a href="<?php the_permalink();?>" target="_top"><?php the_title();?></a></h3>
				</div>
			</li>
			<?php endwhile; endif;?>
		</ul>
	</div>
</body>

</html>

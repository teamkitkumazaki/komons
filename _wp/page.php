<!doctype html>
<html>
<?php get_template_part("parts/head");?>

<body id="<?php the_field('page_id'); ?>" class="<?php the_field('page_class'); ?>">
<?php get_template_part("parts/header");?>
<?php if(have_posts()):while(have_posts()): the_post();?>
<?php the_content();?>
<?php endwhile; endif;?>
<?php get_template_part("parts/hummenu");?>
<?php get_template_part("parts/footer");?>
</body>
</html>

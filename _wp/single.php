<!doctype html>
<html>
<?php get_template_part("parts/head");?>
<body>
<?php get_template_part("parts/header");?>
<?php
$id = get_the_ID();
$tags = get_the_tags($id);
$thumbnail_id = get_post_thumbnail_id($id);
$image = wp_get_attachment_image_src( $thumbnail_id, 'full' );
$src = $image[0];

?>
<article id="journalDetail" class="page-journal-detail">
  <section class="main" style="background-image: url('<?php echo $src ?>');"></section>
  <section class="journal_detail">
    <div class="detail_inner">
      <?php
      /* Start the Loop */
      while ( have_posts() ) : the_post();
        ?>
    <div class="post_head">
      <div class="post_date"><span><?php echo get_the_date("Y.m.d"); ?></span></div>
      <h1 class="post_title"><?= the_title(); ?></h1>
      <ul class="post_tags">
        <?php foreach ($tags as $key => $tag): ?>
          <li><a href="/?tag=<?php echo $tag->term_id; ?>"><span>#</span><?php echo $tag->name; ?></a></li>
        <?php endforeach; ?>
      </ul>
      <?php if(!empty($post->post_excerpt)): ?><div class="post_excerpt"><?php the_excerpt(); ?></div><?php endif; ?>

    </div>
    <div class="post_body">
        <?= the_content(); ?>
    </div>
    </div><!-- detail_inner -->
    <div class="section_inner_new">
      <?php $url = $_SERVER['REQUEST_URI']; ?>
      <?php if(strstr($url,'1317')):?>
        <?php get_template_part("parts/hakka");?>
      <?php endif; ?>
      <?php if(strstr($url,'1338')):?>
        <?php get_template_part("parts/mothers");?>
      <?php endif; ?>
      <div class="post_share">
        <p>この記事をシェアする</p>
        <ul>
          <li><a href="https://twitter.com/share?url=<?php echo get_permalink($id); ?>" target="_blank"><img src="<?php echo get_template_directory_uri();?>/img/journal/share_twitter.png" alt="twitter"></a></li>
          <li><a href="http://www.facebook.com/share.php?u=<?php echo get_permalink($id); ?>" rel="nofollow" target="_blank"><img src="<?php echo get_template_directory_uri();?>/img/journal/share_facebook.png" alt="facebook"></a></li>
        </ul>
      </div>
    </div>
    <?php
      endwhile; // End of the loop.
      ?>
  </section>

    <?php
    $related_products = [];
    for ($i=0; $i < 5; $i++) {
      $n = $i + 1;
      $p = [];
      $name = get_field('product_name'.$n);
      $img = get_field('product_img'.$n);
      $category = get_field('product_category'.$n);
      $price = get_field('product_price'.$n);
      $link = get_field('product_link'.$n);
      if (!empty($name) && !empty($img) && !empty($category) && !empty($price) && !empty($link)) {
        $p['name'] = $name;
        $p['img'] = $img;
        $p['category'] = $category;
        $p['price'] = $price;
        $p['link'] = $link;
        $related_products[] = $p;
      }
    }

    if (!empty($related_products)):
?>
<section class="related_products">
  <div class="section_inner">
    <h2>Komonsの商品はこちら</h2>
    <ul class="product_slider js_product_slider">
    <?php foreach ( $related_products as $item ) : ?>
      <li class="slider_item">
        <div class="slider_item_inner">
          <div class="item_category"><a href="<?php echo $item['link']; ?>"><?php echo $item['category']; ?></a></div>
          <div class="item_img">
            <a href="<?php echo $item['link']; ?>">
              <?php if ( !empty( $item['img'] ) ) : ?>
              <img src="<?php echo $item['img']; ?>" alt="" />
              <?php else: ?>
              <img src="<?php echo get_template_directory_uri();?>/img/post_dummy.png" alt="" />
              <?php endif; ?>
            </a>
          </div>
          <div class="item_title"><a href="<?php echo $item['link']; ?>"><?php echo $item['name']; ?></a></div>
          <div class="item_price"><?php echo $item['price']; ?></div>
          <a class="arrow_link" href="<?php echo $item['link']; ?>"><span class="link_wrap">詳しく見る<span class="arrow"></span></span></a>
        </div>
      </li>
    <?php endforeach; ?>
    </ul>
  </div>
</section>
<?php endif; ?>
  <section class="related_posts">
    <div class="section_inner_new">
      <h2>こちらの記事もおすすめ</h2>
      <div class="article_wrap">
      <ul>

        <?php
          $args = array(
            'posts_per_page'    => 4,
            'orderby'           => 'post_date',
            'order'             => 'DESC',
            'post_type' => 'post',
            'post_status'       => 'publish',
            'post__not_in' => array($id)
          );

          $the_query = new WP_Query($args);

          if ( $the_query->have_posts() ) :
            while ( $the_query->have_posts() ) : $the_query->the_post();
              $r_id = get_the_ID();
              $r_title = get_the_title($post_id);
              $r_thumbnail_id = get_post_thumbnail_id($r_id);
              $r_image = wp_get_attachment_image_src( $r_thumbnail_id, 'medium' );
              $r_src = $r_image[0];
              $r_permalink = get_permalink($r_id);
              ?>
        <li>
          <div class="img_wrap">
            <a class="<?php echo get_field('thumb_type');?>" href="<?php the_permalink(); ?>"><?php the_post_thumbnail('medium'); ?></a>
          </div>
          <div class="txt_wrap">
            <h3>
                <a href="<?php echo $r_permalink; ?>"><?php echo $r_title; ?></a>
              </h3>
          </div>
        </li>
              <?php

            endwhile;
          else:
          endif;
        ?>

      </ul>
    </div>
    </div>
  </section>

</article>
<?php get_template_part("parts/footer");?>
<?php get_template_part("parts/hummenu");?>
</body>
</html>

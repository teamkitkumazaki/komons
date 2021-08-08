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
<article id="journalDetail">
  <section class="main" style="background-image: url('<?php echo $src ?>');"></section>
  <section class="journal_detail">
      <?php
      /* Start the Loop */
      while ( have_posts() ) : the_post();
        ?>
    <div class="post_head">
      <div class="post_date"><span><?php echo esc_html( SCF::get('volume'));?></span></div>
      <h1 class="post_title"><?= the_title(); ?></h1>
      <ul class="post_tags">
        <li><a href="#aaaa"><span>#</span>Komonsについて</a></li>
      </ul>
      <?php if(!empty($post->post_excerpt)): ?><div class="post_excerpt"><?php the_excerpt(); ?></div><?php endif; ?>

    </div>
    <div class="post_body">
        <?= the_content(); ?>
    </div>
    <?php endwhile; ?>
  </section>
  <section class="section-item-introduction">
    <div class="section_inner">
      <div class="comp-jornal-item">
        <h2 class="intro_ttl">ITEM LIST</h2>
        <?php
          $repeat_group = SCF::get( 'item_list' );
          foreach ( $repeat_group as $fields ) {
            $item_list_link = $fields['item_list_link'];
            $item_list_url = $fields['item_list_url'];
            $item_list_genre = $fields['item_list_genre'];
            $item_list_name = $fields['item_list_name'];
            $item_list_price = $fields['item_list_price'];
            $item_list_desc = $fields['item_list_desc'];
          ?>
          <div class="item_wrap">
            <div class="item_img">
              <a href="<?php echo $item_list_link;?>"><img src="<?php echo $item_list_url;?>"></a>
            </div>
            <div class="item_txt">
              <a class="item_name" href="<?php echo $item_list_link;?>"><span class="category"><?php echo $item_list_genre;?></span><span class="name"><?php echo $item_list_name;?></span></a>
              <span class="item_price"><?php echo $item_list_price;?></span>
              <p class="item_desc"><?php echo $item_list_desc;?></p>
            </div>
          </div>
        <?php } ?>
      </div><!-- comp-jornal-item -->
    </div><!-- section_inner -->
  </section>
  <!--
  <section class="related_posts">
    <h2 class="branding_ttl">Komonsについてもっと知る</h2>
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
  </section>
-->

</article>
<?php get_template_part("parts/footer");?>
<?php get_template_part("parts/hummenu");?>
</body>
<style>
#journalDetail{
  padding-bottom: 0;
}
  .main {
    position: relative;
    overflow: hidden;
    background-size: 780px !important;
    background-repeat: no-repeat;
    margin-top: 100px;
  }
  .main::after {
    display: none !important;
  }
  .common-link-button {
    max-width: 600px;
    display: block;
    background: #00381f;
    margin: 60px auto 60px;
    padding: 15px 15px;
    text-align: center;
    color: #fff !important;
    box-sizing: border-box;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  .post_body {
    border: none !important;
    padding-bottom: 0 !important;
    margin-bottom: 60px !important;
  }
  @media screen and (max-width: 980px) {
    .main {
      width: 88vw !important;
      height: 63vw !important;
      margin: 120px auto 0;
    }
  }
  @media screen and (max-width: 720px) {
    #journalDetail{
      padding-bottom: 0;
    }
    .main {
      width: 100vw !important;
      height: 62vw !important;
      margin: 60px auto 0;
      background-size: contain !important;
    }
    .common-link-button {
      margin: 40px auto;
      padding: 15px 15px;
      box-sizing: border-box;
      font-size: 16px;
      letter-spacing: 0.5px;
    }
    .post_body {
      margin-bottom: 20px !important;
    }
    .post_body br{
      display: none;
    }
    .post_share {
      margin-bottom: 40px;
      margin-top: 60px;
    }
    .related_posts{
    }
  }
</style>
<script>
  $('body').addClass('fixed');
</script>
</html>

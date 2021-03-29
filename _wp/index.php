<!doctype html>
<html>
<?php get_template_part("parts/head");?>
<body id="journal" class="fixed-header rolled">
<?php get_template_part("parts/header");?>
<section class="list_section journal_section">
  <div class="section_ttl">
    <h2><span>Journal</span><font>Komonsについてもっと知る</font></h2>
  </div>
  <div class="inner_content">
    <div class="journal">
      <div class="category_list">
        <ul>
          
        <?php
        $all_tags = get_tags(array('hide_empty' => false));
        $current_tag_id = ((isset($_GET['tag']) && !empty($_GET['tag']))) ? $_GET['tag'] : '';
        ?>
        <li<?php if (empty($current_tag_id)): ?> class="current"<?php endif; ?>><a href="/">すべて</a></li>
        <?php foreach ($all_tags as $key => $tag): ?>
          <li<?php if ($current_tag_id == $tag->term_id): ?> class="current"<?php endif; ?>><a href="?tag=<?php echo $tag->term_id; ?>"><span>#</span><?php echo $tag->name; ?></a></li>
        <?php endforeach; ?> 
        </ul>
      </div>
      <ul class="posts">
        <?php
        
        $paged = (int)get_query_var( 'paged', 1 );
        
        $args = array(
          'posts_per_page'    => 10,
          'paged' => $paged,
          'orderby'           => 'post_date',
          'order'             => 'DESC',
          'post_type' => 'post',
          'post_status'       => 'publish'
        );

        if (!empty($current_tag_id)) {
          $args['tag__in'] = array($current_tag_id);
        }
        $paginate_args = array(
          'base' => get_pagenum_link(1).'%_%',
          'format' => '/page/%#%/',
          'current' => max(1, $paged),
          'total' => $the_query->max_num_pages,
          'prev_next' => true,
          'prev_text' => 'prev',
          'next_text' => 'next',
        );

        $the_query = new WP_Query($args);

        if ( $the_query->have_posts() ) :
          while ( $the_query->have_posts() ) : $the_query->the_post();

            get_template_part( 'parts/post/content', '' );

          endwhile;
        else:
          get_template_part( 'parts/post/content', 'none' );          
        endif;
      ?>

      </ul>
      <div class="posts-pager">
        <?php
            if ($the_query->max_num_pages > 1) {
              echo paginate_links(array(
                'base' => get_pagenum_link(1) . '%_%',
                'format' => 'page/%#%/',
                'current' => max(1, $paged),
                'total' => $the_query->max_num_pages,
                'prev_text' => '&laquo;',
                'next_text' => '&raquo;',
              ));
            }
        ?>
      </div>
    </div>
  </div>
</section>
<?php get_template_part("parts/footer");?>
<?php get_template_part("parts/hummenu");?>
</body>
</html>
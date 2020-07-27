<?php
  $post_id = get_the_id();
  $title = get_the_title($post_id);
  $permalink = get_permalink($post_id);
  $thumbnail_id = get_post_thumbnail_id($post_id);
  $image = wp_get_attachment_image_src( $thumbnail_id, 'medium' );
  $src = $image[0];
  $content = $post->post_content;
  if(mb_strlen($content) > 90){
    $content = mb_substr(strip_tags($content),0,90).'...';
  }
  if(mb_strlen($title) > 54){
    $title = mb_substr(strip_tags($title),0,54).'...';
  }
  $tags = get_the_tags($post_id);
?>
        <li class="post_item_wrap">
          <div class="post_item">
            <div class="item_img">
              <a href="<?php echo $permalink; ?>"><?php if(!empty($src)): ?><img src="<?php echo $src; ?>"><?php else: ?><img src="<?php echo get_template_directory_uri();?>/img/post_dummy.png"><?php endif; ?></a>
            </div>
            <div class="item_content">
              <h2 class="item_title"><a href="<?php echo $permalink; ?>"><?php echo $title; ?></a></h2>
              <?php if (!empty($tags)): ?>
              <ul class="item_tags">
                <?php foreach($tags as $key => $tag): ?>
                <li><a href="?tag=<?php echo $tag->term_id; ?>">#<?php echo $tag->name; ?></a></li>
                <?php endforeach; ?>
              </ul>
              <?php endif; ?>
              <p class="item_description"><a href="<?php echo $permalink; ?>"><?php echo $content; ?></a></p>
            </div>
          </div>
        </li>
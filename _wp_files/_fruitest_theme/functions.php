<?php

add_theme_support('post-thumbnails');

//カスタム投稿タイプの追加
add_action( 'init', 'create_post_type' );
function create_post_type() {
//カスタム投稿タイプ１（ここから）
register_post_type(
'news',
array(
'labels' => array(
'name' => __( '最新情報' ),
'singular_name' => __( 'news' )
),
'public' => true,
'menu_position' =>5,
'has_archive' => false,
'supports' => array('title','editor','thumbnail')
)
);
//カスタム投稿タイプ2（ここから）
register_post_type(
  'instagram',  // カスタム投稿名
  array(
    'labels' => array(
      'name' => __( 'インスタグラム' ), // 管理画面の左メニューに表示されるテキスト
      'singular_name' => __( 'instagram' ),
      'rewrite' => array('slug' => 'instagram-post'),
      'rewrite' => array( 'with_front' => false ),
    ),
    'public' => true,
    'menu_position' => 6,
    'has_archive' => false,
    'supports' => array('title','editor','thumbnail')
  )
);
}

function wpcf7_main_validation_filter( $result, $tag ) {
  $type = $tag['type'];
  $name = $tag['name'];
  $_POST[$name] = trim( strtr( (string) $_POST[$name], "\n", " " ) );
  if ( 'email' == $type || 'email*' == $type ) {
    if (preg_match('/(.*)_confirm$/', $name, $matches)){
      $target_name = $matches[1];
      if ($_POST[$name] != $_POST[$target_name]) {
        if (method_exists($result, 'invalidate')) {
          $result->invalidate( $tag,"確認用のメールアドレスが一致していません");
      } else {
          $result['valid'] = false;
          $result['reason'][$name] = '確認用のメールアドレスが一致していません';
        }
      }
    }
  }
  return $result;
}

add_filter( 'wpcf7_validate_email', 'wpcf7_main_validation_filter', 11, 2 );
add_filter( 'wpcf7_validate_email*', 'wpcf7_main_validation_filter', 11, 2 );
add_action( 'wp_enqueue_scripts', function() {
	if(is_page('contact')) return;
    wp_deregister_script( 'google-recaptcha' );
});

function call_back($buffer) {
    $buffer = str_replace("https://res.cloudinary.com/daaq37k4u/image/upload/","https://res.cloudinary.com/daaq37k4u/image/upload/c_fit,f_auto,q_auto/",$buffer); //HTML出力で置き換える処理
    return $buffer;
}

function buf_start() { ob_start("call_back"); }
function buf_end() { ob_end_flush(); }

add_action('after_setup_theme', 'buf_start');
add_action('shutdown', 'buf_end');

?>

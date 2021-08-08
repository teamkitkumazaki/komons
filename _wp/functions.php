<?php

global $wp_rewrite;
$wp_rewrite->flush_rules();

add_theme_support('post-thumbnails');


function create_post_type() {
	$customPostSupports = [  // supports のパラメータを設定する配列（初期値だと title と editor のみ投稿画面で使える）
		'title',  // 記事タイトル
		'editor',  // 記事本文
		'thumbnail',  // アイキャッチ画像
		'excerpt',  // 抜粋
		'custom-fields' ,//カスタムフィールド
		'revisions'  // リビジョン
	];

	//カスタム投稿タイプ１（ここから）
	register_post_type(
		'instagram',  // カスタム投稿名
		array(
			'labels' => array(
				'name' => __( 'インスタグラム' ), // 管理画面の左メニューに表示されるテキスト
				'singular_name' => __( 'instagram' ),
				'rewrite' => array('slug' => 'instagram-post'),
				'rewrite' => array( 'with_front' => false ),
			),
			'public' => true,  // 投稿タイプをパブリックにするか否か
			'menu_position' => 5,  // 管理画面上でどこに配置するか ※「5」で「投稿」の下に配置
			'has_archive' => true,  // アーカイブを有効にするか否か
			'supports' => $customPostSupports  // 投稿画面でどのmoduleを使うか的な設定
		)
	);
	//カスタム投稿タイプ2（ここまで）
	register_post_type(
		'about',  // カスタム投稿名
		array(
			'labels' => array(
				'name' => __( 'ブランディング' ), // 管理画面の左メニューに表示されるテキスト
				'singular_name' => __( 'about' ),
				'rewrite' => array('slug' => 'branding-post'),
				'rewrite' => array( 'with_front' => false ),
			),
			'public' => true,  // 投稿タイプをパブリックにするか否か
			'menu_position' => 6,  // 管理画面上でどこに配置するか ※「5」で「投稿」の下に配置
			'has_archive' => true,  // アーカイブを有効にするか否か
			'supports' => $customPostSupports  // 投稿画面でどのmoduleを使うか的な設定
		)
	);
	//カスタム投稿タイプ2（ここまで）
}
add_action( 'init', 'create_post_type' ); // アクションに上記関数をフックします

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
    $buffer = str_replace("https://res.cloudinary.com/dbwqcy0op/image/upload/","https://res.cloudinary.com/dbwqcy0op/image/upload/c_fit,f_auto,q_auto/",$buffer); //HTML出力で置き換える処理
    return $buffer;
}

function buf_start() { ob_start("call_back"); }
function buf_end() { ob_end_flush(); }

add_action('after_setup_theme', 'buf_start');
add_action('shutdown', 'buf_end');


?>

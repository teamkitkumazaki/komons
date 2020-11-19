<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="canonical" href="https://www.komons-japan.com">
	<link rel="shortcut icon" type="image/x-icon" href="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/icon/icon.jpg">
	<link href="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/icon/icon.jpg" rel="apple-touch-icon" sizes="180x180">
	<?php
	if ( is_home() || is_front_page()) {
  	$site_title = 'Journal | ホームケアブランド「Komons（コモンズ）」';
  	$site_permalink = 'https://journal.komons-japan.com';
    $thumnail_img = get_template_directory_uri().'/img/ogp/ogp.jpg';
    $description = "「毎日使うからこそ、こだわりたい。」Komons（コモンズ）はそんな思いから生まれた洗剤/日用品のブランドです。日用品を楽しいものに「再定義」することで、家事の体験を変えていきます。";
  } elseif(is_single()){
    $site_title =  wp_title('', false, '').'| ホームケアブランド「Komons（コモンズ）」';
    $site_permalink = get_the_permalink();
    $thumnail_img = get_the_post_thumbnail_url($post_id, 'full');
    $post_id = get_the_id();
    $description = get_field('description', $post_id);
  } elseif(is_tag()){
    $site_title =  wp_title('', false, '').'| ホームケアブランド「Komons（コモンズ）」';
    $thumnail_img = get_template_directory_uri().'/img/ogp/ogp.jpg';
	} else {
  	$site_permalink = get_the_permalink();
  	$post_id = get_the_id();
  	$description = "";
  	if (!empty($post_id)) {
  		$description = get_the_content($post_id);
  		if(mb_strlen($content) > 90){
    		$description = mb_substr(strip_tags($description),0,90).'...';
  		}
  	}
    $page_title = method_exists('wp_title') ? wp_title('', false, '') : '';
    if (empty($$page_title)) {
      if (!empty($post_id) && !empty(get_the_title($post_id))) {
        $page_title = get_the_title($post_id);
      } else {
        $page_title = 'Journal';
      }
    }
    $site_title =  $page_title.' | ホームケアブランド「Komons（コモンズ）」';
  	$site_image = "";
  	$thumbnail_id = get_post_thumbnail_id($post_id);
  	$site_image_attach = wp_get_attachment_image_src( $thumbnail_id, 'medium' );
  	if (!empty($site_image_attach)) {
  		$site_image = $site_image_attach[0];
  	}
	}
  if (empty($description)) {
    $description = "「毎日使うからこそ、こだわりたい。」Komons（コモンズ）はそんな思いから生まれた洗剤/日用品のブランドです。日用品を楽しいものに「再定義」することで、家事の体験を変えていきます。";
  }
	?>
	<title><?php echo $site_title; ?></title>
	<meta property="og:title" content="<?php echo $site_title; ?>">
	<meta property="og:type" content="article">
	<meta property="og:url" content="<?php echo $site_permalink;?>">
	<meta name="description" content="<?php echo $description; ?>">
	<meta property="og:locale" content="ja_JP">
	<meta property="og:type" content="article">
	<meta property="og:title" content="<?php echo $site_title; ?>">
  <meta property="og:image" content="<?php echo $thumnail_img;?>">
	<meta property="og:description" content="<?php echo $description; ?>">
	<meta property="og:url" content="<?php echo $site_permalink; ?>">
	<meta property="og:site_name" content="Komons-Japan">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:description" content="<?php echo $description; ?>">
	<meta name="twitter:title" content="<?php echo $site_title; ?>">
	<meta name="twitter:image" content="<?php echo $thumnail_img ?>">
	<link rel="dns-prefetch" href="https://www.komons-japan.com">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.css?<?php echo date('Ymd-Hi');?>">
	<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/layout.js?<?php echo date('Ymd-Hi');?>"></script>
	<meta name="google-site-verification" content="1_P1Xhv4k9Dr-1gcr7NUMd_dsqVRuE3w-AcSwmrMEj8">
	<script src="//statics.a8.net/a8sales/a8sales.js"></script>
    <script src="//statics.a8.net/a8sales/a8crossDomain.js "></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" type="image/x-icon" href="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/icon/icon.jpg">
		<link href="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/icon/icon.jpg" rel="apple-touch-icon" sizes="200x200">
		<link rel="stylesheet" href="https://journal.komons-japan.com/wp-content/themes/komons-theme/css/style.css?<?php echo date('Ymd-Hi');?>">
		<link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500" rel="stylesheet">
		<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/js/layout.js?<?php echo date('Ymd-Hi');?>" charset="UTF-8"></script>
		<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/js/instafeed.min.js"></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120930116-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];

		  function gtag() {
		    dataLayer.push(arguments);
		  }
		  gtag('js', new Date());
		  gtag('config', 'UA-120930116-1', {
		    'linker': {
		       'domains': ['komons-japan.com', 'journal.komons-japan.com', 'cart.shop-pro.jp', 'shop-pro.jp' , 'komons-japan.shop-pro.jp']
		    }
		  });
		  function gtag_report_conversion() {
		  var callback = function () {
		       console.log('get')
		       $('#cartIn').submit();
		  };
		  gtag('event', 'submit', {
		    'event_category': 'cartIn',
		    'event_callback': callback,
		  });
		  return false;
		}
			function gtag_report_conversion2(e) {
			var callback = function () {
			     console.log(e);
		             $('#form'+ e).submit();
			};
			gtag('event', 'submit', {
			  'event_category': 'cartIn',
			  'event_callback': callback,
			});
			return false;
			}
		</script>
		<!-- Facebook Pixel Code -->
		<script>
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window,document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		 fbq('init', '643672039115143');
		fbq('track', 'PageView');
		</script>
		<noscript>
		 <img height="1" width="1"
		src="https://www.facebook.com/tr?id=643672039115143&ev=PageView
		&noscript=1"/>
		</noscript>
		<!-- End Facebook Pixel Code -->
		</script>
		<!-- Begin Mieruca Embed Code -->
		<script type="text/javascript" id="mierucajs">
		window.__fid = window.__fid || [];__fid.push([395289376]);
		(function() {
		function mieruca(){if(typeof window.__fjsld != "undefined") return; window.__fjsld = 1; var fjs = document.createElement('script'); fjs.type = 'text/javascript'; fjs.async = true; fjs.id = "fjssync"; var timestamp = new Date;fjs.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://hm.mieru-ca.com/service/js/mieruca-hm.js?v='+ timestamp.getTime(); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(fjs, x); };
		setTimeout(mieruca, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent("onload", mieruca) : window.addEventListener("load", mieruca, false)) : mieruca();
		})();
		</script>
		<!-- End Mieruca Embed Code -->

		<?php wp_head(); ?>
</head>

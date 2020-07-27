	<div id="slideMenu">
		<div id="menuBg"></div>
		<div class="menu_wrap">
			<div id="closeBtn"><a href="javascript:void(0);"></a></div>
			<div class="menu_inner">
				<div class="hum_navi">
					<ul>
						<li><a href="https://www.komons-japan.com"><span>Top</span>トップ</a></li>
						<li><a href="https://www.komons-japan.com/?tid=1&mode=f1"><span>Concept</span>Komonsについて</a></li>
						<li><a href="https://www.komons-japan.com/?mode=cate&csid=0&cbid=2421809"><span>Products</span>商品一覧</a></li>
						<li><a href="https://www.komons-japan.com/?mode=f5"><span>Gift</span>ギフトセット</a></li>
						<li><a href="https://journal.komons-japan.com"><span>Journal</span>記事一覧</a></li>
						<li><a href="/contact"><span>Contact</span>お問い合わせ</a></li>
						<li><a href="https://www.komons-japan.com/?tid=1&amp;mode=f2"><span>FAQ</span>よくある質問</a></li>
					</ul>
				</div>
				<!-- hum_navi -->
				<div class="menu_sns">
					<ul>
						<li><a href="#"><img src="<?php echo get_template_directory_uri();?>/img/tw_icon.png"></a></li>
						<li><a href="https://business.facebook.com/komons.japan/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/img/fb_icon.png"></a></li>
						<li><a href="https://www.instagram.com/komons.jp/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/img/ig_icon.png"></a></li>
					</ul>
				</div>
				<!-- menu_sns -->
			</div>
			<!-- menu_inner -->
		</div>
		<!-- menu_wrap -->
	</div>
	<!-- slideMenu -->
	<?php wp_footer();?>
<!-- Twitter universal website tag code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o02n1');
twq('track','PageView');
</script>
<!-- End Twitter universal website tag code -->
<script>
//form
function a8shopFormCookie(writeValue){
    var docCookies = {
      getItem: function (sKey) {
        if (!sKey || !this.hasItem(sKey)) { return null; }
        return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
      },
      setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
        var sExpires = "";
        if (vEnd) {
          switch (vEnd.constructor) {
            case Number:
              sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + vEnd;
              break;
            case String:
              sExpires = "; expires=" + vEnd;
              break;
            case Date:
              sExpires = "; expires=" + vEnd.toGMTString();
              break;
          }
        }
        document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      },
      removeItem: function (sKey, sPath) {
        if (!sKey || !this.hasItem(sKey)) { return; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
      },
      hasItem: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
      },
      keys: /* optional method: you can safely remove it! */ function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
        return aKeys;
      }
    };//cookie
    if(writeValue){
    //値を渡されてたら書き込み
        var d = new Date;
        d.setDate(d.getDate() + 90);
        var a8TargetDmAr = location.hostname.split(".");
        var a8domainVal = "";
        for( var hi = a8TargetDmAr.length; hi > 0; hi--){
            if(a8domainVal === ""){
            a8domainVal = a8TargetDmAr[hi-1];
            }else{
                a8domainVal = a8TargetDmAr[hi-1] + a8domainVal;
            }
            if(hi > 1){
                a8domainVal = '.' + a8domainVal;
            }
            docCookies.setItem("_a8_exCookie",writeValue,d,"/", a8domainVal);
            if(docCookies.getItem("_a8_exCookie") == writeValue){
                return true;
                break;
            }else{}
        }
    }else{
    //渡されてなかったら読み込み
        return docCookies.getItem("_a8_exCookie");
    }
}//a8shopFormCookie()

//paramGet
function getParams(){
   var a8_url = document.location.href;
   if(a8_url.match(/#/)){a8_url = RegExp.leftContext;}
   if(a8_url.match(/\?/)){var a8_params = RegExp.rightContext;}else{return new Array();}
   var a8_tmp = a8_params.split('&');
   var a8_param = new Array();
   var a8_tmp2, a8_key, a8_val;
   for(var i = 0; i < a8_tmp.length; i++){
       a8_tmp2 = new Array();
       a8_key = '';
       a8_val = '';
       a8_tmp2 = a8_tmp[i].split('=');
       a8_key = a8_tmp2[0];
       a8_val = a8_tmp2[1];
       a8_param[a8_key] = a8_val;
   }
   return a8_param;
};



var a8_param_result = false;
var a8_affParam = getParams();
var a8_forms = document.forms;

if(a8_affParam["a8"]){
    a8_param_result = a8_affParam["a8"];
    a8shopFormCookie(a8_param_result);//cookieSet(_a8_exCookie=[a8])
}else{
    if(a8shopFormCookie()){
        a8_param_result = a8shopFormCookie();//cookieGet(_a8_exCookie)
    }else{
    }
}

if(a8_param_result){
   for(var i = 0; i < a8_forms.length; i++){
    if(a8_forms[i]){
        if(!a8_forms[i].action.match(/|∣|\;/)){
        if(!a8_forms[i].action.match(/a8=/)){
            if(a8_forms[i].action.match(/\?/)){
                a8_forms[i].action = a8_forms[i].action.replace("?","?"+"a8="+a8_param_result+"&");
            }else{
                if(a8_forms[i].action.match(/#/)){
                    a8_forms[i].action = a8_forms[i].action.replace("#","?a8="+a8_param_result+"#");
                }else{
                    a8_forms[i].action = a8_forms[i].action + "?"+"a8="+a8_param_result;
                }//anker
            }//separate
        }else{}
		}else{}
    }else{}
	}//endfor 
}//a8_param_result
</script>
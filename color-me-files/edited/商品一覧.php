<{if $sid_name != "gift"}>
<!-- ############# 通常商品一覧 ############# -->
<article id="itemList" class="page-item-list">
  <section class="main"></section>
  <section id="products" class="list_section">
    <div class="section_ttl">
      <h2><span>Products</span><font>Komonsの商品</font></h2>
			<select name="cat" id="cat" class="postform">
				<option class="option-1" value="?mode=cate&csid=0&cbid=2421809">全ての商品</option>
				<option class="option-1" value="?mode=cate&cbid=2421809&csid=10">ボトル商品</option>
        <option class="option-1" value="?mode=cate&cbid=2421809&csid=11">レフィル商品</option>
        <option class="option-1" value="?mode=cate&cbid=2421809&csid=12">ボトル＆レフィル</option>
				<option class="option-1" value="?mode=cate&cbid=2421809&csid=9">Upcoming商品</option>
			</select>
    </div>
    <div id="productList" class="comp-product-list">
      <ul class="item_wrapper">
        <{section name=num loop=$productlist}>
        <li class="item_box">
          <span class="cat_ttl"><{$productlist[num].s_expl}></span>
          <div class="img_wrap">
            <a href="<{$productlist[num].link_url}>" style="background-image: url(<{$productlist[num].img_url}>)"></a>
          </div>
          <div class="txt_wrap">
            <h3 class="prod_name">
              <{if $productlist[num].name|count_characters < 28}>
                <a href="<{$productlist[num].link_url}>"><{$productlist[num].name}></a>
              <{else}>
                <a class="small" href="<{$productlist[num].link_url}>"><{$productlist[num].name}></a>
              <{/if}>
            </h3>
            <span class="product_detail">
              <{if $productlist[num].teika_disp == true}>
							<span class="price"><{$productlist[num].price}></span>
              <{else}>
              <span class="price">未定</span>
              <{/if}>
						</span>
          </div>
          <div class="comp-list-cart-button">
            <{if $productlist[num].soldout_flg == false}>
            <script type='text/javascript' src='https://komons-japan.shop-pro.jp/?mode=cartjs&pid=<{$productlist[num].id}>&style=normal_gray&name=n&img=n&expl=n&stock=n&price=n&inq=n&sk=n' charset='euc-jp'></script>
            <{else}>
            <span class="soldout">在庫切れ</span>
            <{/if}>
        </li>
        <{/section}>
      </ul>
    </div>
  </section>
 		  <section class="gift_section">
				<div class="section_ttl">
					<h2><span>Gift</span><font>贈り物セット一覧</font></h2>
				</div>
	    <div class="img_wrap">
				 <a class="cover_link" href="https://www.komons-japan.com/?mode=f5">
					 <span class="caret"></span>
				 </a>
	      <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620//index/gift_img_lim2gn.png">
	      <div class="txt_block">
	        <h3><span>Komons</span>のギフトセット</h3>
	        <h4>大切な人への贈り物に。</h4>
	      </div>
	    </div>
		</section>
</article>
<script type="text/javascript" src="https://journal.komons-japan.com/wp-content/themes/komons-theme/js/conversion.js"></script>
<{else}>
<!-- ############# ギフト商品一覧 ############# -->
<article id="giftList" class="page-gift-list">
<section class="section-main">
  <div class="main_img">
  </div>
  <div class="lead_txt">
    <div class="title_wrap">
      <span class="title_en">Gift Set</span>
      <h1 class="main_ttl">Komonsのギフトセット</h1>
    </div>
    <p class="main_desc"><span>毎日の家事を「プラスな時間」に変えるKomonsのギフトセットを、<font>大切な人への贈り物に。</font></span><span class="pc_only">新築祝い、引っ越し祝い、結婚祝い、日頃のお礼などにおすすめです。</span><span>すべてのセットはギフトボックス付き。熨斗やメッセージカードなどの<font>ギフトサービスも承ります。</font></span></p>
  </div>
</section>
<section class="section-filter">
  <div class="section_inner">
    <div class="section_ttl">
      <h2><span>Product List</span><font>ギフト商品一覧</font></h2>
    </div>
    <div class="filter_wrap">
      <h3 class="filter_ttl">商品を絞り込む</h3>
      <div class="comp-filter-wrap">
        <div class="filter_item filter01">
          <span class="fil_ttl">並び順</span>
          <div class="input_wrap">
            <select name="filter_array" id="arrayFilter" class="postform">
              <option class="option-1" value="recommend">人気順</option>
              <option class="option-1" value="priceDesc">価格の安い順</option>
              <option class="option-1" value="priceAsc">価格の高い順</option>
            </select>
          </div>
        </div><!-- filter_item -->
        <div class="filter_item filter02">
          <span class="fil_ttl">ご予算</span>
          <div id="priceRangeFilter" class="input_wrap flex">
            <div class="radio_wrap">
              <input id="price01" type="checkbox" name="price_filter" minPrice="0" maxPrice="3000" val="0">
              <label for="price01">3,000円以下</label>
            </div>
            <div class="radio_wrap">
              <input id="price02" type="checkbox" name="price_filter" minPrice="3001" maxPrice="5000" val="1">
              <label for="price02">3,001円~5,000円</label>
            </div>
            <div class="radio_wrap">
              <input id="price03" type="checkbox" name="price_filter" minPrice="5001" maxPrice="10000" val="2">
              <label for="price03">5,001円~10,000円</label>
            </div>
            <div class="radio_wrap">
              <input id="price04" type="checkbox" name="price_filter" minPrice="10001" maxPrice="100000" val="3">
              <label for="price04">10,001円以上</label>
            </div>
          </div>
        </div>
      </div><!-- comp-filter-wrap -->
    </div>
  </div><!-- section_inner -->
</section>
<section class="section-gift-products">
  <div class="section_inner">
    <div id="giftProductList" class="comp-gift-product-list">
      <{section name=num loop=$productlist}>
      <div class="list_item" price="<{$productlist[num].teika|replace:'円(税抜)':''}>" recommend="2">
        <a class="item_thumb" href="<{$productlist[num].link_url}>">
          <span class="img_wrap" style="background-image:url(<{$productlist[num].img_url}>);">
        </a>
        <div class="txt_wrap">
          <{if $productlist[num].name|count_characters < 28}>
          <a class="name" href="<{$productlist[num].link_url}>"><{$productlist[num].name}><span><{$productlist[num].price}></span></a>
          <{else}>
          <a class="name small" href="<{$productlist[num].link_url}>"><{$productlist[num].name}><span><{$productlist[num].price}></span></a>
          <{/if}>
        </div>
        <p class="product_desc"><{$productlist[num].s_expl}></p>
        <div class="content_icon"></div>
        <div class="comp-list-cart-button related wide">
         <a class="gift_detail_button" href="<{$productlist[num].link_url}>">
          <span>詳細を見る</span>
          </a>
        </div>
      </div><!-- list_item -->
      <{/section}>
      <div class="list_item" price="750" recommend="13">
        <a class="item_thumb" href="/?pid=139975276">
          <span class="img_wrap" style="background-image:url(https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift/gift_product07_nlahmc.jpg);">
        </a>
        <div class="txt_wrap">
          <a class="name" href="/?pid=139975276">Free as a Bird (Mini)<span>750円（税抜）</span></a>
        </div>
        <p class="product_desc"><span class="product_type" prop="fabric_mini" recommend="13">「ファブリックミスト」の30mlミニボトル版。</span></p>
        <div class="content_icon"></div>
        <div class="comp-list-cart-button related wide">
         <a class="gift_detail_button" href="/?pid=139975276">
          <span>詳細を見る</span>
          </a>
        </div>
      </div><!-- list_item -->
    </div><!-- comp-gift-product-list -->
  </div>
</section>
<section class="section-gift-service">
  <div class="section_inner">
    <div class="comp-centered-section-title">
      <span class="title_en">Gift Service</span>
      <h2 class="title_ja">ギフトラッピングサービスについて</h2>
    </div>
    <div class="gift_service_list">
      <div class="service_item">
        <div class="img_wrap">
          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/service_img01_hwfspg.jpg">
        </div>
        <div class="title_wrap">
          <h3 class="service_name">ラッピング/ギフトボックス</h3>
          <p class="service_desc">ギフト一覧ページに並ぶすべてのセットはオリジナルのギフトBOXにお入れしてお届けいたします。<span>※包装紙やリボン掛けの対応は行っておりませんので、あらかじめご了承ください。</span></p>
        </div>
      </div><!-- service_item -->
      <div class="service_item">
        <div class="img_wrap">
          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/service_img02_gmqugj.jpg">
        </div>
        <div class="title_wrap">
          <h3 class="service_name">熨斗/水引</h3>
          <p class="service_desc">ギフトセット商品については、＋100円（税別）にて熨斗対応が可能です。水引の種類は、どのシーンのお祝い事にもお使いいただける「紅白梅結び」になります。<span>※ご結婚祝い、出産祝い、内祝、新築祝い、快気祝いなど様々なシーンにご利用ください。</span></p>
        </div>
      </div><!-- service_item -->
      <div class="service_item">
        <div class="img_wrap">
          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/service_img03_fkpres.jpg">
        </div>
        <div class="title_wrap">
          <h3 class="service_name">オリジナル手提げバッグ</h3>
          <p class="service_desc">ギフトセットの商品については、＋300円（税別）にてオリジナル手提げバッグをお付けすることが可能です。ギフトのお渡しの際にぜひご使用ください。<span>※なお、<a href="/?pid=154063293">オリジナル手提げバッグ</a>については単品でも購入可能です。</span></p>
        </div>
      </div><!-- service_item -->
      <div class="service_item">
        <div class="img_wrap">
          <img src="https://res.cloudinary.com/dbwqcy0op/image/upload/f_auto,q_auto/v1583750620/gift_service/service_img06_wkofym.jpg">
        </div>
        <div class="title_wrap">
          <h3 class="service_name">メッセージカード</h3>
          <p class="service_desc">ご希望の客様には、無料にてメッセージカードをお付けしております。カード裏面にメッセージの印刷も承ります。詳しくはご購入手続き画面をご確認ください。</p>
        </div>
      </div><!-- service_item -->
    </div><!-- gift_service_list -->
    <div class="gift_link_button">
      <a href="/?mode=f6"><span>ギフトサービスを詳しく見る</span></a>
    </div>
  </div>
</section>
<section class="comp-qa">
  <div class="comp-centered-section-title">
    <span class="title_en">FAQ</span>
    <h2 class="title_ja">よくある質問</h2>
  </div>
  <div id="qaToggle" class="qa_toggle">
    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">ギフト包装は可能ですか？</a>
      <div class="toggle_contents">
        <p>Komonsのギフトセットはすべてオリジナルのギフトボックスに入れてお届けします。また、メッセージカードや熨斗の対応も承っております。<span>リボンなどのラッピングは基本的に承っておりませんが、個別のご相談も可能ですのでお問い合わせフォームよりお気軽にお問い合わせください。</span></p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">複数住所へ配送は可能ですか？</a>
      <div class="toggle_contents">
        <p>可能です。大変お手数をおかけいたしますが、送り先ごとにご注文手続きを行っていただくか、件数が多い場合は、info@komons-japan.comまで問い合わせください。ご注文情報入力用のエクセルフォームをお送りさせていただきます。</p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">ギフトボックスの購入は可能ですか？</a>
      <div class="toggle_contents">
        <p>GIFTページに掲載のすべてのギフトセットには予めギフトボックスが含まれております。また、ギフトセット以外の商品をご注文のお客様も別途有料でギフトボックス(税別200円)をご購入いただけます。ご希望の方はお問い合わせよりご連絡ください。</p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">メッセージカードはつけられますか？メッセージの印字はできますか？</a>
      <div class="toggle_contents">
        <p>無料でご利用いただけるメッセージカード（名刺サイズ、Komosロゴ入り）をご用意しています。カート画面にてメッセージカード「希望する」を選択してください。カード裏面にメッセージの印刷も承ります。詳しくはご購入手続き画面をご確認ください。</p>
      </div>
    </div>

    <div class="toggle_item row2">
      <a href="javascript:void(0);" class="toggle_button">熨斗(のし)対応は可能ですか？</a>
      <div class="toggle_contents">
        <p>ギフトセット商品については、＋100円（税別）にて熨斗対応が可能です。水引の種類は、どのシーンのお祝い事にもお使いいただける「紅白梅結び」になります。（ご結婚祝い、出産祝い、内祝、新築祝い、快気祝いなど様々なシーンにご利用ください。）ご希望の方はギフトセットご購入画面のギフトオプションよりご選択ください。</p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">お渡し用手提げ袋</a>
      <div class="toggle_contents">
        <p>ギフトセットの商品については、＋300円（税別）にてオリジナル手提げバッグをお付けすることが可能です。ギフトのお渡しの際にぜひご使用ください。ご希望の方はギフトセットご購入画面のギフトオプションよりご選択ください。（なお、オリジナル手提げバッグについては単品でも購入可能です。）</p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">直接相手に届ける場合、明細書は同封されますか？</a>
      <div class="toggle_contents">
        <p>特にご要望がない場合は、ギフトかどうかにかかわらず、基本的に明細書の同封/送付は行いません。受注明細書は当店よりお送りいたします「ご注文内容確認メール」に換えさせていただきますので、予めご了承ください。紙の明細書や領収書をご希望の方には発行させていただきますので、上記の「明細書/領収書の発行は可能ですか？」の項目をご覧ください。</p>
      </div>
    </div>

    <div class="toggle_item">
      <a href="javascript:void(0);" class="toggle_button">直接相手に届ける場合、送り主が分かるようになっていますか？</a>
      <div class="toggle_contents">
        <p>商品を発送する際の「配送伝票」に、ご注文確認画面でご入力いただいた「送り主様のお名前（フルネーム）」を記載させていただきます。</p>
      </div>
    </div>

    <div class="others">
      ※その他商品自体や配送などに関するFAQ<span>は<a href="/?mode=f2">こちら</a>をご参照ください。</span>
    </div>
  </div>

</section>
</article>

<{/if}>

<?php/*Template Name: 新店舗一覧 */?>
<!doctype html>
<html>
<?php get_template_part("parts/head");?>
<body class="fixed-header rolled">
<?php get_template_part("parts/header");?>
<?php
  /*$post_id = get_the_ID();
  $tokyo = SCF::get('tokyo', $post_id);
  $kanto = SCF::get('kanto', $post_id);
  $others = SCF::get('others', $post_id);
  $overseas = SCF::get('overseas', $post_id);*/
	$tokyo = SCF::get('tokyo', 1230);
  $kanto = SCF::get('kanto', 1230);
	$hokuriku = SCF::get('hokuriku', 1230);
	$chubu = SCF::get('chubu', 1230);
	$kansai = SCF::get('kansai', 1230);
	$kyusyu = SCF::get('kyusyu', 1230);
  $others = SCF::get('others', 1230);
	$overseas = SCF::get('overseas', 1230);
;?>
<article id="stockist" class="page-stockist">
  <section class="section-main">
    <div class="section_inner_new">
      <div class="comp-section-ttl">
        <hgroup>
          <span class="ttl_en">Shop List</span>
          <h1 class="ttl_ja">店舗一覧</h1>
        </hgroup>
        <div class="lead_txt">
          <p>※お取扱い商品は、各店舗によって異なりますので、<span>販売商品に関しましてはお手数ですが、各店舗までお問合せください。</span></p>
        </div>
      </div>
      <div class="comp-popup-store2">
        <hgroup class="shop_ttl">
          <span class="ttl_en">Popup Store</span>
          <h2 class="ttl_ja">ポップアップ</h2>
        </hgroup>
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://ebetsu-t.com/">
              <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store06.jpg?v=1660011601">
            </a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" class="shop_name" href="https://ebetsu-t.com/">江別 蔦屋書店</a>
            <p class="date">開催期間：8月1日(月) - 9月30日(金)</p>
            <p class="address">北海道江別市牧場町14番地の1</p>
          </div>
        </div><!-- store_item -->
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://choosebase.jp/">
              <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store04.jpg?v=1660011601">
            </a>
          </div>
          <div class="txt_wrap">
            <a class="shop_name" target="_blank" href="https://choosebase.jp/">CHOOSEBASE SHIBUYA</a>
            <p class="date">開催期間：2022年6月20日~12月末</p>
            <p class="address">東京都渋谷区宇田川町21－1 西武渋谷店 パーキング館1階</p>
          </div>
        </div><!-- store_item -->
      </div>
    </div><!-- section_inner -->
  </section>
  <section class="section-shop-list">
    <div class="section_inner_new">
      <hgroup class="shop_ttl">
        <span class="ttl_en">Stockist</span>
        <span class="ttl_ja">取扱店舗一覧</span>
      </hgroup>
      <div class="stock_flex">
        <div class="category_wrap">
          <span class="category_ttl">エリア一覧</span>
          <div id="categoryList" class="category_list comp-category-button">
            <?php if (!empty($tokyo)) : ?>
              <button jump="#areaTokyo"><span>東京都</span></button>
            <?php endif; ?>
            <?php if (!empty($kanto)) : ?>
            <button jump="#areaKanto"><span>関東</span></button>
            <?php endif; ?>
						<?php if (!empty($hokuriku)) : ?>
						<button jump="#areaHokuriku"><span>北陸</span></button>
						<?php endif; ?>
						<?php if (!empty($chubu)) : ?>
						<button jump="#areaChubu"><span>中部</span></button>
						<?php endif; ?>
						<?php if (!empty($kansai)) : ?>
						<button jump="#areaKansai"><span>関西</span></button>
						<?php endif; ?>
						<?php if (!empty($kyusyu)) : ?>
						<button jump="#areaKyusyu"><span>九州</span></button>
						<?php endif; ?>
            <?php if (!empty($others)) : ?>
            <button jump="#areaOthers"><span>OTHERS</span></button>
            <?php endif; ?>
            <button jump="#areaOverseas"><span>OVERSEAS</span></button>
          </div>
        </div>
        <div class="comp-stock-list">
          <?php if (!empty($tokyo)) : ?>
            <div id="areaTokyo" class="store_list_wrap">
              <h3 class="area_ttl">東京都</h3>
            <?php foreach ($tokyo as $i) : ?>
              <div class="store_item">
                <?php if($i['google_map_tokyo'] != null) : ?>
                <a target="_blank" href="<?= $i['google_map_tokyo'] ?>" class="shop_info">
                <?php else:?>
                <a class="shop_info no_link" href="javascript:void(0);">
                <?php endif; ?>
                  <span class="shop_name"><?= $i['shop_name_tokyo'] ?></span>
                  <span class="address"><?= $i['postal_code_tokyo'] ?><span><?= $i['address_tokyo'] ?></span></span>
                  <?php if (!empty($i['note_tokyo'])) : ?>
                    <p class="detail_txt"><?= $i['note_tokyo'] ?></p>
                  <?php endif; ?>
                </a>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
          <?php if (!empty($kanto)) : ?>
            <div id="areaKanto" class="store_list_wrap">
              <h3 class="area_ttl">関東</h3>
            <?php foreach ($kanto as $i) : ?>
              <div class="store_item">
                <?php if($i['google_map_kanto'] != null) : ?>
                <a target="_blank" href="<?= $i['google_map_kanto'] ?>" class="shop_info">
                <?php else:?>
                <a class="shop_info no_link" href="javascript:void(0);">
                <?php endif; ?>
                  <span class="shop_name"><?= $i['shop_name_kanto'] ?></span>
                  <span class="address"><?= $i['postal_code_kanto'] ?><span><?= $i['address_kanto'] ?></span></span>
                  <?php if (!empty($i['note_kanto'])) : ?>
                    <p class="detail_txt"><?= $i['note_kanto'] ?></p>
                  <?php endif; ?>
                </a>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
					<?php if (!empty($hokuriku)) : ?>
						<div id="areaHokuriku" class="store_list_wrap">
							<h3 class="area_ttl">北陸</h3>
						<?php foreach ($hokuriku as $i) : ?>
							<div class="store_item">
								<?php if($i['google_map_hokuriku'] != null) : ?>
								<a target="_blank" href="<?= $i['google_map_hokuriku'] ?>" class="shop_info">
								<?php else:?>
								<a class="shop_info no_link" href="javascript:void(0);">
								<?php endif; ?>
									<span class="shop_name"><?= $i['shop_name_hokuriku'] ?></span>
									<span class="address"><?= $i['postal_code_hokuriku'] ?><span><?= $i['address_hokuriku'] ?></span></span>
									<?php if (!empty($i['note_hokuriku'])) : ?>
										<p class="detail_txt"><?= $i['note_hokuriku'] ?></p>
									<?php endif; ?>
								</a>
							</div>
						<?php endforeach; ?>
						</div><!-- store_list_wrap -->
					<?php endif; ?>
					<?php if (!empty($chubu)) : ?>
						<div id="areaChubu" class="store_list_wrap">
							<h3 class="area_ttl">中部</h3>
						<?php foreach ($chubu as $i) : ?>
							<div class="store_item">
								<?php if($i['google_map_chubu'] != null) : ?>
								<a target="_blank" href="<?= $i['google_map_chubu'] ?>" class="shop_info">
								<?php else:?>
								<a class="shop_info no_link" href="javascript:void(0);">
								<?php endif; ?>
									<span class="shop_name"><?= $i['shop_name_chubu'] ?></span>
									<span class="address"><?= $i['postal_code_chubu'] ?><span><?= $i['address_chubu'] ?></span></span>
									<?php if (!empty($i['note_chubu'])) : ?>
										<p class="detail_txt"><?= $i['note_chubu'] ?></p>
									<?php endif; ?>
								</a>
							</div>
						<?php endforeach; ?>
						</div><!-- store_list_wrap -->
					<?php endif; ?>
					<?php if (!empty($kansai)) : ?>
						<div id="areaKansai" class="store_list_wrap">
							<h3 class="area_ttl">関西</h3>
						<?php foreach ($kansai as $i) : ?>
							<div class="store_item">
								<?php if($i['google_map_kansai'] != null) : ?>
								<a target="_blank" href="<?= $i['google_map_kansai'] ?>" class="shop_info">
								<?php else:?>
								<a class="shop_info no_link" href="javascript:void(0);">
								<?php endif; ?>
									<span class="shop_name"><?= $i['shop_name_kansai'] ?></span>
									<span class="address"><?= $i['postal_code_kansai'] ?><span><?= $i['address_kansai'] ?></span></span>
									<?php if (!empty($i['note_kansai'])) : ?>
										<p class="detail_txt"><?= $i['note_kansai'] ?></p>
									<?php endif; ?>
								</a>
							</div>
						<?php endforeach; ?>
						</div><!-- store_list_wrap -->
					<?php endif; ?>
					<?php if (!empty($kyusyu)) : ?>
						<div id="areaKyusyu" class="store_list_wrap">
							<h3 class="area_ttl">九州</h3>
						<?php foreach ($kyusyu as $i) : ?>
							<div class="store_item">
								<?php if($i['google_map_kyusyu'] != null) : ?>
								<a target="_blank" href="<?= $i['google_map_kyusyu'] ?>" class="shop_info">
								<?php else:?>
								<a class="shop_info no_link" href="javascript:void(0);">
								<?php endif; ?>
									<span class="shop_name"><?= $i['shop_name_kyusyu'] ?></span>
									<span class="address"><?= $i['postal_code_kyusyu'] ?><span><?= $i['address_kyusyu'] ?></span></span>
									<?php if (!empty($i['note_kyusyu'])) : ?>
										<p class="detail_txt"><?= $i['note_kyusyu'] ?></p>
									<?php endif; ?>
								</a>
							</div>
						<?php endforeach; ?>
						</div><!-- store_list_wrap -->
					<?php endif; ?>
          <?php if (!empty($others)) : ?>
            <div id="areaOthers" class="store_list_wrap">
              <h3 class="area_ttl">OTHERS</h3>
							<div class="store_item">
								<a target="_blank" href="https://www.unico-fan.co.jp/staffblog/storelist/" class="shop_info">
									<span class="shop_name">unico</span>
                  <span class="address">全国47店舗<span></span></span>
									<p class="detail_txt">※ギフトセットのみお取り扱い</p>
								</a>
              </div>
						</div>
          <?php endif; ?>
          <?php if (!empty($overseas)) : ?>
            <div id="areaOverseas" class="store_list_wrap">
              <h3 class="area_ttl">OVERSEAS</h3>
            <?php foreach ($overseas as $i) : ?>
              <div class="store_item">
                <?php if($i['google_map_overseas'] != null) : ?>
                <a target="_blank" href="<?= $i['google_map_overseas'] ?>" class="shop_info">
                <?php else:?>
                <a class="shop_info no_link" href="javascript:void(0);">
                <?php endif; ?>
                  <span class="shop_name"><?= $i['shop_name_overseas'] ?></span>
                  <span class="address"><?= $i['address_overseas'] ?></span>
                  <?php if (!empty($i['note_overseas'])) : ?>
                    <p class="detail_txt"><?= $i['note_overseas'] ?></p>
                  <?php endif; ?>
                </a>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
        </div><!-- comp-stock-list -->
      </div><!-- stock_flex -->
    </div><!-- section_inner_new -->
  </section>
  <section class="section-archive">
    <div class="section_inner_new">
      <hgroup class="shop_ttl">
        <span class="ttl_en">Archive</span>
        <h2 class="ttl_ja">過去のポップアップストア</h2>
      </hgroup>
      <div class="comp-popup-archive">
        <div class="archive_item">
          <div class="img_wrap">
            <a href="https://journal.komons-japan.com/archives/1060"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/shop01.jpg?v=1642429855"></a>
          </div>
          <div class="txt_wrap">
            <a href="https://journal.komons-japan.com/archives/1060" class="info_wrap">
              <span class="shop_name"><span>Free as Every Bird</span></span>
              <span class="place">@酒屋 花</span>
              <span class="date">2021年11月20日 - 21日</span>
            </a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
            <a href="https://journal.komons-japan.com/archives/190"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/shop02.jpg?v=1642429856"></a>
          </div>
          <div class="txt_wrap">
            <a href="https://journal.komons-japan.com/archives/190" class="info_wrap">
              <span class="shop_name"><span>Komons Fair</span></span>
              <span class="place">@カリモク60新宿店 / カリモク60ららぽーと豊洲店</span>
              <span class="date">2020年12月4日(土) - 22日(日)</span>
            </a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
              <a target="_blank" href="https://www.facebook.com/komons.japan/posts/795155317980705"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/shop04.jpg?v=1642429855"></a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" href="https://www.facebook.com/komons.japan/posts/795155317980705" class="info_wrap">
              <span class="shop_name"><span>DEAR</span></span>
              <span class="place">@EQUALAND(MIYASHITA PARK)</span>
              <span class="date">2020年10月1日-12月31日</span>
            </a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
            <a target="_blank" href="https://www.facebook.com/komons.japan/posts/632448070918098"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/shop03.jpg?v=1642429855"></a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" href="https://www.facebook.com/komons.japan/posts/632448070918098" class="info_wrap">
              <span class="shop_name"><span>Popup Store</span></span>
              <span class="place">@六本松 蔦屋書店</span>
              <span class="date">2020年2月20日-3月31日</span>
            </a>
          </div>
        </div>
      </div><!-- comp-popup-archive -->
    </div><!-- section_inner_new -->
  </section>
</article>
<?php get_template_part("parts/footer");?>
<?php get_template_part("parts/hummenu");?>
</body>
</html>

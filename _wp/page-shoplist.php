<!doctype html>
<html>
<?php get_template_part("parts/head");?>
<body class="fixed-header rolled">
<?php get_template_part("parts/header");?>
<?php
  $post_id = get_the_ID();
  $tokyo = SCF::get('tokyo', $post_id);
  $kanto = SCF::get('kanto', $post_id);
  $others = SCF::get('others', $post_id);
;?>
<article id="stockist" class="page-stockist">
  <section class="section-main">
    <div class="section_inner_new">
      <div class="section_ttl">
        <h1><span>Shop List</span><font>店舗一覧</font></h1>
      </div>
      <!--<div class="comp-popup-store">
        <div class="popup_item">
          <div class="img_wrap">
            <a href="#aaaa">
              <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
            </a>
          </div>
          <div class="txt_wrap">
            <hgroup class="shop_ttl">
              <span class="ttl_en">Popup Store</span>
              <h2 class="ttl_ja">イベント情報</h2>
            </hgroup>
            <a class="shop_name link" href="#aaaa"><span>酒屋「花」/ コーヒースタンド「烏」</span></a>
            <p class="address">〒160-0022 東京都渋谷区桜丘町30-15 ビバリーヒルズ102(渋谷駅から徒歩約6分)</p>
            <div class="event_detail">
              <div class="detail_item">
                <span class="ttl">開催期間</span>
                <p class="contents">2020年11月20日,21日</p>
              </div>
              <div class="detail_item">
                <span class="ttl">営業時間</span>
                <p class="contents">11:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div><!-- section_inner -->
  </section>
  <section class="section-shop-list">
    <div class="section_inner_new">
      <!--<hgroup class="shop_ttl">
        <span class="ttl_en">Stockist</span>
        <span class="ttl_ja">取扱店舗一覧</span>
      </hgroup> -->
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
                <a target="_blank" href="<?= $i['google_map_tokyo'] ?>" class="shop_info">
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
                <a target="_blank" href="<?= $i['google_map_kanto'] ?>" class="shop_info">
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
          <?php if (!empty($others)) : ?>
            <div id="areaOthers" class="store_list_wrap">
              <h3 class="area_ttl">OTHERS</h3>
            <?php foreach ($others as $i) : ?>
              <div class="store_item">
                <a target="_blank" href="<?= $i['google_map_others'] ?>" class="shop_info">
                  <span class="shop_name"><?= $i['shop_name_others'] ?></span>
                  <span class="address"><?= $i['postal_code_others'] ?><span><?= $i['address_others'] ?></span></span>
                  <?php if (!empty($i['note_others'])) : ?>
                    <p class="detail_txt"><?= $i['note_others'] ?></p>
                  <?php endif; ?>
                </a>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
          <div id="areaOverseas" class="store_list_wrap">
            <h3 class="area_ttl">OVERSEAS</h3>
            <div class="store_item">
              <a target="_blank" class="shop_info" href="https://www.everydayobject.us/">
                 <span class="shop_name">EVERYDAYOBJECT</span>
                 <span class="address">@台湾</span>
              </a>
            </div>
          </div>
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
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
      <hgroup class="shop_ttl">
        <span class="ttl_en">Popup Store</span>
        <h2 class="ttl_ja">催事店舗情報</h2>
      </hgroup>
      <div class="comp-popup-store">
        <div class="popup_item">
          <div class="img_wrap">
            <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
          </div>
          <div class="txt_wrap">
            <h3 class="shop_name">酒屋「花」/ コーヒースタンド「烏」</h3>
            <p class="address">〒160-0022 東京都渋谷区桜丘町30-15 ビバリーヒルズ102<br>(渋谷駅から徒歩約6分)</p>
            <div class="event_detail">
              <div class="detail_item">
                <span class="ttl">開催期間</span>
                <p class="contents">2021年11月20日(土) - 21日(日)</p>
              </div>
              <div class="detail_item">
                <span class="ttl">営業時間</span>
                <p class="contents">11:00 - 18:00</p>
              </div>
            </div>
            <a class="map" href="#aaaa" target="_blank"><span>Google Map</span></a>
          </div>
        </div>
      </div><!-- comp-popup-store -->
    </div><!-- section_inner -->
  </section>
  <section class="section-shop-list">
    <div class="section_inner_new">
      <div class="stock_flex">
        <div class="category_wrap">
          <hgroup class="shop_ttl">
            <span class="ttl_en">Stockist</span>
            <span class="ttl_ja">取扱店舗一覧</span>
          </hgroup>
          <span class="category_ttl">エリア一覧</span>
          <div id="categoryList" class="category_list comp-category-button">
            <?php if (!empty($tokyo)) : ?>
              <button jump="#areaTokyo"><span>東京都</span></button>
            <?php endif; ?>
            <?php if (!empty($kanto)) : ?>
            <button jump="#areaKanto"><span>関東</span></button>
            <?php endif; ?>
            <?php if (!empty($others)) : ?>
            <button jump="#areaOthers"><span>OHTERS</span></button>
            <?php endif; ?>
            <button jump="#areaOverseas"><span>OVERSEAS</span></button>
          </div>
        </div>
        <div class="comp-stock-list">
          <hgroup class="shop_ttl">
            <span class="ttl_en">Stockist</span>
            <h2 class="ttl_ja">取扱店舗一覧</h2>
          </hgroup>
          <?php if (!empty($tokyo)) : ?>
            <div id="areaTokyo" class="store_list_wrap">
              <h3 class="area_ttl">東京都</h3>
            <?php foreach ($tokyo as $i) : ?>
              <div class="store_item">
                <div class="shop_info">
                  <h4 class="shop_name"><?= $i['shop_name_tokyo'] ?></h4>
                  <p class="address"><?= $i['postal_code_tokyo'] ?><span><?= $i['address_tokyo'] ?></span></p>
                </div>
                <div class="detail">
                  <?php if (!empty($i['note_tokyo'])) : ?>
                    <p class="detail_txt"><?= $i['note_tokyo'] ?></p>
                  <?php endif; ?>
                  <a class="map" target="_blank" href="<?= $i['google_map_tokyo'] ?>">Website</a>
                </div>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
          <?php if (!empty($kanto)) : ?>
            <div id="areaKanto" class="store_list_wrap">
              <h3 class="area_ttl">関東</h3>
            <?php foreach ($kanto as $i) : ?>
              <div class="store_item">
                <div class="shop_info">
                  <h4 class="shop_name"><?= $i['shop_name_kanto'] ?></h4>
                  <p class="address"><?= $i['postal_code_kanto'] ?><span><?= $i['address_kanto'] ?></span></p>
                </div>
                <div class="detail">
                  <?php if (!empty($i['note_kanto'])) : ?>
                    <p class="detail_txt"><?= $i['note_kanto'] ?></p>
                  <?php endif; ?>
                  <a class="map" target="_blank" href="<?= $i['google_map_kanto'] ?>">Website</a>
                </div>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
          <?php if (!empty($others)) : ?>
            <div id="areaOthers" class="store_list_wrap">
              <h3 class="area_ttl">OTHERS</h3>
            <?php foreach ($others as $i) : ?>
              <div class="store_item">
                <div class="shop_info">
                  <h4 class="shop_name"><?= $i['shop_name_others'] ?></h4>
                  <?php if (!empty($i['postal_code_others'])) : ?>
                  <p class="address"><?= $i['postal_code_others'] ?><span><?= $i['address_others'] ?></span></p>
                  <?php endif; ?>
                </div>
                <div class="detail">
                  <?php if (!empty($i['note_others'])) : ?>
                    <p class="detail_txt"><?= $i['note_others'] ?></p>
                  <?php endif; ?>
                  <a class="map" target="_blank" href="<?= $i['google_map_others'] ?>">Website</a>
                </div>
              </div>
            <?php endforeach; ?>
            </div><!-- store_list_wrap -->
          <?php endif; ?>
          <div id="areaOverseas" class="store_list_wrap">
            <h3 class="area_ttl">OVERSEAS</h3>
            <div class="store_item">
              <div class="shop_info">
                <h4 class="shop_name">everydayobject@台湾</h4>
              </div>
              <div class="detail">
                <a target="_blank" class="map" href="https://www.everydayobject.us/">Website</a>
              </div>
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
            <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
          </div>
          <div class="txt_wrap">
            <div class="info_wrap">
              <h3 class="shop_name">酒屋「花」/ コーヒースタンド「烏」</h3>
              <p class="date">2021年11月20日(土) - 21日(日)</p>
            </div>
            <a class="link" href="#aaaa">Detail</a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
            <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
          </div>
          <div class="txt_wrap">
            <div class="info_wrap">
              <h3 class="shop_name">酒屋「花」/ コーヒースタンド「烏」</h3>
              <p class="date">2021年11月20日(土) - 21日(日)</p>
            </div>
            <a class="link" href="#aaaa">Detail</a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
            <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
          </div>
          <div class="txt_wrap">
            <div class="info_wrap">
              <h3 class="shop_name">酒屋「花」/ コーヒースタンド「烏」</h3>
              <p class="date">2021年11月20日(土) - 21日(日)</p>
            </div>
            <a class="link" href="#aaaa">Detail</a>
          </div>
        </div>
        <div class="archive_item">
          <div class="img_wrap">
            <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/popup_image.jpg?v=1640010685">
          </div>
          <div class="txt_wrap">
            <div class="info_wrap">
              <h3 class="shop_name">酒屋「花」/ コーヒースタンド「烏」</h3>
              <p class="date">2021年11月20日(土) - 21日(日)</p>
            </div>
            <a class="link" href="#aaaa">Detail</a>
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

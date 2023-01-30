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
  $overseas = SCF::get('overseas', $post_id);
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
          <h2 class="ttl_ja">イベント情報</h2>
        </hgroup>
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://www.idee.co.jp/shop/delier_marunouchi/"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store01.jpg?v=1660011601"></a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" class="shop_name" href="https://www.idee.co.jp/shop/delier_marunouchi/">Délier IDÉE</a>
            <p class="date">開催期間：7月15日(金)-8月29日(月)</p>
            <p class="address">東京都千代田区丸の内1-5-1 新丸ビル 4F</p>
          </div>
        </div><!-- store_item -->
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://www.idee.co.jp/shop/attache_shinjuku/"><img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store02.jpg?v=1660011601"></a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" class="shop_name" href="https://www.idee.co.jp/shop/attache_shinjuku/">Attaché d’IDÉE (Shinjuku)</a>
            <p class="date">開催期間：7月15日(金)-8月29日(月)</p>
            <p class="address">東京都新宿区西新宿1-1-5 ルミネ新宿店 ルミネ1 6F</p>
          </div>
        </div><!-- store_item -->
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://www.idee.co.jp/shop/ume/">
              <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store03.jpg?v=1660011601">
            </a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" class="shop_name" href="https://www.idee.co.jp/shop/ume/">IDÉE SHOP Umeda</a>
            <p class="date">開催期間：7月15日(金)-8月29日(月)</p>
            <p class="address">大阪府大阪市北区大深町4-20 グランフロント大阪 南館5F</p>
          </div>
        </div><!-- store_item -->
        <div class="store_item">
          <div class="img_wrap">
            <a target="_blank" href="https://ebetsu-t.com/">
              <img src="https://cdn.shopify.com/s/files/1/0536/9544/7234/files/store06.jpg?v=1660011601">
            </a>
          </div>
          <div class="txt_wrap">
            <a target="_blank" class="shop_name" href="https://ebetsu-t.com/">江別 蔦屋書店</a>
            <p class="date">開催期間：8月1日(月) - 8月30日(火)</p>
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
      </div><!-- comp-popup-store2 -->
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
          <?php if (!empty($others)) : ?>
            <div id="areaOthers" class="store_list_wrap">
              <h3 class="area_ttl">OTHERS</h3>
            <?php foreach ($others as $i) : ?>
              <div class="store_item">
                <?php if($i['google_map_others'] != null) : ?>
                <a target="_blank" href="<?= $i['google_map_others'] ?>" class="shop_info">
                <?php else:?>
                <a class="shop_info no_link" href="javascript:void(0);">
                <?php endif; ?>
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

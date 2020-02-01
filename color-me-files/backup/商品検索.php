<article id="itemList">
  <section class="main"></section>
  <section id="products" class="list_section">
    <div class="section_ttl">
      <h2><span>Products</span><font>Komonsの商品</font></h2>
				<select name="cat" id="cat" class="postform">
				 <option class="option-1" value="?mode=srh">全ての商品</option>
				 <option class="option-1" value="?mode=cate&csid=0&cbid=2421809">発売中の商品</option>
				 <option class="option-1" value="?mode=cate&csid=0&cbid=2432491">Upcoming商品</option>
				</select>
    </div>
    <div class="products">
      <ul class="">
        <{if $productlist_num !=0 }>
          <{section name=num loop=$productlist}>
            <li>
              <h4 class="cat_ttl"><{$productlist[num].s_expl}></h4>
              <div class="img_wrap">
                <a href="<{$productlist[num].link_url}>"><img src="<{$productlist[num].img_url}>"></a>
              </div>
              <div class="txt_wrap">
                <h3><a href="<{$productlist[num].link_url}>"><{$productlist[num].name}></a></h3>
											            <span class="product_detail">
							<span class="price"><{$productlist[num].price}></span>
              <{if $productlist[num].soldout_flg == false}>

              <{else}>
              <{/if}>
						</span>

                <a class="arrow_link" href="<{$productlist[num].link_url}>"><span class="link_wrap">詳しく見る<span class="arrow"></span></span></a>
              </div>
            </li>
            <{/section}>
      </ul>
      <{/if}>
    </div>
  </section>
  <!-- list_section -->
		  <section class="gift_section">
				<div class="section_ttl">
					<h2><span>Gift</span><font>贈り物セット一覧</font></h2>
				</div>
	    <div class="img_wrap">
				 <a class="cover_link" href="https://www.komons-japan.com/?mode=f5">
					 <span class="caret"></span>
				 </a>
	      <img src="https://journal.komons-japan.com/wp-content/themes/komons-theme/img/gift_img.png">
	      <div class="txt_block">
	        <h3><span>Komons</span>のギフトセット</h3>
	        <h4>大切な人への贈り物に。</h4>
	      </div>
	    </div>
		</section>
</article>

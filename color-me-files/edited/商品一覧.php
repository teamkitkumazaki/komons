<article id="itemList">
  <section class="main"></section>
  <section id="products" class="list_section">
    <div class="section_ttl">
      <h2><span>Products</span><font>Komonsの商品</font></h2>
			<select name="cat" id="cat" class="postform">
				<option class="option-1" value="?mode=cate&csid=0&cbid=2421809">全ての商品</option>
				<option class="option-1" value="?mode=cate&cbid=2421809&csid=10">ボトル商品</option>
        <option class="option-1" value="?mode=cate&cbid=2421809&csid=11">レフィル商品</option>
        <option class="option-1" value="?mode=cate&csid=0&cbid=2618680">ボトル＆レフィル</option>
				<option class="option-1" value="?mode=cate&cbid=2421809&csid=9">Upcoming商品</option>
			</select>
    </div>
    <div class="products">
      <ul class="">
        <{section name=num loop=$productlist}>
        <li>
          <h4 class="cat_ttl"><{$productlist[num].s_expl}></h4>
          <div class="img_wrap">
            <a href="<{$productlist[num].link_url}>"><img src="<{$productlist[num].img_url}>"></a>
          </div>
          <div class="txt_wrap">
            <h3><a href="<{$productlist[num].link_url}>"><{$productlist[num].name}></a></h3>
            <span class="product_detail">
              <{if $productlist[num].teika_disp == true}>
							<span class="price"><{$productlist[num].price}></span>
              <{else}>
              <span class="price">未定</span>
              <{/if}>
						</span>
            <a class="arrow_link" href="<{$productlist[num].link_url}>"><span class="link_wrap">詳しく見る<span class="arrow"></span></span></a>
          </div>
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

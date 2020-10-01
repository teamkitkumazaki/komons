$(function() {

  // ローディングアニメーション
  function loadingAnimation() {
    var sliderImg = "https://journal.komons-japan.com/wp-content/themes/komons-theme/img/main_slide01.jpg";

    var imgPreloader = new Image();
    var img = $('.first_view');
    var originSrc = img.attr('src');
    img.attr('src', "");

    img.on({
      'load': function() {
        setTimeout(function() {
          $('.load_inner').addClass('delete');
          $('body').addClass('loaded');

          setTimeout(function() {
            $('.slide_fil').addClass('loaded');

            setTimeout(function() {
              $('.main_img').addClass('loaded');
              $('.main_logo').addClass('loaded');
              backGroundSlider($('#sliderBtn'));
            }, 100);
          }, 1200);

        }, 1700);

      }
    })

    img.attr('src', originSrc);

  }

  if (document.getElementById('index')) {
    loadingAnimation();
  }

  // スクロール系のイベントまとめ
  function scrollArrow(target) {
    var scrollSwitch = 0;
    var scrollArrow = $('#arrowScroll a');
    var headerArrow = $('.header_arrow');
    var scrollTarget = $('#scrollTarget');

    function afterScroll(noAnimate) {
      target.addClass('rolled');
      headerArrow.attr('id', 'arrowReturn');
      scrollSwitch = 1;
    };

    function beforeScroll() {
      if ($('.underPage').length) {

      } else {
        target.removeClass('rolled');
        headerArrow.attr('id', 'arrowScroll');
        scrollSwitch = 0;
      }
    };

    function scrollIndex() {
      if (scrollSwitch == 0) {
        $("html, body").animate({
          scrollTop: 1100
        }, 700);
      } else {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      }
    }

    function scrollUnder() {
      var offsetHeight = scrollTarget.offset().top;
      if (scrollSwitch == 0) {
        $("html, body").animate({
          scrollTop: offsetHeight
        }, 700);
      } else {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      }
    }

    function init() {
      $('.header_arrow a').on({
        'click': function() {
          if (document.getElementById('top')) {
            scrollIndex();
          } else {
            scrollUnder();
          }
        }
      });

      $(window).on({
        'scroll': function() {
          var scroll = $(window).scrollTop();
          if (scroll > 100) {
            if (scrollSwitch == 0) {
              afterScroll();
            }
          } else {
            if (scrollSwitch == 1) {
              beforeScroll();
            }
          }
          if (document.getElementById('concept')) {
            $("section").each(function() {
              var sectionimgPos = $(this).offset().top;
              var sectionscroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (sectionscroll + 90 > sectionimgPos - windowHeight + windowHeight) {
                var setClass = $(this).attr('id');
                $('body').removeClass('concept_top concept_component concept_scent concept_make concept_design ceoncept_links');
                $('body').addClass(setClass);
              };
            });
          }
          if (document.getElementById('index')) {
            $("section").each(function() {
              var sectionimgPos = $(this).offset().top;
              var sectionscroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (sectionscroll + 90 > sectionimgPos - windowHeight + windowHeight) {
                var setClass = $(this).attr('id');
                $('body').removeClass('main topConcept product01 product02 product03 product04 product05 product06 topGift topCF topJournal instagram');
                $('body').addClass(setClass);
              };
            });

            $(".effect").each(function() {
              var imgPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > imgPos - windowHeight + windowHeight / 5) {
                var animateType = $(this).attr('animate');
                $(this).css({
                  'opacity': '1'
                });
                $(this).addClass(animateType);
              };
            });

          }
        },
      });
    };
    init();
  }

  scrollArrow($('body'));

  //ハンバーガーメニューの開閉

  function humMenuToggle(target) {
    var humButton = target.find('a');
    var closeBtn = $('#closeBtn');
    var menuBg = $('#menuBg');
    var menuState = 0;
    var current_scrollY;

    function humMenuShift() {
      if (menuState == 0) {
        current_scrollY = $(window).scrollTop();
        $('body').addClass('menu_open').css({
          /*  position: 'fixed',*/
          width: '100%',
          /*top: -1 * current_scrollY*/
        });
        menuState = 1;
      } else {
        $('body').removeClass('menu_open').attr({
          style: ''
        }).prop({
          scrollTop: current_scrollY
        });;
        menuState = 0;
      }
    }

    function init() {
      humButton.on({
        'click': function() {
          humMenuShift();
        }
      });
      closeBtn.on({
        'click': function() {
          humMenuShift();
        }
      });
      menuBg.on({
        'click': function() {
          humMenuShift();
        }
      });
    }

    init()

  };

  humMenuToggle($('#humMenu'));

  //トップページ メインスライダー
  function backGroundSlider(target) {
    var obj = $('#slideShow');
    var objLi = $('#slideShow li');
    var objSelect;
    var timeId;
    var duration = 2000;
    var interval = 2000;
    var current = 1;
    var objBox = [];
    var btnList = [];

    function change() {
      if (current !== 1) {
        current++;
      } else {
        current = 0;
      }
      slideChange(current)
    }

    function startAuto() {
      timeId = setTimeout(change, interval);
    }

    function stopAuto() {
      clearTimeout(timeId)
    }

    function complete() {
      startAuto();
    }

    function slideChange(e) {
      $('.active').removeClass('active');
      btnList[e].addClass('active');
      objLi.stop().animate({
        'opacity': 0
      }, duration);
      objBox[e].stop().animate({
        'opacity': 1
      }, duration, function() {
        complete();
        current = e;
      });
    };

    function clickTn(num) {
      if (current != num) {
        slideChange(num)
        stopAuto();
      }
    }

    function init() {
      target.find('li').each(function(index) {
        btnList[index] = $(this);
        $($(this).find('a')).on({
          'click': function() {
            clickTn(index);
          }
        });
      });

      obj.find('li').each(function(i) {
        objBox[i] = $(this);
      });

    };

    init();
    startAuto();

  };
  if (document.getElementById('index')) {

  }

  // リード文の出力
  function readTxtMove(target) {
    var strInnerHTML = target.html();
    $('#excerpt').prepend(strInnerHTML);
    target.remove();
    if (document.getElementById('cartNotice')) {
      var strCartNotice = $('#cartNotice').html();
      $('.cart_button').append(strCartNotice);
      $('#cartNotice').remove();
    }
  }

  if (document.getElementById('itemDetail')) {
    readTxtMove($('#leadTxt'));
  }

  //商品詳細のバリエーション選択欄
  function variationToggle(target){
    var toggleState = 0;
    var wrap = target.find('.variation_wrap');
    var button = target.find('.display_wrap');
    var buttonHeight = button.outerHeight();
    var toggle = target.find('.display_toggle');
    var toggleHeight = toggle.outerHeight();

    function toggleMove(){
      var buttonHeight = button.outerHeight();
      var toggleHeight = toggle.outerHeight();
      if(toggleState == 0){
        var contentHeight = buttonHeight + toggleHeight;
        button.addClass('open');
        toggleState = 1;
      }else{
        var contentHeight = buttonHeight;
        button.removeClass('open');
        toggleState = 0;
      }
      wrap.css({height: contentHeight + 'px'});
    }

    function init(){
      wrap.css({height: buttonHeight + 'px'});
      button.on({
        'click': function() {
          toggleMove();
        }
      });
    }

    init();
  }

  if (document.getElementById('variationToggle')) {
    variationToggle($('#variationToggle'));
  }

  // 商品一覧ページのソート機能実装

  function filterProduct(target) {
    var dropdown = document.getElementById("cat");
    var optionVal = [];

    function onCatChange() {
      var u = dropdown.value;
      if (document.getElementById('itemList')) {
        var url = 'https://www.komons-japan.com' + u + '#products';
      }else if(document.getElementById('itemDetail')) {
        var url = 'https://www.komons-japan.com' + u;
      }

      if (u !== 'undefined') {
        location.href = url;
      }
    }

    function init() {
      var urlHash = location.hash;
      if (0 < urlHash.length) {
        var scroll = $(urlHash).offset().top;
        var h = $(window).width();

        if (h > 1100) {
          var adScroll = scroll - 100;
        } else {
          var adScroll = scroll - 100;
        }

        $("html, body").animate({
          scrollTop: adScroll
        }, 0);
      }

      var search = location.search;
      $.each(target.find('.option-1'), function(index) {
        optionVal[index] = $(this).attr('links');
        if (optionVal[index] = search) {
          target.val(optionVal[index]);
        }
      });

      target.change(function() {
        onCatChange();
      });
    }

    init();

  }

  if (document.getElementById('itemList')) {
    filterProduct($('#cat'));
  }
  if (document.getElementById('itemDetail')) {
    filterProduct($('#cat'));
  }

  //アンカーリンクで追従ヘッダーの分オフセットする
  window.onload = function() {
    var urlHash = location.hash;
    if (0 < urlHash.length) {
      location.hash = urlHash;
      var scroll = $(urlHash).offset().top;
      var w = $(window).width();

      if (w > 1100) {
        var adScroll = scroll - 100;
      } else {
        var adScroll = scroll - 60;
      }

      $("html, body").animate({
        scrollTop: adScroll
      }, 0);
    }
  }

  //FAQページにて、ページ内スクロールを有効にする
  function faqScroll(target) {
    var scrollObj = [];

    function windowMove(e) {
      var w = $(window).width();
      var scrollHeight = $(scrollObj[e]).offset().top;
      if (w > 1100) {
        var adScroll = scrollHeight - 100;
      } else {
        var adScroll = scrollHeight - 60;
      }
      $("html, body").animate({
        scrollTop: adScroll
      }, 500);
      return false;
    }

    function init() {
      $.each(target.find('li a'), function(index) {
        $(this).attr('href', 'javascript:void(0);');
        scrollObj[index] = $(this).attr("jump");
        $(this).on({
          'click': function() {
            windowMove(index);
          }
        });
      });
    }

    init();

  }

  if (document.getElementById('faq')) {
    faqScroll($('.fmenu02'));
    faqScroll($('#guideNav'));
  }

  //FAQページ内の、トグル制御

  function faqToggle(target) {
    var toggleItem = [];
    var toggleButton = [];
    var toggleContents = [];
    var toggleState = [];

    function toggleMove(e) {
      if (toggleState[e] == -1 || toggleState[e] == 0) {
        toggleButton[e].addClass('active');
        var tagetHeight = toggleContents[e].height();
        toggleItem[e].css({
          'height': 110 + tagetHeight + 'px'
        });
        toggleState[e] = 1;
      } else {
        toggleButton[e].removeClass('active');
        var toggleHeight = toggleButton[e].outerHeight();
          toggleItem[e].css({
            'height': toggleHeight + 4 + 'px'
          });
        toggleState[e] = 0;
      }
    }

    function init() {
      $.each(target.find('.toggle_item'), function(index) {
        toggleItem[index] = $(this);
        toggleButton[index] = $(this).find('.toggle_button');
        toggleContents[index] = $(this).find('.toggle_contents');
        $(this).css({'height': toggleButton[index].outerHeight() + 4 + 'px'});
        toggleState[index] = -1;
        toggleButton[index].on({
          'click': function() {
            toggleMove(index);
          }
        });
      });
    }

    init();

  }

  if (document.getElementById('faq')) {
    faqToggle($('article'));
  }

  if (document.getElementById('gift')) {
    faqToggle($('article'));
  }

  if (document.getElementById('giftList')) {
    faqToggle($('article'));
  }

  if (document.getElementById('giftService')) {
    faqToggle($('article'));
  }

  //ギフトサービスへのスクロール
  function giftScroll(target) {

    function scrollMove() {
      var scrollHeight = $('#giftOption').offset().top;
      var w = $(window).width();
      if (w > 1100) {
        var adScroll = scrollHeight - 100;
      } else {
        var adScroll = scrollHeight - 60;
      }
      $("html, body").animate({
        scrollTop: adScroll
      }, 500);
    }

    function init() {
      target.on({
        'click': function() {
          scrollMove();
        }
      })
    }

    init();

  }

  if (document.getElementById('gift')) {
    giftScroll($('#jumpButton'));
  }

  //ギフトのフォームにナンバリング + コンバージョンイベント追加

  function formAsset(target) {
    var submitButton = [];
    var submitForm = [];

    function init() {
      target.find('form').each(function(index) {
        submitForm[index] = $(this);
        submitForm[index].attr('id', 'form' + index);
        submitButton[index] = $(this).find('.cartjs_cart_in').find('input');
        submitButton[index].attr('onclick', 'gtag_report_conversion2(' + index + '); return false;');
        submitButton[index].on({
          'click': function() {
            return false;
            gtag_report_conversion2(index);
          }
        })
      });
    }

    init();

  }

  if (document.getElementById('gift')) {
    formAsset($('#productList'));
  }

  //トップページ用ヘッダーの制御

  function topHeader(target) {

    function init() {
      target.addClass('fade');
    }

    init();

  }

  if (document.getElementById('index')) {
    topHeader($('#hLogo'));
  }

  //コンセプト部分のボタン制御

  function conceptPop(target) {
    var popState = 0;

    function popShift() {
      if (popState == 0) {
        target.removeClass('close');
        target.addClass('open');
        popState = 1;
      } else {
        target.removeClass('open');
        target.addClass('close');
        popState = 0;
      }
    }


    function init() {
      target.on({
        'click': function() {
          popShift();
        }
      })
      $('#indexContent li a').on({
        'click': function() {
          popShift();
        }
      })
    }

    init()

  }

  if (document.getElementById('concept')) {
    conceptPop($('#popButton'));
  }

  //コンタクトフォームの制御
  function formControl(target) {
    $("input").each(function() {
      $(this).attr('autocomplete', 'off');
    });

    $('.wpcf7-submit').on({
      'click': function() {
        $('#confirmButton').addClass('wpcf7c-force-hide');
      }
    })
  }

  if (document.getElementById('contact')) {
    formControl($('form'));
  }

  function fixSidebar(targetSelector, wrapContentSelector) {
    var $target = $(targetSelector);
    var $wrap = $(wrapContentSelector);
    if ($wrap.length == 0 || $target.length == 0) {
      return;
    }

    var sidebarOffset = $target.offset().top;
    var padding = 35;
    var headerHeight = $('header:first').height();

    var contentHeight = $wrap.height();
    $(window).on('scroll load resize', function() {
      var offset = $(window).scrollTop();
      if (offset + headerHeight >= sidebarOffset) {
        $target.css('position', 'fixed');
        if (offset > contentHeight) {
          $target.css('top', (headerHeight - (offset - contentHeight)) + 'px');
        } else {
          $target.css('top', headerHeight + 'px');
        }
      } else {
        sidebarOffset = $target.offset().top;
        $target.css('position', 'absolute');
        $target.css('top', $('#js_concept_kv').height());
      }
    });
  }
  fixSidebar('#js_concept_sidebar', '#concept');

  function scrollToLink() {
    $('a[href^="#"]').click(function() {
      var href = $(this).attr("href");
      return scrollToHref(href);
    });
  }

  function scrollToHref(href) {
    if (href != "#" && href != "") {
      var headerHeight = $('header:first').height();
      var target = $(href);
      var padding = 50;
      var position = target.offset().top - headerHeight - padding;
      $("html, body").animate({
        scrollTop: position
      }, 300, 'swing');
    }
    var url = location.href.split("#");
    if (url.length > 1) {
      history.replaceState('', '', location.pathname);
    }
    return false;
  }
  scrollToLink();

  function changeNavStyleWhenScrolling(targetIds, hideTarget) {
    var headerHeight = $('header:first').height() + 180;
    $(window).on('scroll load', function() {
      var offset = $(window).scrollTop();
      for (var i in targetIds) {
        var targetId = targetIds[i];
        $target = $(targetId);
        if ($target.length == 0) {
          continue;
        }
        var targetOffset = $target.offset().top;
        if (offset + headerHeight > targetOffset) {
          var $navTarget = $("a[href='" + targetId + "']").closest('li');
          $navTarget.siblings().removeClass('current');
          $navTarget.addClass('current');
        }
      }
    });
    for (var i in targetIds) {
      $("a[href='" + targetIds[i] + "']").click(function() {
        $(hideTarget).hide();
      })
    }
  }
  changeNavStyleWhenScrolling(['#concept_top', '#concept_component', '#concept_scent', '#concept_make', '#concept_design'], '#js_concept_index_sp');

  function toggleBtn() {
    $('.js_toggle_btn').click(function() {
      var $target = $($(this).data('target'));
      if ($target.is(':visible')) {
        $target.fadeOut(100);
        $(this).find('.-txt_opened').show();
        $(this).find('.-txt_closed').hide();
      } else {
        $target.fadeIn(100);
        $(this).find('.-txt_opened').hide();
        $(this).find('.-txt_closed').show();
      }
    });
  }
  toggleBtn();

  //ギフト商品オプション選択欄
  function optionPopup(target){
    var posi;
    var optionPop = $('#optionPop');
    var optionSelect = $('#optionSelect');
    var optionSelect02 = $('#optionSelect02');
    var popBg = $('#popBg');
    var mizuhiki = $('.mizuhiki');
    var popClose = $('#popClose');
    var optionFix = $('#optionFix');
    var tesageState = $("input[name='tesage']");
    var muzihikiState = $('input[name="mizuhiki"]');
    var mizuhikiOptionState = $("input[name='mizuhiki_option']");
    var tesageDisplay = $('#tesageDisplay');
    var mizuhikiDisplay = $('#mizuhikiDisplay');

    function optionShifter(){
      var tesageCheck = $("input[name='tesage']:checked").val();
      var mizuhikiCheck = $("input[name='mizuhiki_option']:checked");
      if(tesageCheck == 'tesage'){
        var checkedValue = mizuhikiCheck.attr('tesageAri');
      }else{
        var checkedValue = mizuhikiCheck.attr('tesageNashi');
      }
      $(checkedValue).click();
      mizuhikiDisplay.text(mizuhikiCheck.val());
    }

    function optionPopOpen(){
      posi = $(window).scrollTop();
      $('body').addClass('fixed');
      $('body').css({
        position: 'fixed',
        top: -1 * posi
      });
      target.addClass('open');
    }

    function optionPopClose(){
      $('body').removeClass('fixed');
      $('body').attr('style', '');
      $('html, body').prop({scrollTop: posi});
      target.removeClass('open');
    }

    function displayMizuhikiOption(){
      var state = $('input[name="mizuhiki"]:checked').val();
      var contentsHeight = mizuhiki.find('.mizuhiki_inner').outerHeight();
      if(state == 'mizuhiki'){
        mizuhiki.addClass('active');
        /*mizuhiki.css({'height': contentsHeight});*/
        $("input[name='mizuhiki_option']").val(["表書き無し"]);
      }else{
        mizuhiki.removeClass('active');
        /*mizuhiki.css({'height': 0 + 'px'});*/
        $("input[name='mizuhiki_option']").val(["無し"]);
      }
    }

    function init(){

      $('#6-13').click();

      optionPopClose();

      optionSelect.on({
        'click': function(){
          optionPopOpen();
        }
      });

      optionSelect02.on({
        'click': function(){
          optionPopOpen();
        }
      });

      popBg.on({
        'click': function(){
          optionPopClose();
        }
      });

      popClose.on({
        'click': function(){
          optionPopClose();
        }
      });

      optionFix.on({
        'click': function(){
          optionPopClose();
        }
      });

      muzihikiState.on({
        'click': function(){
          displayMizuhikiOption();
          optionShifter();
        }
      });

      mizuhikiOptionState.on({
        'click': function(){
          optionShifter();
        }
      });

      tesageState.on({
        'click': function(){
          optionShifter();
        }
      });
    }

    init();

  }

  if (document.getElementById('itemDetail')) {
    optionPopup($('#optionPop'));
  }

  //ギフト商品一覧ページ 商品フィルター
  function giftProductFilter(target){
    var time = 300;
    var priceRangeFilter = $('#priceRangeFilter');
    var itemLength = target.find(".list_item").length;
    var lengthNum = itemLength + 1;
    var priceMin = 0;
    var priceMax = 100000;
    var priceMinBox = [];
    var priceMaxBox = [];
    var giftListArray = [];

    function displaySortedList(){
      target.stop().animate({ opacity: 0 }, time, function() {
        target.html('');
        for (var i=0; i<itemLength; i++) {
          if(priceMin < giftListArray[i].price && giftListArray[i].price < priceMax){
            console.log('index:' + i);
            target.append(giftListArray[i].html);
          }
        }
        target.stop().animate({ opacity: 1 }, time);
      });
    }

    function priceRangeSort(min,max){
      target.stop().animate({ opacity: 0 }, time, function() {
        target.html('');
        for (var i=0; i<itemLength; i++) {
          if(min < giftListArray[i].price && giftListArray[i].price < max){
            target.append(giftListArray[i].html);
          }
        }
        target.stop().animate({ opacity: 1 }, time);
      });
    }

    function priceDescSort(){
      giftListArray.sort(function(a,b){
        if(a.price< b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
      });
      displaySortedList();
    }

    function priceAscSort(){
      giftListArray.sort(function(a,b){
        if(a.price > b.price) return -1;
        if(a.price < b.price) return 1;
        return 0;
      });
      displaySortedList();
    }

    function popularSort(){
      giftListArray.sort(function(a,b){
        if(a.number < b.number) return -1;
        if(a.number > b.number) return 1;
        return 0;
      });
      displaySortedList();
    }

    function recommendSort(){
      giftListArray.sort(function(a,b){
        if(a.recommend < b.recommend) return -1;
        if(a.recommend > b.recommend) return 1;
        return 0;
      });
      displaySortedList();
    }

    function init(){
      target.find(".list_item").each(function(index) {
        $(this).attr('number', index);
        var propBox = $(this).find('.product_type');
        var contentIcon = $(this).find('.content_icon');
        var propRecommend = propBox.attr('recommend');
        $(this).attr('recommend', propRecommend);
        var propType = propBox.attr('prop').split(',');
        for (var i=0; i<propType.length; i++) {
          contentIcon.append('<div class="icon"><span class="' + propType[i] + '"></span></div>');
        }
        giftListArray[index] = {
          html : $(this),
          price : Number($(this).attr('price').replace(/,/g, '')),
          recommend : Number($(this).attr('recommend')),
          number : Number($(this).attr('number'))
        };
      });

      $('#arrayFilter').on({
        'change': function() {
          const expr = $(this).val();
          switch (expr) {
            case 'recommend': recommendSort();break;
            case 'popular': popularSort();break;
            case 'priceDesc': priceDescSort();break;
            case 'priceAsc': priceAscSort();break;
            default: console.log('error');
          }
        }
      });
      $('input[name="price_filter"]').on({
        'click': function() {
          var clickId = $(this).attr('id');
          if(clickId == 'price01'){
            $('#price04').prop('checked', false);
          }
          if(clickId == 'price04'){
            $('#price01').prop('checked', false);
          }
          priceMinBox = [];
          priceMaxBox = [];
          var checkedRadio = $('input[name="price_filter"]:checked').length;
          if(checkedRadio != 0){
            $('input[name="price_filter"]:checked').each(function(index) {
              priceMinBox[index] = Number($(this).attr('minPrice'));
              priceMaxBox[index] = Number($(this).attr('maxPrice'));
            });
            priceMin = Number(Math.min.apply(null,priceMinBox));
            priceMax = Number(Math.max.apply(null,priceMaxBox));
          }else{
            priceMin = Number(0);
            priceMax = Number(99999999);
          }
          priceRangeSort(priceMin, priceMax);
        }
      });
    }

    init();
  }

  if (document.getElementById('giftList')) {
    giftProductFilter($('#giftProductList'));
  }

  if (document.getElementById('itemDetail')) {
    $('#relatedSlider').slick({
      accessibility: false,
      infinite: false,
      dots: true,
      slidesToShow: 3,
      centerMode: true,
      autoplay: false,
      responsive: [{
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
          centerMode: false,
        }
      }]
    });
  }

});

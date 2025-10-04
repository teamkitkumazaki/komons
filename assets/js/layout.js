$(function() {

  // スクロール + ウィンドウサイズ系の対策処理
  function scrollAnimationSet(target) {
    const scButtonWrap = $('#scrollTopWrap');
    const position = document.documentElement;
    let wHeight = window.innerHeight;
    let preSetWidth = window.innerWidth;
    let scrollCount = 0;

    function setHeightProperty() {
      wHeight = window.innerHeight;
      position.style.setProperty('--wHeight', window.innerHeight);
      position.style.setProperty('--wHeightPx', window.innerHeight + 'px');
      position.style.setProperty('--scroll', window.scrollY);
      if(window.scrollY > window.innerHeight){
        scButtonWrap.addClass('display');
      }else{
        scButtonWrap.removeClass('display');
      }
      requestAnimationFrame(setProperties);
    }

    function setProperties() {
      setHeightProperty();
    }

    function init() {
      var timer = false;
      setProperties();
      position.style.setProperty('--wHeightFixedPx', window.innerHeight + 'px');
      /*window.addEventListener('scroll', _.throttle(setProperties, 100, { leading: true, trailing: true}));
      window.addEventListener('resize', _.throttle(setProperties, 100, { leading: true, trailing: true}));*/
    }

    init();

  }

  scrollAnimationSet($('article'));

  // ローディングアニメーション
  function loadingAnimation() {
    var sliderImg = "https://journal.komons-japan.com/wp-content/themes/komons-theme/img/main_slide01.jpg";

    function popUpBanner(target){
     var urlParam = location.search.substring(1);

     var popBg = $('#popBg');
     var closeBanner = target.find('#closeBanner');
     var popClose = target.find('#popCloseButton');

     function init(){
       target.addClass('open');
       popBg.on({
         'click': function() {
           target.removeClass('open');
         }
       });
     }

     if ( urlParam.match(/returntop/)) {

     }else{
       init();
     }
   }

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
              /*setTimeout(function() {
                if (document.getElementById('camPop')) {
                  popUpBanner($('#camPop'));
                }
              }, 1500);*/
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
    var headerRolled = $('#headerRolled');


    function afterScroll(noAnimate) {
      $('header').addClass('rolled');
      scrollSwitch = 1;
    };

    function beforeScroll() {
      $('header').removeClass('rolled');
      scrollSwitch = 0;
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
      var offsetHeight = headerRolled.offset().top;
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

          if (document.getElementById('headerRolled')) {
            var scroll = $(window).scrollTop();
            var rolledHeight = headerRolled.offset().top;
            if (scroll > rolledHeight) {
              if (scrollSwitch == 0) {
                afterScroll();
              }
            } else {
              if (scrollSwitch == 1) {
                beforeScroll();
              }
            }
          }
        },
      });
    };
    init();
  }

  scrollArrow($('body'));

  //ハンバーガーメニューの開閉
  function humMenuToggle(target) {
    var humButton = target.find('button');
    var closeBtn = $('#humClose');
    var menuBg = $('#menuBg');
    var menuState = 0;
    var current_scrollY;

    function humMenuShift() {
      if (menuState == 0) {
        current_scrollY = $(window).scrollTop();
        $('body').css({
          position: 'fixed',
          top: -1 * current_scrollY
        });
        $('body').addClass('fixed');
        $('#slideMenuNew').addClass('open');
        $('header').addClass('hum_open');
        menuState = 1;
      } else {
        $('body').removeClass('fixed');
        $('body').attr('style', '');
        $('html, body').prop({scrollTop: current_scrollY});
        $('#slideMenuNew').removeClass('open');
        $('header').removeClass('hum_open');
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


  // ギフト一覧ページ 商品フィルタリング
  function giftProductFilter2(target){
    var time = 300;
    var priceFilter = $('#priceFilter');
    var categoryFilter = $('#categoryFilter');
    var categoryButton = [];
    var categoryProp = [];
    var categoryState = -1;
    var cureentCategory = 'all';
    var itemLength = target.find(".list_item").length;
    var lengthNum = itemLength + 1;
    var priceMin = 0;
    var priceMax = 100000;
    var priceMinBox = [];
    var priceMaxBox = [];
    var giftListArray = [];
    var param = location.search;

    function scrollToTop(){
      var targetTop = target.offset().top;
      var headerHeight = $('header').outerHeight();
      $("html, body").animate({
        scrollTop: targetTop - headerHeight
      }, 400);
    }

    function categorySort(cat){
      target.stop().animate({ opacity: 0 }, time, function() {
        target.html('');
        for (var i=0; i<itemLength; i++) {
          console.log(giftListArray[i].prop);
          if(giftListArray[i].prop.indexOf(cat) != -1 || cat == 'all'){
            target.append(giftListArray[i].html);
          }
        }
        target.stop().animate({ opacity: 1 }, time);
        priceFilter.val(0);
        priceMin = 0;
        priceMax = 100000;
        scrollToTop()
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
        categoryFilter.find('button').removeClass('active');
        categoryState = -1;
        scrollToTop();
      });
    }

    function init(){
      target.find(".list_item").each(function(index) {
        $(this).attr('number', index);
        giftListArray[index] = {
          html : $(this),
          prop: $(this).attr('category'),
          price : Number($(this).attr('price').replace(/,/g, '')),
        };
      });

      priceFilter.on({
        'change': function() {
          var onTarget = priceFilter.find('option:selected');
          priceMin = onTarget.attr('min');
          priceMax = onTarget.attr('max');
          priceRangeSort(priceMin,priceMax);
        }
      });

      categoryFilter.find('button').each(function(index) {
        categoryButton[index] = $(this);
        categoryProp[index] = $(this).attr('prop');
        console.log(index + ':' + categoryProp[index]);
        categoryButton[index].on({
          'click': function() {
            categoryFilter.find('button').removeClass('active');
            console.log('categoryProp[index]:' + categoryProp[index]);
            if(index != categoryState){
              categoryButton[index].addClass('active');
              cureentCategory = categoryProp[index];
              categoryState = index;
            }else{
              cureentCategory = 'all';
              categoryState = -1;
            }
            categorySort(cureentCategory);
          }
        });
      });

      if(param.indexOf('tag=0') != -1){
        console.log('tag0')
        categoryButton[0].click();
      }

      if(param.indexOf('tag=1') != -1){
        console.log('tag1')
        categoryButton[1].click();
      }

      if(param.indexOf('tag=2') != -1){
        console.log('tag2')
        categoryButton[2].click();
      }

      if(param.indexOf('tag=3') != -1){
        console.log('tag3')
        categoryButton[3].click();
      }

      if(param.indexOf('tag=4') != -1){
        console.log('tag4')
        categoryButton[4].click();
      }

      if(param.indexOf('tag=5') != -1){
        console.log('tag5')
        categoryButton[5].click();
      }

    }

    init();
  }

  if (document.getElementById('giftProductList')) {
    giftProductFilter2($('#giftProductList'));
  }

  //商品詳細ページ サムネイルの切り替え
  function thumbSwitcher(target){
    let thumbButton = [];
    let thumbSrc = [];
    let thumbSrcSet = [];
    let thumbBox = target.find('.thumb_img');
    let thumbImage = thumbBox.find('img');
    let slideNum = target.find('.thumbnails').find('img').length;
    const time = 200;
    let currentSlide = 0;
    console.log('slideNum:' + slideNum);

    function switchImage(num){
      console.log('num:' + num);
      thumbBox.stop().animate({ opacity: 0 }, time, function() {
          thumbImage.attr('src', thumbSrc[num]);
          thumbImage.attr('srcset', thumbSrcSet[num]);
          $('.active_thumb').removeClass('active_thumb');
          thumbButton[num].addClass('active_thumb');
          thumbBox.stop().animate({ opacity: 1 }, time);
      });
    }

    function thumbHeightControll(){
      var thumbHeight = thumbImage.outerHeight();
      $('#thumnails').css({'max-height': thumbHeight + 'px'});
      requestAnimationFrame(thumbHeightControll);
    }

    function slideNext(){
      if (currentSlide < slideNum - 1) {
        currentSlide = currentSlide + 1;
      } else {
        currentSlide = 0;
      }
      thumbButton[currentSlide].click();
      /*switchImage(currentSlide);*/
    };

    function slidePrev(){
      if (currentSlide == 0) {
        currentSlide = slideNum - 1;
      } else {
        currentSlide = currentSlide - 1;
      }
      thumbButton[currentSlide].click();
      /*switchImage(currentSlide);*/
    };

    function tabTouch(){
      if(startTouchX - endTouchX > 50){
        slideNext();
      }else if(startTouchX - endTouchX < - 50){
        slidePrev();
      }
    };

    function windowDrag() {
      if (startDragX - endDragX > 100) {
        slideNext();
      } else if (startDragX - endDragX < -100) {
        slidePrev();
      }
    };

    function init(){
      thumbHeightControll();
      $.each(target.find('.thumbnails').find('button'), function(index) {
        thumbButton[index] = $(this);
        thumbSrc[index] = $(this).find('img').attr("src");
        thumbSrcSet[index] = $(this).find('img').attr("srcset");
        thumbButton[index].on({
          'click': function() {
            switchImage(index);
          }
        });
      });

      thumbBox.find('img').on({
        'dragstart': function(e) {
          event.preventDefault();
          startDragX = event.pageX;
        },
        'dragend': function(e) {
          endDragX = event.pageX;
          windowDrag();
        }
      });

      thumbBox.find('img').on({
        'touchstart' : function(e){
          event.preventDefault();
          startTouchX = event.changedTouches[0].pageX;
        },
        'touchmove' : function(e){
        },
        'touchend' : function(e){
          endTouchX = event.changedTouches[0].pageX;
          tabTouch();
        }
      });

      $(window).on({
        'resize': function(){
          thumbHeightControll();
        }
      });
    }

    init();

  }

  if (document.getElementById('product')) {
    thumbSwitcher($('#prodImages'));
  }

  //商品詳細ページ 購入数の増減 & バリエーションの切り替え
  function cartWrapControll(){
    var minusButton = $('#minusButton');
    var plusButton = $('#plusButton');
    var quantityInput = $('#quantityInput');
    var quantityNum = 1;

    function controllQuantity(vector){
      quantityNum = quantityInput.val();
      if(vector == 1){
        quantityInput.attr('value', Number(quantityNum) + 1);
        quantityNum = quantityInput.val();
      }else{
        if(quantityNum != 1){
          quantityInput.attr('value', Number(quantityNum) - 1);
          quantityNum = quantityInput.val();
        }
      }
    }


    function init(){

      minusButton.on({
        'click': function() {
          event.preventDefault();
          controllQuantity(-1);
        }
      });

      plusButton.on({
        'click': function() {
          event.preventDefault();
          controllQuantity(1);
        }
      });

    };

    init();

  }

  if (document.getElementById('product')) {
    cartWrapControll();
  }

  // 商品詳細ページ 蛇腹式レイアウト
  function toggleControl(target){
    let toggleItem = [];
    let toggleButton = [];
    let toggleContents = [];
    let toggleInner = [];
    let toggleType = [];
    let toggleState = [];
    let toggleState2 = [];
    let toggleInToggle = [];
    let windowWidth;
    let spWidth = 721;


    function toggleMove(e) {
      var buttonHeight = toggleButton[e].outerHeight();
      var tagetHeight = toggleInner[e].outerHeight();
      if (toggleState[e] == -1 || toggleState[e] == 0) {
        toggleButton[e].addClass('open');
        toggleContents[e].css({
          'height': tagetHeight + 'px'
        });
        toggleState[e] = 1;
      } else {
        toggleButton[e].removeClass('open');
        var toggleHeight = toggleButton[e].outerHeight();
          toggleContents[e].css({
            'height': 0 + 'px'
          });
        toggleState[e] = 0;
      }
    }

    function init(){
      windowWidth = $(window).width();
      $.each(target.find('.toggle_item'), function(index) {
        toggleItem[index] = $(this);
        toggleButton[index] = $(this).find('.toggle_button');
        toggleContents[index] = $(this).find('.toggle_contents');
        toggleInner[index] = $(this).find('.toggle_inner');
        toggleType[index] = toggleItem[index].attr('type');
        var tagetHeight = toggleInner[index].outerHeight();
        if(toggleType[index] == 'open'){
          toggleContents[index].css({'height': tagetHeight + 'px'});
          toggleState[index] = 1;
          toggleState2[index] = -1;
        }else if(toggleType[index] == 'close'){
          toggleContents[index].css({'height': 0 + 'px'});
          toggleState[index] = 0;
          toggleState2[index] = -1;
        }else{
          toggleContents[index].css({'height': tagetHeight + 'px'});
          toggleState[index] = 1;
          toggleState2[index] = -1;
        }
        toggleButton[index].on({
          'click': function() {
            toggleMove(index);
          }
        });

      });
    }

    init();

  }

  if (document.getElementById('product')) {
    toggleControl($('#toggles01'));
    toggleControl($('#toggles02'));
  }

  // ガイド系ページ 目次ボタン
  function indexAnker(target){
    var ankerButton = [];
    var scrollTarget = [];

    function windowMove(e) {
      var headerHeight = $('header').outerHeight();
      var scrollHeight = $(scrollTarget[e]).offset().top;
      var adScroll = scrollHeight - headerHeight;
      $("html, body").animate({
        scrollTop: adScroll
      }, 500);
    }


    function init(){
      target.find('button').each(function(index) {
        ankerButton[index] = $(this);
        scrollTarget[index] = $(this).attr('jump');
        ankerButton[index].on({
          'click': function() {
            windowMove(index);
          }
        });
      });
    }

    init();

  }

  if (document.getElementById('categoryList')) {
    indexAnker($('#categoryList'));
  }

  //FAQページ内の、トグル制御

  function faqToggle(target) {
    var toggleItem = [];
    var toggleButton = [];
    var toggleContents = [];
    var toggleState = [];
    var toggleTitleTxt = [];
    var toggleContentsTxt = [];
    var faqSearch = $('#faqSearch');
    var faqFlex = $('#faqFlex');
    var windowW = window.innerWidth;

    function filterFaqItem(){
      var searchValue = faqSearch.val();
      $.each(target.find('.toggle_item'), function(index) {
        if(searchValue.length > 1){
          if(toggleTitleTxt[index].indexOf(searchValue) != -1 || toggleContentsTxt[index].indexOf(searchValue) != -1){
            $(this).css({'display': 'block'});
          }else{
            $(this).css({'display': 'none'});
          }
        }else{
          $(this).css({'display': 'block'});
        }
      });
      $.each(target.find('.comp-faq-contents'), function(index) {
        if(searchValue.length > 1){
          if($(this).text().indexOf(searchValue) != -1){
            $(this).css({'display': 'block'});
          }else{
            $(this).css({'display': 'none'});
          }
        }else{
          $(this).css({'display': 'block'});
        }
      });
      $.each(target.find('.item_wrap'), function(index) {
        if(searchValue.length > 1){
          if($(this).text().indexOf(searchValue) != -1){
            $(this).css({'display': 'block'});
          }else{
            $(this).css({'display': 'none'});
          }
        }else{
          $(this).css({'display': 'block'});
        }
      });
    }

    function toggleMove(e) {
      if ( toggleState[e] == 0 ) {
        toggleButton[e].addClass('active');
        var buttonHeight = toggleButton[e].outerHeight();
        var tagetHeight = toggleContents[e].outerHeight();
        toggleItem[e].css({
          'height': buttonHeight + tagetHeight + 'px'
        });
        toggleState[e] = 1;
      } else {
        toggleButton[e].removeClass('active');
        var buttonHeight = toggleButton[e].outerHeight();
          toggleItem[e].css({
            'height': buttonHeight + 2 + 'px'
          });
        toggleState[e] = 0;
      }
    }

    function setToggleHeight(){
      $.each(target.find('.toggle_item'), function(index) {
        toggleItem[index] = $(this);
        toggleButton[index] = $(this).find('.toggle_button');
        toggleContents[index] = $(this).find('.toggle_contents');
        $(this).css({'height': toggleButton[index].outerHeight() + 2 + 'px'});
        toggleState[index] = 0;
      });
    }

    function windowChecker(){
      var currentWindow = window.innerWidth;
      if(currentWindow != windowW){
        setToggleHeight();
        windowW = currentWindow
      }
      requestAnimationFrame(windowChecker);
    }

    function init() {
      $.each(target.find('.toggle_item'), function(index) {
        toggleItem[index] = $(this);
        toggleButton[index] = $(this).find('.toggle_button');
        toggleContents[index] = $(this).find('.toggle_contents');
        $(this).css({'height': toggleButton[index].outerHeight() + 2 + 'px'});
        toggleState[index] = 0;
        toggleTitleTxt[index] = toggleButton[index].text();
        toggleContentsTxt[index] = toggleContents[index].text();
        toggleButton[index].on({
          'click': function() {
            toggleMove(index);
          }
        });
      });
      if (document.getElementById('faq')) {
        faqSearch.on({
          'blur': function(){
            faqFlex.stop().animate({opacity: 0}, 300);
            setTimeout(function() {
              filterFaqItem();
              faqFlex.stop().animate({opacity: 1}, 300);
            }, 300);
          }
        });
      }
      windowChecker();
    }

    init();

  }

  if (document.getElementById('faqFlex')) {
    faqToggle($('article'));
  }



  // キーワード検索 ヘッダー
  function keywordSearchControll2(target){
    var wordInput = target.find('input[type="text"]');
    var submitButton = target.find('button');
    function init(){
      submitButton.on({
        'click': function() {
          var searchWord = wordInput.val();
          if(searchWord.length > 1 && searchWord != null){
            location.href = 'https://www.komons-japan.com/?mode=srh&keyword=' + searchWord;
          }
        }
      });
    };

    init();
  }

  keywordSearchControll2($('#searchSubmit'));



});

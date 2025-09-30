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

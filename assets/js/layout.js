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
      if (window.scrollY > window.innerHeight) {
        scButtonWrap.addClass('display');
      } else {
        scButtonWrap.removeClass('display');
      }

      if (document.getElementById('headerRolled')) {
      }else{
        $('header').addClass('underpage');
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

    function popUpBanner(target) {
      var urlParam = location.search.substring(1);

      var popBg = $('#popBg');
      var closeBanner = target.find('#closeBanner');

      function init() {
        target.addClass('open');
        popBg.on({
          'click': function() {
            target.removeClass('open');
          }
        });
      }

      if (urlParam.match(/returntop/)) {

      } else {
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

  //ハンバーガーメニューの開閉
  function humMenuToggle(target) {
    var humButton = target.find('button');
    var closeBtn = $('#humClose');
    var menuBg = $('#menuBg');
    var headerLogoLink = $('#headerLogoLink');
    var menuState = 0;
    var humLinks = [];
    var humBg = [];
    var navImg = $('#navImg');
    var bgState = 'none';
    var current_scrollY;

    function humMenuShift() {
      if (menuState == 0) {
        current_scrollY = $(window).scrollTop();
        /*$('body').css({
          position: 'fixed',
          top: -1 * current_scrollY
        });
        $('body').addClass('fixed');*/
        $('#slideMenuNew').addClass('open');
        $('header').addClass('hum_open');
        headerLogoLink.attr('linktype', 'headerLink');
        menuState = 1;
      } else {
        /*$('body').removeClass('fixed');
        $('body').attr('style', '');
        $('html, body').prop({
          scrollTop: current_scrollY
        });*/
        $('#slideMenuNew').removeClass('open');
        $('header').removeClass('hum_open');
        headerLogoLink.attr('linktype', 'normalLink');
        menuState = 0;
      }
    }

    function humBgChange(e) {
      console.log('e:' + e);
      if (bgState != humBg[e]) {
        $.each(navImg.find('img'), function(index) {
          if (humBg[e] == $(this).attr('id')) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        });
        bgState = humBg[e];
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

      $.each($('#slideMenuNew').find('a'), function(index) {
        humLinks[index] = $(this);
        humBg[index] = humLinks[index].attr("bgType");
        if (window.outerWidth > 700) {
          humLinks[index].on({
            'mouseover': function() {
              humBgChange(index);
            }
          });
        }
      });

    }

    init()

  };

  humMenuToggle($('#humMenu'));


  function preSetScript() {

    // スクロール系のイベントまとめ
    function scrollArrow(target) {
      var scrollSwitch = 0;
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
              var rolledHeight = 400;
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


    setTimeout(function() {
      scrollArrow($('body'));
    }, 1000);

    // 商品一覧ページ ページャーの実装
    function collectionPagePager(target){

      var currentPage = Number(1);
      var targetDom = $('#itemListWrap');
      var pages = target.attr('pagenate');
      var limit = 24;

      var productItemProp = [];

      function readNextPage(){

        productItemProp = [];

        $.each($('article').find('.list_item'), function(index) {
          productItemProp[index] = $(this).attr('paginate');
          if(productItemProp[index] == currentPage){
            $(this).css({'display': 'block'});
          }
        });

        currentPage = currentPage + Number(1);
        console.log(location.origin + location.pathname + '?page=' + currentPage);


        if(pages < currentPage){
          target.remove();
        }else{
          $.ajax({
            url: location.origin + location.pathname + '/?page=' + currentPage,
            cache: false,
            dataType: 'html',
            success: function(html) {
              var prop = [];
              var prodHTML = [];
              $.each($(html).find('#itemListWrap').find('.list_item'), function(index) {
                prodHTML[index] = $(this);
                targetDom.append(prodHTML[index]);
              });
            }
          });
        }

      }

      function init(){
        readNextPage();

        target.on({
          'click': function() {
            readNextPage();
          }
        });
      }

      init();

    }

    if (document.getElementById('productPagenate')) {
      collectionPagePager($('#productPagenate'));
    }

    // ギフト一覧ページ 商品フィルタリング
    function giftProductFilter2(target) {
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

      var giftServiceButton = $('#giftServiceButton');
      var collectionList = $('#collectionList');
      var giftList = $('#giftList');
      var serviceList = $('#serviceList');

      function scrollToTop() {
        var targetTop = target.offset().top;
        var headerHeight = $('header').outerHeight();
        $("html, body").animate({
          scrollTop: targetTop - headerHeight
        }, 400);
      }

      function displayGiftService(){
        categoryFilter.find('button').each(function(index) {
          $(this).removeClass('active');
          categoryState = -1;
        });
        collectionList.stop().animate({
          opacity: 0
        }, time, function() {
          giftList.css({'display': 'none'});
          serviceList.css({'display': 'block'});
          collectionList.stop().animate({
            opacity: 1
          }, time);
          scrollToTop();
        });
      }

      function categorySort(cat) {
        collectionList.stop().animate({
          opacity: 0
        }, time, function() {
          target.html('');
          for (var i = 0; i < itemLength; i++) {
            console.log(giftListArray[i].prop);
            if (giftListArray[i].prop.indexOf(cat) != -1 || cat == 'all') {
              target.append(giftListArray[i].html);
            }
          }
          giftList.css({'display': 'block'});
          serviceList.css({'display': 'none'});
          collectionList.stop().animate({
            opacity: 1
          }, time);
          priceFilter.val(0);
          priceMin = 0;
          priceMax = 100000;
          scrollToTop()
        });
      }

      function priceRangeSort(min, max) {
        collectionList.stop().animate({
          opacity: 0
        }, time, function() {
          target.html('');
          for (var i = 0; i < itemLength; i++) {
            if (min < giftListArray[i].price && giftListArray[i].price < max) {
              target.append(giftListArray[i].html);
            }
          }
          giftList.css({'display': 'block'});
          serviceList.css({'display': 'none'});
          collectionList.stop().animate({
            opacity: 1
          }, time);
          categoryFilter.find('button').removeClass('active');
          categoryState = -1;
          scrollToTop();
        });
      }

      function init() {
        target.find(".list_item").each(function(index) {
          $(this).attr('number', index);
          giftListArray[index] = {
            html: $(this),
            prop: $(this).attr('category'),
            price: Number($(this).attr('price').replace(/,/g, '')),
          };
        });

        priceFilter.on({
          'change': function() {
            var onTarget = priceFilter.find('option:selected');
            priceMin = onTarget.attr('min');
            priceMax = onTarget.attr('max');
            priceRangeSort(priceMin, priceMax);
          }
        });

        giftServiceButton.on({
          'click': function() {
            displayGiftService();
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
              if (index != categoryState) {
                categoryButton[index].addClass('active');
                cureentCategory = categoryProp[index];
                categoryState = index;
              } else {
                cureentCategory = 'all';
                categoryState = -1;
              }
              categorySort(cureentCategory);
            }
          });
        });

        if (param.indexOf('tag=0') != -1) {
          console.log('tag0')
          categoryButton[0].click();
        }

        if (param.indexOf('tag=1') != -1) {
          console.log('tag1')
          categoryButton[1].click();
        }

        if (param.indexOf('tag=2') != -1) {
          console.log('tag2')
          categoryButton[2].click();
        }

        if (param.indexOf('tag=3') != -1) {
          console.log('tag3')
          categoryButton[3].click();
        }

        if (param.indexOf('tag=4') != -1) {
          console.log('tag4')
          categoryButton[4].click();
        }

        if (param.indexOf('tag=5') != -1) {
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
    function thumbSwitcher(target) {
      let thumbButton = [];
      let thumbSrc = [];
      let thumbSrcSet = [];
      let thumbBox = target.find('.thumb_img');
      let thumbImage = thumbBox.find('img');
      let slideNum = target.find('.thumbnails').find('img').length;
      const time = 200;
      let currentSlide = 0;
      console.log('slideNum:' + slideNum);

      function switchImage(num) {
        console.log('num:' + num);
        thumbBox.stop().animate({
          opacity: 0
        }, time, function() {
          thumbImage.attr('src', thumbSrc[num]);
          thumbImage.attr('srcset', thumbSrcSet[num]);
          $('.active_thumb').removeClass('active_thumb');
          thumbButton[num].addClass('active_thumb');
          thumbBox.stop().animate({
            opacity: 1
          }, time);
        });
      }

      function thumbHeightControll() {
        var thumbHeight = thumbImage.outerHeight();
        $('#thumnails').css({
          'max-height': thumbHeight + 'px'
        });
        requestAnimationFrame(thumbHeightControll);
      }

      function slideNext() {
        if (currentSlide < slideNum - 1) {
          currentSlide = currentSlide + 1;
        } else {
          currentSlide = 0;
        }
        thumbButton[currentSlide].click();
        /*switchImage(currentSlide);*/
      };

      function slidePrev() {
        if (currentSlide == 0) {
          currentSlide = slideNum - 1;
        } else {
          currentSlide = currentSlide - 1;
        }
        thumbButton[currentSlide].click();
        /*switchImage(currentSlide);*/
      };

      function tabTouch() {
        if (startTouchX - endTouchX > 50) {
          slideNext();
        } else if (startTouchX - endTouchX < -50) {
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

      function init() {
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
          'touchstart': function(e) {
            event.preventDefault();
            startTouchX = event.changedTouches[0].pageX;
          },
          'touchmove': function(e) {},
          'touchend': function(e) {
            endTouchX = event.changedTouches[0].pageX;
            tabTouch();
          }
        });

        $(window).on({
          'resize': function() {
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
    function cartWrapControll() {
      var minusButton = $('#minusButton');
      var plusButton = $('#plusButton');
      var quantityInput = $('#quantityInput');
      var quantityNum = 1;

      function controllQuantity(vector) {
        quantityNum = quantityInput.val();
        if (vector == 1) {
          quantityInput.attr('value', Number(quantityNum) + 1);
          quantityNum = quantityInput.val();
        } else {
          if (quantityNum != 1) {
            quantityInput.attr('value', Number(quantityNum) - 1);
            quantityNum = quantityInput.val();
          }
        }
      }


      function init() {

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

    // 定期・通常購入の切り替えレイアウト
    function switchCartWrap() {
      const purchaseButton = $('#purchaseButton');
      const subscriptionButton = $('#subscriptionButton');
      const contentSwitcher = $('#contentSwitcher');
      const compVariation = $('#compVariation');
      const normalBox = $('#normalBox');
      const subscriptionBox = $('#subscriptionBox');
      let switchState = 0;



      function init() {
        purchaseButton.on({
          'click': function() {
            if (switchState == 1) {
              purchaseButton.addClass('active');
              subscriptionButton.removeClass('active');
              compVariation.css({
                'display': 'block'
              });
              contentSwitcher.stop().animate({
                opacity: 0
              }, 300, function() {
                normalBox.css({
                  'display': 'block'
                });
                subscriptionBox.css({
                  'display': 'none'
                });
                contentSwitcher.stop().animate({
                  opacity: 1
                }, 300);
                switchState = 0;
              });
            }
          }
        })
        subscriptionButton.on({
          'click': function() {
            if (switchState == 0) {
              purchaseButton.removeClass('active');
              subscriptionButton.addClass('active');
              compVariation.css({
                'display': 'none'
              });
              contentSwitcher.stop().animate({
                opacity: 0
              }, 300, function() {
                normalBox.css({
                  'display': 'none'
                });
                subscriptionBox.css({
                  'display': 'block'
                });
                contentSwitcher.stop().animate({
                  opacity: 1
                }, 300);
                switchState = 1;
              });
            }
          }
        })
      }

      init();
    }

    if (document.getElementById('product')) {
      switchCartWrap();
    }

    //定期購入詳細のポップアップ
    function subPopDisplay() {
      var subscriptionPopButton = $('#subscriptionPopButton');
      var giftDetailButton = $('#giftDetailButton');
      var subscriptionModal = $('#subscriptionModal');
      var subscriptionModalBg = $('#subscriptionModalBg');

      function init() {
        subscriptionPopButton.on({
          'click': function() {
            event.preventDefault();
            subscriptionModal.addClass('open');
          }
        });

        giftDetailButton.on({
          'click': function() {
            event.preventDefault();
            subscriptionModal.addClass('open');
          }
        });

        subscriptionModalBg.on({
          'click': function() {
            subscriptionModal.removeClass('open');
          }
        });

      }

      init();

    }

    if (document.getElementById('subscriptionPopButton')) {
      subPopDisplay();
    }

    if (document.getElementById('giftDetailButton')) {
      subPopDisplay();
    }



    //ギフト商品オプション選択欄
    function optionPopup(target) {
      var posi;
      var optionPop = $('#optionPop');
      var giftOptionFields = $('#ProductSelect-product-template');
      var optionValue = [];
      var mizuhiki = $('.mizuhiki');
      var tesageState = $("input[name='tesage']");
      var messageState = $('input[name="message"]');
      var muzihikiState = $('input[name="mizuhiki"]');
      var tesageDisplay = $('#tesageDisplay');
      var mizuhikiDisplay = $('#mizuhikiDisplay');
      var tesageCheck;
      var mizuhikiCheck;
      var messageCheck;

      function withMessage() {
        if (tesageCheck == 'tesage' && mizuhikiCheck == 'mizuhiki') {
          giftOptionFields.val(optionValue[7]);
        } else if (tesageCheck != 'tesage' && mizuhikiCheck == 'mizuhiki') {
          giftOptionFields.val(optionValue[5]);
        } else if (tesageCheck == 'tesage' && mizuhikiCheck != 'mizuhiki') {
          giftOptionFields.val(optionValue[6]);
        } else if (tesageCheck != 'tesage' && mizuhikiCheck != 'mizuhiki') {
          giftOptionFields.val(optionValue[4]);
        }
      }

      function withoutMessage() {
        if (tesageCheck == 'tesage' && mizuhikiCheck == 'mizuhiki') {
          giftOptionFields.val(optionValue[3]);
        } else if (tesageCheck != 'tesage' && mizuhikiCheck == 'mizuhiki') {
          giftOptionFields.val(optionValue[1]);
        } else if (tesageCheck == 'tesage' && mizuhikiCheck != 'mizuhiki') {
          giftOptionFields.val(optionValue[2]);
        } else if (tesageCheck != 'tesage' && mizuhikiCheck != 'mizuhiki') {
          giftOptionFields.val(optionValue[0]);
        }
      }

      function optionShifter() {
        tesageCheck = $("input[name='tesage']:checked").val();
        mizuhikiCheck = $("input[name='mizuhiki']:checked").val();
        messageCheck = $("input[name='message']:checked").val();
        if (messageCheck == 'message') {
          withMessage();
        } else {
          withoutMessage();
        }
      }

      function optionPopOpen() {
        posi = $(window).scrollTop();
        $('body').addClass('fixed');
        $('body').css({
          position: 'fixed',
          top: -1 * posi
        });
        target.addClass('open');
      }

      function optionPopClose() {
        $('body').removeClass('fixed');
        $('body').attr('style', '');
        $('html, body').prop({
          scrollTop: posi
        });
        target.removeClass('open');
      }

      function displayMizuhikiOption() {
        var state = $('input[name="tesage"]:checked').val();
        var contentsHeight = mizuhiki.find('.mizuhiki_inner').outerHeight();
        if (state == 'tesage') {
          $('#0-3').click();
        } else {
          $('#0-2').click();
        }
      }

      function init() {

        giftOptionFields.find("option").each(function(index) {
          optionValue[index] = $(this).attr('value');
        });

        muzihikiState.on({
          'click': function() {
            optionShifter();
          }
        });

        tesageState.on({
          'click': function() {
            optionShifter();
          }
        });

        messageState.on({
          'click': function() {
            optionShifter();
          }
        });
      }

      init();

    }

    if (document.getElementById('product')) {
      optionPopup($('#optionPop'));
    }

    // 商品詳細ページ 蛇腹式レイアウト
    function toggleControl(target) {
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

      function init() {
        windowWidth = $(window).width();
        $.each(target.find('.toggle_item'), function(index) {
          toggleItem[index] = $(this);
          toggleButton[index] = $(this).find('.toggle_button');
          toggleContents[index] = $(this).find('.toggle_contents');
          toggleInner[index] = $(this).find('.toggle_inner');
          toggleType[index] = toggleItem[index].attr('type');
          var tagetHeight = toggleInner[index].outerHeight();
          if (toggleType[index] == 'open') {
            toggleContents[index].css({
              'height': tagetHeight + 'px'
            });
            toggleState[index] = 1;
            toggleState2[index] = -1;
          } else if (toggleType[index] == 'close') {
            toggleContents[index].css({
              'height': 0 + 'px'
            });
            toggleState[index] = 0;
            toggleState2[index] = -1;
          } else {
            toggleContents[index].css({
              'height': tagetHeight + 'px'
            });
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
    function indexAnker(target) {
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


      function init() {
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

      function filterFaqItem() {
        var searchValue = faqSearch.val();
        $.each(target.find('.toggle_item'), function(index) {
          if (searchValue.length > 1) {
            if (toggleTitleTxt[index].indexOf(searchValue) != -1 || toggleContentsTxt[index].indexOf(searchValue) != -1) {
              $(this).css({
                'display': 'block'
              });
            } else {
              $(this).css({
                'display': 'none'
              });
            }
          } else {
            $(this).css({
              'display': 'block'
            });
          }
        });
        $.each(target.find('.comp-faq-contents'), function(index) {
          if (searchValue.length > 1) {
            if ($(this).text().indexOf(searchValue) != -1) {
              $(this).css({
                'display': 'block'
              });
            } else {
              $(this).css({
                'display': 'none'
              });
            }
          } else {
            $(this).css({
              'display': 'block'
            });
          }
        });
        $.each(target.find('.item_wrap'), function(index) {
          if (searchValue.length > 1) {
            if ($(this).text().indexOf(searchValue) != -1) {
              $(this).css({
                'display': 'block'
              });
            } else {
              $(this).css({
                'display': 'none'
              });
            }
          } else {
            $(this).css({
              'display': 'block'
            });
          }
        });
      }

      function toggleMove(e) {
        if (toggleState[e] == 0) {
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

      function setToggleHeight() {
        $.each(target.find('.toggle_item'), function(index) {
          toggleItem[index] = $(this);
          toggleButton[index] = $(this).find('.toggle_button');
          toggleContents[index] = $(this).find('.toggle_contents');
          $(this).css({
            'height': toggleButton[index].outerHeight() + 2 + 'px'
          });
          toggleState[index] = 0;
        });
      }

      function windowChecker() {
        var currentWindow = window.innerWidth;
        if (currentWindow != windowW) {
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
          $(this).css({
            'height': toggleButton[index].outerHeight() + 2 + 'px'
          });
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
            'blur': function() {
              faqFlex.stop().animate({
                opacity: 0
              }, 300);
              setTimeout(function() {
                filterFaqItem();
                faqFlex.stop().animate({
                  opacity: 1
                }, 300);
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

    if (document.getElementById('subFaq')) {
      faqToggle($('#subFaq'));
    }





    // キーワード検索 ヘッダー
    function keywordSearchControll2(target) {
      var wordInput = target.find('input[type="text"]');
      var submitButton = target.find('button');

      function init() {
        submitButton.on({
          'click': function() {
            var searchWord = wordInput.val();
            if (searchWord.length > 1 && searchWord != null) {
              location.href = 'https://www.komons-japan.com/?mode=srh&keyword=' + searchWord;
            }
          }
        });
      };

      init();
    }

    keywordSearchControll2($('#searchSubmit'));

    // カートページ 配送方法の指定
    function controllDeliveryMethods(){
      var methodLabel = [];
      var deliveryOptionWrap = $('#deliveryOptions');
      var deliveryOptions = $('input[name=delivery_method]');
      var sideWrapDay = $('#sideWrapDay');
      var sideWrapDate = $('#sideWrapDate');
      var methodInput = $('#methodInput');

      function setMethod(e,f){
        $('.active_label').removeClass('active_label');
        methodLabel[e].addClass('active_label');
        methodInput.val(f);
      }

      function init(){

        $.each(deliveryOptionWrap.find('label'), function(index) {
          methodLabel[index] = $(this);
          methodLabel[index].on({
            'click': function() {
              var methodValue = $('input[name=delivery_method]:checked').val();
              console.log('methodValue:' + methodValue);
              setMethod(index, methodValue);
            }
          });
        });


      }

      init();

    }

    if (document.getElementById('deliveryOptions')) {
      controllDeliveryMethods();
    }

    /* ログインページの切り替えレイアウト */
    function switchLoginFunction() {
      var loginLayout = $('#login');
      var resetLayout = $('#reset');
      var resetPassword = $('#resetPassword');
      var loginBack = $('#loginBack');
      var urlHash = location.hash;

      function switchLogin() {
        $('#contentSwitcher').animate({
          opacity: 0
        }, 400, function() {
          loginLayout.css({
            'display': 'block'
          });
          resetLayout.css({
            'display': 'none'
          });
          $("#contentSwitcher").css({
            'display': 'block'
          });
          setTimeout(function() {
            $("#contentSwitcher").animate({
              opacity: 1
            }, 400);
          }, 50);
        });
      }

      function switchReset() {
        $('#contentSwitcher').animate({
          opacity: 0
        }, 400, function() {
          loginLayout.css({
            'display': 'none'
          });
          resetLayout.css({
            'display': 'block'
          });
          $("#contentSwitcher").css({
            'display': 'block'
          });
          setTimeout(function() {
            $("#contentSwitcher").animate({
              opacity: 1
            }, 400);
          }, 50);
        });
      }

      function init() {
        if (urlHash.indexOf('recover') > -1) {
          switchReset();
        }
        resetPassword.on({
          'click': function() {
            event.preventDefault();
            switchReset();
          }
        });

        loginBack.on({
          'click': function() {
            event.preventDefault();
            switchLogin();
          }
        });

      }

      init();

    }

    if (document.getElementById('contentSwitcher')) {
      switchLoginFunction();
    }

    /* 住所一覧ページの切り替えレイアウト */
    function switchAddressFunction() {
      var addressContentWrap = $('#addressContentWrap');
      var wrapperList = $('#wrapperList');
      var wrapperAdd = $('#wrapperAdd');
      var addressList = $('#addressList');
      var addressEdit = $('#addressEdit');
      var adminBar = $('#adminBar');
      var editbutton = [];
      var editId = [];


      function switchList() {
        adminBar.removeClass('mode-edit').addClass('mode-list');
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
        addressContentWrap.animate({
          opacity: 0
        }, 400, function() {
          $('.content_wrapper').css({
            'display': 'none'
          });
          wrapperList.css({
            'display': 'block'
          });
          addressContentWrap.css({
            'display': 'block'
          });
          setTimeout(function() {
            addressContentWrap.animate({
              opacity: 1
            }, 400);
          }, 50);
        });
      }

      function switchAdd() {
        adminBar.addClass('mode-edit').removeClass('mode-list');
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
        addressContentWrap.animate({
          opacity: 0
        }, 400, function() {
          $('.content_wrapper').css({
            'display': 'none'
          });
          wrapperAdd.css({
            'display': 'block'
          });
          addressContentWrap.css({
            'display': 'block'
          });
          setTimeout(function() {
            addressContentWrap.animate({
              opacity: 1
            }, 400);
          }, 50);
        });
      }

      function switchEdit(e) {
        adminBar.addClass('mode-edit').removeClass('mode-list');
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
        addressContentWrap.animate({
          opacity: 0
        }, 400, function() {
          $('.content_wrapper').css({
            'display': 'none'
          });
          $('#' + editId[e]).css({
            'display': 'block'
          });
          addressContentWrap.css({
            'display': 'block'
          });
          setTimeout(function() {
            addressContentWrap.animate({
              opacity: 1
            }, 400);
          }, 50);
        });
      }

      function init() {
        addressList.on({
          'click': function() {
            event.preventDefault();
            switchList();
          }
        });

        addressEdit.on({
          'click': function() {
            event.preventDefault();
            switchAdd();
          }
        });

        $.each($('article').find('.btn_edit'), function(index) {
          editbutton[index] = $(this);
          editId[index] = $(this).attr('formId');
          editbutton[index].on({
            'click': function() {
              console.log(editId[index]);
              switchEdit(index);
            }
          });
        });

      }

      init();

    }

    if (document.getElementById('addressContentWrap')) {
      switchAddressFunction();
    }

    function setHankaku2Zenkaku(str){
      var nrwStr = str.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }).replace(/[ー]/g, '').replace(/[−]/g, '');
      return nrwStr;
    }



    function hankaku2Zenkaku(target) {
      var str = target.val();
      str = str.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }).replace(/[ー]/g, '').replace(/[−]/g, '');

      console.log('str:' + str);
      target.val(str.trim().replace(/\s+/g, ''));
    }

    $('.input-number').on({
      'blur': function(){
        hankaku2Zenkaku($(this));
      }
    });

    function hankaku2ZenkakuAdd(target) {
      var str = target.val();
      str = str.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      }).replace(/[ー]/g, '');

      console.log('str:' + str);
      target.val(str.trim().trim().replace(/\s+/g, ''));
    }

    $('.input-address').on({
      'blur': function(){
        hankaku2ZenkakuAdd($(this));
      }
    });


    function hankana2Zenkana(str) {
      var kanaMap = {
          'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
          'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
          'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
          'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
          'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
          'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
          'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
          'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
          'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
          'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
          'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
          'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
          'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
          'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
          'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
          'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
          'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
          'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
          '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
      };
      var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
      return str.replace(reg, function (match) {return kanaMap[match];}).replace(/ﾞ/g, '゛').replace(/ﾟ/g, '゜');
    }

    $('.input-kana').on({
      'blur': function(){
        var value = $(this).val();
        var value = hankana2Zenkana(value.trim().replace(/\s+/g, ''));
        $(this).val(value);
      },
    });


    function setContactForm(target){
      var ERROR_MESSAGE_CLASSNAME = 'errorMsg'; //エラー時のメッセージ要素のclass名
      var ERROR_INPUT_CLASSNAME = 'errorInput'; //エラー時のinput要素のclass名
      var errorCount = 0;
      var submitWrap = $('#submit');
      var submitButton = $('#submitButton input');
      var items = []; //チェック対象となるテキスト入力要素を格納した配列

      //項目チェックする
      var checkAll = function(){
        errorCount = 0;

        //input,textareaのチェック
        for( var i=0; i<items.length; i++ ){
          if( items[i].prop('isSuccess') == false ){
            errorCount++;
          };
        };

        console.log('errorCount:' + errorCount);

        if( errorCount == 0 ){
          submitButton.removeClass('disabled');
        }else{
          submitButton.addClass('disabled');
        };
      };

      //エラーメッセージの追加
      var addErrorMessage = function(selector, msg){
        removeErrorMessage(selector);
        selector.parent('div').append('<span class="attention '+ERROR_MESSAGE_CLASSNAME+'">'+msg+'</span>');
        selector.addClass(ERROR_INPUT_CLASSNAME);
      };

      //エラーメッセージの削除
      var removeErrorMessage = function(selector){
        var msgSelector = selector.parent('div').find('.'+ERROR_MESSAGE_CLASSNAME);
        if( msgSelector.length != 0 ){
          msgSelector.remove();
          selector.removeClass(ERROR_INPUT_CLASSNAME);
        };
      };

      //input,textareaの未入力チェック
      var checkEmptyText = function(selector, msg){
        if( selector.val() == '' ||  selector.val() == null){
          addErrorMessage(selector, msg);
          selector.prop('isSuccess', false);
        }else{
          removeErrorMessage(selector);
          selector.prop('isSuccess', true);
        };
      };

      var emptyThrough = function(selector){
        if( selector.val() == '' ||  selector.val() == null){
          removeErrorMessage(selector);
          selector.prop('isSuccess', true);
        }
      };

      //radioの未入力チェック
      var checkRadioBox = function(selector, msg){
        if( selector.prop("checked")){
          removeErrorMessage(selector);
          selector.prop('isSuccess', true);
        }else{
          addErrorMessage(selector, msg);
          selector.prop('isSuccess', false);
        };
      };

      //文字列のフォーマットチェック
      function checkFormatText(selector, _mode, msg){
        var value = selector.val();
        switch(_mode){
          //全角のみ
          case 0:
            if(value.match(/^[^ -~｡-ﾟ]*$/)){
              selector.prop('isSuccess', true);
              removeErrorMessage(selector);
            }else{
              selector.prop('isSuccess', false);
            };
            break;
          //ふりがなのみ
          case 1:
            if(value.match(/^[\u3040-\u309F]+$/)){
              selector.prop('isSuccess', true);
            }else{
              selector.prop('isSuccess', false);
            };
            break;
          //半角数字のみ
          case 2:
            if(value.match(/^[0-9\-]+$/) || value.length < 1){
              selector.prop('isSuccess', true);
            }else{
              selector.prop('isSuccess', false);
            };
            break;
          //メールアドレスかどうか
          case 3:
            if(value.match(/^[a-zA-Z0-9!$&*.=^`|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}$/)){
              selector.prop('isSuccess', true);
            }else{
              selector.prop('isSuccess', false);
            };
            break;
          //カタカナのみ
          case 4:
            if(value.match(/^[\u30A0-\u30FF]+$/) || value.match(/^[\uFF61-\uFF9F]+$/)){
              selector.prop('isSuccess', true);
            }else{
              selector.prop('isSuccess', false);
            };
            break;
          //全てエラーにする
          case 5:
            selector.prop('isSuccess', false);
            break;
        };
        if( selector.prop('isSuccess') == false ){
          addErrorMessage(selector, msg);
        }else{
          removeErrorMessage(selector);
        };
      };

      //初期設定
      var init = function(){
        target.find('input[type=button]').attr('disabled', false);
        //submitイベントの設定
        target.on({
          'submit': function(){
            checkAll();
          }
        });
        //input要素を配列に格納
        items = [
          target.find('input[name="lastName"]'), //0 お名前(姓)
          target.find('input[name="firstName"]'), //1 お名前(名)
          target.find('input[name="useremail"]'), //2 メールアドレス
          target.find('input[name="useremail2"]'), //3 メールアドレス(確認用)
          target.find('textarea[name="content"]'), //4  お問い合わせ内容
          target.find('input[name=agreement]'), //5 プラポリへの合意
        ];
        //input要素のプロパティを設定
        $.each(items, function(index){
          items[index].prop('isSuccess', false);
        });


        //enterキーでsubmitしてしまうのを防止する
        target.find('input[type=text]').on({
          'keypress': function(e){
            if( (e.keyCode == 13) ) return false;
          }
        });

        //0 お名前(姓)
        items[0].on({
          'blur': function(){
            checkEmptyText( items[0], '※お名前(姓)は必須です。');
            checkAll();
          }
        });

        //1 お名前(名)
        items[1].on({
          'blur': function(){
            checkEmptyText( items[1], '※お名前(名)は必須です。');
            checkAll();
          }
        });

        //2 メールアドレス
        items[2].on({
          'blur': function(){
            checkEmptyText( items[2], '※メールアドレスは必須です。');
            if( items[2].prop('isSuccess') ) checkFormatText( items[2], 3, '※メールアドレスの形式をご確認ください' );
            checkAll();
          }
        });

        //3 メールアドレス(確認用)
        items[3].on({
          'blur': function(){
            checkEmptyText( items[3], '※確認用メールアドレスは必須です。');
            if( items[3].prop('isSuccess') ){
              checkFormatText( items[3], 3, '※確認用メールアドレスの形式をご確認ください' );
              if(items[2].val() != items[3].val()){
                checkFormatText( items[3], 5, '※メールアドレスが一致しません。' );
              }
            }

            checkAll();

          }
        });

        //4 お問い合わせ内容
        items[4].on({
          'blur': function(){
            checkEmptyText( items[4], '※お問い合わせ内容は必須です。' );
            checkAll();
          }
        });

        items[5].prop('isSuccess', true);

        //0 プラポリへの合意
        items[5].on({
          'change': function(){
            var agreeState = $('input[name=agreement]:checked').val();
            if(agreeState == 1){
              $('#submitButton').removeClass('disabled');
            }else{
              $('#submitButton').addClass('disabled');
            }
          }
        });

        submitButton.on({
          'click': function(){
            checkEmptyText( items[0], '※お名前(姓)は必須です。');
            checkEmptyText( items[1], '※お名前(名)は必須です。');
            checkEmptyText( items[2], '※メールアドレスは必須です。');
            if( items[2].prop('isSuccess') ) checkFormatText( items[2], 3, '※メールアドレスの形式をご確認ください' );
            checkEmptyText( items[3], '※確認用メールアドレスは必須です。');
            if( items[3].prop('isSuccess') ){
              checkFormatText( items[3], 3, '※確認用メールアドレスの形式をご確認ください' );
              if(items[2].val() != items[3].val()){
                checkFormatText( items[3], 5, '※メールアドレスが一致しません。' );
              }
            }
            checkEmptyText( items[4], '※お問い合わせ内容は必須です。' );

            checkAll();
            if( errorCount == 0 ){
              processOrderContent();
            }else{
              alert('入力内容に不備があります。入力内容を確認いただき、再度送信ボタンを押してください。');
              var offset = $('header').outerHeight();
              var scrollHeight = $('#contactWrap').offset().top;
              $("html, body").animate({
                scrollTop: scrollHeight - offset
              }, 300);
            };
          }
        })
      };

      function processOrderContent(){
        $('#submitButton').addClass('completed');
        $('#ajaxLoader').addClass('loading_state');
        // お名前
        var userName = target.find("input[name=lastName]").val() + target.find("input[name=firstName]").val();
        // メールアドレス
        var userMail = target.find("input[name=useremail]").val();
        //種別
        var content = target.find("textarea[name=content]").val();
        event.preventDefault();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjTnS7OK3ismY6zJdr-8voqq_Bjf_23j92-OqFq647GDQInQ/formResponse",
          data: {
            "entry.1215989745": userName,
            "entry.33351572": userMail,
            "entry.1082353849": content,
          },
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              setTimeout(function() {
                $('#ajaxLoader').removeClass('loading_state');
                $('#submitButton').remove();
                $('#statusMessage').addClass('complete').html('<span class="text">入力内容は正常に送信されました。<span>自動返信メールをご確認ください。</span></span>');
                /*location.href = 'https://' + location.hostname + '/pages/completed'*/
              }, 1000);
            },
            200: function () {
              $('#ajaxLoader').removeClass('loading_state');
              $('#submitButton').remove();
              $('#statusMessage').addClass('error').html('<span class="text">送信に失敗しました。お手数ではございますが、時間を置いてもう一度お試しください。</span>');
              setTimeout(function() {
                location.href = 'https://' + location.hostname + '/'
              }, 3000);
            }
          }
      });
    }

      init();

    };



    if (document.getElementById('contactWrap')) {
      setContactForm($('#contactWrap'));
    }

  };

  preSetScript();

  //PJAXの制御
  function pjaxControll() {
    var linkTarget = [];
    var linkType = [];
    var linkURL = [];
    var humButton = $('#humButton button')

    function addPjaxClass() {
      $.each($('body').find('a'), function(index) {
        linkTarget[index] = $(this).attr('target');
        linkType[index] = $(this).attr('linkType');
        if (linkTarget[index] != '_blank' || linkTarget[index] == undefined) {
          if(linkTarget[index] != '_self'){
            if (linkType[index] != 'langChange') {
              $(this).addClass('pjax');
            }
          }
        }
      });
    }

    addPjaxClass();

    // pjax遷移開始
    var nextUrl = '';
    $(document).on('click', '.pjax', function(e) {
      var linkType = $(this).attr('target');
      var linkProp = $(this).attr('linkType');
      var linkURL = $(this).attr('href');
      $.each($('body').find('a'), function(index) {
        /*$(this).css('pointer-events', 'none');*/
      });
      if (linkType != '_blank' || linkType == undefined) {
        if (linkURL != '/cart' || linkURL != '/account/login') {
          e.preventDefault();
          nextUrl = $(this).attr('href');
          $('header').addClass('rolled');
          if (linkProp == 'headerLink') {
            setTimeout(function() {
              $('#humMenu').find('button').click();
            }, 500);
          }
          if (nextUrl.indexOf('logout') == -1) {
            // 遷移先のURLを取得
            $('#container').animate({
              opacity: 0
            }, 250, function() {
              $.pjax({ //エフェクトが終わったらPjaxイベント
                url: nextUrl,
                container: '#container',
                fragment: '#container',
                timeout: 5000,
              });
              console.log('nextUrl:' + nextUrl);
              console.log('nextUrl.indexOf:' + nextUrl.indexOf('headerRolled'));
              setTimeout(function() {
                if (document.getElementById('brandIntroduction')) {
                  $('#brandIntroduction').css({
                    'display': 'none'
                  });
                }
                if (document.getElementById('headerRolled') && nextUrl.indexOf('headerRolled') == -1) {
                  $('header').removeClass('rolled').removeClass('underpage');
                }
              }, 1000);

            });
          } else {
            location.href = nextUrl;
          }
        }
      }
    });

    $(document).on('change', '.pjax-select', function(e) {
        var nextUrl = '';
        e.preventDefault();
        nextUrl = $(this).val();
        if (nextUrl.indexOf('logout') == -1) {
          // 遷移先のURLを取得
          $('#container').animate({
            opacity: 0
          }, 250, function() {
            $.pjax({ //エフェクトが終わったらPjaxイベント
              url: nextUrl,
              container: '#container',
              fragment: '#container',
              timeout: 5000,
            });
            console.log('nextUrl:' + nextUrl);
            console.log('nextUrl.indexOf:' + nextUrl.indexOf('headerRolled'));
            setTimeout(function() {
              if (document.getElementById('headerRolled') && nextUrl.indexOf('headerRolled') == -1) {
                $('header').removeClass('rolled').removeClass('underpage');
              }
              if (document.getElementById('brandIntroduction')) {
                $('#brandIntroduction').css({
                  'display': 'none'
                });
              }
            }, 500);

          });
        } else {
          location.href = nextUrl;
        }
    });

  //Pjaxイベントが終わったときの動作
  $(document).on('pjax:end', function() {
    addPjaxClass();
    /*asyncLoad();*/
    $.each($('body').find('a'), function(index) {
      /*$(this).css('pointer-events', 'all');*/
    });
    $('#container').animate({
      opacity: 1
    }, 250, function() {
      preSetScript();
    });
    $('#innerWrapper').animate({
      opacity: 1
    }, 250, function() {});
  });

  // タイムアウト時
  $(document).on('pjax:timeout', function() {
    location.href = nextUrl;
    $('#container').animate({
      opacity: 1
    }, 250);
    $('#innerWrapper').animate({
      opacity: 1
    }, 250, function() {});
    preSetScript();
    addPjaxClass();
  });

}

pjaxControll();

});

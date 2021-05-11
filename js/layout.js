$(function() {

  //フロントリダイレクト
  function redirectColorMeURL(){
    var currentURL = location.href;
    console.log(currentURL);
    if(currentURL.indexOf('/?mode') !=  -1){
      var redirectURL = currentURL.replace("/?mode", "/redirect?mode");
      console.log(redirectURL);
      location.href = redirectURL;
    }
    if(currentURL.indexOf('/?pid') !=  -1){
      var redirectURL = currentURL.replace("/?pid", "/redirect?pid");
      console.log(redirectURL);
      location.href = redirectURL;
    }
  }

  redirectColorMeURL();

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
          if (document.getElementById('itemDetail')) {
            $("section").each(function() {
              var sectionimgPos = $(this).offset().top;
              var sectionscroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (sectionscroll + 300 > sectionimgPos - windowHeight + windowHeight) {
                var setClass = $(this).attr('id');
                $('#fixedCartWrap').removeClass('main wrap01 features scent wrap02 detail relation journal sectionBack');
                $('#fixedCartWrap').addClass(setClass);
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
        menuState = 1;
      } else {
        $('body').removeClass('fixed');
        $('body').attr('style', '');
        $('html, body').prop({scrollTop: current_scrollY});
        $('#slideMenuNew').removeClass('open');
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

  // 商品詳細情報の開閉部分
  function detailToggleControll(target) {
    var controllButton = target.find('button');
    var buttonHeight = controllButton.outerHeight();
    var toggleContent = target.find('.toggle_content');
    var toggleState = 0;

    function toggleMove(){
      var buttonHeight = controllButton.outerHeight();
      var toggleHeight = toggleContent.outerHeight();
      if(toggleState == 0){
        var contentHeight = buttonHeight + toggleHeight + 30;
        controllButton.addClass('open');
        toggleState = 1;
      }else{
        var contentHeight = buttonHeight;
        controllButton.removeClass('open');
        toggleState = 0;
      }
      target.css({height: contentHeight + 'px'});
    }

    function init(){
      target.css({height: buttonHeight + 'px'});
      controllButton.on({
        'click': function() {
          toggleMove();
        }
      });
    }

    init();

  }

  if (document.getElementById('itemDetail')) {
    detailToggleControll($('#detailToggle'));
  }
  
  function productInitNum(target){
    var numberInput = [];
    var lotNumer;
    
    function syncAllNumberInput(){
      $.each(target.find('input[type=number]'), function(index) {
        $(this).attr('value', lotNumer);
      });
    }
    
    function init(){
      $.each(target.find('input[type=number]'), function(index) {
        console.log('index:' + index);
        $(this).on({
          'change': function() {
            lotNumer = $(this).val();
            syncAllNumberInput();
          }
        });
      });
    }
    
    init();
    
  }
  
  if (document.getElementById('itemDetail')) {
    productInitNum($('body'));
  }

  //関連商品プラグインをslick用いて表示させる
  function relatedProductArrange(target){
    var relatedInfo = [];
    var relatedSlider = $('#relatedSlider');

    function init(){
      $.each(target.find('li'), function(index) {
        relatedInfo[index] = $(this).html();
        $(this).remove();
      });
      $.each(relatedSlider.find('.item_box'), function(index) {
        $(this).append(relatedInfo[index]);
      });
    }

    init();

  }
  if (document.getElementById('itemDetail')) {
    relatedProductArrange($('.relatedWrap'));
  }



  //商品詳細のバリエーション選択欄
  function variationToggle(target){
    var toggleState = 0;
    var wrap = target.find('.variation_wrap');
    var button = target.find('.display_wrap');
    var buttonHeight = button.outerHeight();
    var toggle = target.find('.display_toggle');
    var toggleHeight = toggle.outerHeight();
    var currentURL = location.href;
    var itemNumber = currentURL.split("products/");
    var kataban = itemNumber.slice(-1)[0];

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
      $.each(target.find('a'), function(index) {
        var linkHref = $(this).attr('href');
        var linkText = $(this).find('.title').html();
        var variationKataban = linkHref.split("products/");
        if (kataban == variationKataban.slice(-1)[0]) {
          $(this).addClass('current');
          $('#selectedVar').html(linkText);
        }
      });
      target.find()
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
    var fixedPopButton = $('#fixedPopButton');
    var popBg = $('#popBg');
    var giftOptionFields = $('.giftOptionFields');
    var optionValue = [];
    var mizuhiki = $('.mizuhiki');
    var popClose = $('#popClose');
    var optionFix = $('#optionFix');
    var tesageState = $("input[name='tesage']");
    var messageState = $('input[name="message"]');
    var muzihikiState = $('input[name="mizuhiki"]');
    var tesageDisplay = $('#tesageDisplay');
    var mizuhikiDisplay = $('#mizuhikiDisplay');
    var tesageCheck;
    var mizuhikiCheck;
    var messageCheck;

    function withMessage(){
      if(tesageCheck == 'tesage' && mizuhikiCheck == 'mizuhiki'){
        giftOptionFields.val(optionValue[7]);
      }else if(tesageCheck != 'tesage' && mizuhikiCheck == 'mizuhiki'){
        giftOptionFields.val(optionValue[5]);
      }else if(tesageCheck == 'tesage' && mizuhikiCheck != 'mizuhiki'){
        giftOptionFields.val(optionValue[6]);
      }else if(tesageCheck != 'tesage' && mizuhikiCheck != 'mizuhiki'){
        giftOptionFields.val(optionValue[4]);
      }
    }

    function withoutMessage(){
      if(tesageCheck == 'tesage' && mizuhikiCheck == 'mizuhiki'){
        giftOptionFields.val(optionValue[3]);
      }else if(tesageCheck != 'tesage' && mizuhikiCheck == 'mizuhiki'){
        giftOptionFields.val(optionValue[1]);
      }else if(tesageCheck == 'tesage' && mizuhikiCheck != 'mizuhiki'){
        giftOptionFields.val(optionValue[2]);
      }else if(tesageCheck != 'tesage' && mizuhikiCheck != 'mizuhiki'){
        giftOptionFields.val(optionValue[0]);
      }
    }

    function optionShifter(){
      tesageCheck = $("input[name='tesage']:checked").val();
      mizuhikiCheck = $("input[name='mizuhiki']:checked").val();
      messageCheck = $("input[name='message']:checked").val();
      if(messageCheck == 'message'){
        withMessage();
      }else{
        withoutMessage();
      }
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
      var state = $('input[name="tesage"]:checked').val();
      var contentsHeight = mizuhiki.find('.mizuhiki_inner').outerHeight();
      if(state == 'tesage'){
        $('#0-3').click();
      }else{
        $('#0-2').click();
      }
    }

    function init(){

      giftOptionFields.find("option").each(function(index) {
        optionValue[index] = $(this).attr('value');
      });

      optionPopClose();

      optionSelect.on({
        'click': function(){
          optionPopOpen();
        }
      });

      fixedPopButton.on({
        'click': function(){
          optionPopOpen();
        }
      })

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
          optionShifter();
        }
      });

      tesageState.on({
        'click': function(){
          optionShifter();
        }
      });

      messageState.on({
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

  //定期購入 サイクル選択ポップアップ
  function subscriptionSelect(target){
    var optionSelecter = target.find('select');
    var purchaseWaySelect = [];
    var cycleSelectOption = [];
    var cycleSelect = [];
    var variationFields = [];
    var optionSelect = $('#optionSelect');
    var optionSelect02 = $('#optionSelect02');
    var giftOptionFields = $('.giftOptionFields');
    var popBg = $('#popBg');
    var optionState = 0;
    var cycleList = $('#cycleList');

    function purchaseWayShifter(){
      if(optionState == 0){
        purchaseWaySelect[1].click();
        giftOptionFields.val(variationFields[1]);
        optionSelecter.val(cycleSelectOption[1]);
        optionSelecter.click();
        $('input[name=sub_cycle]').val(["monthly1"]);
        optionState = 1;
      }else{
        purchaseWaySelect[0].click();
        giftOptionFields.val(variationFields[0]);
        optionSelecter.val(cycleSelectOption[1]);
        optionSelecter.click();
        $('input[name=sub_cycle]').val(["monthly1"]);
        optionState = 0;
      }
    }

    function init(){
      target.find("input[name=paywhirl-plan-selector-group]").each(function(index) {
        purchaseWaySelect[index] = $(this);
      });
      target.find("option").each(function(index) {
        cycleSelectOption[index] = $(this).val();
      });
      giftOptionFields.find("option").each(function(index) {
        variationFields[index] = $(this).val();
        console.log('optionVal:' + variationFields[index]);
      });

      cycleList.find("input[name=sub_cycle]").each(function(index) {
        var indexNum = Number(index);
        var num = indexNum + 1;
        cycleSelect[index] = $(this);
        cycleSelect[index].on({
          'click': function(){
            optionSelecter.val(cycleSelectOption[num]);
          }
        });
      });
      purchaseWaySelect[0].click();

      optionSelect.on({
        'click': function(){
          purchaseWayShifter()
        }
      });

      optionSelect02.on({
        'click': function(){
          purchaseWayShifter()
        }
      });

      popBg.on({
        'click': function(){
          purchaseWayShifter()
        }
      });
    }


    init();

  }

  if (document.getElementById('subscriptionTable')) {
    subscriptionSelect($('#subscriptionTable'));
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

    function init(){
      target.find(".list_item").each(function(index) {
        $(this).attr('number', index);
        giftListArray[index] = {
          html : $(this),
          price : Number($(this).attr('price').replace(/,/g, '')),
        };
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

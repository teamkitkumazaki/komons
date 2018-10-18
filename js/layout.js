$(function() {
      console.log('layout.js');

      // ローディングアニメーション
      function loadingAnimation() {
        var sliderImg = "https://journal.komons-japan.com/wp-content/themes/komons-theme/img/main_slide01.jpg";

        var imgPreloader = new Image();
        var img = $('.first_view');
        var originSrc = img.attr('src');
        img.attr('src',"");
        console.log(originSrc);

        img.on({
          'load': function() {
            setTimeout(function() {
              $('.load_inner').addClass('delete');
              $('body').addClass('loaded');

              setTimeout(function() {
                $('.slide_fil').addClass('loaded');

                setTimeout(function() {
                  $('.main_img').addClass('loaded');
                  $('.main_ttl').addClass('loaded');
                  backGroundSlider($('#sliderBtn'));
                }, 100);
              }, 1200);

            }, 1700);

          }
        })

        img.attr('src',originSrc);

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
            'load': function() {
              if ($('.underPage').length) {
                afterScroll();
              } else if (document.getElementById('contact')) {
                afterScroll();
              }
            }
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
            console.log(index);
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
      }

      if (document.getElementById('itemDetail')) {
        readTxtMove($('#leadTxt'));
      }

      //商品詳細の内容量・在庫状況の表示分岐
      function detailTxtEdit(target){
        var stockState = [];
        var volumeState = [];

        function init(){
          target.find('.stock').each(function(index) {
            stockState[index] = $(this).text();
            if(stockState[index] == ''){
              $(this).text('在庫あり');
            }else{
              $(this).text('在庫残り: ' + stockState[index]);
            }
          });
          target.find('.weight').each(function(index) {
            volumeState[index] = $(this).text();
            console.log(volumeState[index]);
            if(volumeState[index] == ''){
              $(this).parent('span').text('セット商品');
            }
          });
        }

        init();
      }

      if (document.getElementById('itemDetail')) {
        detailTxtEdit($('#itemDetail'));
      }


      // 商品一覧ページで「0円から未定」にテキストを差し替える
      function txtFreeToMitei(target) {
        var priceTxt = [];
        $.each(target.find('li'), function(index) {
          var priceTag = $(this).find('span.price');
          priceTxt[index] = priceTag.text();
          if (priceTxt[index] == '0円(税抜)') {
            priceTag.text('発売前');
          } else if (priceTxt[index] == '') {
            $(this).remove();
          }
        });
      }

      if (document.getElementById('itemList')) {
        txtFreeToMitei($('.products'));
      }

      //商品一覧ページからセット商品を除外する
      function setProRemove(target){
        var proCategory = [];

        function init(){
          $.each(target.find('li'), function(index) {
            var category = $(this).find('.cat_ttl span');
            proCategory[index] = category.text();
            console.log(proCategory[index]);
            if (proCategory[index] == 'Gift Set') {
              $(this).remove();
            }
          });
        }

        init();
      }

      if (document.getElementById('itemList')) {
        setProRemove($('.products'));
      }

      // 商品一覧ページのソート機能実装

      function filterProduct(target) {
        var dropdown = document.getElementById("cat");
        var optionVal = [];

        function onCatChange() {
            var u = dropdown.value;
            var url = 'https://www.komons-japan.com' + u + '#products';
            console.log(u);
            if (u !== 'undefined'){
              location.href = url;
            }
        }

          function init() {
            var  urlHash = location.hash;
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
               optionVal[index] = $(this).attr('value');
               if(optionVal[index] = search){
                 console.log(optionVal[index]);
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
            console.log(scrollObj[e]);
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
                'height': 90 + tagetHeight + 'px'
              });
              toggleState[e] = 1;
            } else {
              toggleButton[e].removeClass('active');
              var w = $(window).width();
              if( w > 750 ){
                toggleItem[e].css({
                  'height': 50 + 'px'
                });
              }else if( toggleButton[e].parent('div').hasClass('row2') ){
                toggleItem[e].css({
                  'height': 70 + 'px'
                });
              }else{
                toggleItem[e].css({
                  'height': 50 + 'px'
                });
              }

              toggleState[e] = 0;
            }
          }

          function init() {
            $.each(target.find('.toggle_item'), function(index) {
              toggleItem[index] = $(this);
              toggleButton[index] = $(this).find('.toggle_button');
              toggleContents[index] = $(this).find('.toggle_contents');
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

        //トップページ用ヘッダーの制御

        function topHeader(target){
          console.log('topHeader');

          function init(){
            target.addClass('fade');
          }

          init();

        }

        if (document.getElementById('index')) {
          topHeader($('#hLogo'));
        }

        //コンタクトフォームの制御
        function formControl(target){
          $("input").each(function() {
            $(this).attr('autocomplete', 'off');
          });

          $('.wpcf7-submit').on({
            'click': function(){
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

      });

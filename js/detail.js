$(function() {

  function itemDetailThumbnail(target) {
    var thumbBox = $('#thumbBox');
    var caption = $('#caption');
    var imgthumb = $('#imgthumb');
    var currentThumb = $('#currentThumb');
    var allThumb = $('#allThumb');
    var slideNextButton = $('#slideNext');
    var slidePrevButton = $('#slidePrev');
    var thumbButton = [];
    var currentSlide = 0;
    var imgObj = [];
    var imgAlt = [];
    var time = 300;
    var thumbLength = $('#thumbBox').find("li").length;

    function thumbChange(num) {
      $('#thumbBox').stop().animate({
        opacity: 0
      }, time, function() {
        $('.active').removeClass('active');
        currentThumb.text(num + 1);
        $('.slide' + currentSlide).addClass('active');
        $('#thumbBox').stop().animate({
          opacity: 1
        }, time);
      });
      /*thumbBox.attr('src', imgObj[num]);*/
    }

    function slideChange() {
      targetSlide = target.find('.slide' + currentSlide);
      target.find('.active_slide').removeClass('active_slide');
      targetSlide.addClass('active_slide');
      target.find('.current').text(currentSlide);
    };

    function slideNext() {
      if (currentSlide < thumbLength - 1) {
        currentSlide = currentSlide + 1;
      } else {
        currentSlide = 0;
      }
      thumbChange(currentSlide);
    };

    function slidePrev() {
      if (currentSlide == 0) {
        currentSlide = thumbLength - 1;
      } else {
        currentSlide = currentSlide - 1;
      }
      thumbChange(currentSlide);
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
      allThumb.text(thumbLength);
      currentThumb.text('1');
      $.each(target.find('li'), function(index) {
        thumbButton[index] = $(this);
        thumbButton[index].addClass('slide' + index);
      });

      slideNextButton.on({
        'click': function() {
          slideNext();
        }
      });

      slidePrevButton.on({
        'click': function() {
          slidePrev();
        }
      });

      $('#thumbBox').on({
        'dragstart': function(e) {
          startDragX = event.pageX;
        },
        'dragend': function(e) {
          endDragX = event.pageX;
          windowDrag();
        }
      });

      $('#thumbBox').on({
        'touchstart': function(e) {
          startTouchX = event.changedTouches[0].pageX;
        },
        'touchend': function(e) {
          endTouchX = event.changedTouches[0].pageX;
          tabTouch();
        }
      });

    }

    init();

  }
  if (document.getElementById('itemDetailNew')) {
    itemDetailThumbnail($('#thumbList'));
  }

  // 商品詳細ページ 数量インプットの操作
  function controllBuyingQuantity(target){
    var minusButton = target.find('#minusButton');
    var plusButton = target.find('#plusButton');
    var quantityInput = target.find('#quantityInput');
    var quantityNum;

    function controllQuantity(vector){
      quantityNum = quantityInput.val();
      if(vector == 1){
        quantityInput.attr('value', Number(quantityNum) + 1);
      }else{
        if(quantityNum != 1){
          quantityInput.attr('value', Number(quantityNum) - 1);
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

    }

    init();

  }

  if (document.getElementById('itemDetailNew')) {
    controllBuyingQuantity($('#quantityWrap'));
  }

  // 商品詳細ページ トグルレイアウト
  function itemDetailToggle(){
    var toggleItem = [];
    var toggleButton = [];
    var toggleContents = [];
    var toggleState = [];
    var ankerButton = [];
    var cartAnker = [];
    var cartNoteList = $('#cartNoteList');

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
            'height': buttonHeight + 'px'
          });
        toggleState[e] = 0;
      }
    }

    function ankerMove(e){
      var scrollHeight = $(cartAnker[e]).offset().top;
      var headerHeight = $('header').outerHeight();
      $("html, body").animate({
        scrollTop: scrollHeight - headerHeight
      }, 500);
      setTimeout(function() {
        if ( toggleState[e + 1] == 0 ) {
          $(cartAnker[e]).find('button').click();
        }
      }, 500);

    }


    function init(){
      $.each($('article').find('.toggle_item'), function(index) {
        toggleItem[index] = $(this);
        toggleButton[index] = $(this).find('button');
        toggleContents[index] = $(this).find('.toggle_content_new');
        $(this).css({'height': toggleButton[index].outerHeight() + 'px'});
        toggleState[index] = 0;
        toggleButton[index].on({
          'click': function() {
            toggleMove(index);
          }
        });
      });

      $.each(cartNoteList.find('button'), function(index) {
        ankerButton[index] = $(this);
        cartAnker[index] = $(this).attr('prop');
        ankerButton[index].on({
          'click': function() {
            ankerMove(index);
          }
        });
      });

    }

    init();
  }

  if (document.getElementById('itemDetailNew')) {
    itemDetailToggle();
  }

  // 縦幅が足りない場合の追従レイアウト調整

  function adjustStickyLayout(){
    var mainDetail = $('#mainDetail');
    console.log('adjustStickyLayout');

    function setAdjuster(){
      var stickyHeight = $('#mainDetail').outerHeight();
      if(stickyHeight > window.innerHeight){
        var offset = window.innerHeight - stickyHeight - 40;
        mainDetail.css({
          'top': offset + 'px'
        });
      }else{
        mainDetail.css({
          'top': 0 + 'px'
        });
      }
    }

    function init(){
      setAdjuster();
      $(window).on({
        'resize': function() {
          setAdjuster();
        }
      });
    }

    init();
  }

  if (document.getElementById('itemDetailNew')) {
    adjustStickyLayout();
  }

});

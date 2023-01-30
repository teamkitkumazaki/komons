$(function() {

  // キャンペーンフォームとGSSの連携
  function productOrderForm(target){
    var formWrap;
    var submitWrap = $('#submitWrap');
    var duration;
    var qouponCode;

    function setMyForm(target){
      console.log('setMyForm');
      var ERROR_MESSAGE_CLASSNAME = 'errorMsg'; //エラー時のメッセージ要素のclass名
      var ERROR_INPUT_CLASSNAME = 'errorInput'; //エラー時のinput要素のclass名
      var errorCount = 0;
      var submitButton = $('#sendContent');
      var items = []; //チェック対象となるテキスト入力要素を格納した配列

      //項目チェックする
      var checkAll = function(){
        console.log('checkAll');
        errorCount = 0;

        //input,textareaのチェック
        for( var i=0; i<items.length; i++ ){
          if( items[i].prop('isSuccess') == false ){
            errorCount++;
            console.log('errorItem:' + i);
          };
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
        var msgSelector = selector.parent().parent('div').find('.'+ERROR_MESSAGE_CLASSNAME);
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
          submitWrap.removeClass('disabled');
        }else{
          addErrorMessage(selector, msg);
          selector.prop('isSuccess', false);
          submitWrap.addClass('disabled');
        };
      };

      //文字列のフォーマットチェック
      function checkFormatText(selector, _mode, msg){
        var value = selector.val();
        console.log('value:' + value);
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
            if(value.match(/^[0-9]*$/)){
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
        };
        if( selector.prop('isSuccess') == false ){
          addErrorMessage(selector, msg);
        }else{
          removeErrorMessage(selector);
        };
      };

      //初期設定
      var init = function(){
        /*target.find('input[type=submit]').attr('disabled', true);*/
        //submitイベントの設定
        target.on({
          'submit': function(){
            checkAll();
          }
        });
        //input要素を配列に格納
        items = [
          target.find('input[name="userAddress"]'), //0 連絡用メールアドレス
          target.find('input[name="sex"]'), //1 性別
          target.find('select[name="duration"]'), //2 結婚年数
          target.find('textarea[name=complain]'), //3 パートナーへの不満
          target.find('textarea[name=praise]'), //4 パートナーへの感謝
        ];
        //input要素のプロパティを設定
        $.each(items, function(index){
          items[index].prop('isSuccess', false);
        });
        items[1].prop('isSuccess', true);

        //enterキーでsubmitしてしまうのを防止する
        target.find('input[type=text]').on({
          'keypress': function(e){
            if( (e.keyCode == 13) ) return false;
          }
        });
        //0 メールアドレス
        items[0].on({
          'blur': function(){
            checkEmptyText( items[0], '※メールアドレスをご入力ください。' );
            if( items[0].prop('isSuccess') ) checkFormatText( items[0], 3, 'アドレスの形式をご確認ください' );
            checkAll();
          }
        });
        //1 性別
        items[1].on({
          'blur': function(){}
        });
        //2 結婚年数
        items[2].on({
          'blur': function(){
            checkEmptyText( items[2], '※結婚年数を選択してください。');
            checkAll();
          }
        });
        items[3].on({
          'blur': function(){
            checkEmptyText( items[3], '※内容を記入してください。');
            checkAll();
          }
        });
        items[4].on({
          'blur': function(){
            checkEmptyText( items[4], '※内容を記入してください。');
            checkAll();
          }
        });
        submitButton.on({
          'click': function(){
            console.log('submit!');
            checkEmptyText( items[0], '※メールアドレスをご入力ください。' );
            if( items[0].prop('isSuccess') ) checkFormatText( items[0], 3, 'アドレスの形式をご確認ください' );
            checkEmptyText( items[2], '※結婚年数を選択してください。');
            checkEmptyText( items[3], '※項目を記入してください。');
            checkEmptyText( items[4], '※項目を記入してください。');
            checkAll();
            if( errorCount == 0 ){
              processOrderContent();
            }else{
              alert('入力内容に不備があります。入力内容を確認いただき、再度送信ボタンを押してください。');
              var scrollHeight = $('#form1122').offset().top;
              $("html, body").animate({
                scrollTop: scrollHeight - 200
              }, 300);
            };
          }
        })
      };

      init();

    };

    function processOrderContent(){
      $('#ajaxLoader').addClass('loading');
      var userAddress = target.find("input[name=userAddress]").val();
      var sex = target.find("input[name=sex]:checked").val();
      duration = target.find("select[name=duration]").val();
      var complain = target.find("textarea[name=complain]").val();
      var praise = target.find("textarea[name=praise]").val();
      qouponCode = target.find("select[name=duration] option:selected").attr('role');
      event.preventDefault();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScOzVeYN7NkTu1IjApvo7E_afkgN5wVsRa9rvQvJR_rUPrZPg/formResponse",
        data: {
          "entry.1599327278": userAddress,
          "entry.1468771714": sex,
          "entry.1720442721": duration,
          "entry.49884634": complain,
          "entry.2036821755": praise,
          "entry.1116743969": qouponCode,
        },
      type: "POST",
      dataType: "xml",
      statusCode: {
          0: function () {
            setTimeout(function() {
              $('#ajaxLoader').removeClass('loading');
              submitWrap.addClass('complete');
              $('#couponNum').text(duration + '%');
              $('#codeNum').text(qouponCode);
              var targetHeight = $('#couponInner').outerHeight();
              $('#couponCode').css({'height': targetHeight + 'px'});
              $('.submit_wrap').remove();
              $('#submitText').text('送信完了しました。');
            }, 1500);
          },
          200: function () {
            submitWrap.addClass('complete');
            resultMessage.text('メッセージ送信に失敗しました。大変お手数ではございますが、info@komons-japan.comまでお問い合わせください。')
          }
        }
    });
  }


    /*$('#sendContent').click(function() {
      processOrderContent();
    });*/

    $('#copyPaste').click(function() {
      var text = $('#codeNum').text();
      var textarea = $('<textarea class="hidden_area"></textarea>');
      textarea.text(text);
      $('#couponCode').append(textarea);
      textarea.select();
      document.execCommand('copy');
      alert('クリップボードにコピーしました！');
    });

    setMyForm($('#form1122'));

  };

    productOrderForm($('#form1122'));
});

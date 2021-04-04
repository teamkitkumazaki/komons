$(function() {

  function cartOptionController(target){
    var optionItem = [];
    var optionItemHeight = [];
    var optionItemLabel = [];
    var optionItemWrap = [];
    function init(){
      $.each(target.find('.option_item'), function(index) {
        optionItem[index] = $(this);
        optionItemHeight[index] = $(this).outerHeight();
        optionItemLabel[index] = $(this).find('label');
        optionItemWrap[index] = $(this).find('.input_wrap').outerHeight();
        optionItemLabel[index].on({
          'click': function() {
            if($(this).find('input[type=checkbox]:checked').val() == 'true'){
              optionItem[index].css({height: optionItemHeight[index] + optionItemWrap[index] + 15 + 'px'});
            }else{
              optionItem[index].css({height: optionItemHeight[index] + 'px'});
            }
          }
        });
      });
    }

    init();

  }

  if (document.getElementById('cart')) {
    cartOptionController($('article'));
  }
});

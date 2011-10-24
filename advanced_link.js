(function($) {

  Drupal.behaviors.advanced_link = {
    attach: function (context) {
      if($('.field-widget-advanced-link-widget').length){
        $('.field-widget-advanced-link-widget .form-select option').click(function(){
          var link_value = $(this).attr('value');
          $(this).parents('tr').find('.form-type-textfield:last input').attr('value',link_value);
        })
      } 
    }
  };
  
})(jQuery);




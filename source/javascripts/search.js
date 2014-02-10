$(function(){

  var menu = $('#page_start .menu_top');

  menu.find('.icono_search').on('mousedown', function(){
    menu.toggleClass('search_activated');

    if( menu.hasClass('search_activated') ){
      menu.find('#page_start_search').css('display', 'none').fadeIn(500, function(){ $(this).focus(); });
    }
  });

});

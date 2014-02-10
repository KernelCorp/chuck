$(function(){
  var window_middle;


  var circles_container = $('<div id="circles"></div>').appendTo('#app');
  for( i=0; i<6; i++ ){ 
    circles_container.append('<a href="#circle_div_'+i+'"></a>'); 
  }
  var circles = circles_container.children();


  var circles_half_height = circles_container.height() * 0.5;
  function placeCirclesContainer(){
    circles_container.css( 'top', window_middle - circles_half_height );
  }


  var circle_divs = $('.circle_div');
  var current_circle_div;
  function windowMiddleInside( circle_div ){
    div_top = circle_div.offset().top;
    div_bottom = div_top + circle_div.height();

    return div_top <= window_middle && div_bottom >= window_middle
  }
  function checkCircleDivs(){
    if( current_circle_div && windowMiddleInside( current_circle_div ) ){
      return;
    }

    circle_divs.each( function( i ){
      if( !windowMiddleInside($(this)) ) return;
      
      current_circle_div = $(this);
      circles.removeClass('on').eq(i).addClass('on');

      return false;
    });
  }


  $(window)
  .on( 'scroll resize', function(event) {
    window_middle = $(this).scrollTop() + $(this).height() * 0.5;
    placeCirclesContainer();
    checkCircleDivs();
  })
  .trigger('scroll');
});

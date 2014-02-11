$(function(){

  var schedule = $('#page_schedule');

  var schedule_slider = $("#page_schedule_days").sudoSlider({
    controlsShow: false,
    autoWidth: false
  })

  schedule.find('.icono_arrow_left').on('mousedown', function(){
    schedule_slider.goToSlide('prev');
  })

  schedule.find('.icono_arrow_right').on('mousedown', function(){
    schedule_slider.goToSlide('next');
  })


  var news = $('#page_news');

  var news_slider = $("#page_news_window").sudoSlider({
    controlsShow: false,
    autoWidth: false
  })

  news.find('.icono_arrow_left').on('mousedown', function(){
    news_slider.goToSlide('prev');
  })

  news.find('.icono_arrow_right').on('mousedown', function(){
    news_slider.goToSlide('next');
  })


  var styles = $('#page_fighting_style');
  var name = styles.find('.style_name').text( styles.find('.finghting_style').eq(0).data('style-name') );

  var styles_slider = $("#page_fighting_styles").sudoSlider({
    controlsShow: false,
    autoWidth: false,
    beforeAnimation: function( t ){
      var slide = $(this);
      name.fadeOut(500, function(){
        name.text( slide.data('style-name') ).fadeIn(500);
      });
    }
  })

  styles.find('.icono_arrow_left').on('mousedown', function(){
    styles_slider.goToSlide('prev');
  })

  styles.find('.icono_arrow_right').on('mousedown', function(){
    styles_slider.goToSlide('next');
  })

});

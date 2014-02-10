$(function(){

  var schedule = $('#page_schedule')

  schedule_slider = $("#page_schedule_days").sudoSlider({
    controlsShow: false,
    autoWidth: false
  })

  schedule.find('.icono_arrow_left').on('mousedown', function(){
    schedule_slider.goToSlide('prev');
  })

  schedule.find('.icono_arrow_right').on('mousedown', function(){
    schedule_slider.goToSlide('next');
  })


  var news = $('#page_news')

  news_slider = $("#page_news_window").sudoSlider({
    controlsShow: false,
    autoWidth: false
  })

  news.find('.icono_arrow_left').on('mousedown', function(){
    news_slider.goToSlide('prev');
  })

  news.find('.icono_arrow_right').on('mousedown', function(){
    news_slider.goToSlide('next');
  })

});

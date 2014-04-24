
$(document).ready(function(){
  var pagelength = $('.page').length
  var windowwidth = $(window).width()
  var windowHeight = $(window).height()
  var scroll = -(pagelength-1)*windowwidth
  $('.page').height(windowHeight)
  console.log($('.page').length)
  $('.page-scroll').width($('.page').length*$(window).width())
  $('.page').width($(window).width())
  $('.page-scroll').on('swipeleft',function(){
    if ($('.page-scroll').css("left") == scroll+'px'){
    }else{
      $('.page-scroll').animate({
        left: "-=" + $(window).width()
      })
    }
  });
  $('.page-scroll').on('swiperight',function(){
    if ($('.page-scroll').css("left") == "0px"){

    }else{
      $('.page-scroll').animate({
        left: "+=" + $(window).width()
      })
    }
  });
});


$(document).ready(function(){
  $('.refresh').click(function(){
    location.reload(true);
  });
});

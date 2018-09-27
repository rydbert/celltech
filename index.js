$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#change-navbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("header").css('background-color', 'white');
          $("header").css('border-bottom', '1px solid lightgrey');
          $("img:first").attr('src', './img/logo.png')
          $("#main-menu").css('color', '#0A3C6D');
       } else {
          $('header').css('background-color', '#0A3C6D');
          $("header").css('border-bottom', 'none');
          $("img:first").attr('src', './img/logo_white.png')
          $("#main-menu").css('color', '#fff');
       }
   });
    }
});

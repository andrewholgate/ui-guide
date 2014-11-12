$(document).ready(function(){
  var top = $('.sub-nav').offset().top - parseFloat($('.sub-nav').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('.sub-nav').addClass('sticky');
    } else {
      // otherwise remove it
      $('.sub-nav').removeClass('sticky');
    }
  });
});

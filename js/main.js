$(document).ready(function(){
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#sidebar').addClass('sticky');
    } else {
      // otherwise remove it
      $('#sidebar').removeClass('sticky');
    }
  });
});

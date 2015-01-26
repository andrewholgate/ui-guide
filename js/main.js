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

  $('#js-view-grid').click(function(e){
    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('list-view').addClass('inline-grid')
    $items.removeClass('pure-u-md-1-2').addClass('pure-u-md-1-8')
    $tabs.removeClass('current')
    $(this).addClass('current')
  })

  $('#js-view-list').click(function(e){
    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('inline-grid').addClass('list-view')
    $items.removeClass('pure-u-md-1-8').addClass('pure-u-md-1-2')
    $tabs.removeClass('current')
    $(this).addClass('current')
  })

  $('.inline-item', '.inline-grid.icons').click(function(){
    var desc = $(this).siblings('.desc'),
        icons = $('ul.icons .inline-item').siblings('.desc');

    icons.fadeOut(100);
    desc.fadeToggle(100).one('click', function(){
      $(this).fadeOut(100);
    });
  })
});

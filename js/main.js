$(document).ready(function(){

  //  Instantiate FastClick
  $(function() { FastClick.attach(document.body); });

  $('#js-nav-trigger').click(function(e){
    var $menu = $('#js-main-nav');
    $menu.toggleClass('open');
  });

  $('#js-view-grid').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('list-view').addClass('inline-grid')
    $items.removeClass('pure-u-1-2').addClass('pure-u-1-4 pure-u-md-1-8')
    $tabs.removeClass('active')
    $(this).addClass('active')
  })

  $('#js-view-list').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('inline-grid').addClass('list-view')
    $items.removeClass('pure-u-1-4 pure-u-md-1-8').addClass('pure-u-1-2')
    $tabs.removeClass('active')
    $(this).addClass('active')
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

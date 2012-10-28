$(function(){
  $("#hero").slides();
  $("#hero2").slides();

  $(document).scroll(function(){
    if ($(document).scrollTop() >= 533) {
      $("#sticky-subnav").css("position", "fixed");
      $("#hero").css("margin-bottom", "35px");
    } else {
      $("#sticky-subnav").css("position", "relative");
      $("#hero").css("margin-bottom", "0");
    }
  });

  $('#buzz-masonry').masonry({
    itemSelector: '.box',
    columnWidth: 332,
    gutterWidth: 13,
    isAnimated: true
  });

  $('.filter').click(function() {
    $('.checkbox').css('background-color', '#FFFFFF');
    $(this).find('.checkbox').css('background-color', '#999999');
    $('.' + $(this).attr('data-filter')).fadeOut(function(){
      $(this).remove();
      $('#buzz-masonry').masonry('reload');
    });
  });


});

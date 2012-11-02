$(function(){
  $("#hero").slides({
    paginationClass: 'hero-pagination',
    play: 5000
  });
  $("#hero2").slides();
  $("#mobile-hero").slides();
  $("#menu-hero").slides({
    generatePagination: false,
    paginationClass: 'menu-pagination',
    play: 5000
  });

  $(document).scroll(function(){
    if ($(document).scrollTop() >= 492) {
      $("#sticky-subnav").css("position", "fixed");
      $("#hero").css("margin-bottom", "35px");
    } else {
      $("#sticky-subnav").css("position", "relative");
      $("#hero").css("margin-bottom", "0");
    }
  });

  if ($('#buzz-masonry').length != 0) {
    $('#buzz-masonry').imagesLoaded(function() {
      $('#buzz-masonry').masonry({
        itemSelector: '.box',
        columnWidth: 230,
        gutterWidth: 21,
        isAnimated: true
      });
    });
  }

  $('.filter').click(function() {
    $('.checkbox').css('background-color', '#FFFFFF');
    $(this).find('.checkbox').css('background-color', '#999999');
    $('.' + $(this).attr('data-filter')).fadeOut(function(){
      $(this).remove();
      $('#buzz-masonry').masonry('reload');
    });
  });

  $('.top').click(function() {
     $('html, body').animate({
       scrollTop: 0
     }, 500);
   });

  $(".subnav-link").click(function() {
    var that = this;
     $('html, body').animate({
       scrollTop: $("#" + $(that).attr('data-target')).offset().top
     }, 500);
   });

});

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
  $(".mobile-carousels").slides({
    generateNextPrev: true
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

  $('.collapsable').click(function() {
    $(this).next().slideToggle();
  });

  $('.filter').click(function() {
    $('.checkbox').css('background-color', '#FFFFFF');
    $(this).find('.checkbox').css('background-color', '#999999');
    $('#buzz-masonry').children().addClass('box');
    if ($(this).attr('data-filter') === 'all') {
      $('.box').fadeIn(function() {
        $('#buzz-masonry').masonry('reload');
      });
    } else {
      $('.box').not('.' + $(this).attr('data-filter')).fadeOut(function(){
        $(this).removeClass('box');
        $('#buzz-masonry').masonry('reload');
      });
      $('.' + $(this).attr('data-filter')).fadeIn();
    }
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

  $('#list-button').click(function() {
    $('.subnav.mobile').toggle();
  });
  $('.buttons').click(function() {
    $(this).find('.subnav').toggle();
  });

  $(window).resize(function() {
    if ($(window).width() >= 768) {
      $('.menu-detail').css('display', 'block');
    }
  });

});

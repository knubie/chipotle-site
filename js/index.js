$(function(){
  $("#hero").slides();

  $(document).scroll(function(){
    if ($(document).scrollTop() >= 533) {
      $("#sticky-subnav").css("position", "fixed");
    } else {
      $("#sticky-subnav").css("position", "relative");
    }
  });
});

$(document).ready(function(){ 
 
$(window).scroll(function(){
  // Scroll To Top
  if ($(this).scrollTop() > screen.height/4) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
 
$('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
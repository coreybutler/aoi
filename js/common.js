$('#quicknav a i[rel=tooltip]').tooltip({
  placement: 'bottom'
});

$('[rel=tooltip]').tooltip();

$('[rel=tooltip-right]').tooltip({
  placement: 'right'
});

var shell = $('#contentshell'),
    shellPosition = function(){
      shell.animate({
        "margin-left": $('#toolbar').width()+20
      });
    };
if ($('#cookbookcontent').length == 0){
  shellPosition();    
}
$(window).resize(shellPosition);
$(window).on('scroll',function(){
  // Add/remove scrollToTop as necessary
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

$('#toolbar > .tile').click(function(e){
  document.location = e.currentTarget.attributes['data-url'].value;
});



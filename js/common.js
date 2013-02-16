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

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36513770-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

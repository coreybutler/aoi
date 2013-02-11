$(document).ready(function(){
  var tldr = $('#tldr')[0].innerHTML;
  $('#tldr').empty();
  $('#tldr').append('<div class="page">'+tldr+'</div>');
  $('body').append('<div id="tldrtab" class="bg-color-blue">tl;dr</div>');
  $('#tldrtab')
    .css('top',$('.nav-bar').height()||0)
    .on('mouseover',function(){
      var b = $('.nav-bar').height()-$(document).scrollTop();
      $('#tldr').animate({
        top: b > 0 ? b : 0
      },250);
      $('#tldrtab').animate({
        top: -50
      });
    });
  
  $(window).on('scroll',function(){
    var b = $('.nav-bar').height()-$(document).scrollTop();
    if ($('#tldrtab').scrollTop() >= 0){
      $('#tldrtab').css('top',b >= 0 ? b : 0);
    }
  });
  
  var closetldr = function(){
    var b = $('.nav-bar').height()-$(document).scrollTop();
    $('#tldrtab').animate({
      top: b >= 0 ? b : 0
    },200);
    $('#tldr').animate({
      top: -1000
    },400);
  };
  
  $('#tldr').on('mouseout',closetldr);
});
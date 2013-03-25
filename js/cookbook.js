
/*$(function(){
  $('#cookbookcontent').masonry({
    // options
    itemSelector : '.item',
    columnWidth : 240
  });
});
*/
$('#toolbar').addClass('cookbook');
$('.item .date').tooltip({
  placement: 'top'
});

$(function(){

  var $container = $('#cookbookcontent'),
      $checkboxes = $('#filters input');

  $container.isotope({
    itemSelector: '.item',
    animationEngine: 'bestAvailable'
  });

  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.red', '.blue'] -> '.red, .blue'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });

  $('#shuffle').click(function(){
    $container.isotope('shuffle');
  });

  $(".timeago").timeago();

  //$container.isotope('shuffle');
  $container.isotope('reLayout');

});
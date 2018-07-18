var $popoverTrigger = $('.popover__trigger'),
    $popover = $('.popover'),
    $popoverContainer = $('.popover__container'),
    popoverActive = 'popover--active';


$popoverTrigger.on('click', function(e) {
  e.preventDefault();

  console.log('hey');
  // $(this).toggleClass(popoverActive);
  $(this).parent($popoverContainer).find($popover).toggleClass(popoverActive);
});

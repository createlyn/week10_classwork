var $modalTrigger = $('.modal__trigger-btn'),
    $modal = $('.modal'),
    $modalClose = $('.modal__close'),
    $modalActive = 'modal--active';

$modalTrigger.on('click', function(e) {
  e.preventDefault();
  console.log('hello');

  $(this).siblings($modal).addClass($modalActive);
  $modal.attr('aria-hidden', 'false');
});

$modalClose.on('click', function(e){
  e.preventDefault();
  console.log('I\'m closing');

  $(this).parents($modal).removeClass($modalActive);
});

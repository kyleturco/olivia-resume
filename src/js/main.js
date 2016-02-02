$(document).ready(function ready() {

  function init() {
    photoModal();
  }

  // tells the modal which photo to open
  function photoModal() {
    $('.photo-thumb').on('click', function(e) {
      var dataUrl = $(this).attr('src');
      $('#photoModal img').attr('src', $(this).attr('src'));
    });
  };

  init();
});

$(document).ready(function ready() {

  function init() {
    photoModal()
  }

  var $photoThumb = $('.photo-thumb')
  var $modalImg = $('#photoModal img')

  // tells the modal which photo to open
  function photoModal() {
    $photoThumb.on('click', function(e) {
      var dataUrl = $(this).attr('src')
      $modalImg.attr('src', dataUrl)
    })
  }

  init()
})

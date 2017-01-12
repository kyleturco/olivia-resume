$(document).ready(function ready() {

  var $photoThumb = $('.photo-thumb')
  var $modalImg = $('#photoModal img')

  function init() {
    // tells the modal which photo to open
    $photoThumb.on('click', function(e) {
      var dataUrl = $(this).attr('src')
      $modalImg.attr('src', dataUrl)
    })
  }

  init()
})

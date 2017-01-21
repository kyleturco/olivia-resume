$(document).ready(function ready() {

  var $photoThumb = $('.photos__thumb')
  var $modalImg = $('#photoModal img')

  var $navbarLink = $('.navbar__link')
  var $document = $(document)
  var $navbar = $('.navbar')

  function init() {

    var hash = window.location.hash
    hash && $('a.navbar__link[href="' + hash + '"]').tab('show')

    $navbarLink.click(function(e) {
      $(this).tab('show')
      window.location.hash = this.hash;
    })

    // tells the modal which photo to open
    $photoThumb.on('click', function(e) {
      var dataUrl = $(this).attr('src')
      $modalImg.attr('src', dataUrl)
    })

    $document.on('scroll', function() {
      if ($document.scrollTop() > 0) {
        $navbar.addClass('shadow')
      } else {
        $navbar.removeClass('shadow')
      }
    })
  }

  init()
})

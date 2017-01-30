$(document).ready(function ready() {

  const $photoThumb = $('.photos__thumb')
  const $modalImg = $('#photoModal img')

  const $navbarLink = $('.navbar__link')
  const $navbarCollapse = $('.navbar-collapse')
  const $document = $(document)
  const $navbar = $('.navbar')

  function init() {

    const hash = window.location.hash
    hash && $('a.navbar__link[href="' + hash + '"]').tab('show')

    $navbarLink.click(function(e) {
      $(this).tab('show')
      $navbarCollapse.toggleClass('in')
      window.location.hash = this.hash;
    })

    // tells the modal which photo to open
    $photoThumb.on('click', function(e) {
      const dataUrl = $(this).attr('src')
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

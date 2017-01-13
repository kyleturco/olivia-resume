$(document).ready(function ready() {

  var $photoThumb = $('.photo-thumb')
  var $modalImg = $('#photoModal img')

  var $navbarLink = $('.navbar__link')

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
  }

  init()
})



// $(function(){
//   var hash = window.location.hash;
//   hash && $('ul.nav a[href="' + hash + '"]').tab('show');
//
//   $('.nav-tabs a').click(function (e) {
//     $(this).tab('show');
//     var scrollmem = $('body').scrollTop() || $('html').scrollTop();
//     window.location.hash = this.hash;
//     $('html,body').scrollTop(scrollmem);
//   });
// });

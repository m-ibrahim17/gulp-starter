$(document).ready(function (e) {
  // Sidenav Events
  $('#sideNavBtn').on('click', function (e) {
    $('body').addClass('oh')
    $('#sideNav').show().animate({'left': '0'})
    $('.overlay').fadeIn()
  })
  $('.overlay, .closeBtn').on('click', function (e) {
    $('body').removeClass('oh')
    $('#sideNav').animate({'left': '-450px'})
    $('.overlay').fadeOut()
    setTimeout(function() {
      $('#sideNav').hide()
    }, 2000)
  })

  // Remove Wave Effect
  $('#home').find('.mask').removeClass('waves-effect waves-light')

  /* WOW init */
  const wow = new WOW({
    mobile: false
  })
  wow.init()


  let navOffset = $('#wideImage').offset().top
  if ($(this).scrollTop() >= navOffset){
    $('#stickyNav').addClass('fixed-top')
  } else {
    $('#stickyNav').removeClass('fixed-top')      
  }
  $(window).scroll(function(){
    let navOffset = $('#wideImage').offset().top
    if ($(this).scrollTop() >= navOffset){
      $('#stickyNav').addClass('fixed-top')
    } else {
      $('#stickyNav').removeClass('fixed-top')      
    }
  })

  // FAQ Collapse
  $('.collapse').collapse()

})

$(function () {
  // Smooth scroll
  $('a[href*="#"]:not(a[data-toggle="tab"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if (window.innerWidth < 768) {
          $('body').removeClass('oh')
          $('#sideNav').animate({'left': '-450px'})
          $('.overlay').fadeOut()
          setTimeout(function() {
            $('#sideNav').hide()
          }, 2000)
        }
        setTimeout(() => {
          $('html,body').animate({
            scrollTop: target.offset().top -50
          }, 1000);
        }, 500);    
        return false;
      }
    }
  })
})

// Init Vue js (if needed)
/*new Vue({
  el: '#app',
  data: {
    
  }
}) */
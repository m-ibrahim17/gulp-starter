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

// Init Vue js
new Vue({
  el: '#app',
  data: {
    services: [
      {
        count: '01',
        title: 'Lorem, ipsum dolor.'
      },
      {
        count: '02',
        title: 'Lorem ipsum dolor sit.'
      },
      {
        count: '03',
        title: 'Lorem ipsum dolor sit amet.'
      },
      {
        count: '04',
        title: 'Lorem, ipsum dolor.'
      },
      {
        count: '05',
        title: 'Lorem ipsum dolor sit.'
      },
      {
        count: '06',
        title: 'Lorem ipsum dolor sit amet.'
      },
      {
        count: '07',
        title: 'Lorem, ipsum dolor.'
      }
    ],
    information: [
      {                         
        title: 'Safe spaces to experiment:',
        shortDescribtion: 'Practicing a new language can be intimidating.',
        longDescribtion: 'Seeking Sierra utilizes virtual reality, providing a private, low stakes, immersive experience. Students are able to experiment with their language skills, make mistakes, and practice, all while participating in an active learning environment.'
      },
      {
        title: 'Collaborative problem solving:',
        shortDescribtion: 'Language learning materials are frequently disconnected activities that are… boring!',
        longDescribtion: 'Seeking Sierra employs activities that are designed as collaborative puzzles. This provides motivation for championing the language skill at hand, as well as providing impetus for group collaboration.'
      },
      {
        title: 'Cross-modality game play:',
        shortDescribtion: 'Language learning can be difficult to apply in real-life situations.',
        longDescribtion: 'Seeking Sierra is built on a single, cohesive narrative to engage students. The story requires input from the student, and is focused on everyday-life locations and scenarios, making immediate application a very natural transition.'
      }
    ],
    videos: [
      {
        title: 'Pre Mission Brief T-S',
        // describtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur commodi modi necessitatibus ut quasi accusantium libero minima autem, et iusto. Sapiente sit dolor voluptas aliquid consequuntur pariatur optio adipisci. Aliquid excepturi explicabo ex a quas dolorem ipsum, rerum ad!',
        image: 'step1_grey',
        url: 'https://www.youtube.com/embed/oMOYR8s1GLo?rel=0'
      },
      {
        title: 'VR Mission 1',
        // describtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur commodi modi necessitatibus ut quasi accusantium libero minima autem, et iusto. Sapiente sit dolor voluptas aliquid consequuntur pariatur optio adipisci. Aliquid excepturi explicabo ex a quas dolorem ipsum, rerum ad!',
        image: 'step2',
        url: 'https://www.youtube.com/embed/42dVcSGdSgw?rel=0'
      },
      {
        title: 'Inter - Mission Brief T-S',
        // describtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur commodi modi necessitatibus ut quasi accusantium libero minima autem, et iusto. Sapiente sit dolor voluptas aliquid consequuntur pariatur optio adipisci. Aliquid excepturi explicabo ex a quas dolorem ipsum, rerum ad!',
        image: 'step3_grey',
        url: 'https://www.youtube.com/embed/FEnWYA0XES4?rel=0'
      }
    ],
    faqs: [
      {
        id: 'faq_1',
        head: 'heading_1',
        title: 'What do I need to do to have my ESL school join the pilot?',
        body: [
          'Contact us at [email].',
          'To join the pilot you’ll need to schedule session demo time. The session demo can be scheduled for a 1.5 hour session or a 2.5 hour session. Seeking Sierra provides experienced ESL schools that will go to your school, set up and run the session.'
        ]
      },
      {
        id: 'faq_2',
        head: 'heading_2',
        title: 'Who are the instructors?',
        body: [
          'For the Seeking Sierra pilot, we provide experienced ESL teachers to run the sessions for students interested in the program. Instructors from the school interested in observing the program are welcome to join.',
          'Seeking Sierra is designed to be used with the instructors at your school and comes with materials that walk through the program design. We additionally provide instructor training and support through consultations and demos.'
        ]
      },
      {
        id: 'faq_3',
        head: 'heading_3',
        title: 'What\'s the pricing model?',
        body: [
          'The pilot is free.',
          'After the startup session, Seeking Sierra will be offered as a subscription model to schools.        '
        ]
      },
      {
        id: 'faq_4',
        head: 'heading_4',
        title: 'What happens after the pilot?',
        body: [
          'After the pilot, we’ll incorporate feedback into our development and keep you up to date with future chapter rollouts. We’ll be completing a Season,  with content available for 3 months.'
        ] 
      },
      {
        id: 'faq_5',
        head: 'heading_5',
        title: 'My school has large class sizes, can I still use Seeking Sierra?',
        body: [
          'The initial version of Seeking Sierra will support classes of up to 4 students per instructor, and support for 8 students per instructor is planned shortly after.',
          'We’re also exploring ways to support independent product use that will require lower student-teacher interaction time.'
        ]
      }
    ]
  }
})
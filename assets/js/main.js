// NAVBAR //

$(window).on('scroll', function () {
    if($(window).scrollTop()) {
        $('header').addClass('black__background');
    } else {
        $('header').removeClass('black__background');
    }
});

// PRELOADER //

const overlay = document.getElementById("preloader");

window.addEventListener('load', function(){
    overlay.style.display = 'none';
});

// OWL-CAROUSEL //

$('.owl-carousel').owlCarousel({
    loop: true,
    margin:10,
    responsiveClass: true,
    responsive: {
        0:{
            items:1,
            nav:true
        },
        800:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});

// DARKMODE-SWITCH //

const checkbox = document.querySelector('input[name=theme]');
      checkbox.addEventListener('change', function () {
        if (this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
      });

      let trans = () => {
          document.documentElement.classList.add('transition');
          window.setTimeout(() => {
              document.documentElement.classList.remove('transition')
          }, 1000)
      }
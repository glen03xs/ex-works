/**
 * ----------------------------------------------------------------------------------------
 * Main JS Functionality
 * ----------------------------------------------------------------------------------------
 */




$(document).ready(function() {
    var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 1000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        TxtType.prototype.tick = function () {
            
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 150 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
            document.body.appendChild(css);
        };
});


// Sticky Menu
$(function () {
    
  if ( document.getElementById('stickyNav') ) {
        $(window).scroll(function (event) {
            var scroll = jQuery(window).scrollTop();
            var fromTop = document.getElementById('stickyNav').getAttribute('data-top');

            if ( scroll >= fromTop && !document.getElementById('stickyNav').classList.contains('is-shown') ) {
                document.getElementById('stickyNav').classList.add('is-shown');
            } else if ( scroll < fromTop && document.getElementById('stickyNav').classList.contains('is-shown') ) {
                document.getElementById('stickyNav').classList.remove('is-shown');
            }
        });

    }

    $('a.js-pt-sticky-menu-back-to-top-open-menu').on('click', function () {

      $('.header button.header__navbar-toggler').trigger('click');

    });

  });

// Superfish Menu

$(document).ready(function () {
    $('ul.nav, ul.nav-sticky').superfish();

});


$(document).ready(function () {
    $('.nav-menu').click(function() { 
        $('.nav').toggleClass('active');
    });
});


$(document).ready(function () {
    var stickMenuTop = $(window),
        navSticky = $('.nav-sticky'),
        navId = $('#nav'),
        nav = $('.nav');

    

    $('.nav-sticky-menu').click(function() { 
        navSticky.toggleClass('active');
    });

    stickMenuTop.on('scroll', function() {
        if (stickMenuTop.scrollTop() == 0 && navSticky.hasClass('active')) {
            navSticky.removeClass('active');
            nav.addClass('active');
        } 

        if (nav.hasClass('active') && stickMenuTop.scrollTop() >= 200) {
            nav.removeClass('active');
            navSticky.addClass('active');
            
        }
    });
});




// when Clicked sticky menu move to top active menu stuck
// Clicked sticky menu move to top moved to fixed menu when scroll top vice versa

// when scroll top clicked menu close
// move active to fixed menu

// when fixed menu active scroll down move active to sticky menu








// $(document).ready(function () {
//     var n = '#nav', no = 'active';
//     $('#nav-menu').click(function() { 
//         if ($(n).hasClass(no)) {
//             $(n).removeClass(no);
//         }
//          else {
//             $(n).addClass(no).dropDown([300],[complete]);
//             // var newH = $(n).css('height', 'auto').height();
//             // $(n).height(0).animate({height:newH},300);
//         }
//     });
// });

// $(document).ready(function () {
//     $('.nav-menu').click(function() { 
//         $('.nav').toggleClass('active');
//     });
// });

















































































































































































































































































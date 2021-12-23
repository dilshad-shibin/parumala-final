(function($) {

    "use strict";
    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });



    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });


    //Testimonials SLIDER ACTIVE CODE
    $('.testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //BANNER SLIDER ACTIVE CODE
    $('.banner-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Excellence Slider ACTIVE CODE
    $('.centres-listing.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });

    //Speciality Slider ACTIVE CODE
    $('.speciality-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Speciality Slider ACTIVE CODE
    $('.speciality-slider2.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Doctor Slider ACTIVE CODE
    $('.team-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    //Inner Doctor Slider ACTIVE CODE
    $('.doctor-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    //Inner Doctor Slider 2 ACTIVE CODE
    $('.doctor-slider2.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });

     //Inner Doctor Slider 2 ACTIVE CODE
     $('.doctor-slider3.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Inner Doctor Slider 2 ACTIVE CODE
    $('.doctor-slider4.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    //NEws Details Slider 2 ACTIVE CODE
    $('.news-block-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Insurance Slider ACTIVE CODE
    $('.insurance-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false, 
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    //management-slider ACTIVE CODE
    $('.management-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });


    
    // :: COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // :: AOS ACTIVE CODE
    AOS.init();

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });



})(jQuery);

$(document).ready(function(){
    //mobile book now btn 
    $('.mobile_btn').click(function() {
        $('.panel-menu').hide();
        $('.mm-open .mm-fullscreen-bg').attr('style','background: transparent');
    });
})



$(document).ready(function(){

	

	$(window).on('load', function() {

  $('#status').fadeOut(); 

  $('#preloader').delay(350).fadeOut('slow');  

  $('body').delay(350).css({'overflow':'visible'});

});



setTimeout(function() {

  $('.enquiry_sidebar').removeClass('enq-show');

}, 700); 



	$('.qebtn').click(function(){

		$('body').toggleClass('custom-pop-active');	

	});

      

    $('.enq_closs').click(function(){

		$('body').removeClass('custom-pop-active');

		

	});



});



   $(document).ready(function() {

        $('.cus-select').select2();

    });



//  $('#datepicker').datepicker({

//         weekStart: 1,

//         daysOfWeekHighlighted: "6,0",

//         autoclose: true,

//         todayHighlight: true,

//     });


//     $('#datepicker2').datepicker({

//         weekStart: 1,

//         daysOfWeekHighlighted: "6,0",

//         autoclose: true,

//         todayHighlight: true,

//     });

    


//  $('.totop').tottTop({

//             scrollTop: 100

//         });  





   $('a.mm-original-link').click( function(e) {e.preventDefault(); return false; } );


   










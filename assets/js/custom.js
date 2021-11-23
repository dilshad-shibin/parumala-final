(function($) {

    "use strict";
    var win = $(window);

    win.on('scroll', function() {

        var scroll = win.scrollTop();

        if (scroll < 800) {

            $("#sticky_funtion").removeClass("menu_secfixed");

        } else {

            $("#sticky_funtion").addClass("menu_secfixed");

        }

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
                items: 1
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

    //Doctor Slider ACTIVE CODE
    $('.team-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, 
        smartSpeed: 2000,
        autoplay: false,
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



 $('#datepicker').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });


    $('#datepicker2').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });

    


 $('.totop').tottTop({

            scrollTop: 100

        });  





   $('a.mm-original-link').click( function(e) {e.preventDefault(); return false; } );


   










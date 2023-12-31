(function($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    // Navbar Sticky
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function() {
        $('.nav-link, .smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        doots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function() {
        element.typed({
            strings: ["Full stack -developing", "FRONT END ", "BACK END"],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    function sendMessage() {
        var name = document.getElementsByName("name")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var subject = document.getElementsByName("subject")[0].value;
        var message = document.getElementsByName("message")[0].value;

        var mailtoUrl = "mailto:ajesh0608@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

        window.location.href = mailtoUrl;
    }
});


/*::::::::::::::::::::::::::::::::::::
Preloader
::::::::::::::::::::::::::::::::::::*/
$(window).on('load', function() {
    $('.preloader').fadeOut();
});

(jQuery);
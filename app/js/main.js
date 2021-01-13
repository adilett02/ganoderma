$(function ($) {

    // "use strict";
    var siteScroll = function () {

        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st > 10) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }


        })

    };

    //animation
    siteScroll();
    AOS.init({
        duration: 800,
        offset: 70
    });


    //menu
    $('.navbar-toggler').on('click', function () {
        $('.header').toggleClass('scroll2');
        
    });


    //100vh на телефонах
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    //scroll
    $('header .nav-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });





        const section = $('section'),
              nav = $('.navbar-nav'),
              navHeight = nav.outerHeight(); // получаем высоту навигации 
    
        // поворот экрана 
        window.addEventListener('orientationchange', function () {
            navHeight = nav.outerHeight();
        }, false);
    
        $(window).on('scroll', function () {
            const position = $(this).scrollTop();
    
            section.each(function () {
                const top = $(this).offset().top - navHeight - 100,
                      bottom = top + $(this).outerHeight();
    
                if (position >= top && position <= bottom) {
                    nav.find('a').removeClass('active-link');
                    section.removeClass('active-link');
    
                    $(this).addClass('active-link');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
                }
            });
        });


});
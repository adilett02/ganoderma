$(function ($) {

    "use strict";
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
    $('header .nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 90 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });




    //добавление border для menu  
    const section = $('section'),
        nav = $('.site-navbar'),
        navHeight = nav.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    window.addEventListener('orientationchange', function () {
        navHeight = nav.outerHeight();
    }, false);

    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 200,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active-link');
                section.removeClass('active-section');

                $(this).addClass('active-section');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
            }
        });
    });



    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 70,
        grabCursor: true,
        centeredSlides: true,
        speed: 500,
        // slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // Индикатор прокрутки
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }



    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    })
});







/*
* Template Name: SoftLand
* Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
    "use strict";

    // Back to top button
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $('.back-to-top').fadeIn('slow');
    //   } else {
    //     $('.back-to-top').fadeOut('slow');
    //   }
    // });
    // $('.back-to-top').click(function(){
    //   $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    //   return false;
    // });

    var siteMenuClone = function () {

        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').removeClass('active');
                }
            }
        });
    };
    siteMenuClone();

    var siteScroll = function () {

        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st > 100) {
                $('.js-sticky-header').addClass('shrink');
            } else {
                $('.js-sticky-header').removeClass('shrink');
            }

        })

    };
    siteScroll();
    // var sticky = new Sticky('.js-sticky-header');

    var siteSticky = function () {
        $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();

    // var siteOwlCarousel = function() {
    //     $('.testimonial-carousel').owlCarousel({
    //         center: true,
    //       items: 1,
    //       loop: true,
    //       margin: 0,
    //       autoplay: true,
    //       smartSpeed: 1000,
    //       });
    // };
    // siteOwlCarousel();


})(jQuery);
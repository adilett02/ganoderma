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
        nav = $('.navbar-nav'),
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

    //Индикатор прокрутки
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }



    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').on('click', function() {
        $('html, body').animate({scrollTop : 0},1000);
        return false;
      })
});
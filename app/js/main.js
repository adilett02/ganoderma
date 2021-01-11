$(function () {
    var siteScroll = function () {

        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st > 50) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
                $('.navbar-toggler').on('click', function () {
                    $('.header').toggleClass('scroll');
                    // if ($('.header').hasClass('scroll')) {
                    //     $('.header').toggleClass('scroll');
                    // } else {
                    //     $('.header').toggleClass('scroll');
                    // }
                });
            }

        })

    };
    siteScroll();
    AOS.init({
        duration: 800
    }
    );



    // $('.navbar-toggler').on('click', function () {
    //     // $('.header').toggleClass('scroll');
    //     if ($('.header').hasClass('scroll')) {
    //         // $('.header').removeClass('scroll');
    //         $('.header').toggleClass('scroll');
    //     } else {
    //         $('.header').toggleClass('scroll');
    //     }
    // });
})
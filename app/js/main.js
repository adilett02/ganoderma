$(function () {
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


    siteScroll();
    AOS.init({
        duration: 800
    });



    $('.navbar-toggler').on('click', function () {
        $('.header').toggleClass('scroll2');
    });
})
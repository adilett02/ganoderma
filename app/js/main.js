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
})
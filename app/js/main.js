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

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
})
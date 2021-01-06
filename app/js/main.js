$(function () {
    var siteScroll = function() {	

        $(window).scroll(function() {
  
            var st = $(this).scrollTop();
  
            if (st > 50) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }
  
        }) 
  
    };
    siteScroll();
    AOS.init({
         duration: 800
    }   
    );
})
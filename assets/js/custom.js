
$( document ).ready(function() {
   
    // testimonial-start=====================================
    $('#testimonial').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer: '.owl-dots',
        items: 1,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            768:{
                items:3
            },
            1000:{
                items: 3
            }
        }
    });

        

});






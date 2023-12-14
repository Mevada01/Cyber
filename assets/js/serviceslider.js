$(document).ready(function() {
    
    if(typeof screen_to_show_tablet !== typeof undefined ){
        $("#service-product").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            rewind: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                    },
                768: {
                    items: screen_to_show_tablet,
                    // nav: true,
                    loop: false
                    },
                1024: {
                    items: screen_to_show_laptop,
                    // nav: true,
                    loop: false
                    },
                1199: {
                items: screen_to_show,
                // nav: true,
                loop: false
                },
                    
                },
        });
    }
    else{
        $("#service-product").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            rewind: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                    },
                768: {
                    items: 2,
                    // nav: true,
                    loop: false
                    },
                1024: {
                    items: 3,
                    // nav: true,
                    loop: false
                    },
                1199: {
                items: 1,
                // nav: true,
                loop: false
                },
                    
                },
        });
    }    
     
 });

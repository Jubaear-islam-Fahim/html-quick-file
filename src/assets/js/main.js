'use strict';
(function ($) {
    // gsap.registerPlugin(ScrollTrigger);


    const globeOne = gsap.timeline({
        scrollTrigger: {
            trigger: ".globe-section  ",
            start: "0% 95%",
            end: "70% 50%",
            scrub: true,
            // markers: true,
        }
    })

    globeOne.to("#globeCanvas", {
        top: "23%",
        left: "-30%",
        scale: 0.4,
    })

    const globeTwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".ads-formats-section",
            start: "0% 70%",
            end: "100% 100%",
            scrub: true,
            // markers: true,
        }
    })
    globeTwo.to("#globeCanvas", {
        top: "120%",
        left: "-3%",
        scale: 0.3,

    })

    $('.bg-img').css('background-image', function () {
        var bg = 'url(' + $(this).data('background-image') + ')';
        return bg;
    });




})(jQuery);

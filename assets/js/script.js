(function($) {
    'use strict'
   
    /* ========================================
        type
    ======================================== */
    if ($('').length) {
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
            if (wScroll > 1) {
                $('.top-nav').addClass('topnav');
            } else {
                $('.top-nav').removeClass('topnav');
            };
        });
    }
   
    /* ========================================
        type
    ======================================== */
    if ($('').length) {}
 



})(jQuery);
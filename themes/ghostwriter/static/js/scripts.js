jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });
});

const cl = cloudinary.Cloudinary.new({ cloud_name: 'peoray' })
cl.responsive()

// console.log('sjssj')
hljs.initHighlightingOnLoad();


(function ($) {
    "use strict";


    //Owl carousel js start

    $(".homeslider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'pulse',
    });
    //Owl carousel js end



    // offcanvas js start
    var offmenubar = $(".offcanvas_bar");
    var offmenu = $(".offcanvas_menu");
    var closebtn = $('.offcanvas_close');
    var shadow = $('.offcanvas_shadow');
    var show_icon = $('.offcanvas_fev_icon');
    var hide_header = $('header');

    offmenubar.click(function () {
        offmenu.addClass('show_offcanvas');
        shadow.addClass('show_shadow');
        show_icon.addClass('show_icon');
        hide_header.addClass('hide_header');

    });

    closebtn.click(function () {
        offmenu.removeClass('show_offcanvas')
        shadow.removeClass('show_shadow')
        show_icon.removeClass('show_icon')
        hide_header.removeClass('hide_header')
    });

    shadow.click(function () {
        offmenu.removeClass('show_offcanvas');
        shadow.removeClass('show_shadow')
        show_icon.removeClass('show_icon')
    });
    // offcanvas js end





}(jQuery));

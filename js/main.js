(function ($) {
    "use strict";

    $(window).on('load', function () {
        // Prealoder
        $("#preloader").delay(700).fadeOut("slow");
    });

    $(document).ready(function () {


        // product slider Initialize
        $('.product_slider').slick({
            infinite: false,
            dots: false,
            slidesToShow: 4,
            swipe: true,
            swipeToSlide: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><img src="img/left-arrow.svg" alt=""></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><img src="img/right-arrow.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '100px',
                    }
                }
            ]
        });



        // fashion slider Initialize
        $('.fashion_slider').slick({
            infinite: false,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            swipe: true,
            swipeToSlide: true,
            nextArrow: $('.fashion-slider-slick-next'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '100px',
                    }
                }
            ]
        });



        // fashion slider Initialize
        $('.box_bg_slider').slick({
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 0,
        });



        // product slider 1 Initialize
        $('.product_slider1').slick({
            infinite: false,
            slidesToShow: 1,
            prevArrow: $('.product_slider1_prev'),
            nextArrow: $('.product_slider1_next'),
            dots: true,
        });



        // magnific Popup Initialize
        $(document).ready(function () {
            $(function () {
                $('.popup-gallery').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<span title="%title%" role="button" class="gallery-arrow gallery-arrow-%dir%"></span>'
                    },
                    callbacks: {
                        change: function () {
                            galleryArrowPosition();
                        },
                        resize: function () {
                            galleryArrowPosition();
                        },
                        open: function () {
                            galleryArrowPosition();
                        },
                        buildControls: function () {
                            // re-appends controls inside the main container
                            if (window.screen.width > 767) {
                                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                            }
                        }
                    }
                });
            });

            var arrowWidth = 30;
            var arrowGap = 20;

            function galleryArrowPosition() {
                var contWidth = $('.mfp-content').width();
                var left = contWidth / 2 + arrowGap + arrowWidth;
                var right = contWidth / 2 + arrowGap;
                $('.gallery-arrow-left').css('margin-left', '-' + left + 'px');
                $('.gallery-arrow-right').css('margin-left', right + 'px');
            }
        });




        $('.acceptAll').click(function () {
            document.cookie = "Millipointtwo=" + "FUNCTIONAL, ANALYTICAL, SOCIAL MEDIA AND ADVERTISING";
            $('.cookies').removeClass('show');
            add_FUNCTIONAL();
            add_GA();
            add_PIXEL();
        });


        $('.modal-content .btn').click(function () {
            let cookieValue = ''
            $(".checkbox-field :input[type='checkbox']").each(function () {
                if ($(this).is(":checked")) {
                    switch ($(this).closest('.title_box').children('h3').text()) {
                        case 'FUNCTIONAL': add_FUNCTIONAL(); cookieValue += "FUNCTIONAL, "; break;
                        case 'ANALYTICAL': add_GA(); cookieValue += "ANALYTICAL, "; break;
                        case 'SOCIAL MEDIA AND ADVERTISING': add_PIXEL(); cookieValue += "SOCIAL MEDIA AND ADVERTISING"; break;
                        default: break;
                    }
                }
            });
            console.log(cookieValue)
            $('#cookies_modal').modal('toggle');
            $('.cookies').removeClass('show')
        })

        if (getCookie("Millipointtwo"))
            $('.cookies').removeClass('show');

    });

})(jQuery);

function add_FUNCTIONAL() {

}

function add_PIXEL() {
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '466601605469092');
    fbq('track', 'PageView');
}

function add_GA() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-F5Y47SY845');
}


// Stickt Header --------

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



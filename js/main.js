(function ($) {
    "use strict";

    $(window).on('load', function(){
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
                            if( window.screen.width > 767){
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



        
        $('.acceptAll').click(function(){
            $('.cookies').removeClass('show')
        });



    });

})(jQuery);





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


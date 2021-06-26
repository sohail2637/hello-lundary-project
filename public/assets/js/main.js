(function($) {

    /* Global variables */

    "use strict";
    var $document = $(document),
        $window = $(window),
        mobileMenuMax = 992,
        plugins = {
            bgimage: $('[data-image]'),
            googleMap: $('#map'),
            preloader: $('.loader'),
            panel: $('.panel'),
            menu: $('nav .menu'),
            footerBubble: $('.bubbleContainer'),
            counter: $('.product-total-box'),
            animation: $('.animation'),
            rtltrue: jQuery('body').hasClass('rtl'),
            servicesCarousel: $('.services-box-mobile'),
            permissionCarousel: $('.permission-box-mobile'),
            blogCarousel: $('.carousel-blog'),
            priceCarousel: $('.price-carousel'),
            productCarousel: $('.product-box-mobile'),
            postCarousel: $('.post-carousel'),
            postGallery: $('.blog-isotope'),
            boxCarousel: $('.services-box-info-carousel'),
            stickyHeader: true,
            rtltrue: jQuery('body').hasClass('rtl'),

        }

    /* Initialize All Scripts */


    $document.ready(function() {


        priceTab();
        $('[data-list-collapse]').on('click', function(e) {
            var $this = $(this),
                $list = $('#' + $this.data('list-collapse'));
            $list.toggleClass('collapsed');
            $this.hide();
            e.preventDefault();
        })


        var windowWidth = window.innerWidth || $(window).width();

        // bg image from data attribute
        if (plugins.bgimage.length) {
            plugins.bgimage.each(function(key, value) {
                var $this = $(this);
                var attr = $this.attr('data-image');
                $this.css({
                    'background-image': 'url(' + attr + ')'
                });
            })
        }

        // faq 	accordion active class
        if (plugins.panel.length) {
            plugins.panel
                .on('show.bs.collapse', function(e) {
                    $('.panel-heading').removeClass('active');
                    $('.panel-heading').siblings('.panel-collapse').removeClass('in');
                    $('.panel-heading').siblings('.panel-collapse').addClass('collapse');
                    $(e.target).prev('.panel-heading').addClass('active');
                })
                .on('hide.bs.collapse', function(e) {
                    $(e.target).prev('.panel-heading').removeClass('active');
                });
        }

        // navigation
        if (plugins.menu.length > 0) {
            var $touch = $('#touch-menu'),
                $menu = plugins.menu,
                $caret = $('.icon-arrow', $menu);
            $caret.on('click', function() {
                if ($window.width() < mobileMenuMax) {
                    $(this).parent('.menu-item-has-children').toggleClass('opened');
                    // ('ul.sub-menu');
                    $(this).toggleClass('opened');
                }
            })
            $touch.on('click', function(e) {
                e.preventDefault();
                $menu.slideToggle().toggleClass('opened');
                $(this).toggleClass('opened');
            });
        }

        // footer bubble animation
        function footerBubbleAnim(count) {
            var count = (count < 20) ? count : 20;
            for (var i = 1; i < count + 1; i++) {
                var bubble = $("<div class='bubble-" + i + "'></div>");
                plugins.footerBubble.append(bubble);
            }
        }
        if (plugins.footerBubble.length > 0) {
            footerBubbleAnim(10); // 10 - number of bubbles (20 - max)
        }

        // counter
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
        if (plugins.counter.length) {
            plugins.counter.waypoint(function() {
                $('.title > span', plugins.counter).each(count);
            }, {
                triggerOnce: true,
                offset: '80%'
            });
        }

        // sticky header
        $.fn.stickyHeader = function() {

            var $header = this,
                $body = $('body'),
                headerOffset;

            function setHeigth() {
                $(".fix-space").remove();
                $header.removeClass('animated header--sticky fadeIn');
                headerOffset = $('.box-nav', $header).offset().top + 100;
            }

            setHeigth();

            var prevWindow = window.innerWidth || $window.width()

            $window.on('resize', function() {
                var currentWindow = window.innerWidth || $window.width();
                if (currentWindow != prevWindow) {
                    setHeigth()
                    prevWindow = currentWindow;
                }
            });

            $window.scroll(function() {
                var st = getCurrentScroll();
                if (plugins.menu.hasClass('opened')) {
                    return false;
                }
                if (st > headerOffset) {
                    if (!$(".fix-space").length) {
                        $header.after('<div class="fix-space"></div>');
                        $(".fix-space").css({
                            'height': $header.height() + 'px'
                        });
                    }
                    $header.addClass('header--sticky animated fadeIn');
                } else {
                    $(".fix-space").remove();
                    $header.removeClass('animated header--sticky fadeIn');
                }
            });

            function getCurrentScroll() {
                return window.pageYOffset || document.documentElement.scrollTop;
            }
        }

        // sticky header
        if (plugins.stickyHeader) {
            if ($("header.stickyHeader").length)
                $("header.stickyHeader").stickyHeader();
        }

        // lazy loading effect
        var firstInit = true;

        function onScrollInit(items, wW) {
            if (wW > 991) {
                if (firstInit == true) {
                    items.each(function() {
                        var $element = $(this),
                            animationClass = $element.attr('data-animation'),
                            animationDelay = $element.attr('data-animation-delay');
                        $element.removeClass('no-animate');
                        $element.css({
                            '-webkit-animation-delay': animationDelay,
                            '-moz-animation-delay': animationDelay,
                            'animation-delay': animationDelay
                        });
                        var trigger = $element;
                        trigger.waypoint(function() {
                            $element.addClass('animated').addClass(animationClass);
                        }, {
                            triggerOnce: true,
                            offset: '100%'
                        });
                    });
                    firstInit = false;
                }
            } else {
                items.each(function() {
                    var $element = $(this);
                    $element.addClass('no-animate')
                })
            }
        }
        if (plugins.animation.length) {
            onScrollInit(plugins.animation, windowWidth);
        }

        if (typeof(elementorFrontend) != 'undefined') {
            if (typeof(elementorFrontend.hooks) != 'undefined') {
                elementorFrontend.hooks.addAction('frontend/element_ready/widget', function(scrollTop) {

                    if ($('.services-box-mobile').length) {
                        servicesCarouselFunc($('.services-box-mobile'))
                    }
                    if ($('.product-box-mobile').length) {
                        productCarouselFunc($('.product-box-mobile'))
                    }
                    if ($('.carousel-blog').length) {
                        blogCarouselFunc($('.carousel-blog'))
                    };
                    if ($('.price-carousel').length) {
                        priceCarouselFunc($('.price-carousel'));
                    };
                    if ($('.services-box-info-carousel').length) {
                        boxCarouselFunc($('.services-box-info-carousel'))
                    };
                    if ($('.post-carousel').length) {
                        postCarouselFunc($('.post-carousel'));
                    };

                    if ($('.animation').length) {
                        onScrollInit($('.animation'), windowWidth);
                    }

                });
            }
        }

        // popup modal
        //popup-link-menu

        if ($('.popup-link-menu > a').length) {
            //console.log("i am here");
            $('.popup-link-menu > a').magnificPopup({
                type: 'inline',
                midClick: true
            });
        }
        // popup modal
        if ($('.popup-link').length) {
            $('.popup-link').magnificPopup({
                type: 'inline',
                midClick: true
            });
        }


        /// for coupon popup

        $('.print-link').on('click', function() {
            var post_id = $(this).attr('data-id');
            var popupLoder = $('#popUpLoader_' + post_id);
            popupLoder.addClass('visible');
            $(this).hide();
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajax_object.ajax_url,
                data: {
                    action: 'coupon_popup_ajax',
                    post_id: post_id,
                    security: ajax_object.ajax_nonce_coupon,
                },
                success: function(data) {
                    $('#myModal').replaceWith('');
                    $('body').append(data)
                    $('#myModal').modal('show');
                    popupLoder.removeClass('visible');
                    $('.print-link').show();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                }
            });
        })



        // price Tabs
        function priceTab() {
            $('.price-filter').on('click', function(e) {
                var $element = $('.prices-tabs').find('.' + $(this).data('category'));
                $('.price-filter').removeClass('active');
                $(this).addClass('active');
                $('.prices-tabs').find('.panel').hide();
                $element.show();
                var parent = document.querySelector(".prices-tabs"),
                    itemsArray = Array.prototype.slice.call(parent.children);

                var flag = false;
                itemsArray.forEach(function(item) {
                    if (flag == true) {
                        return false;
                    } else {
                        if (item.style.display == 'block') {
                            item.children[0].classList = 'panel-heading active';
                            item.children[1].classList = 'panel-collapse in';
                            item.children[1].style = 'height: auto';
                            // console.log(item.children);
                            flag = true;
                        }
                    }
                });
                // e.preventDefault();
            });

            if ($('.prices-filter').find('.active').length) {
                $('.prices-filter .active').click();
                var $first = $('.prices-filter').find('a:nth-child(4)');
                $first.addClass('active');
                $first.click();
            } else {
                var $first = $('.prices-filter').find('a:nth-child(4)');
                $first.addClass('active');
                $first.click();
            }
        }

        $(document).on('click', '#btn_save_and_close', function() {
            PrintElem('modal-coupon')
        })

        function PrintElem(elem) {
            var mywindow = window.open('', 'PRINT', 'height=400,width=550');
            mywindow.document.write('<html><head>');
            mywindow.document.write('<style type="text/css">');
            mywindow.document.write('.coupon.style1{}');
            mywindow.document.write('.inside {position: relative;height: 100%;background: url(../images/coupon-bg-2.jpg) no-repeat 0 0;}');
            mywindow.document.write('.coupon-logo {position: absolute;top: 15px;right: 15px;}');
            mywindow.document.write('.text1 {position: absolute;font-size: 14px;line-height: 16px;color: #fff;top: 22px;left: 20px;width: 100px;}');
            mywindow.document.write('.text2 {position: absolute;font-size: 14px;line-height: 18px;color: #212121;font-weight: 500;top: 66px;right: 23px;width: 235px;text-align: right;}');
            mywindow.document.write('.text3 {position: absolute;font-size: 42px;line-height: 42px;font-weight: 500;font-family: "Rubik", sans-serif;color: #fb363f;top: 112px;right: 23px;width: 255px;text-align: right;}');
            mywindow.document.write('.text4 {position: absolute;font-size: 23px;line-height: 30px;font-weight: 500;font-family: "Rubik", sans-serif;color: #454545;top: 158px;right: 23px;width: 300px;text-align: right;}');
            mywindow.document.write('.text5 {position: absolute;font-size: 20px;line-height: 24px;font-weight: 300;color: #454545;bottom: 19px;right: 22px;width: 190px;text-align: right;}');
            mywindow.document.write('</style>');
            mywindow.document.write('</head><body>');
            mywindow.document.write(document.getElementById(elem).innerHTML);
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/
            mywindow.print();
            mywindow.close();
            return true;
        }




        // blog carousel
        const blogCarouselFunc = blog => {
            blog.slick({
                dots: true,
                infinite: true,
                arrows: false,
                rtl: plugins.rtltrue,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000
            });
        }
        if (plugins.blogCarousel.length) {
            blogCarouselFunc(plugins.blogCarousel)
        };

        // boxCarouselFunc

        const boxCarouselFunc = box => {
            box.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                rtl: plugins.rtltrue,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                pauseOnHover: true,
                responsive: [{
                        breakpoint: 1350,
                        settings: {
                            arrows: false
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 667,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }

        if (plugins.boxCarousel.length) {
            boxCarouselFunc(plugins.boxCarousel)
        };

        // post carousel
        const postCarouselFunc = post => {
            post.slick({
                mobileFirst: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl: plugins.rtltrue,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: true,
                dots: false,
                speed: 1000,
                fade: true,
                pauseOnHover: true
            });

        }
        if (plugins.postCarousel.length) {
            postCarouselFunc(plugins.postCarousel);
        }

        // post isotope
        if (plugins.postGallery.length) {
            var $postgallery = plugins.postGallery;
            $postgallery.imagesLoaded(function() {
                $postgallery.isotope({
                    itemSelector: '.blog-post',
                    masonry: {
                        gutter: 30,
                        columnWidth: '.blog-post'
                    }
                });
            });
        }

        // product carousel
        const productCarouselFunc = product => {
            product.slick({
                slidesToShow: 3,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                rtl: plugins.rtltrue,
                responsive: [{
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 667,
                        settings: {
                            arrows: false,
                            slidesToShow: 1
                        }
                    }
                ]
            });

        }
        if (plugins.productCarousel.length) {
            productCarouselFunc(plugins.productCarousel)
        };

        // services carousel
        const servicesCarouselFunc = service => {
            service.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 2500,
                pauseOnHover: true,
                rtl: plugins.rtltrue,
                responsive: [{
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            speed: 1500
                        }
                    },
                    {
                        breakpoint: 667,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 1000
                        }
                    }
                ]
            });
        }
        if (plugins.servicesCarousel.length) {
            servicesCarouselFunc(plugins.servicesCarousel)

        };


        // price carousel
        const priceCarouselFunc = price => {
            price.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                pauseOnHover: true,
                rtl: plugins.rtltrue,
                responsive: [{
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        if (plugins.priceCarousel.length) {
            priceCarouselFunc(plugins.priceCarousel);
        };



        // mobile carousel
        function slickMobile(carousel) {
            carousel.slick({
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                rtl: plugins.rtltrue,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 1500,
                pauseOnHover: true,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 767,
                    settings: "unslick",
                }]
            });
        }

        // mobile carousel
        function slickMobileRow(carousel) {
            carousel.slick({
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 3,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                dots: true,
                speed: 1500,
                pauseOnHover: true,
                rtl: plugins.rtltrue,
                responsive: [{
                    breakpoint: 767,
                    settings: "unslick",
                }]
            });
        }


        // permission carousel
        if (plugins.permissionCarousel.length) {
            if (windowWidth < 768) {
                slickMobileRow(plugins.permissionCarousel);
            }
        }


        // back to top
        function backToTop(button, flag) {
            var $button = $(button);
            $(window).on('scroll', function() {
                if ($(this).scrollTop() >= 500) {
                    $button.addClass('visible');
                } else {
                    $button.removeClass('visible');
                }
            });
            $button.on('click', function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
        backToTop('.js-backToTop');


        // mobile info slide
        function mobileInfoSlide() {
            var $toggle = $('.page-header-mobile-info-toggle'),
                $content = $('.page-header-mobile-info-content');
            $toggle.on('click', function(e) {
                e.preventDefault();
                $content.slideToggle(200);
                $toggle.toggleClass('opened');
            })
        }
        mobileInfoSlide();


        if ($('.datetimepicker').length) {
            $('.datetimepicker').datetimepicker({
                format: 'DD/MM/YYYY',
                icons: {
                    time: 'icon icon-clock',
                    date: 'icon icon-calendar',
                    up: 'icon icon-angle-up',
                    down: 'icon icon-angle-down',
                    previous: 'icon icon-left-arrow',
                    next: 'icon icon-right-arrow',
                    today: 'icon icon-today',
                    clear: 'icon icon-trash',
                    close: 'icon icon-cancel-music'
                }
            });
        }
        if ($('.timepicker').length) {
            if ($('.timepicker').hasClass('format24')) {
                var format = 'HH:mm';
            } else {
                var format = 'hh:mm A';
            }
            $('.timepicker').datetimepicker({
                format: format,
                icons: {
                    time: 'icon icon-clock',
                    up: 'icon icon-angle-up',
                    down: 'icon icon-angle-down',
                    previous: 'icon icon-left-arrow',
                    next: 'icon icon-right-arrow'
                }
            });
        }
        var $orderForm = $('#orderForm')


        // post more ajax load
        var $postMoreLink = $('.view-more-post'),
            $postPreload = $('#postPreload');

        $postMoreLink.on('click', function() {
            var item;
            var target = $(this).attr('data-load');
            $(this).hide();
            $.ajax({
                url: target,
                success: function(data) {
                    $postPreload.append(data);
                    if (plugins.postGallery.length) {
                        $(' > div', $postPreload).each(function() {
                            item = $(this);
                            $postgallery.append(item).isotope('appended', item);
                        });
                    }
                }
            });
        })

        $window.on('load', function() {

            // remove preloader on page load
            if (plugins.preloader.length) {
                plugins.preloader.delay(500).fadeOut('slow');
            }

            function createMap(id, mapZoom) {
                // Create google map
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: mapZoom,
                    scrollwheel: false,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.8610112, -4.2547319), // Glasgow
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#d1d1d1"
                        }]
                    }, {
                        "featureType": "transit",
                        "stylers": [{
                            "color": "#808080"
                        }, {
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#d1d1d1"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#d1d1d1"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ffffff"
                        }, {
                            "weight": 1.8
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#d7d7d7"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ebebeb"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#d1d1d1"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#fafafa"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#d6d6d6"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#bfbfbf"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#d6d6d6"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {}, {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#f1f1f1"
                        }]
                    }]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById(id);
                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                var image = 'images/map-marker.png';
                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.8610112, -4.2547319),
                    map: map,
                    icon: image
                });

            }
            if (plugins.googleMap.length) {
                createMap('map', 11)
            }
        });

        // window resize events
        $window.on('resize', function() {
            setTimeout(function() {
                var windowWidth = window.innerWidth || $(window).width();
                if (windowWidth < 768) {
                    slickMobile(plugins.permissionCarousel);
                }
                if (windowWidth > 991 && plugins.menu.is(':hidden')) {
                    plugins.menu.removeAttr('style');
                }
                onScrollInit(plugins.animation, windowWidth);
            }, 500);
        });

    });


})(jQuery);


jQuery(function ($) {

    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    $(function () {

        setTimeout(function () {
            $("#loader-fade").fadeOut("slow");
            $('.side-menu').removeClass('dnone');
        }, 1000);

    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) { 
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(this).animate({left: '-55px'}, 100);
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active")
            $(".wrapper").addClass("pushmenu-push-toLeft");

        }), $("#close_side_menu").on("click", function () {
            $('#sidemenu_toggle').animate({left: '38px'}, 300);
            $(".side-menu").removeClass("side-menu-active")
        }), $("#btn_sideNavClose").on("click", function () {
            $('#sidemenu_toggle').animate({left: '38px'}, 300);
            $(".side-menu").removeClass("side-menu-active")
            $(".wrapper").removeClass("pushmenu-push-toLeft");

        })
    }

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    $(function () {
        $(".flip").flip({
            trigger: 'hover',
            axis: 'y'
        });
    });

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 55}, 700);
    });

    $(".faq-items > li:first-child .sub-items").fadeIn();
    $(".faq-items > li:first-child >").addClass("expanded");
    $(".faq-items > li > a").on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass("expanded")) {
            $this.removeClass("expanded");
        } else {
            $(".faq-items a.expanded").removeClass("expanded");
            $this.addClass("expanded");
            $(".sub-items").filter(":visible").slideUp("normal");
        }
        $this.parent().children("ul").stop(true, true).slideToggle("normal");
    });

    if ($(".tab-to-accordion").length){
        initTabsToAccordion();
        }

function initTabsToAccordion() {
    var animSpeed = 500;
    var win = $(window);
    var isAccordionMode = true;
    var tabWrap = $(".tab-to-accordion");
    var tabContainer = tabWrap.find(".tab-container");
    var tabItem = tabContainer.children("div[id]");
    var tabsetList = tabWrap.find(".tabset-list");
    var tabsetLi = tabsetList.find("li");
    var tabsetItem = tabsetList.find("a");
    var activeId = tabsetList
        .find(".active")
        .children()
        .attr("href");
    cloneTabsToAccordion();
    accordionMode();
    tabsToggle();
    hashToggle();
    win.on("resize orientationchange", accordionMode);

    function cloneTabsToAccordion() {
        $(tabsetItem).each(function () {
            var $this = $(this);
            var activeClass = $this.parent().hasClass("active");
            var listItem = $this.attr("href");
            var listTab = $(listItem);
            if (activeClass) {
                var activeClassId = listItem;
                listTab.show();
            }
            var itemContent = $this.clone();
            var itemTab = $this.attr("href");
            if (activeClassId) {
                itemContent
                    .insertBefore(itemTab)
                    .wrap('<div class="accordion-item active"></div>');
            } else {
                itemContent
                    .insertBefore(itemTab)
                    .wrap('<div class="accordion-item"></div>');
            }
        });
    }
    function accordionMode() {
        var liWidth = Math.round(tabsetLi.outerWidth());
        var liCount = tabsetLi.length;
        var allLiWidth = liWidth * liCount;
        var tabsetListWidth = tabsetList.outerWidth();
        if (tabsetListWidth <= allLiWidth) {
            isAccordionMode = true;
            tabWrap.addClass("accordion-mod");
        } else {
            isAccordionMode = false;
            tabWrap.removeClass("accordion-mod");
        }
    }
    function tabsToggle() {
        tabItem.hide();
        $(activeId).show();
        $(tabWrap).on("click", 'a[href^="#tab"]', function (e) {
            e.preventDefault();
            var $this = $(this);
            var activeId = $this.attr("href");
            var activeTabSlide = $(activeId);
            var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
            $('a[href^="#tab"]')
                .parent()
                .removeClass("active");
            activeOpener.parent().addClass("active");
            if (isAccordionMode) {
                tabItem.stop().slideUp(animSpeed);
                activeTabSlide.stop().slideDown(animSpeed);
            } else {
                tabItem.fadeOut(300);
                activeTabSlide.fadeIn(800);
            }
        });
    }
    function hashToggle() {
        var hash = location.hash;
        var activeId = hash;
        var activeTabSlide = $(activeId);
        var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
        if ($(hash).length > 0) {
            $('a[href^="#tab"]')
                .parent()
                .removeClass("active");
            activeOpener.parent().addClass("active");
            tabItem.hide();
            activeTabSlide.show();
            win
                .scrollTop(activeTabSlide.offset().top)
                .scrollLeft(activeTabSlide.offset().left);
        }
    }
}


    var $imagesSlider = $(".feedback-slides .client-feedback>div"),
        $thumbnailsSlider = $(".client-thumbnails>div");
   
    $imagesSlider.slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 2,
        cssEase: 'linear',
        fade: true,
        dots: true,
        arrows:false,
        autoplay: false,
        draggable: false,
        asNavFor: ".client-thumbnails>div",
    });
    
    $thumbnailsSlider.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows:false,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".feedback-slides .client-feedback>div",
    });
   
    $('.feedback-item-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        arrows:false,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });

    $(function(){
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
       
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

    $(function() {

        $('.da-thumbs > .menu-price ').each( function() { $(this).hoverdir(); } );

    });

    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

$(".counter").appear(function () {
    $('.num-scrolling').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        showAnim: 'slideDown'
    });

    $('.js-example-basic-single').select2();
    $('.blog-para').on('mouseenter' , function () {
      $(this).parent().parent().find('.img-blog img').addClass('scale');
    }).on('mouseleave' , function () {
        $(this).parent().parent().find('.img-blog img').removeClass('scale');
    });
  
    var testimonialSlider = $(".testimonial-text.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: 2400,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive: {
            767: {
                items: 1,
            },
            0: {
                items: 1,
            }
        }
    });

    $("#deal-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        autoplay: true,
        smartSpeed:500,
        autoplayHoverPause:true,
        loop:true,

        responsive: {
            992: {
                items: 3,
            },
            991: {
                items: 2,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    $( ".owl-prev").html('<span class="caret left"><i class="fa fa-angle-left"></i></span>');
    $( ".owl-next").html('<span class="caret right"><i class="fa fa-angle-right"></i></span>');

    var owl5 = $('.partners-slider');
    owl5.owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            900: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

$("#rev_slider_1_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//localhost:82/revslider/revslider/public/assets/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[1,2,3,4,5,6,7,8,9,10,0,0,0,0,0,55],
                    disable_onmobile:"on"
                },
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });

});
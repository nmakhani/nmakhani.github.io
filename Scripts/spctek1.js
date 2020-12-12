jQuery(window).load(function () {
    
    $(".www_FlowSlider_com-wrap-2").removeAttr("style");
    $(".www_FlowSlider_com-branding").attr("style", "display: none !important");
    setTimeout(function () {
        $('#loader').fadeOut(200);
    }, 5000);


    setTimeout(function () {
                    $('.hwd,.port,.rotate,').each(function () {
                        $(this).attr('src', $(this).attr('lsrc'));
                    });
                    $('.teamimg,').each(function () {
                        $(this).attr('src', $(this).attr('lsrc'));
                    });
                    $('.culimg,.foot').each(function () {
                        $(this).attr('src', $(this).attr('lsrc'));
                    });
                }, 5000);
                setTimeout(function () {
                    $('.nbs-flexisel-ul').each(function () {
                        var images = $(this).find('img').map(function () {
                            $(this).attr('src', $(this).attr('lsrc'));
                        }).get()
                    });
                }, 15000);

                setTimeout(function () {
                    $('.image-set').each(function () {
                        var images = $(this).find('img').map(function () {
                            $(this).attr('src', $(this).attr('lsrc'));
                        }).get()
                    });
                }, 25000);


    function xv_lava($el, speed) {
//            leftPos = $el.position().left + $('.members li').width() / 2 + 14;
//            $animation_tool.stop().animate({
//                left: leftPos
//            }, speed);
        };
        if ($('#team-slider').length) {
            $('#team-slider').flexslider({
                animation: "slide",
                directionNav: true,
                pauseOnAction:true,
                controlNav: true,
                pauseOnHover: false,
                slideshow:false,
                slideshowSpeed: 1000,
                useCSS:true,
                touch:true,
                animationLoop:true,
                video:false,
                keyboard:true,

                animationSpeed:300,
                direction: "horizontal", //Direction of slides
                after: function (slider) {
                    $('.members li').removeClass('active');
//                    var $img = $('.members li:eq('+ (slider.currentSlide-1)+') img.teamimg');
//                    $img.attr('src', $img.data('alt-src'));
//                    var $img = $('.members li:eq('+ (slider.currentSlide+1)+') img.teamimg');
//                    $img.attr('src', $img.attr('alt-src'));
                    $('.members li:eq(' + slider.currentSlide + ')').addClass("active");
//                    var $newimg = $('.members li:eq(' + slider.currentSlide + ') img.teamimg');
//                    var newSource = $newimg.data('alt-src');
//                    $newimg.data('alt-src', $newimg.attr('src'));
//                    $newimg.attr('src', newSource);
                    xv_lava($($('.members li.active')), 200);
                },
            });
            $('.members li ').click(function () {
                $('.members li').removeClass("active");
                $(this).addClass("active");
                $('#team-slider').flexslider($('.members li').index(this));
                xv_lava($(this), 100);
            });
            var offset_width = ($('.member').width() - $('.members').width()) / 2 - 35,
                leftPos, newWidth, isNavClicked = false,
                $mainNav_animate = $('.member'),
                $animation_tool = $(".triangle");
            $animation_tool
                .css("left", $(".active").position().left)
                .data("origLeft", $(".active").position().left)
                .data("origWidth", $animation_tool.width());
            xv_lava($($('.members li.active')), 100);
        }
        
    }).resize();
    



var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {;
    $('img.centimg').hover(sourceSwap, sourceSwap);
});
$(function () {
    $('img.circle1').hover(sourceSwap, sourceSwap);
});


$(function () {

    $('#da-slider').cslider({
        autoplay: false,
        bgincrement: 450
    });

});


//$(function () {

//    Boxgrid.init();

//});

jQuery(document).ready(function ($) {

        if ($(window).width() <= 400) {

                    $('#howwedopara #div1').removeClass('ss-left').css('left', '0%');
                    $('#howwedopara #div2').removeClass('ss-right').css('left', '0%');
                    $('.circle1').removeAttr('data-alt-src');
                    $('#clients').removeClass('parallax-395').css('background-position', '100% 0%');
                    $('#testimonials').removeClass('parallax-399').css('background-position', '100% 0%');
                }


    var $container = $('#portfolio-list'),
	colWidth = function () {
	    var w = $container.width(),
				columnNum = 1,
				columnWidth = 0;
	    if (w > 1200) {
	        columnNum = 5;
	    } else if (w > 900 && w < 1200) {
	        columnNum = 4;
	    } else if (w > 600 && w < 900) {
	        columnNum = 3;
	    } else if (w > 300 && w < 600) {
	        columnNum = 2;
	    }
	    columnWidth = Math.floor(w / columnNum);
	    $container.find('.item').each(function () {
	        var $item = $(this),
					multiplier_w = $item.attr('class').match(/item-w(\d)/),
					multiplier_h = $item.attr('class').match(/item-h(\d)/),
					width = multiplier_w ? columnWidth * multiplier_w[1] - 4 : columnWidth - 4;
	        $item.css({
	            width: width
	        });
	    });
	    return columnWidth;
	},
		isotope = function () {
		    $container.isotope({
		        resizable: false,
		        itemSelector: '.item',
		        animationEngine: 'best-available',
                masonry: {
		            columnWidth: colWidth()
                    
		        }
		    });
		};
    isotope();
    $(window).resize(isotope);

    // filter buttons

    $('#portfolio-filter a').click(function () {

        // select current
        var $optionSet = $(this).parents('#portfolio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $(this).parent().addClass('selected');

        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });



    /* ======= CLIENT CAROUSEL ======= */

    $(".client-carousel").flexisel({
        visibleItems: 5,
        animationSpeed: 500
    });


    /* ======= RESPONSIVE SLIDES ======= */

    $(function () {
        $(".rslides-testimonials").responsiveSlides({
            nav: true,
            auto: false,
            prevText: "<i class='icon-angle-left'></i>",
            nextText: "<i class='icon-angle-right'></i>",
            navContainer: ".testimonials-navi"
        });
    });

    FlowSlider("#slider", {
    startPosition: 0.0,
    position: 0.5,
    marginStart: 50,
    marginEnd: 100,
    animation:"jQuery",
    detectTouchDevice: true,
    controllerOptions: [{
        mouseStart: 0,
        mouseEnd: 100
    }]
});

    $('.collapsible').collapsible({
    speed:'fast'
    });

    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
    });

    // initialize the plugin, pass in the class selector for the sections of content (blocks)
//    var scrollorama = $.scrollorama({ blocks: '.scrollblock' });

////    // animate some examples
//    scrollorama.animate('#unpin', { duration: 800, property: 'top', start: 0, end: -200, pin: true });

    $('.header').removeClass('disp');


    //Full Caption Sliding (Hidden to Visible)
    $('.boxgrid.captionfull').hover(function () {
        $(".cover", this).stop().animate({ top: '0px' }, { queue: false, duration: 460 });
    }, function () {
        $(".cover", this).stop().animate({ top: '160px' }, { queue: false, duration: 460 });
    });

    var resizeTime = 100;
    var resizeDelay = 200;

    $('img#cont').mapster({
        mapKey: 'state',
        clickNavigate: true,
        fill: false
    });

    function resize(maxWidth, maxHeight) {
        var image = $('img#cont'),
        imgWidth = image.width(),
        imgHeight = image.height(),
        newWidth = 0,
        newHeight = 0;

        if (imgWidth / maxWidth > imgHeight / maxHeight) {
            newWidth = maxWidth;
        } else {
            newHeight = maxHeight;
        }
        image.mapster('resize', newWidth, newHeight, resizeTime);
    }

    function onWindowResize() {
        var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking = false;
        if (checking) {
            return;
        }
        checking = true;
        window.setTimeout(function () {
            var newWidth = $(window).width(),
           newHeight = $(window).height();
            if (newWidth === curWidth &&
            newHeight === curHeight) {
                resize(newWidth, newHeight);
            }
            checking = false;
        }, resizeDelay);
    }

    setTimeout(function () {
        $(window).bind('resize', onWindowResize);
        resize($(window).width(), $(window).height());

    }, 2000);


    
    ////Main File Data



    $(function () {
        var pull = $('#pull');
        menu = $('nav ul');
        navmenu = $('.navigation');
        menuHeight = menu.height();

        $(pull).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle();
        });
    });




    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('#body');
    //Setup waypoints plugin
    slide.waypoint(function (direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
        if(this.id == "slide6"){
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
            $("#liteam").removeClass('active');
            }

            if(this.id == "slide8"){
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
            $("#lijoin").removeClass('active');
            }

            else
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
         if(this.id == "slide5")
         {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
            $("#liculture").removeClass('active');
            }
            if(this.id == "slide7")
         {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
            $("#lihello").removeClass('active');
            }
             
       else
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    }, {
  offset: function() {
    return $(this).height();
  }
  });

    // Clients images hover effect

    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function () {
        $('img.xyz').hover(sourceSwap, sourceSwap);
    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
//    mywindow.scroll(function () {
//        //mywindow.scrollLeft(0);
//        if (mywindow.scrollTop() <= 800) {
//            //$('.navigation li[data-slide="1"]').addClass('active');
//            $('.navigation li[data-slide="3"]').removeClass('active');
//        }
//        if (mywindow.scrollTop() > 1400 && mywindow.scrollTop() < 1900) {
//            //$('.navigation li[data-slide="1"]').addClass('active');
//            $('.navigation li[data-slide="3"]').addClass('active');
//        }
//        //        var Slide6 = $('.main').children();
//        //        var offsetCulture = (Slide6[5].offsetTop - Slide6[5].offsetHeight) - (Slide6[0].clientHeight + 50);
//        //        alert(offsetCulture);
//        //        $('.overlay').css({ 'top': offsetCulture });

//    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.stop().animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 50
        }, 1500,"easeOutQuint");
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        var menu = $('nav ul');


        if (this.id == "SHimg") {
            htmlbody.stop().animate({
                scrollTop: $('#unpin[data-slide="' + "1" + '"]').offset().top
            }, 1500,"easeOutQuint");
        }
        if (this.id == "Abt") {
            htmlbody.stop().animate({
                scrollTop: $('.slide[data-slide="' + '1' + '"]').offset().top - 50
            }, 1500,"easeOutQuint");
        }
        if (this.id == "spcblog") {
            window.open($(this).attr('data-href'), '_blank');
        }
        else {
            dataslide = $(this).attr('data-slide');
            goToByScroll(dataslide);
        }

        setTimeout(function () {
            if ($(window).width() < 500) {
                menu.slideToggle();
            }
        }, 1000);
    });

    $('#back-top a').click(function (e) {
        e.preventDefault();

        if ($(window).width() < 400) {
            htmlbody.stop().animate({
                scrollTop: $('#slide1[data-slide1="' + '2' + '"]').offset().top - 30
            }, 1500,"easeOutQuint");
        } else {
            htmlbody.stop().animate({
                scrollTop: $('#slide1[data-slide1="' + '2' + '"]').offset().top - 50
            }, 1500,"easeOutQuint");
        }
    });

    $('#SHimg a').click(function (e) {
        e.preventDefault();

    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        htmlbody.stop().animate({
            scrollTop: 801
        }, 1000,"easeOutQuint");
    });

});


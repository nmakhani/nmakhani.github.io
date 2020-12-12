jQuery(window).load(function () {
    
    $(".www_FlowSlider_com-wrap-2").removeAttr("style");
    $(".www_FlowSlider_com-branding").attr("style", "display: none !important");
    setTimeout(function () {
        $('#loader').fadeOut(200);
    }, 5000);

        jQuery(".parallax-395").parallax("100%", "0.3");
        jQuery(".parallax-399").parallax("100%", "0.3");

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
                directionNav: false,
                controlNav: false,
                pauseOnHover: true,
                slideshow:false,
                slideshowSpeed: 3000,
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
                    xv_lava($($('.members li.active')), 700);
                },
            });
            $('.members li ').click(function () {
                $('.members li').removeClass("active");
                $(this).addClass("active");
                $('#team-slider').flexslider($('.members li').index(this));
                xv_lava($(this), 500);
            });
            var offset_width = ($('.member').width() - $('.members').width()) / 2 - 35,
                leftPos, newWidth, isNavClicked = false,
                $mainNav_animate = $('.member'),
                $animation_tool = $(".triangle");
            $animation_tool
                .css("left", $(".active").position().left)
                .data("origLeft", $(".active").position().left)
                .data("origWidth", $animation_tool.width());
            xv_lava($($('.members li.active')), 500);
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
        autoplay: true,
        bgincrement: 450
    });

});


$(function () {

    Boxgrid.init();

});


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
		        animationEngine: 'jquery',
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
        animationSpeed: 600
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

    $("#slider").FlowSlider({
        animation: "Transition",
        animationOptions: {
            transition: new FlowSlider
            .Transition
                .CubicBezier(0.345, 1.650, 0.535, 0.795)
                    .transition
        }

    });

    $('.collapsible').collapsible({

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
    var scrollorama = $.scrollorama({ blocks: '.scrollblock' });

//    // animate some examples
    scrollorama.animate('#unpin', { duration: 800, property: 'top', start: 0, end: -200, pin: true });

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
    htmlbody = $('html,body');
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
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 50
        }, 1500, 'easeInOutQuint');
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        var menu = $('nav ul');


        if (this.id == "SHimg") {
            htmlbody.animate({
                scrollTop: $('#unpin[data-slide="' + "1" + '"]').offset().top
            }, 1500, 'easeInOutQuint');
        }
        if (this.id == "Abt") {
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + '1' + '"]').offset().top - 70
            }, 1500, 'easeInOutQuint');
        }
        if (this.id == "spcblog") {
            window.open($(this).attr('data-href'), '_blank');
        }
        else {
            dataslide = $(this).attr('data-slide');
            goToByScroll(dataslide);
        }

        setTimeout(function () {
            if ($(window).width() < 860) {
                menu.slideToggle();
            }
        }, 1000);
    });

    $('#back-top a').click(function (e) {
        e.preventDefault();

        if ($(window).width() < 400) {
            htmlbody.animate({
                scrollTop: $('#slide1[data-slide1="' + '2' + '"]').offset().top - 30
            }, 1500, 'easeInOutQuint');
        } else {
            htmlbody.animate({
                scrollTop: $('#slide1[data-slide1="' + '2' + '"]').offset().top - 50
            }, 1500, 'easeInOutQuint');
        }
    });

    $('#SHimg a').click(function (e) {
        e.preventDefault();

    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        htmlbody.animate({
            scrollTop: 801
        }, 1000, 'easeOutBounce');
    });




});

$(function () {

    var $sidescroll = (function () {

        // the row elements
        var $rows = $('#ss-container > div.ss-row, #ss-container1 > div.ss-row'),
        // we will cache the inviewport rows and the outside viewport rows
					$rowsViewport, $rowsOutViewport,
        // navigation menu links
					$links = $('#ss-links > a'),
        // the window element
					$win = $(window),
        // we will store the window sizes here
					winSize = {},
        // used in the scroll setTimeout function
					anim = false,
        // page scroll speed
					scollPageSpeed = 5000,
        // page scroll easing
					scollPageEasing = 'easeInOutExpo',
        // perspective?
					hasPerspective = false,

					perspective = hasPerspective && Modernizr.csstransforms3d,
        // initialize function
					init = function () {

					    // get window sizes
					    getWinSize();
					    // initialize events
					    initEvents();
					    // define the inviewport selector
					    defineViewport();
					    // gets the elements that match the previous selector
					    setViewportRows();
					    // if perspective add css
					    if (perspective) {
					        $rows.css({
					            '-webkit-perspective': 600,
					            '-webkit-perspective-origin': '50% 0%'
					        });
					    }
					    // show the pointers for the inviewport rows
					    $rowsViewport.find('a.ss-circle').addClass('ss-circle-deco');
					    // set positions for each row
					    placeRows();

					},
        // defines a selector that gathers the row elems that are initially visible.
        // the element is visible if its top is less than the window's height.
        // these elements will not be affected when scrolling the page.
					defineViewport = function () {

					    $.extend($.expr[':'], {

					        inviewport: function (el) {
					            if ($(el).offset().top < winSize.height) {
					                return true;
					            }
					            return false;
					        }

					    });

					},
        // checks which rows are initially visible 
					setViewportRows = function () {

					    $rowsViewport = $rows.filter(':inviewport');
					    $rowsOutViewport = $rows.not($rowsViewport)

					},
        // get window sizes
					getWinSize = function () {

					    winSize.width = $win.width();
					    winSize.height = $win.height();

					},
        // initialize some events
					initEvents = function () {

					    // navigation menu links.
					    // scroll to the respective section.
					    $links.on('click.Scrolling', function (event) {

					        // scroll to the element that has id = menu's href
					        $('html, body').stop().animate({
					            scrollTop: $($(this).attr('href')).offset().top
					        }, scollPageSpeed, scollPageEasing);

					        return false;

					    });

					    $(window).on({
					        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
					        'resize.Scrolling': function (event) {

					            // get the window sizes again
					            getWinSize();
					            // redefine which rows are initially visible (:inviewport)
					            setViewportRows();
					            // remove pointers for every row
					            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
					            // show inviewport rows and respective pointers
					            $rowsViewport.each(function () {

					                $(this).find('div.ss-left')
										   .css({ left: '0%' })
										   .end()
										   .find('div.ss-right')
										   .css({ right: '0%' })
										   .end()
										   .find('a.ss-circle')
										   .addClass('ss-circle-deco');

					            });

					        },
					        // when scrolling the page change the position of each row	
					        'scroll.Scrolling': function (event) {

					            // set a timeout to avoid that the 
					            // placeRows function gets called on every scroll trigger
					            if (anim) return false;
					            anim = true;
					            setTimeout(function () {

					                placeRows();
					                anim = false;

					            }, 10);

					        }
					    });

					},
        // sets the position of the rows (left and right row elements).
        // Both of these elements will start with -50% for the left/right (not visible)
        // and this value should be 0% (final position) when the element is on the
        // center of the window.
					placeRows = function () {

					    // how much we scrolled so far
					    var winscroll = $win.scrollTop(),
					    // the y value for the center of the screen
							winCenter = (winSize.height / 1.5) + winscroll;

					    // for every row that is not inviewport
					    $rowsOutViewport.each(function (i) {

					        var $row = $(this),
					        // the left side element
								$rowL = $row.find('div.ss-left'),
					        // the right side element
								$rowR = $row.find('div.ss-right'),
					        // top value
								rowT = $row.offset().top;

					        // hide the row if it is under the viewport
					        if (rowT > winSize.height + winscroll) {

					            if (perspective) {

					                $rowL.css({
					                    '-webkit-transform': 'translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
					                    'opacity': 0
					                });
					                $rowR.css({
					                    '-webkit-transform': 'translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
					                    'opacity': 0
					                });

					            }
					            else {

					                $rowL.css({ left: '-50%' });
					                $rowR.css({ right: '-50%' });

					            }

					        }
					        // if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
					        else {

					            // row's height
					            var rowH = $row.height(),
					            // the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
									factor = (((rowT + rowH / 2) - winCenter) / (winSize.height / 2 + rowH / 2)),
					            // value for the left / right of each side of the row.
					            // 0% is the limit
									val = Math.max(factor * 50, 0);

					            if (val <= 0) {

					                // when 0% is reached show the pointer for that row
					                if (!$row.data('pointer')) {

					                    $row.data('pointer', true);
					                    $row.find('.ss-circle').addClass('ss-circle-deco');

					                }

					            }
					            else {

					                // the pointer should not be shown
					                if ($row.data('pointer')) {

					                    $row.data('pointer', false);
					                    $row.find('.ss-circle').removeClass('ss-circle-deco');

					                }

					            }

					            // set calculated values
					            if (perspective) {

					                var t = Math.max(factor * 75, 0),
										r = Math.max(factor * 90, 0),
										o = Math.min(Math.abs(factor - 1), 1);

					                $rowL.css({
					                    '-webkit-transform': 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
					                    'opacity': o
					                });
					                $rowR.css({
					                    '-webkit-transform': 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
					                    'opacity': o
					                });

					            }
					            else {

					                $rowL.css({ left: -val + '%' });
					                $rowR.css({ right: -val + '%' });

					            }
					        }
					    });
					};

        return { init: init };

    })();

    $sidescroll.init();

});
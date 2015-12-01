// TopSlider
$(function($) {
    $(".homeTopSlider").responsiveSlides({
        auto: true,                         // Boolean: Animate automatically, true or false
        speed: 1000,                        // Integer: Speed of the transition, in milliseconds
        timeout: 4000,                      // Integer: Time between slide transitions, in milliseconds
        pager: true,                        // Boolean: Show pager, true or false
        nav: false,                         // Boolean: Show navigation, true or false
        random: false,                      // Boolean: Randomize the order of the slides, true or false
        pause: true,                        // Boolean: Pause on hover, true or false
        pauseControls: true,                // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",               // String: Text for the "previous" button
        nextText: "Next",                   // String: Text for the "next" button
        maxwidth: "",                       // Integer: Max-width of the slideshow, in pixels
        navContainer: ".mMainMenu",         // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: ".mMainMenu li",    // Selector: Declare custom pager navigation
        namespace: "homeTopSlider",         // String: Change the default namespace used
        before: function(){
            var $navContainer = $(this.navContainer),
                $activeControl = $navContainer.slice(0, 1).children('.homeTopSlider_here'),
                $tria = $('.eTtriangle'),
                speed = 300;

            if(!$activeControl.index()){
                $tria.animate({
                    left: $activeControl.position().left,
                    opacity: 0
                }, speed);
            } else {
                $tria.animate({
                    left: $activeControl.position().left,
                    opacity: 1
                }, speed);
            }
        }, // Function: Before callback
        after: function(){} // Function: After callback
    });
}); // end TopSlider

// contentHomeSlider
$(function($) {
    $('.boxHomeSlider').bjqs({
        animtype    : 'slide',
        height      : 620,
        width       : 950,
        automatic   : false,
        responsive  : false,
        randomstart : false,
        nexttext    : '',
        prevtext    : ''
    });
});  // end contentHomeSlider


// menuScroll
$(window).load(function() {
        console.log("ss");
        $('#scrollbar1').tinyscrollbar({
            axis: "x",
            trackSize: 320,
            thumbSize: 40
    });
    var $item = $('.bLeftMenuItem'),
        $anchor = $('.bLeftMenuItem a'),
        speed = 300,
        $viewElement = $('.bAboutOf'),
        basePosition;

    $anchor.hoverIntent(function() {
        var $this = $(this),
            $wrapInfo = $this.next('.bLeftMenuName'),
            count = 0;

        basePosition = $this.next('.bLeftMenuName').css('left');
        $wrapInfo.stop().animate({
            left: count
        }, speed);
    }, function() {
        var $this = $(this),
            $wrapInfo = $this.next('.bLeftMenuName');

        $wrapInfo.stop().animate({
            left: basePosition
        }, speed);
    });

    $anchor.on("click", function(e){
        var $this = $(this);

        e.preventDefault();

        $item.removeClass('bLeftMenuItemActive');

        $('html, body').stop(true, true).animate({
            scrollTop: $($this.attr('href')).offset().top
        }, 1000);
    });
    var $window = $(window);
    var heightWindow = $window.height();
    var heightHome = $('#Home').offset().top;
    var heightNumber = $('#Number').offset().top;
    var heightHi = $('#Hi').offset().top;
    var heightNews = $('#News').offset().top;
    var heightInv = $('#Inv').offset().top;
    var heightContact = $('#Contact').offset().top;
    $(window).scroll(function(){
        if ($window.scrollTop() + heightWindow > heightContact ) {
            $item.removeClass('bLeftMenuItemActive');
            $('[href="#Contact"]').parent().addClass('bLeftMenuItemActive');
        } else {
            if ($window.scrollTop() + heightWindow > heightInv ) {
                $item.removeClass('bLeftMenuItemActive');
                $('[href="#Inv"]').parent().addClass('bLeftMenuItemActive');
            }
            else {
                if ($window.scrollTop() + heightWindow -0> heightNews ) {
                    $item.removeClass('bLeftMenuItemActive');
                    $('[href="#News"]').parent().addClass('bLeftMenuItemActive');
                }
                else {
                    if ($window.scrollTop() + heightWindow - 300 > heightHi ) {
                        $item.removeClass('bLeftMenuItemActive');
                        $('[href="#Hi"]').parent().addClass('bLeftMenuItemActive');
                    }
                    else {
                        if ($window.scrollTop() + heightWindow > heightNumber ) {
                            $item.removeClass('bLeftMenuItemActive');
                            $('[href="#Number"]').parent().addClass('bLeftMenuItemActive');
                            if ( $window.scrollTop() == 0) {
                                $item.removeClass('bLeftMenuItemActive');
                                $('[href="#Home"]').parent().addClass('bLeftMenuItemActive');
                            }
                        }
                    }
                }
            }
        }
    });
    return false;

}); // end menuScroll


// homeMenu
$(function() {
    var $navContainer = $('.bTopMenu'),
        $items = $navContainer.children('li'),
        $subMenu = $('.bSubTopMenu');

    $items.hoverIntent(function(){
        var $this = $(this),
            $itemSubMenu =  $this.children('.bSubTopMenu');

        $subMenu.slideUp();
        $itemSubMenu.slideDown();

    }, function(e){
        console.log($(e.relatedTarget).closest($(this)).length);
        if(!$(e.relatedTarget).closest($(this)).length) {
            $subMenu.slideUp();
        }
    });

    return false;
}); // end homeMenu


//Info graf start animation
$(function() {
    var $conteinerBaseInfo = $('.bBaseInfo'),
        $conteinerRiseCompany = $('.bTurnover');

    animationBaseInfo($conteinerBaseInfo);
    animtionRiseCompany($conteinerRiseCompany);

});// END Info graf


function animationBaseInfo(content){
    var $boxWorckYears = content.find('.mTerm'),
        $infoItems = content.find('.mBaseInfoItems'),
        step = 0,
        temp = 0;

    var eff = function() {

        if(step <= 3) {

            $($infoItems[step]).show('slide', {
                direction: "left",
                easing: 'easeOutQuart'
            }, 800);

            ++step
        }
    };

    $boxWorckYears.show('slide', {
        direction: "left",
        easing: 'easeOutQuad'
    }, 800, function() {
        setInterval(eff, temp += 150);
    });
}
// company //
function animtionRiseCompany(content) {
    var $diagramItems = content.find('.mVertDiagramItems > div'),
        $number = $diagramItems.find('div'),
        $text = content.find('.eText > div'),
        step = 0,
        temp = 0;

    var eff = function() {

        if(step <= 3) {

            $($diagramItems[step]).show('slide', {
                direction: "top",
                easing: 'easeOutQuart'
            }, 800);

            ++step
        }
    };
   var textChange = function(time, item , n, value) {
        if (n == 101){
            return ;
        }
       var timeout = time/100;
       var itemText = +value/100;
       var m = itemText*n;
       var number = +m.toFixed(2);
            item.text(number);
       n++;
            setTimeout(function(){textChange(time, item, n, value)}, timeout )
    }
    content.show('fade', {
        easing: 'easeInCubic'
    }, 800, function() {
        $($diagramItems[0]).animate({
            opacity: 1,
            height: 45
        }, 800);
        textChange(600, $('.DiagramText1'), 0, 5.5);
        $($diagramItems[1]).animate({
            opacity: 1,
            height: 81
        }, 800);
         textChange(600, $('.DiagramText2'), 0, 8.8);
        $($diagramItems[2]).animate({
            opacity: 1,
            height: 139
        }, 800);
         textChange(600, $('.DiagramText3'), 0, 15.2);
        $($diagramItems[3]).animate({
            opacity: 1,
            height: 217
        }, 800, function() {
            $text.show('fade', {
                easing: 'easeOutQuad'
            }, 600);
        });
        textChange(600, $('.DiagramText4'), 0, 23.8);
    });
}


// companyTabs
$(function() {
    var $conteinerMenu = $('.bLogos'),
        $menu = $conteinerMenu.find('.mLogos'),
        $items = $menu.children('.menuItems'),
        $wrap = $('.boxTabs'),
        $view = $wrap.children('.contentItems'),
        $buttonClose = $wrap.children('.mRoll'),
        $tria = $('.eArrow');

    $items.click(function() {
        var $this = $(this),
            index = $this.index(),
            itemsWidth = $this.width();

        $conteinerMenu.removeClass('allOff');

        $items.removeClass('active');
        $($items[index]).addClass('active');

        $view.hide();
        $($view[index]).show();

        $wrap.slideDown(600);


        if(!$items.index()){
            $tria.animate({
                left: $this.position().left + (itemsWidth / 2),
                opacity: 1
            }, 300);
        } else {
            $tria.animate({
                left: $this.position().left + (itemsWidth / 2),
                opacity: 1
            }, 300);
        }


        if($($view[index]).hasClass('Es')) {
            animationContentEs($($view[index]));
        } else if($($view[index]).hasClass('Courier')) {
            animationContentCourier($($view[index]));
        }
        else if($($view[index]).hasClass('Sapato')) {
            animationContentSapato($($view[index]));
        }
        else if($($view[index]).hasClass('Travel')) {
            animationContentTravel($($view[index]));
        }
        else if($($view[index]).hasClass('Ozon')) {
            animationContentOzon($($view[index]));
        }
    });

    function animationContentOzon(content){
        var text = content.find('.eLeft').add(content.find('.eRight')),
            eVertLine = content.find('.eVertLine'),
            number = content.find('.eNumber'),
            intervalID = 0,
            step = 0,
            temp = 0;

        $(text).show('slide', {
            direction: "right",
            easing: 'easeOutQuart'
        }, 800);

        var start = function() {

            if(step <= 2) {

                $(number[step]).show('slide', {
                    direction: "left",
                    easing: 'easeOutQuart'
                }, 800);

                ++step
            }

            if(step === 2 && ($(eVertLine[0]).height() == 190)) {

                $.each(eVertLine, function() {
                    var $this = $(this),
                        height = $this.height();

                    $this.animate({
                        height: height += 200,
                        opacity: 1
                    }, {
                        duration: 800,
                        specialEasing: {
                            height: 'easeOutQuart',
                            opacity: 'easeOutCubic'
                        }
                    });
                });

                clearInterval(intervalID);
            }
        };

        intervalID = setInterval(start, temp += 150);
    }

    function animationContentTravel(content){
        var text = content.find('.eLeft').add(content.find('.eRight')),
            ePlane = content.find('.ePlane'),
            number = content.find('.eNumber'),
            step = 0,
            temp = 0;

        $(text).show('slide', {
            direction: "right",
            easing: 'easeOutQuart'
        }, 800);


        var start = function() {
                var x = 0,
                    y = 0;

            if(step <= 3) {

                $(number[step]).show('slide', {
                    direction: "left",
                    easing: 'easeOutQuart'
                }, 800);

                ++step
            }
            if(step == 1) {

                x = 110;
                y = 610;

                $(ePlane[0]).animate({
                    left: x,
                    bottom: y,
                    opacity: 1
                }, {
                    duration: 1300,
                    specialEasing: {
                        left: 'easeOutQuart',
                        bottom: 'easeOutQuart',
                        opacity: 'easeOutCubic'
                    }
                });

                x = -100;
                y = 390;

                $(ePlane[1]).animate({
                    left: x,
                    bottom: y,
                    opacity: 1
                }, {
                    duration: 1300,
                    specialEasing: {
                        left: 'easeOutQuart',
                        bottom: 'easeOutQuart',
                        opacity: 'easeOutCubic'
                    }
                });

                x = 100;
                y = 200;

                $(ePlane[2]).animate({
                    left: x,
                    bottom: y,
                    opacity: 1
                }, {
                    duration: 1500,
                    specialEasing: {
                        left: 'easeOutQuart',
                        bottom: 'easeOutQuart',
                        opacity: 'easeOutCubic'
                    }
                });

            }
        };

        setInterval(start, temp += 150);
    }

    function animationContentSapato(content){
        var text = content.find('.eLeft').add(content.find('.eRight')),
            laScarpa = content.find('.laScarpa'),
            number = content.find('.eNumber'),
            step = 0,
            temp = 0;

        $(text).show('slide', {
            direction: "right",
            easing: 'easeOutQuart'
        }, 800);


        var start = function() {

            if(step <= 2) {

                $(number[step]).show('slide', {
                    direction: "left",
                    easing: 'easeOutQuart'
                }, 800);

                ++step
            }
            if(step == 1) {

                $(laScarpa).show('fade', {
                    easing: 'easeInQuad'
                }, 800);
            }
        };

        setInterval(start, temp += 150);
    }

    function animationContentCourier(content){
        var text = content.find('.eLeft').add(content.find('.eRight')),
            number = content.find('.eNumber'),
            eCar = content.find('.eCar'),
            step = 0,
            temp = 0;

        $(text).show('slide', {
            direction: "right",
            easing: 'easeOutQuart'
        }, 800);

        var start = function() {

            if(step <= 3) {

                $(number[step]).show('slide', {
                    direction: "left",
                    easing: 'easeOutQuart'
                }, 800);

                ++step
            }

            if(step == 3) {

                eCar.animate({
                    left: 0,
                    opacity: 1
                }, 400);
            }
        };

        setInterval(start, temp += 150);
   }

    function animationContentEs(content){
        var name = content.find('.eName'),
            list = content.find('li'),
            eText = content.find('.eText').add(content.find('.eVideo')),
            step = 0,
            temp = 0;

        name.show('fade', {
            easing: 'easeInCubic'
        }, 300);

        eText.show("slide", {
            direction: "right",
            easing: 'easeOutQuart'
        }, 800);

        var eff = function() {

            if(step <= 6) {

                $(list[step]).show('slide', {
                    direction: "left",
                    easing: 'easeOutQuart'
                }, 800);

                ++step
            }
        };

        setInterval(eff, temp += 150);
    }

    $buttonClose.click(function() {
        $items.removeClass('active');

        $wrap.slideUp(500, function() {
            $conteinerMenu.addClass('allOff');
        });

        $tria.animate({
            left: -157,
            opacity: 0
        }, 300);
    });
    return false;
}); // end companyTabs


// Team Tabs
$(function() {
    var $conteiner = $('.mTeam'),
        $items = $conteiner.find('.ePersonItems'),
        $content = $conteiner.find('.mContentItem'),
        $allTeamView = $conteiner.find('.eAllTeam');

    $items.click(function() {
        var $this = $(this),
            index = $this.index();

        if($this.hasClass('active')) return;

        $items.removeClass('active');
        $this.addClass('active');

        $content.add($allTeamView).hide();
        $($content[index]).fadeIn();
    });

});// END Team Tabs


// Map Cart
$(function() {
    var $conteiner = $('.bMap'),
        $cityViewItems = $conteiner.find('.bMapCityItems'),
        $map_cart = $conteiner.find('#map_cart_blank'),
        $area = $map_cart.find('area');
    var $ItemCity =  $('.bMapBull');
    var $itemTextObl = null;
    var $itemCityText = null;
         $ItemCity.hover(function(){
            var $this = $(this),
                 $className = $this.attr('class').split(' ')[1];
                 $itemCityText = $('.'+$className+'Active');
                 $itemCityText.addClass('cityVisable');

    },
         function(){
             $itemCityText.removeClass('cityVisable')
         })
    $area.hover(function(e) {
        var $this = $(this),
            $className = $this.attr('class'),
            $items = $('.bMapCityItems.' + $className);
        $itemTextObl = $('.'+$className+'Fo');
        var d =$('.bCityKhabarovskFo');
        $itemTextObl.addClass('cityVisable');
        e.preventDefault();

        $items.stop(true, true).show('fade', {
            easing: 'easeOutExpo'
        }, 800);
    }, function() {
        $itemTextObl.removeClass('cityVisable');
        $cityViewItems.stop(true, true).hide('fade', {
            easing: 'easeOutQuad'
        }, 300);
    });

});// END Map Cart

//yandex map
$(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    map.setCenter(new YMaps.GeoPoint(37.51735, 55.7969), 10);
    map.addControl(new YMaps.Zoom(), new YMaps.ControlPosition(YMaps.ControlPosition.BOTTOM_RIGHT, new YMaps.Point(5, 150)));
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.51735, 55.7969));
    placemark.name = 'БЦ Сокол Плейс'
    placemark.description = "125252, Москва,Чапаевский пер., 14";
    map.addOverlay(placemark);
})
$(function () {
    $('.map-background').mouseover(function(){
        $(this).css('display', 'none');
    });
    $('.map-bottom-white').mouseover(function(){
        $('.map-background').css('display', 'block');
    });
});

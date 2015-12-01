$(function($) {
    var heightWindow = $(window).height();
    var windowScroll = $(window).scrollTop();
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
});

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
})

//menu scroll
$(window).load(function() {
    var $item = $('.bLeftMenuItem'),
        $anchor = $('.bLeftMenuItem a'),
        speed = 300,
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

    return false;

});
//scroll change left
var functionScroll = function() {
    var $item = $('.bLeftMenuItem');
    var $window = $(window);
    var heightWindow = $window.height();
    var heightHome = $('#Home').offset().top;
    var heightNumber = $('#Number').offset().top;
    var heightHi = $('.mGreeting').offset().top;
    var heightNews = $('.bSmi').offset().top;
    var heightInv = $('.bInvestors').offset().top;
    var heightContact = $('.bContact').offset().top;
    if ($window.scrollTop() + heightWindow > heightContact ) {
        $item.removeClass('bLeftMenuItemActive');
        $('[href="#Contact"]').parent().addClass('bLeftMenuItemActive');
    } else {
        if ($window.scrollTop() + heightWindow > heightInv ) {
            $item.removeClass('bLeftMenuItemActive');
            $('[href="#Inv"]').parent().addClass('bLeftMenuItemActive');
        }
        else {
            if ($window.scrollTop() + heightWindow-600 > heightNews ) {
                $item.removeClass('bLeftMenuItemActive');
                $('[href="#News"]').parent().addClass('bLeftMenuItemActive');
            }
            else {
                if ($window.scrollTop() +heightWindow-200  > heightHi ) {
                    $item.removeClass('bLeftMenuItemActive');
                    $('[href="#Hi"]').parent().addClass('bLeftMenuItemActive');
                }
                else {
                    if ($window.scrollTop() + heightWindow > heightNumber ) {
                        $item.removeClass('bLeftMenuItemActive');
                        $('[href="#Number"]').parent().addClass('bLeftMenuItemActive');
                        if ( $window.scrollTop() >= 0 && $window.scrollTop() <= 200) {
                            $item.removeClass('bLeftMenuItemActive');
                            $('[href="#Home"]').parent().addClass('bLeftMenuItemActive');
                        }
                   }
                }
            }
        }
    }
}
$(window).scroll(function(){
    functionScroll();
});


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
        if(!$(e.relatedTarget).closest($(this)).length) {
            $subMenu.slideUp();
        }
    });

    return false;
}); // end homeMenu

//Info graf

$(function() {
    var $conteinerBaseInfo = $('.bBaseInfo'),
        $conteinerRiseCompany = $('.bTurnover');

   /* animationBaseInfo($conteinerBaseInfo);
    animtionRiseCompany($conteinerRiseCompany);*/

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
            }, 100);

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
    }, 200, function() {
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
            $itemCityText.removeClass('cityVisable');
        });
    $area.hover(function(e) {
        var $this = $(this),
            $className = $this.attr('class'),
            $items = $('.bMapCityItems.' + $className);
        $itemTextObl = $('.'+$className+'Fo');
        $itemTextObl.addClass('cityVisable');
        $items.stop(true, true).show('fade', {
            easing: 'easeOutExpo'
        }, 800);
        $('.bMap').mousemove(function(e){
            var positionX = e.pageX-$(window).width()*0.5+130;
            var positionY = e.pageY-800;
            $itemTextObl.css({'top': positionY+'px', 'left': positionX+'px'});
        });
    }, function() {
        $('.bInfoGrafPic').unbind('mousemove');
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
// click on list //
$(function(){
    $('.newsItems').click(function(){
        var $className = $(this).attr('class').split(' ')[1];
        if ($className == 'contentItem1') {
            location.href='https://hbr.org/2014/07/the-ceo-of-ozon-on-building-an-e-commerce-giant-in-a-cash-only-economy'
        }
        if ($className == 'contentItem2') {
            location.href='http://blogs.wsj.com/accelerators/2014/09/15/maelle-gavet-theres-no-such-thing-as-raising-too-much-money/'
        }
        if ($className == 'contentItem3') {
            location.href='http://www.informilo.com/2014/11/west-always-best/'
        }
        if ($className == 'contentItem4') {
            location.href='http://www.bloomberg.com/video/ozon-ru-is-the-amazon-of-russia-ShNQA_YARUGhI70g90IxaQ.html'
        }
        if ($className == 'contentItem5') {
            location.href='http://www.wired.com/2014/05/ozon-ceo-maelle-gavet/'
        }
        if ($className == 'contentItem6') {
            location.href='http://tech.eu/features/1217/maelle-gavet-interview-ozon-russia/'
        }
        if ($className == 'contentItem7') {
            location.href='http://www.youtube.com/watch?v=haBUPPt97MY'
        }
        if ($className == 'contentItem8') {
            location.href='http://fortune.com/2013/11/04/investors-should-give-russia-a-second-look/'
        }
        if ($className == 'contentItem9') {
            location.href='http://businessofeminin.com/maelle-gavet-la-francaise-qui-a-seduit-la-russie/'
        }
        if ($className == 'contentItem10') {
            location.href='http://www.bloomberg.com/video/ozon-group-the-amazon-of-russia-s-tech-scene-Kf7p_uOaQ~qRxypcheaKcw.html'
        }
        if ($className == 'contentItem11') {
            location.href='http://www.fastcompany.com/3000043/jeff-bezos-russia'
        }
        if ($className == 'contentItem12') {
            location.href='http://blogs.ft.com/tech-blog/2011/09/ozon-funding-russia/?Authorised=false'
        }

    })
})
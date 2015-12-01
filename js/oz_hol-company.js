
$(function() {
    $('.menuItems').click(function(){
        $('.bDates').addClass('active-company');
    });
    $('.mRoll').click(function(){
        $('.bDates').removeClass('active-company');
    });
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
                        height: height += 140,
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

                $('.eCar1').animate({
                    left: '-80px',
                    opacity: 1
                }, 400);
                $('.eCar2').animate({
                    left: '80px',
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


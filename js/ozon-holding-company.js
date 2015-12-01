$(function(){
    var company = location.href.split('?')[1];
    if ((typeof company) != 'undefined'){
        var $conteinerMenu = $('.bLogos'),
            $menu = $conteinerMenu.find('.mLogos'),
            $items = $menu.children('.menuItems'),
            $wrap = $('.boxTabs'),
            $view = $wrap.children('.contentItems'),
            $tria = $('.eArrow');
    if ( company == 'x1'){
        var $this = $('.eOzon');
        $('html, body').animate({ scrollTop: 900}, 500);
    }
    if ( company == 'x2'){
        var $this = $('.eTravel');
        $('html, body').animate({ scrollTop: 900}, 500);
    }
    if ( company == 'x3'){
        var $this = $('.eSapato');
        $('html, body').animate({ scrollTop: 900}, 500);
    }
    if ( company == 'x4'){
        var $this = $('.eCourier');
        $('html, body').animate({ scrollTop: 900}, 500);
    }
    if ( company == 'x5'){
        var $this = $('.eEs');
        $('html, body').animate({ scrollTop: 900}, 500);
    }

         var   index = $this.index(),
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

                $('.eCar1').animate({
                    left: '-80px',
                    opacity: 1
                }, 400);
                $('.eCar2').animate({
                    left: '0',
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

    }

});

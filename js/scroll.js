$(window).load(function() {
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
        /*$this.parent().addClass('bLeftMenuItemActive');*/

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

});

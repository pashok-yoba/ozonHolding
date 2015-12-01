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
}); // end homeMenu*/

var change =function($this){
    var id = $this.attr('id');
    $('.bPress .bMenuPress >li b').css('display', 'none');
    $('.link').css({'background-color': 'transparent', 'color':'#00b9f2'});
    $this.css({'background-color': '#ffcb05', 'color':'#fff'});
    $('.bPress .bMenuPress >li:hover b').css('display', 'block');
    $('.bDetailPress').animate({opacity: '0'}, 500);
    $('.bDetailPress').css({'height': '0'});
    $('.press').animate({opacity: '0'}, 500);
    $('.press').css({'height': '0'});
    $('.'+id+'Press').css({'height': 'auto'});
    $('.'+id+'Press').animate({opacity: '1'}, 500);
    return false
}

$(function() {
   $('#bPhoto').click(function(){
       change($('#bPhoto'));

   });
    $('#bAll').click(function(){
        change($('#bAll'));
    });
    $('#bVideo').click(function(){
        change($('#bVideo'));
    });
    $('#bLogo').click(function(){
        change($('#bLogo'));
    });
});

$(function(){
    $('.ePress').click(function(){
        var id = $(this).attr('id');
        console.log(id);
        $('.bAllPress').animate({opacity: '0'}, 500);
        $('.bAllPress').css({'height': '0'});
        $('#d'+id).animate({'opacity': '1'}, 500);
        $('#d'+id).css({'height': 'auto'});

    });
    $('.link-all').click(function(){
        $('.bDetailPress').animate({opacity: '0'}, 500);
        $('.bDetailPress').css({'height': '0'});
        $('.bDetailPress').animate({opacity: '0'}, 500);
        $('.bDetailPress').css({'height': '0'});
        $('.bAllPress').animate({'opacity': '1'}, 500);
        $('.bAllPress').css({'height': 'auto'});
    });

});
$(function(){
        var video1 = $('<object class="video-source" data="http://www.bloomberg.com/video/embed/ShNQA_YARUGhI70g90IxaQ?height=395&width=640" width=640 height=430 style="overflow:hidden;"></object>').addClass('video-ie');
        var video2 = $('<iframe class="video-source" width="640" height="360" src="http://www.youtube.com/embed/-JuL2GmwunQ" frameborder="0" allowfullscreen></iframe>').addClass('video-ie');
        var video3 =$('<iframe class="video-source" width="640" height="360" src="http://www.youtube.com/embed/x7asLVex7ms" frameborder="0" allowfullscreen></iframe>').addClass('video-ie');
        var video5=$('<iframe class="video-source" width="640" height="360" src="http://www.youtube.com/embed/c7ztUw6Lay8" frameborder="0" allowfullscreen></iframe>').addClass('video-ie');
        var video6=$('<iframe class="video-source" width="640" height="360" src="http://www.youtube.com/embed/RNC5Z2CyldQ" frameborder="0" allowfullscreen></iframe>').addClass('video-ie');
        var video7=$('<iframe class="video-source" width="640" height="360" src="http://www.youtube.com/embed/c7ztUw6Lay8" frameborder="0" allowfullscreen></iframe>').addClass('video-ie');
    $('.eVideo').click(function(){
        $(window).resize(function(){
            var height = $(window).height()+111;
            $('.bPage').attr('style', 'overflow: hidden !important; height: '+height+'px !important');
        });
        var fullScreen = $('.full-screen');
        $('.bFooter').css('display', 'none');
        var height = $(window).height()+111;
        var videoClass = $(this).attr('class').split(' ')[1];
        var videoActive;
        if (  videoClass == 'eVideo1'){
            videoActive = video1;
        }
        if (  videoClass == 'eVideo2'){
            videoActive = video2;
        }
        if (  videoClass == 'eVideo3'){
            videoActive = video3;
        }
        if (  videoClass == 'eVideo5'){
            videoActive = video5;
        }
        if (  videoClass == 'eVideo6'){
            videoActive = video6;
        }
        if (  videoClass == 'eVideo7'){
            videoActive = video7;
        }

        videoActive.css({ 'margin-top': '15%', 'display': 'inline-block'});
        videoActive.appendTo(fullScreen);
            $('.bPage').attr('style', 'overflow: hidden !important; height: '+height+'px !important');
            fullScreen.css({'height': '100%', 'width': '100%', 'text-align': 'center'});
            fullScreen.fadeIn(100);
    });
    var close = $('.full-screen_close');
    close.click(function(){
        $(this).parent().find('.video-source').remove();
        $('.bPage').attr('style', 'overflow: visible; height: auto');
        $('.full-screen').fadeOut(100);
        $('.bFooter').css('display', 'block');
        $(window).unbind('resize');
    });
});
$(function(){
    if ( $.browser.msie ) {
        $('.eVideo1').unbind('click');
        $('.eVideo1').click(function(){
            window.location.href = 'http://www.bloomberg.com/video/ozon-ru-is-the-amazon-of-russia-ShNQA_YARUGhI70g90IxaQ.html'
        })
    }
});
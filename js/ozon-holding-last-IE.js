
// Map Cart
$(function() {
    var $conteiner = $('.bMap'),
        $cityViewItems = $conteiner.find('.bMapCityItems'),
        $map_cart = $conteiner.find('#map_cart_blank'),
        $area = $map_cart.find('area');
    var $ItemCity =  $('.bMapBull');
    var $itemTextObl = null;
    var $itemCityText = null;
    console.log('123456');
    $ItemCity.unbind('hover');
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
            var positionX = e.pageX-800;
            var positionY = e.pageY-703;
            console.log('X:'+positionX+'  Y: '+positionY );
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
$(function(){
    setTimeout(function(){$('.diagram').find('[data-number="0"]').attr('transform','translate(10,-10)')},1000);
    setTimeout(function(){$('.diagram1').find('[data-number="0"]').attr('transform','translate(10,-10)')},1000);
});

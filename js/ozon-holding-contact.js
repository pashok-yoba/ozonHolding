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
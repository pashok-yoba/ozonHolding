/* функция создания бубликов */
function donut(selector, data, name, options) {

    var margin = options.margin,
        width = options.width - margin.left - margin.right;
        height = options.height - margin.top - margin.bottom;

    var chart = d3.select(selector)
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" +
                ((width / 2) + margin.left) + "," +
                ((height / 2) + margin.top) +
            ")");


    var radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        .range(["#2280c6", "#4aa8ee", "#1e7cc2", "#3795db", "#4caaf0", "#60bbff", "#91d0ff"]);

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius - options.pieWidth);

    var start = options.start,
        end = options.end;

    var pie = d3.layout.pie()
        .sort(null)
        .startAngle(start * Math.PI)
        .endAngle(end * Math.PI)
        .value(function(d) { return d.value; });


    var g = chart.selectAll("." + name)
      .data(pie(data))
      .enter().append("g")
      .attr("class", name)
      .attr("data-number", function(d, i) { return i; });

    g.append("path")
        .attr("fill", function(d, i) { return color(i); })
        .transition()
        .ease("squad")
        .duration(1000)
        .attrTween("d", function (b) {
            var i = d3.interpolate({ startAngle: start * Math.PI, endAngle: start * Math.PI }, b);
            return function(t) { return arc(i(t)); };
        });
}
/* --------------------------------------------------------------------------------*/
/* -----------------анимация бубликов + подсказки для них ------------------------*/
function animateDiagramm1(content){
    $('path').hover(function(){
            if ($(this).parent().attr('data-number') != 0 ) {
                $(this).attr('class', 'd3');
            }
    },
    function(){
        $(this).attr('class', '');
    })
    var d = content ;
    setTimeout(function(){d.find('[data-number="0"]').css({'transition': '0.5s all','transform': 'translate(10px, -10px'});}, 1000);
    setTimeout(function(){$('.Ozon-text').addClass('activeItemDiagram')}, 1500);
    setTimeout(function(){ d.find('[data-number="0"]').attr('transform','translate(10,-10)')}, 1500);
    d.mouseover(function(){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        $('.d1').mousemove(function(e){
            var thisItem = $(this);
            var positionX = e.pageX - elem_left+5;
            var positionY = e.pageY - elem_top+20;
            $('.diagram-item').css({'top': positionY+'px', 'left': positionX+'px'});
            if ( thisItem.attr('data-number') == '1') {
                $('.child').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});

            }
            if ( thisItem.attr('data-number') == '2' ) {
                $('.nothing').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '3' ) {
                $('.enter').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '4' ) {
                $('.other').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '5' ) {
                $('.mytoys').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '6' ) {
                $('.children').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
        });
    });
    $('.d1').mouseout(function(){
        $('.diagram-item').removeClass('activeItemDiagram');
    });
    d.mouseout(function(){
        $('.d1').unbind('mousemove')
    });
}

function animateDiagramm2(content){
    var d2 = content;
    setTimeout(function(){d2.find('[data-number="0"]').css({'transition': '0.5s all','transform': 'translate(10px, -10px'});}, 1000);
    setTimeout(function(){$('.Ozon-text2').addClass('activeItemDiagram')}, 1500);
    setTimeout(function(){ d2.find('[data-number="0"]').attr('transform','translate(10,-10)')}, 1500);
    d2.mouseover(function(){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        $('.d2').mousemove(function(e){
            var thisItem = $(this);
            var positionX = e.pageX - elem_left+5;
            var positionY = e.pageY - elem_top+10;
            $('.diagram-item').css({'top': positionY+'px', 'left': positionX+'px'});
            if ( thisItem.attr('data-number') == '1') {
                $('.avito').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});

            }
            if ( thisItem.attr('data-number') == '2' ) {
                $('.ebay').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '3' ) {
                $('.er5').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '4' ) {
                $('.ali').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
            if ( thisItem.attr('data-number') == '5' ) {
                $('.other2').addClass('activeItemDiagram').css({'left': positionX+'px', 'top': positionY+'px'});
            }
        });
    });
    $('.d2').mouseout(function(){
        $('.diagram-item1').removeClass('activeItemDiagram');
    });
    d2.mouseout(function(){
        $('.d2').unbind('mousemove');

    });
}
/* ------------------------------------------------------------------------------------------*/

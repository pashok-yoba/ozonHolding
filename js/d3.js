/*var $windowHeight;
var ElementTop ;
$(function(){
    $windowHeight = $(window).height();
    ElementTop =$('.eName1').offset().top+200;
    if ( $windowHeight < 1100) {
        var $conteinerBaseInfo = $('.bBaseInfo'),
        $conteinerRiseCompany = $('.bTurnover');
        animationBaseInfo($conteinerBaseInfo);
    }
    else {

    }
});
/*var windowScroll = null;
$(window).scroll(function animateInf(){
    windowScroll = $(window).scrollTop();
    if (ElementTop - $windowHeight - windowScroll < 0){
        var $conteinerBaseInfo = $('.bBaseInfo'),
            $conteinerRiseCompany = $('.bTurnover');

        animationBaseInfo($conteinerBaseInfo);
        animtionRiseCompany($conteinerRiseCompany);
        $(window).unbind('scroll');

        var dispatch1 = d3.dispatch("load", "statechange");
        var groups = [
    "Under 5 Years",
    "5 to 13 Years",
    "14 to 17 Years",
    "18 to 24 Years",
    "25 to 44 Years",
    "45 to 64 Years",
    "65 Years and Over"
];

d3.csv("data.csv", type, function(error, states) {
    if (error) throw error;
    var stateById = d3.map();
    states.forEach(function(d) { stateById.set(d.id, d); });
    dispatch1.load(stateById);
    dispatch1.statechange(stateById.get("CA"));
});
dispatch1.on("load.pie", function(stateById) {
    var width = 220,
        height = 220,
        width1 = 200,
        height1 = 200,
        radius = Math.min(width1, height1) / 2;

    var color = d3.scale.ordinal()
        .domain(groups)
        .range(["#2280c6", "#4aa8ee", "#1e7cc2", "#3795db", "#4caaf0", "#60bbff", "#91d0ff"]);

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius - 57);

    var pie = d3.layout.pie()
        .sort(null);

    var svg = d3.select(".diagram1").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
        .data(groups)
        .enter().append("path")
        .style("fill", color)
        .each(function() { this._current = {startAngle: 0, endAngle: 0}; })
        .attr('class','d1');

    dispatch1.on("statechange.pie", function(d) {
        path.data(pie.value(function(g) { return d[g]; })(groups)).transition()
            .duration(1000)
            .attrTween("d", function(d) {
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    return arc(interpolate(t));
                };
            })
    });

    $(this).unbind('scroll', 'animateInf');

});
// Coerce population counts to numbers and compute total per state.
function type(d) {
    d.total = d3.sum(groups, function(k) { return d[k] = +d[k]; });
    return d;
}
        $(window).unbind('scroll');
        $(window).scroll(function(){
            functionScroll();
        });
        setTimeout(function(){
            var d = $('.d1');
            var ozon = $('.d1')[0];
            var d1 = $(($('.d1')[0]));
            var d2 = $('.d1')[1];
            var d3 = $('.d1')[2];
            var d4 = $('.d1')[3];
            var d5 = $('.d1')[4];
            var d6 = $('.d1')[5];
            d1.attr('transform','translate(10,-10)');
            $('.Ozon-text2').addClass('activeItemDiagram');
            d.mouseover(function(){
                var positionX = null;
                var positionY = null;
                if ( this != ozon ){
                    $('.diagram1').mousemove(function(e){

                        var pos = $(this).offset();
                        var elem_left = pos.left;
                        var elem_top = pos.top;
                         positionX = e.pageX - elem_left+5;
                         positionY = e.pageY - elem_top-+60;
                        $('.diagram-item1').css({'top': positionY+'px', 'left': positionX+'px'});

                    });
                    $(this).attr('class', 'd3');
                    if ( this == d2) {
                        $('.avito').addClass('activeItemDiagram');

                    }
                    if ( this == d3 ) {
                        $('.ebay').addClass('activeItemDiagram').css({'top': positionX+'px', 'left': positionY+'px'});
                    }
                    if ( this == d4 ) {
                        $('.er5').addClass('activeItemDiagram').css({'top': positionX+'px', 'left': positionY+'px'});
                    }
                    if ( this == d5 ) {
                        $('.ali').addClass('activeItemDiagram').css({'top': positionX+'px', 'left': positionY+'px'});
                    }
                    if ( this == d6 ) {
                        $('.other2').addClass('activeItemDiagram').css({'top': positionX+'px', 'left': positionY+'px'});
                    }
                };

            });
            $('.d1').mouseout(function(){
                $('.diagram-item1').removeClass('activeItemDiagram');
                $(this).attr('class', 'd1');
            });
            $('.diagram1').mouseout(function(){
                $('.diagram-item1').unbind('mousemove');
            })
        }, 900);
    }
});
$(window).scroll(function(){
    if ( ElementTop - $windowHeight - windowScroll < 0 ){
    var dispatch = d3.dispatch("load", "statechange");
    var groups = [
        "Under 5 Years",
        "5 to 13 Years",
        "14 to 17 Years",
        "18 to 24 Years",
        "25 to 44 Years",
        "45 to 64 Years",
        "65 Years and Over"
    ];

    d3.csv("data.csv", type, function(error, states) {
        if (error) throw error;
        var stateById = d3.map();
        states.forEach(function(d) { stateById.set(d.id, d); });
        dispatch.load(stateById);
        dispatch.statechange(stateById.get("CO"));
    });
    // A pie chart to show population by age group; uses the "pie" namespace.
    dispatch.on("load.pie", function(stateById) {
        var width = 220,
            height = 220,
            width1 = 200,
            height1 = 200,
            radius = Math.min(width1, height1) / 2;

        var color = d3.scale.ordinal()
            .domain(groups)
            .range(["#2280c6", "#4aa8ee", "#1e7cc2", "#3795db", "#4caaf0", "#60bbff", "#91d0ff"]);

        var arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius - 57);

        var pie = d3.layout.pie()
            .sort(null);

        var svg = d3.select(".diagram").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var path = svg.selectAll("path")
            .data(groups)
            .enter().append("path")
            .style("fill", color)
            .each(function() { this._current = {startAngle: 0, endAngle: 0}; })
            .attr('class','d2');

        dispatch.on("statechange.pie", function(d) {
            path.data(pie.value(function(g) { return d[g]; })(groups)).transition()
                .duration(1000)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(this._current, d);
                    this._current = interpolate(0);
                    return function(t) {
                        return arc(interpolate(t));
                    };
                });
        });
    });
    // Coerce population counts to numbers and compute total per state.
    function type(d) {
        d.total = d3.sum(groups, function(k) { return d[k] = +d[k]; });
        return d;
    }
    setTimeout(function(){
        var d = $('.d2');
        var ozon = $('.d2')[0];
        var d1 = $(($('.d2')[0]));
        var d2 = $('.d2')[1];
        var d3 = $('.d2')[2];
        var d4 = $('.d2')[3];
        var d5 = $('.d2')[4];
        var d6 = $('.d2')[5];
        var d7 = $('.d2')[6];
        d1.attr('transform','translate(10,-10)');
        $('.Ozon-text').addClass('activeItemDiagram');
        d.mouseover(function(){
            var positionX = null;
            var positionY = null;
            if ( this != ozon ){
                $('.diagram').mousemove(function(e){

                    var pos = $(this).offset();
                    var elem_left = pos.left;
                    var elem_top = pos.top;
                    positionX = e.pageX - elem_left+5;
                    positionY = e.pageY - elem_top-+60;
                    $('.diagram-item').css({'top': positionY+'px', 'left': positionX+'px'});

                });
                $(this).attr('class', 'd3');
                if ( this == d2) {
                    $('.child').addClass('activeItemDiagram');
                }
                if ( this == d3 ) {
                    $('.nothing').addClass('activeItemDiagram');
                }
                if ( this == d4 ) {
                    $('.enter').addClass('activeItemDiagram');
                }
                if ( this == d5 ) {
                    $('.other').addClass('activeItemDiagram');
                }
                if ( this == d6 ) {
                    $('.mytoys').addClass('activeItemDiagram');
                }
                if ( this == d7 ) {
                    $('.children').addClass('activeItemDiagram');
                }
            }

        });
        d.mouseout(function(){
            $(this).attr('class', 'd1');
            $('.diagram-item').removeClass('activeItemDiagram');
        });
        $('.diagram1').mouseout(function(){
            $('.diagram-item1').unbind('mousemove');
        });
    }, 900);
    }
});*/


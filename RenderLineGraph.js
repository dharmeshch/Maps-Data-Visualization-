// function renderLineGraph(area, depositsAmout){
//        var height =600;
//        var width = 400;
//        var data = dataforLineGraph[area];
//        var maxValue = d3.max(data,function(d){return d});
//        var minValue = d3.min(data,function(d){return d});

//        var y = d3.scale.linear().domain([2010,2017]).range([height,0]);

//        var x = d3.scale.linear().domain([minValue, maxValue]).range([0,width]);

//        var yAxis = d3.axisLeft(y);
//        var xAxis = d3.axisBottom(x);
       
//        var svg = d3.select('#lineChart').append('svg')
//                     .attr('height', height)
//                     .attr('width', width);
//         var chartGroup = svg.append('g')
//                             .attr('transform', 'translate(0,600)');
//         var line = d3.line()
//                     .x(function(d){return x(d)})
//                     .y(function(d){return y(d)});
//         chartGroup.append('path').attr('d', line(data))
//         chartGroup.append('g').attr('class', 'x axis').attr('transform', 'translate(0,600)').call(xAxis);
//         chartGroup.append('g').attr('class','y axis').call(yAxis);
// }
loadData = function () {


    var result = {}
    $.ajax({
        type: "POST",
        url: "/api/AjaxAPI/AjaxMethod",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('shree------10');
            result = response;

            bindDropDown(result);
            drawChart(result);
            drawBar(result)
            drawPie(result);
        },
        failure: function (response) {
            alert('failed');
            
        },
        error: function (response) {
            alert('error');
            
        }
    });
}

drawChart = function (result) {
    //var dataset1 = [
    //    [1, 1], [12, 20], [24, 36],
    //    [32, 50], [40, 70], [50, 100],
    //    [55, 106], [65, 123], [73, 130],
    //    [78, 134], [83, 136], [89, 138],
    //    [100, 140]
    //];
    var dataset1 = result;

    // Step 3
    var svg = d3.select("#dotChart"),
        margin = 200,
        width = svg.attr("width") - margin, //300
        height = svg.attr("height") - margin //200

    // Step 4 
    var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    // Step 5
    // Title
    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Line Chart');

    // X label
    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Independant');

    // Y label
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Dependant');

    // Step 6
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    // Step 7
    svg.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.id); })
        .attr("cy", function (d) { return yScale(d.intensity); })
        .attr("r", 3)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");

    // Step 8        
    var line = d3.line()
        .x(function (d) { return xScale(d[0]); })
        .y(function (d) { return yScale(d[1]); })
        .curve(d3.curveMonotoneX)

    svg.append("path")
        .datum(dataset1)
        .attr("class", "line")
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#CC0000")
        .style("stroke-width", "2");

}


drawBar = function (result) {
    var data = alasql("select region as Country,count(intensity) as IntensityCount from ? group by region", [result]);

    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 860 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#barChart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");    

        // X axis
        var x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.Country; }))
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 500])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.Country); })
            .attr("y", function (d) { return y(d.IntensityCount); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.IntensityCount); })
        .attr("fill", "#69b3a2")

    $("div#barChart_loading").hide();
}


drawPie = function (result) {

    //const data = [
    //    { value: 2400, name: "toyota" },
    //    { value: 1200, name: "kia" },
    //    { value: 700, name: "lexus" }
    //];

    let data = alasql("select sum(relevance) as relevance,sector as name from ? group by sector", [result]);

    // Selecting the element
    let element = document.getElementById('pieChart');

    // Setting dimensions
    let margin = 10,
        width = 500,
        height = 400;

    // Setting the radius of the pie
    let radius = Math.min(width, height) / 2 - margin;

    let svg = d3.select(element)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "margin-top: -32px !important")
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Setting the color scale
    let color = d3.scaleOrdinal()
        .domain(data)
        .range(["#ef7758", "#1c4e80", "#a5d8dd"]);

    // Setting the position of each group on the pie
    let pie = d3.pie()
        .value(function (d) {
            return d[1].relevance;
        });

    let data_ready = pie(Object.entries(data));

    // Building arcs
    let arcGenerator = d3.arc()
        .innerRadius(20)
        .outerRadius(radius);

    // Building arcs for hover
    let arcHover = d3.arc()
        .innerRadius(0)
        .outerRadius(radius + 10);

    // Building the pie chart
    svg.selectAll('slices')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arcGenerator)
        .attr('stroke', '#fff')
        .attr('fill', function (d) {
            return (color(d.data[1].name))
        })

        // Adding hover effect
        .on("mouseover", function (event, d) {

            d3.select(this)
                .transition()
                .attr("d", arcHover)
                .duration(200);

            // Adding tooltip
            d3.select("#tooltip")
                .transition()
                .duration(200)
                .style("left", event.pageX + "px")
                .style("top", event.pageY + "px")
                .style("opacity", 1)
                .select("#relevance")
                .text(d.relevance);
        })

        .on("mouseout", function () {
            d3.select(this)
                .transition()
                .attr("d", arcGenerator)
                .duration(500);

            d3.select("#tooltip")
                .style("opacity", 0);
        });

    // Adding titles to pie slices
    svg.selectAll('slices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function (d) {
            return d.data[1].name;
        })
        .attr("transform", function (d) {
            return "translate(" + arcGenerator.centroid(d) + ")";
        })
        .style("text-anchor", "middle")
        .style("fill", "#fff")
        .style("font-size", 10);

    $("div#pieChart_loading").hide();

}


bindDropDown = function (result) {
    let myOptions = alasql("select distinct topic as topicValue,topic as topicName from ? ", [result]);
    var mySelect = $('#topic');

    $.each(myOptions, function (val, text) {
        mySelect.append(
            $('<option></option>').val(text.topicValue).html(text.topicName)
        );
    });


    //let basequery = "select * from ? where 1=1"
    //filtercountry = "";
    //filterRegion = "";

    //if (!country)
    //    filtercountry = " And country='Mexico' "

    //if (!region)
    //    filterRegion = " And country='Central America' "

    //let totalQuery = basequery + filtercountry + filterRegion;


}


$(document).ready(function () {
    loadData();
});



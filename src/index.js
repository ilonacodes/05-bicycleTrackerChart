var data = [
    {
        date: new Date("2017-11-18"),
        distance: 14
    },
    {
        date: new Date("2017-11-17"),
        distance: 13
    },
    {
        date: new Date("2017-11-16"),
        distance: 13.5
    },
    {
        date: new Date("2017-11-15"),
        distance: 12
    },
    {
        date: new Date("2017-11-14"),
        distance: 13
    },
    {
        date: new Date("2017-11-13"),
        distance: 15
    },
    {
        date: new Date("2017-11-12"),
        distance: 13
    },
    {
        date: new Date("2017-11-11"),
        distance: 11
    },
    {
        date: new Date("2017-11-10"),
        distance: 12
    },
    {
        date: new Date("2017-11-09"),
        distance: 13
    },
    {
        date: new Date("2017-11-08"),
        distance: 10
    },
    {
        date: new Date("2017-11-07"),
        distance: 13
    },
    {
        date: new Date("2017-11-06"),
        distance: 11
    },
    {
        date: new Date("2017-11-05"),
        distance: 10.5
    },
    {
        date: new Date("2017-11-04"),
        distance: 9
    },
    {
        date: new Date("2017-11-03"),
        distance: 12
    },
    {
        date: new Date("2017-11-02"),
        distance: 11
    },
    {
        date: new Date("2017-11-01"),
        distance: 10
    },
    {
        date: new Date("2017-10-31"),
        distance: 9.5
    },
    {
        date: new Date("2017-10-30"),
        distance: 9
    },
    {
        date: new Date("2017-10-29"),
        distance: 9
    },
    {
        date: new Date("2017-10-28"),
        distance: 10
    },
    {
        date: new Date("2017-10-27"),
        distance: 9
    },
    {
        date: new Date("2017-10-26"),
        distance: 8
    },
    {
        date: new Date("2017-10-25"),
        distance: 8.5
    },
    {
        date: new Date("2017-10-24"),
        distance: 11
    },
    {
        date: new Date("2017-10-23"),
        distance: 10
    },
].reverse();

var maxY = Math.max.apply(null, data.map(function(point) {
    return point.distance;
}));

var tr = 'tr';
var td = 'td';

var color = "one";

var chart = document.getElementById('chart');

var barChart = document.createElement('table');
chart.appendChild(barChart);

var titleRow = document.createElement(tr);
barChart.appendChild(titleRow);

var titleData = document.createElement(td);
titleRow.appendChild(titleData);

titleData.setAttribute('colspan', 30);
titleData.setAttribute('class', 'chart-title');
titleData.innerText = 'Your Bicycle Achievements, km';

var barRow = document.createElement(tr);
barChart.appendChild(barRow);
barRow.setAttribute('class', 'bars');

var datesRow = document.createElement(tr);
barChart.appendChild(datesRow);
datesRow.setAttribute('class', 'dates');

for (var i = data.length - 30; i < data.length; i++) {

    var entry = data[i] || {
            date: {
                toLocaleDateString: function() {
                    return "";
                }
            },
            distance: "N/A"
        };

    var barData = document.createElement(td);
    barRow.appendChild(barData);
    barData.setAttribute('class', 'distance');

    var barText = document.createElement('span');
    barData.appendChild(barText);

    var bar = document.createElement('div');
    barData.appendChild(bar);

    bar.setAttribute('class', color);
    bar.style.height = 100.0 * entry.distance / maxY + '%';

    var datesData = document.createElement(td);
    datesRow.appendChild(datesData);

    var options = { month: 'short', day: 'numeric' };
    datesData.innerText = entry.date.toLocaleDateString("en-US", options);

    barText.innerText = Math.floor(entry.distance);

}
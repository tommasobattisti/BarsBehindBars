am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("active-viz2-22");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

var data = [
    {"countrycode":"EE",
    "Deaths due to external causes: by suicide": 1,
     "NR": 29
}, 
{   "countrycode": "SE",
    "Deaths due to external causes: by suicide": 1,
    "NR": 16
}, 
{   "countrycode":"FI",
    "Deaths due to external causes: by suicide": 2,
    "NR": 15
}, 
{   "countrycode":"DK",
    "Deaths due to external causes: by suicide": 4,
    "NR": 12
}, 

{   "countrycode":"BG",
    "Deaths due to external causes: by suicide": 5,
    "NR": 43
},

{   "countrycode":"HU",
    "Deaths due to external causes: by suicide": 4,
    "NR": 45
},

{"countrycode":"RO",
    "Deaths due to external causes: by suicide": 9,
    "NR": 48
},

{"countrycode":"SK",
    "Deaths due to external causes: by suicide": 10,
    "NR": 50
},

{"countrycode":"IT",
    "Deaths due to external causes: by suicide": 48,
    "NR": 50
},

{"countrycode":"SI",
    "Deaths due to external causes: by suicide": 1,
    "NR": 39
},

{"countrycode":"GR",
    "Deaths due to external causes: by suicide": 0,
    "NR": 48
},

{"countrycode":"PT",
    "Deaths due to external causes: by suicide": 15,
    "NR": 37
},

{"countrycode":"ES",
    "Deaths due to external causes: by suicide": 27,
    "NR": 43, 
},

{"countrycode":"AT",
    "Deaths due to external causes: by suicide": 11,
    "NR": 25
},

{"countrycode":"FR",
    "Deaths due to external causes: by suicide": 88,
    "NR": 30  
},

{"countrycode":"DE",
    "Deaths due to external causes: by suicide": 82,
    "NR": 19
},

{"countrycode":"NL",
    "Deaths due to external causes: by suicide": 14,
    "NR": 18
},

{"countrycode":"BE",
    "Deaths due to external causes: by suicide": 13,
    "NR": 25 
}];

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {
  minGridDistance: 70
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "countrycode",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {
    themeTags: ["axis"],
    animationDuration: 200
  })
}));

xRenderer.grid.template.setAll({
  location: 1
})

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1,
  })
}));

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

var series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "NR",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "NR",
  categoryXField: "countrycode",
  clustered: false,
  tooltip: am5.Tooltip.new(root, {
    labelText: "Corruption Index: {valueY}"
  })
}));

series0.columns.template.setAll({
  width: am5.percent(80),
  tooltipY: 0,
  strokeOpacity: 0
});


series0.data.setAll(data);


var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Deaths due to external causes: by suicide",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "Deaths due to external causes: by suicide",
  categoryXField: "countrycode",
  clustered: false,
  tooltip: am5.Tooltip.new(root, {
    labelText: "Suicides: {valueY}"
  })
}));

series1.columns.template.setAll({
  width: am5.percent(50),
  tooltipY: 0,
  strokeOpacity: 0
});

series1.data.setAll(data);

var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));

// Add legend
var legend = chart.children.push(am5.Legend.new(root, 
{
    centerX: am5.percent(50),
    x: am5.percent(50)
}));

legend.data.setAll(chart.series.values);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);
series0.appear();
series1.appear();

}); // end am5.ready()
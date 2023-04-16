//*NRSUICIDE2016*//

am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("NRSUICIDE2016");

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
  {   "countrycode": "SE",
  "Deaths due to external causes: by suicide": 1,
  "NR":12
}, 
{   "countrycode":"FI",
  "Deaths due to external causes: by suicide": 2,
  "NR":11
}, 
{   "countrycode":"DK",
"Deaths due to external causes: by suicide":8,
"NR":10
}, 

{   "countrycode":"BG",
  "Deaths due to external causes: by suicide": 3,
  "NR":41
},

{   "countrycode":"HU",
  "Deaths due to external causes: by suicide": 9,
  "NR":48

},

{   "countrycode":"PL",
  "Deaths due to external causes: by suicide": 24,
  "NR":38,

},

{"countrycode":"RO",
  "Deaths due to external causes: by suicide": 11,
  "NR":48,
},

{"countrycode":"SK",
  "Deaths due to external causes: by suicide": 6,
  "NR":51

},

{"countrycode":"IT",
  "Deaths due to external causes: by suicide": 39,
  "NR":47,
},

{"countrycode":"SI",
  "Deaths due to external causes: by suicide": 3,
  "NR":39},

{"countrycode":"GR",
  "Deaths due to external causes: by suicide": 6,
  "NR":44
},

{"countrycode":"PT",
  "Deaths due to external causes: by suicide": 9,
  "NR":38
},

{"countrycode":"ES",
  "Deaths due to external causes: by suicide": 23,
  "NR":42
},

{"countrycode":"AT",
  "Deaths due to external causes: by suicide": 18,
"NR":25},

{"countrycode":"FR",
  "Deaths due to external causes: by suicide": 125,
  "NR":31},

{"countrycode":"DE",
  "Deaths due to external causes: by suicide": 76,
  "NR":19},

{"countrycode":"NL",
  "Deaths due to external causes: by suicide": 66,
"NR":17},
];

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


//*NRSUICIDE2017*//

am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("NRSUICIDE2017");
    
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
    
    });
    
    //*NRSUICIDE2018*//
    
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("NRSUICIDE2018");
    
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
        "Deaths due to external causes: by suicide": 4,
         "NR": 27
    }, 
    {   "countrycode": "SE",
        "Deaths due to external causes: by suicide": 2,
        "NR": 15
    }, 
    {   "countrycode":"FI",
        "Deaths due to external causes: by suicide": 2,
        "NR": 15
    }, 
    {   "countrycode":"DK",
        "Deaths due to external causes: by suicide": 5,
        "NR": 12
    }, 

    {   "countrycode":"BG",
        "Deaths due to external causes: by suicide": 3,
        "NR": 42
    },

    {   "countrycode":"HU",
        "Deaths due to external causes: by suicide": 6,
        "NR": 46
    },

    {   "countrycode":"PL",
        "Deaths due to external causes: by suicide": 26,
        "NR": 40
    },

    {"countrycode":"RO",
        "Deaths due to external causes: by suicide": 11,
        "NR": 47
    },

    {"countrycode":"SK",
        "Deaths due to external causes: by suicide": 5,
        "NR": 50
    },

    {"countrycode":"IT",
        "Deaths due to external causes: by suicide": 61,
        "NR": 52
    },

    {"countrycode":"SI",
        "Deaths due to external causes: by suicide": 0,
        "NR": 40
    },

    {"countrycode":"GR",
        "Deaths due to external causes: by suicide": 9,
        "NR": 45
    },

    {"countrycode":"PT",
        "Deaths due to external causes: by suicide": 11,
        "NR": 36
    },

    {"countrycode":"ES",
        "Deaths due to external causes: by suicide": 33,
        "NR": 42, 
    },

    {"countrycode":"AT",
        "Deaths due to external causes: by suicide": 12,
        "NR": 24
    },

    {"countrycode":"FR",
        "Deaths due to external causes: by suicide": 103,
        "NR": 28  
    },

    {"countrycode":"NL",
        "Deaths due to external causes: by suicide": 13,
        "NR": 18
    },

    {"countrycode":"BE",
        "Deaths due to external causes: by suicide": 16,
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
    
    });
    
    //*NRSUICIDE2019*//
    
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("NRSUICIDE2019");
    
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
        "Deaths due to external causes: by suicide": 4,
         "NR": 27
    }, 
    {   "countrycode": "SE",
        "Deaths due to external causes: by suicide": 2,
        "NR": 15
    }, 
    {   "countrycode":"FI",
        "Deaths due to external causes: by suicide": 1,
        "NR": 16
    }, 
    {   "countrycode":"DK",
        "Deaths due to external causes: by suicide": 9,
        "NR": 13
    }, 

    {   "countrycode":"BG",
        "Deaths due to external causes: by suicide": 3,
        "NR": 43
    },

    {   "countrycode":"HU",
        "Deaths due to external causes: by suicide": 6,
        "NR": 44
    },

    {   "countrycode":"PL",
        "Deaths due to external causes: by suicide": 24,
        "NR": 40
    },

    {"countrycode":"RO",
        "Deaths due to external causes: by suicide": 7,
        "NR": 44
    },

    {"countrycode":"IT",
        "Deaths due to external causes: by suicide": 53,
        "NR": 53
    },

    {"countrycode":"SI",
        "Deaths due to external causes: by suicide": 0,
        "NR": 40
    },

    {"countrycode":"PT",
        "Deaths due to external causes: by suicide": 11,
        "NR": 38
    },

    {"countrycode":"ES",
        "Deaths due to external causes: by suicide": 43,
        "NR": 38 
    },

    {"countrycode":"AT",
        "Deaths due to external causes: by suicide": 9,
        "NR": 24
    },

    {"countrycode":"FR",
        "Deaths due to external causes: by suicide": 128,
        "NR": 21
    },

    {"countrycode":"NL",
        "Deaths due to external causes: by suicide": 12,
        "NR": 18
    },

    {"countrycode":"BE",
        "Deaths due to external causes: by suicide": 12,
        "NR": 75 
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
    
    });
    
    //*NRSUICIDE2020*// 
    
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("NRSUICIDE2020");
    
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
        "Deaths due to external causes: by suicide": 3,
         "NR": 25
    }, 
    {   "countrycode": "SE",
        "Deaths due to external causes: by suicide": 2,
        "NR": 15
    }, 
    {   "countrycode":"FI",
        "Deaths due to external causes: by suicide": 4,
        "NR": 15
    }, 
    {   "countrycode":"DK",
        "Deaths due to external causes: by suicide": 4,
        "NR": 12
    }, 

    {   "countrycode":"BG",
        "Deaths due to external causes: by suicide": 1,
        "NR": 44
    },

    {   "countrycode":"HU",
        "Deaths due to external causes: by suicide": 5,
        "NR": 44
    },

    {   "countrycode":"PL",
        "Deaths due to external causes: by suicide": 27,
        "NR": 40
    },

    {"countrycode":"RO",
        "Deaths due to external causes: by suicide": 14,
        "NR": 44
    },

    {"countrycode":"SK",
        "Deaths due to external causes: by suicide": 4,
        "NR": 49
    },

    {"countrycode":"IT",
        "Deaths due to external causes: by suicide": 61,
        "NR": 53
    },

    {"countrycode":"SI",
        "Deaths due to external causes: by suicide": 1,
        "NR": 40
    },

    {"countrycode":"GR",
        "Deaths due to external causes: by suicide": 6,
        "NR": 50
    },

    {"countrycode":"PT",
        "Deaths due to external causes: by suicide": 21,
        "NR": 39
    },

    {"countrycode":"ES",
        "Deaths due to external causes: by suicide": 51,
        "NR": 42, 
    },

    {"countrycode":"AT",
        "Deaths due to external causes: by suicide": 8,
        "NR": 34
    },

    {"countrycode":"FR",
        "Deaths due to external causes: by suicide": 119,
        "NR": 31
    },

    {"countrycode":"NL",
        "Deaths due to external causes: by suicide": 13,
        "NR": 18
    },

    {"countrycode":"BE",
        "Deaths due to external causes: by suicide": 15,
        "NR": 24
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
    
    });

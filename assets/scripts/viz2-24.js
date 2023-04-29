am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("active-viz2-24");
    
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
      name: "Corruption Index",
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
      strokeOpacity: 0,
      fill: am5.color(0x668886)
    });
    
    
    series0.data.setAll(data);
    
    
    var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Suicides",
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
      width: am5.percent(40),
      tooltipY: 0,
      strokeOpacity: 0,
      fill: am5.color(0xE96E19)
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
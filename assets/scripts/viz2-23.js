am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("active-viz2-23");
    
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
    {id:"EE",
    value: 4,

    }, 
    {   id: "SE",
        value: 2,
    }, 
    {   id:"FI",
        value: 2,
    }, 
    {   id:"DK",
        value: 5,
    }, 

    {   id:"BG",
        value: 3,
    },

    {   id:"HU",
        value: 6,
    },

    {   id:"PL",
        value: 26,
    },

    {id:"RO",
        value: 11,
    },

    {id:"SK",
        value: 5,
    },

    {id:"IT",
        value: 61,
    },

    {id:"SI",
        value: 0,
    },

    {id:"GR",
        value: 9,
    },

    {id:"PT",
        value: 11,
    },

    {id:"ES",
        value: 33, 
    },

    {id:"AT",
        value: 12,
    },

    {id:"FR",
        value: 103,  
    },

    {id:"NL",
        value: 13,
    },

    {id:"BE",
        value: 16
      },
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
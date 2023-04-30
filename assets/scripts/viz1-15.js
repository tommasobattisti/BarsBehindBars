am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("BubbleChart2020");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomXY",
      pinchZoomX:true,
      pinchZoomY:true
    }));
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.children.moveValue(am5.Label.new(root, {
      text: "Justice Expenditure",
      x: am5.p50,
      centerX: am5.p50
    }), xAxis.children.length - 1);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        inversed: false
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    yAxis.children.moveValue(am5.Label.new(root, {
      rotation: -90,
      text: "Living conditions",
      y: am5.p50,
    }), 0);
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "Living Conditions",
      valueXField: "GF03",
      seriesTooltipTarget:"bullet",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{title}[/]\nLiving conditions in prison:\n{valueY}\nExpenditure: {valueX}\n"
      })
    }));
    
    series.strokes.template.set("visible", false);
    
    
    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    var circleTemplate = am5.Template.new({});
    
    series.bullets.push(function() {
      var bulletCircle = am5.Circle.new(root, {
      radius: 10,
      fill: series.get("fill"),
      fill: am5.color(0xff7621),
      fillOpacity: 0.8
    }, circleTemplate);
    
    return am5.Bullet.new(root, {
     sprite: bulletCircle
  });
});


    //heatrules
    
    series.set("heatRules", [{
        target: circleTemplate,
        dataField: "Living Conditions",
        min: am5.color(0xff621f),
        minValue: 0.9, 
        max: am5.color(0x661f00),
        maxValue: 2.7, 
        key: "fill"
            }]);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [series]
    }));
    
    
    // Add scrollbars
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));

    

    // Set data
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
    series.data.setAll([
    {
      "title": "Estonia",
      "id": "EE",
      PRIS_OFF_CAP: 246.66, 
      PRIS_ACT_CAP:178.03,
      "Living Conditions": (178.03 / 246.66) ,
      "GF03": 2.0
    },
    {
      "title": "Sweden",
      "id": "SE",
      PRIS_OFF_CAP: 67.38 , 
      PRIS_ACT_CAP: 70.66  ,
      "Living Conditions": (70.66  / 67.38),
      "GF03": 1.4
    },
    {
      "title": "Denmark",
      "id": "DK",
      PRIS_OFF_CAP: 70.33,
      PRIS_ACT_CAP: 71.55,
      "Living Conditions": (71.55/70.33) ,
      "GF03": 1.0
    },
    {
      "title": "Finland",
      "id": "FI",
      PRIS_OFF_CAP: 54.24,
      PRIS_ACT_CAP: 49.79,
      "Living Conditions": (49.79/54.24) ,
      "GF03": 1.2
    },
    {
      "title": "Bulgaria",
      "id": "BG",
      PRIS_OFF_CAP: 117.40, 
      PRIS_ACT_CAP:89.92 ,
      "Living Conditions": (89.92 / 117.40 ) ,
      "GF03": 2.7
    },
    {
      "title": "Hungary",
      "id": "HG",
      PRIS_OFF_CAP:162.80 , 
      PRIS_ACT_CAP:171.21,
      "Living Conditions": (171.21/ 162.80) ,
      "GF03": 2.1
    },
    {
      "title": "Austria",
      "id": "AT",
      PRIS_OFF_CAP: 99.64 , 
      PRIS_ACT_CAP:95.36,
      "Living Conditions": (95.36 / 99.64 ) ,
      "GF03": 1.4
    },
    {
      "title": "Poland",
      "id": "PL",
      PRIS_OFF_CAP: 226.75 , 
      PRIS_ACT_CAP:180.08,
      "Living Conditions": (180.08/226.75 ),
      "GF03": 2.3
    },
    {
      "title": "Romania",
      "id": "RO",
      PRIS_OFF_CAP: 101.05, 
      PRIS_ACT_CAP:112.54,
      "Living Conditions": (105.99 / 101.05) ,
      "GF03": 2.5
    },
    {
      "title": "Slovakia",
      "id": "SK",
      PRIS_OFF_CAP: 213.00 , 
      PRIS_ACT_CAP:192.73 ,
      "Living Conditions": (192.73 / 213.00) ,
      "GF03": 2.4
    },
    {
      "title": "Greece",
      "id": "GR",
      PRIS_OFF_CAP: 94.93, 
      PRIS_ACT_CAP:106.16,
      "Living Conditions": (106.16/ 94.93) , 
      "GF03": 2.4
    },
    {
      "title": "Italy",
      "id": "IT",
      PRIS_OFF_CAP:  85.72, 
      PRIS_ACT_CAP:91.56 ,
      "Living Conditions": (91.56  / 85.72) ,
      "GF03": 2.0
    },
    {
      "title": "Portugal",
      "id": "PT",
      PRIS_OFF_CAP: 125.52 , 
      PRIS_ACT_CAP:111.71,
      "Living Conditions": (111.71/125.52 ) ,
      "GF03": 1.9
    },
    {
      "title": "Spain",
      "id": "ES",
      PRIS_OFF_CAP:136.13, 
      PRIS_ACT_CAP:116.58,
      "Living Conditions": (116.58/ 136.13) ,
      "GF03": 2.1
    },
    {
      "title": "France",
      "id": "FR",
      PRIS_OFF_CAP:89.99, 
      PRIS_ACT_CAP:93.10,
      "Living Conditions": (93.10 / 89.99 ) ,
      "GF03": 1.8
    },
    {
      "title": "Germany",
      "id": "DE",
      PRIS_OFF_CAP: 87.00 , 
      PRIS_ACT_CAP: 71.65,
      "Living Conditions": (71.65/87.00 ) ,
      "GF03": 1.7
    },
    {
      "title": "Netherlands",
      "id": "NL",
      PRIS_OFF_CAP: 69.49 , 
      PRIS_ACT_CAP:63.33,
      "Living Conditions": (63.33 / 69.49) ,
      "GF03": 2.0
    }
    ]);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
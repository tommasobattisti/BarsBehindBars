//bubble chart for 2016

am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("BubbleChart2016");
    
    
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
      text: "Living Conditions and Justice Expenditure",
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
      text: "Living conditions in prison",
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

    // Set up heat rules
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    series.set("heatRules", [{
      target: circleTemplate,
      min: am5.color(0xff621f),
      max: am5.color(0x661f00),
      dataField: "GFO3",
      key: "fill"
    }]);

    // Set data
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
    series.data.setAll([
    {
      "title": "Estonia",
      "id": "EE",
      "PRIS_OFF_CAP": 221.51, 
      "PRIS_ACT_CAP":217.64,
      "Living Conditions": (217.64 / 221.51),
      "GF03": 1.9
    },
    {
      "title": "Sweden",
      "id": "SE",
      "PRIS_OFF_CAP": 63.47, 
      "PRIS_ACT_CAP": 57.44,
      "Living Conditions": (57.44 / 63.47),
      "GF03": 1.3
    },
    {
      "title": "Denmark",
      "id": "DK",
      "PRIS_OFF_CAP": 61.71,
      "PRIS_ACT_CAP": 59.71,
      "Living Conditions": (61.71 / 59.71),
      "GF03": 1.0
    },
    {
      "title": "Finland",
      "id": "FI",
      "PRIS_OFF_CAP": 53.92,
      "PRIS_ACT_CAP": 57.51,
      "Living Conditions": (57.51 / 53.92),
      "GF03": 1.2
    },
    {
      "title": "Bulgaria",
      "id": "BG",
      "PRIS_OFF_CAP": 118.69, 
      "PRIS_ACT_CAP":102.67,
      "Living Conditions": (61.71 / 59.71),
      "GF03": 2.3
    },
    {
      "title": "Hungary",
      "id": "HG",
      "PRIS_OFF_CAP": 140.11, 
      "PRIS_ACT_CAP":179.62,
      "Living Conditions":(179.62 / 140.11),
      "GF03": 2.3
    },
    {
      "title": "Austria",
      "id": "AT",
      "PRIS_OFF_CAP": 101.43, 
      "PRIS_ACT_CAP":99.18,
      "Living Conditions": (99.18 / 101.43),
      "GF03": 1.3
    },
    {
      "title": "Poland",
      "id": "PL",
      "PRIS_OFF_CAP": 234.88, 
      "PRIS_ACT_CAP":190.19,
      "Living Conditions": (190.19 / 234.88),
      "GF03": 2.2
    },
    {
      "title": "Romania",
      "id": "RO",
      "PRIS_OFF_CAP": 141.13, 
      "PRIS_ACT_CAP":138.94,
      "Living Conditions": (138.94 / 141.13),
      "GF03": 2.1
    },
    {
      "title": "Slovakia",
      "id": "SK",
      "PRIS_OFF_CAP": 203.33, 
      "PRIS_ACT_CAP":184.20,
      "Living Conditions": (184.20 / 203.33),
      "GF03": 2.4
    },
    {
      "title": "Slovenia",
      "id": "SI",
      "PRIS_OFF_CAP": 64.04, 
      "PRIS_ACT_CAP":63.37,
      "Living Conditions": (63.37 / 64.04),
      "GF03": 1.7
    },
    {
      "title": "Greece",
      "id": "GR",
      "PRIS_OFF_CAP": 91.02, 
      "PRIS_ACT_CAP":88.65,
      "Living Conditions": (91.02 / 88.65), 
      "GF03": 2.2
    },
    {
      "title": "Italy",
      "id": "IT",
      "PRIS_OFF_CAP":  83.75, 
      "PRIS_ACT_CAP": 92.27,
      "Living Conditions": (92.27 /  83.75 ),
      "GF03": 1.8
    },
    {
      "title": "Portugal",
      "id": "PT",
      "PRIS_OFF_CAP": 121.84, 
      "PRIS_ACT_CAP":134.58,
      "Living Conditions": (134.58 / 121.84),
      "GF03": 1.8
    },
    {
      "title": "Spain",
      "id": "ES",
      "PRIS_OFF_CAP":   138.12, 
      "PRIS_ACT_CAP":128.31,
      "Living Conditions": (128.31 / 138.12),
      "GF03": 1.9
    },
    {
      "title": "France",
      "id": "FR",
      "PRIS_OFF_CAP": 88.06, 
      "PRIS_ACT_CAP":102.50,
      "Living Conditions": (102.50 / 88.06),
      "GF03": 1.6
    },
    {
      "title": "Germany",
      "id": "DE",
      "PRIS_OFF_CAP": 89.60, 
      "PRIS_ACT_CAP": 78.24,
      "Living Conditions": (78.24 / 89.60),
      "GF03": 1.5
    }
    ]);
    
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
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
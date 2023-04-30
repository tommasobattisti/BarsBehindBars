am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("BubbleChart2019");
    
    
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
  dataField: "GF03",
  min: am5.color(0xff621f),
  minValue: 0.9, 
  max: am5.color(0x661f00),
  maxValue: 2.5, 
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
      PRIS_OFF_CAP: 247.43, 
      PRIS_ACT_CAP:187.72,
      "Living Conditions": (187.72 / 247.43) ,
      "GF03": 1.8
    },
    {
      "title": "Sweden",
      "id": "SE",
      PRIS_OFF_CAP: 65.07 , 
      PRIS_ACT_CAP: 65.68 ,
      "Living Conditions": (65.68 / 65.07),
      "GF03": 1.3
    },
    {
      "title": "Denmark",
      "id": "DK",
      PRIS_OFF_CAP: 67.98,
      PRIS_ACT_CAP: 67.52,
      "Living Conditions": (67.52/67.98) ,
      "GF03": 1.0
    },
    {
      "title": "Finland",
      "id": "FI",
      PRIS_OFF_CAP: 52.16,
      PRIS_ACT_CAP: 53.37 ,
      "Living Conditions": (53.37  / 52.16) ,
      "GF03": 1.2
    },
    {
      "title": "Bulgaria",
      "id": "BG",
      PRIS_OFF_CAP: 115.79 , 
      PRIS_ACT_CAP:92.11,
      "Living Conditions": (92.11/ 115.79 ) ,
      "GF03": 2.7
    },
    {
      "title": "Hungary",
      "id": "HG",
      PRIS_OFF_CAP: 152.12, 
      PRIS_ACT_CAP:170.51,
      "Living Conditions": (170.51 / 152.12) ,
      "GF03": 2.1
    },
    {
      "title": "Austria",
      "id": "AT",
      PRIS_OFF_CAP: 100.27, 
      PRIS_ACT_CAP:102.41,
      "Living Conditions": (102.41 / 100.27) ,
      "GF03": 1.3
    },
    {
      "title": "Poland",
      "id": "PL",
      PRIS_OFF_CAP: 225.82, 
      PRIS_ACT_CAP:196.49  ,
      "Living Conditions": (196.49/225.82),
      "GF03": 2.1
    },
    {
      "title": "Romania",
      "id": "RO",
      PRIS_OFF_CAP: 100.55, 
      PRIS_ACT_CAP:105.99,
      "Living Conditions": (105.99 / 100.55) ,
      "GF03": 2.2
    },
    {
      "title": "Slovakia",
      "id": "SK",
      PRIS_OFF_CAP: 213.29, 
      PRIS_ACT_CAP:193.65,
      "Living Conditions": (193.65 / 213.29) ,
      "GF03": 2.3
    },
    {
      "title": "Greece",
      "id": "GR",
      PRIS_OFF_CAP: 92.64 , 
      PRIS_ACT_CAP:101.55 ,
      "Living Conditions": (101.55  / 92.64 ) , 
      "GF03": 2.1
    },
    {
      "title": "Italy",
      "id": "IT",
      PRIS_OFF_CAP:  85.68 , 
      PRIS_ACT_CAP:104.04 ,
      "Living Conditions": (104.04 / 85.68 ) ,
      "GF03": 1.8
    },
    {
      "title": "Portugal",
      "id": "PT",
      PRIS_OFF_CAP: 125.86 , 
      PRIS_ACT_CAP:125.99 ,
      "Living Conditions": (125.99/  125.86 ) ,
      "GF03": 1.6
    },
    {
      "title": "Spain",
      "id": "ES",
      PRIS_OFF_CAP:136.85, 
      PRIS_ACT_CAP:124.67,
      "Living Conditions": (124.67 /  136.85) ,
      "GF03": 1.8
    },
    {
      "title": "France",
      "id": "FR",
      PRIS_OFF_CAP:90.86 , 
      PRIS_ACT_CAP:105.30,
      "Living Conditions": (105.30 / 90.86 ) ,
      "GF03": 1.6
    },
    {
      "title": "Germany",
      "id": "DE",
      PRIS_OFF_CAP: 87.89 , 
      PRIS_ACT_CAP: 76.06 ,
      "Living Conditions": (76.06 / 87.89 ) ,
      "GF03": 1.6
    },
    {
      "title": "Netherlands",
      "id": "NL",
      PRIS_OFF_CAP: 67.20 , 
      PRIS_ACT_CAP:68.15 ,
      "Living Conditions": (68.15 / 67.20) ,
      "GF03": 1.8
    }
    ]);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
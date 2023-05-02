am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("LivSuicide2017");
    
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
    
    chart.get("colors").set("step", 2);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.children.moveValue(am5.Label.new(root, {
      text: "Number of Suicides",
      x: am5.p50,
      centerX: am5.p50
    }), xAxis.children.length - 1);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
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
      valueXField: "Suicides",
      seriesTooltipTarget:"bullet",
      tooltip: am5.Tooltip.new(root, {
        labelText: "[bold]{title}[/]\nSuicides: {valueX},\nLiving Conditions: {valueY}\n",
      })
    }));
    
    
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
    
    // Add heat rule
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    series.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 35,
      dataField: "value",
      key: "radius"
    }]);
    
    series.strokes.template.set("strokeOpacity", 0);
    
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
    
    
    var data = [{
        
            "title": "Estonia",
            "id": "EE",
            PRIS_OFF_CAP: 221.57, 
            PRIS_ACT_CAP:206.97,
            "Living Conditions": (206.97 / 221.57) ,
            Suicides: 1
          },
          {
            "title": "Sweden",
            "id": "SE",
            PRIS_OFF_CAP: 61.50, 
            PRIS_ACT_CAP: 57.16,
            "Living Conditions": 57.16 / 61.50 ,
            Suicides: 1
    
          },
          {
            "title": "Denmark",
            "id": "DK",
            PRIS_OFF_CAP: 62.48,
            PRIS_ACT_CAP: 59.46,
            "Living Conditions": (59.46 /  62.48) ,
            Suicides: 4
    
          },
          {
            "title": "Finland",
            "id": "FI",
            PRIS_OFF_CAP: 53.10,
            PRIS_ACT_CAP: 56.00,
            "Living Conditions": (56.00 / 53.10) ,
            Suicides: 2
    
          },
          {
            "title": "Bulgaria",
            "id": "BG",
            PRIS_OFF_CAP: 119.56, 
            PRIS_ACT_CAP:98.40,
            "Living Conditions": (98.40 / 119.56) ,
            Suicides: 5
    
          },
          {
            "title": "Hungary",
            "id": "HG",
            PRIS_OFF_CAP: 143.00, 
            PRIS_ACT_CAP:177.01,
            "Living Conditions": (177.01 / 143.00) ,
            Suicides: 4
    
          },
          {
            "title": "Austria",
            "id": "AT",
            PRIS_OFF_CAP: 99.69, 
            PRIS_ACT_CAP:100.90,
            "Living Conditions": (100.90 / 99.69) ,
            Suicides: 11
    
          },
          {
            "title": "Poland",
            "id": "PL",
            PRIS_OFF_CAP: 228.76, 
            PRIS_ACT_CAP:196.14,
            "Living Conditions": (196.14 / 228.76),
    
          },
          {
            "title": "Romania",
            "id": "RO",
            PRIS_OFF_CAP: 103.89, 
            PRIS_ACT_CAP:119.37,
            "Living Conditions": (119.37 / 103.89) ,
            Suicides: 9
    
          },
          {
            "title": "Slovakia",
            "id": "SK",
            PRIS_OFF_CAP: 201.29, 
            PRIS_ACT_CAP:184.50,
            "Living Conditions": (184.50 / 201.29) ,
            Suicides: 10
    
          },
          {
            "title": "Greece",
            "id": "GR",
            PRIS_OFF_CAP: 92.26, 
            PRIS_ACT_CAP:92.97,
            "Living Conditions": (92.97 / 92.26) , 
            Suicides: 0
    
          },
          {
            "title": "Italy",
            "id": "IT",
            PRIS_OFF_CAP:  84.30, 
            PRIS_ACT_CAP:97.44,
            "Living Conditions": (97.44 / 84.30) ,
            Suicides: 48
    
          },
          {
            "title": "Portugal",
            "id": "PT",
            PRIS_OFF_CAP: 123.13, 
            PRIS_ACT_CAP:131.79,
            "Living Conditions": (131.79 /  123.13) ,
            Suicides: 15
    
          },
          {
            "title": "Spain",
            "id": "ES",
            PRIS_OFF_CAP:   137.79 , 
            PRIS_ACT_CAP:126.40,
            "Living Conditions": (126.40 /  137.79) ,
            Suicides: 27
    
          },
          {
            "title": "France",
            "id": "FR",
            PRIS_OFF_CAP:89.46, 
            PRIS_ACT_CAP:103.25,
            "Living Conditions": (103.25 / 89.46) ,
            Suicides: 88
    
          },
          {
            "title": "Germany",
            "id": "DE",
            PRIS_OFF_CAP: 89.19, 
            PRIS_ACT_CAP: 79.79,
            "Living Conditions": (79.79 /  89.19) ,
            Suicides: 82
    
          },
          {
            "title": "Netherlands",
            "id": "NL",
            PRIS_OFF_CAP: 70.69, 
            PRIS_ACT_CAP:63.66,
            "Living Conditions": (63.66 / 70.69) ,
            Suicides: 14
          }
      ]
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    
    chart.appear(1000, 100);
    
    }); // end am5.ready()
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("LivSuicide2019");
    
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
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
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
    });});
    
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
            PRIS_OFF_CAP: 247.43, 
            PRIS_ACT_CAP:187.72,
            "Living Conditions": (187.72 / 247.43) ,
            Suicides: 4
          },
          {
            "title": "Sweden",
            "id": "SE",
            PRIS_OFF_CAP: 65.07 , 
            PRIS_ACT_CAP: 65.68 ,
            "Living Conditions": (65.68 / 65.07),
            Suicides: 2
          },
          {
            "title": "Denmark",
            "id": "DK",
            PRIS_OFF_CAP: 67.98,
            PRIS_ACT_CAP: 67.52,
            "Living Conditions": (67.52/67.98) ,
            Suicides:9
          },
          {
            "title": "Finland",
            "id": "FI",
            PRIS_OFF_CAP: 52.16,
            PRIS_ACT_CAP: 53.37 ,
            "Living Conditions": (53.37  / 52.16) ,
            Suicides: 1
          },
          {
            "title": "Bulgaria",
            "id": "BG",
            PRIS_OFF_CAP: 115.79 , 
            PRIS_ACT_CAP:92.11,
            "Living Conditions": (92.11/ 115.79 ) ,
            Suicides: 3
          },
          {
            "title": "Hungary",
            "id": "HG",
            PRIS_OFF_CAP: 152.12, 
            PRIS_ACT_CAP:170.51,
            "Living Conditions": (170.51 / 152.12) ,
            Suicides: 6
          },
          {
            "title": "Austria",
            "id": "AT",
            PRIS_OFF_CAP: 100.27, 
            PRIS_ACT_CAP:102.41,
            "Living Conditions": (102.41 / 100.27) ,
            Suicides: 9
          },
          {
            "title": "Poland",
            "id": "PL",
            PRIS_OFF_CAP: 225.82, 
            PRIS_ACT_CAP:196.49  ,
            "Living Conditions": (196.49/225.82),
            Suicides: 24
          },
          {
            "title": "Romania",
            "id": "RO",
            PRIS_OFF_CAP: 100.55, 
            PRIS_ACT_CAP:105.99,
            "Living Conditions": (105.99 / 100.55) ,
            Suicides: 7
          },
          {
            "title": "Slovakia",
            "id": "SK",
            PRIS_OFF_CAP: 213.29, 
            PRIS_ACT_CAP:193.65,
            "Living Conditions": (193.65 / 213.29) ,
          },
          {
            "title": "Greece",
            "id": "GR",
            PRIS_OFF_CAP: 92.64 , 
            PRIS_ACT_CAP:101.55 ,
            "Living Conditions": (101.55  / 92.64 ) , 
          },
          {
            "title": "Italy",
            "id": "IT",
            PRIS_OFF_CAP:  85.68 , 
            PRIS_ACT_CAP:104.04 ,
            "Living Conditions": (104.04 / 85.68 ) ,
            Suicides: 53
          },
          {
            "title": "Portugal",
            "id": "PT",
            PRIS_OFF_CAP: 125.86 , 
            PRIS_ACT_CAP:125.99 ,
            "Living Conditions": (125.99/  125.86 ) ,
            Suicides: 11
          },
          {
            "title": "Spain",
            "id": "ES",
            PRIS_OFF_CAP:136.85, 
            PRIS_ACT_CAP:124.67,
            "Living Conditions": (124.67 /  136.85) ,
            Suicides: 43
          },
          {
            "title": "France",
            "id": "FR",
            PRIS_OFF_CAP:90.86 , 
            PRIS_ACT_CAP:105.30,
            "Living Conditions": (105.30 / 90.86 ) ,
            Suicides: 128
          },
          {
            "title": "Germany",
            "id": "DE",
            PRIS_OFF_CAP: 87.89 , 
            PRIS_ACT_CAP: 76.06 ,
            "Living Conditions": (76.06 / 87.89 ) ,
          },
          {
            "title": "Netherlands",
            "id": "NL",
            PRIS_OFF_CAP: 67.20 , 
            PRIS_ACT_CAP:68.15 ,
            "Living Conditions": (68.15 / 67.20) ,
            Suicides: 12
      
        
    }];
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    
    chart.appear(1000, 100);
    
    }); // end am5.ready()
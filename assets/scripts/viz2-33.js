am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("LivSuicide2018");
    
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
        PRIS_OFF_CAP: 252.74, 
        PRIS_ACT_CAP:195.89,
        "Living Conditions": (195.89 / 252.74) ,       
        Suicides: 4
      },
      {
        "title": "Sweden",
        "id": "SE",
        PRIS_OFF_CAP: 60.41, 
        PRIS_ACT_CAP: 64.61,
        "Living Conditions": 64.61 / 60.41,
        Suicides: 2
      },    
      {
        "title": "Denmark",
        "id": "DK",
        PRIS_OFF_CAP: 65.64,
        PRIS_ACT_CAP: 62.88,
        "Living Conditions": (62.88/  65.64) ,
        Suicides:5 },
      {
        "title": "Finland",
        "id": "FI",
        PRIS_OFF_CAP: 53.96,
        PRIS_ACT_CAP: 53.62,
        "Living Conditions": (53.62 / 53.96) ,
        Suicides: 2 },
      {
        "title": "Bulgaria",
        "id": "BG",
        PRIS_OFF_CAP: 116.89, 
        PRIS_ACT_CAP:94.34,
        "Living Conditions": (94.34 / 116.89) ,
        Suicides: 3 },
      {
        "title": "Hungary",
        "id": "HG",
        PRIS_OFF_CAP: 144.70, 
        PRIS_ACT_CAP:177.01,
        "Living Conditions": (177.01 / 144.70) ,  
        Suicides: 6     
      },
      {
        "title": "Austria",
        "id": "AT",
        PRIS_OFF_CAP: 100.24, 
        PRIS_ACT_CAP:103.86,
        "Living Conditions": (103.86 / 100.24) ,      
         Suicides: 12
      },
      {
        "title": "Poland",
        "id": "PL",
        PRIS_OFF_CAP: 226.30, 
        PRIS_ACT_CAP:191.74 ,
        "Living Conditions": (196.14 / 228.76),
        Suicides: 26
     },
      {
        "title": "Romania",
        "id": "RO",
        PRIS_OFF_CAP: 99.39, 
        PRIS_ACT_CAP:106.46,
        "Living Conditions": (106.46 / 99.39) ,
        Suicides: 11
     },
      {
        "title": "Slovakia",
        "id": "SK",
        PRIS_OFF_CAP: 211.26, 
        PRIS_ACT_CAP:189.12,
        "Living Conditions": (189.12 / 211.26) ,
        Suicides: 5       
      },
      {
        "title": "Greece",
        "id": "GR",
        PRIS_OFF_CAP: 92.49, 
        PRIS_ACT_CAP:99.19,
        "Living Conditions": (99.19 / 92.49) , 
        Suicides: 9  },
      {
        "title": "Italy",
        "id": "IT",
        PRIS_OFF_CAP:  84.55 , 
        PRIS_ACT_CAP:101.07,
        "Living Conditions": (101.07/ 84.55 ) ,
        Suicides: 61 },
      {
        "title": "Portugal",
        "id": "PT",
        PRIS_OFF_CAP: 125.68, 
        PRIS_ACT_CAP:126.53 ,
        "Living Conditions": (131.79 /  125.68),
        Suicides:11
      },
      {
        "title": "Spain",
        "id": "ES",
        PRIS_OFF_CAP:137.67, 
        PRIS_ACT_CAP:126.20,
        "Living Conditions": (126.20 /  137.67),
        Suicides:33       
      },
      {
        "title": "France",
        "id": "FR",
        PRIS_OFF_CAP:89.74, 
        PRIS_ACT_CAP:104.69,
        "Living Conditions": (104.69 / 89.74) ,
        Suicides: 103  },
      {
        "title": "Netherlands",
        "id": "NL",
        PRIS_OFF_CAP: 72.03, 
        PRIS_ACT_CAP:65.48,
        "Living Conditions": (65.48 / 72.03) ,
        Suicides: 13
    }];
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    
    chart.appear(1000, 100);
    
    }); // end am5.ready()
am5.ready(function() {
    
    // Create root
    var root = am5.Root.new("chartdiv"); 
    
    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

      // Create wrapper container
      var container = root.container.children.push(am5.Container.new(root, {
        layout: root.horizontalLayout,
        width: am5.p100,
        height: am5.p100
      }))
    

 
      
    //create piechart 
    var pie = container.children.push(am5percent.PieChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticallLayout,
        radius: am5.percent(65),
        centerY: am5.percent(50),
        y: am5.percent(50),
      }));

    //create series 
    var series = pie.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
        
      }));
    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("forceHidden", true);
    series.get("colors").set("colors", [
      am5.color(0xff7621f), //very bad
      am5.color(0xff8a44), //fairly bad
      am5.color(0xffb181), //fairly good
      am5.color(0xffd7be), //very good
      am5.color(0xffeadd) //unknown
    ]);
    
    var legend = pie.children.push(am5.Legend.new(root, {
      nameField: "name",
      fillField: "color",
      strokeField: "color",
      centerX: am5.percent(10),
      x: am5.percent(10),
      centerY: am5.percent(0),
      y: am5.percent(0),
    }));
    
    legend.data.setAll([
    {
      name: "Very Bad",
      color: am5.color(0xff7621f)
    }, {
      name: "Fairly Bad",
      color: am5.color(0xff8a44)
    },
    {
      name: "Fairly Good",
      color: am5.color(0xffb181)
    },
    {
      name: "Very Good",
      color: am5.color(0xffd7be)
    },
    {
      name: "Unknown",
      color: am5.color(0xffeadd)
    }
  ]);
   
    var data = [
    {id: "EE", value: 2, category: "VBAD"},
    {id: "EE", value: 12, category: "FBAD"},
    {id: "EE", value: 56, category: "FGOOD"},
    {id: "EE", value: 6, category: "VGOOD"},
    {id: "EE", value: 24, category: "UNK"}, 
    ];

  series.data.setAll(data);


  //heatmap
    var heatmap = 
    container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        wheelY: "none",
        panY: "none",
        projection: am5map.geoMercator(),
        layout: root.horizontalLayout, 
        width: am5.percent(100)
  }));

var polygonSeries = 
    heatmap.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_region_world_europeLow,
        exclude: (["AQ"], ["TR"]),
        valueField: "value",
        fill: am5.color(0xccc8bc),
        stroke: am5.color(0x161616)
      }));
      
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}: {value}",
        interactive: true
      });
      
    polygonSeries.set("heatRules", [{
        target: 
        polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0xffd7be),
        minValue: 0,
        max: am5.color(0xff621f),
        maxValue: 126,
        key: "fill"
      }]);
   
var heatLegend = heatmap.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0xffd7be),
        endColor: am5.color(0xff621f),
        startText: "Lowest",
        startValue: 0,
        endText: "Highest",
        endValue: 126,
        stepCount: 5
      }));

    polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
        heatLegend.showValue();
      });

    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        console.log("Clicked on a column", ev.target);
        //console.log(ev.target['uid']);
        switch(ev.target['uid']) {
          case 102:
            var data = [
              {id: "IT", value: 00, category: "FBAD"},
              {id: "IT", value: 00, category: "FGOOD"}, 
              {id: "IT", value: 00, category: "UNK"}, 
              {id: "IT", value: 00, category: "VBAD"},
              {id: "IT", value: 100, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;
          case 82:
            var data = [
              {id: "SW", value: 10, category: "FBAD"},
              {id: "SW", value: 00, category: "FGOOD"}, 
              {id: "SW", value: 00, category: "UNK"}, 
              {id: "SW", value: 00, category: "VBAD"},
              {id: "SW", value: 90, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;
        }
      });
      
    heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
      });
      
    heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
      });


      var suicideData = polygonSeries.data.setAll([
      {id:"EE", value: "N/A" },
      { id: "SE", value: 1 },
      { id: "FI", value: 2 },
      { id: "DK", value: 8 },
      { id: "BG", value: 3 },
      { id: "HU", value: 9 },
      { id: "PL", value: 24 },
      { id: "RO", value: 11 },
      { id: "SK", value: 6 },
      { id: "SI", value: 3 },
      { id: "GR", value: 6 },
      { id: "IT", value: 39 },
      { id: "PT", value: 9 },
      { id: "ES", value: 23 },
      { id: "AT", value: 10 },
      { id: "FR", value: 125 },
      { id: "DE", value: 76 },
      { id: "NL", value: 6 },
      ]);
  });

;// end am5.ready()
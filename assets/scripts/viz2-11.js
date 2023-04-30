am5.ready(function() {
    
    // Create root
    var root = am5.Root.new("chartdiv1"); 
    
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
        y: am5.percent(50)
      }));

    //create series 
    var series = pie.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
        
      }));
    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("forceHidden", true);
    series.get("colors").set("colors", [
      am5.color(0x2A3837), //very bad
      am5.color(0x4A605F), //fairly bad
      am5.color(0x4C908D), //fairly good
      am5.color(0x73BBB8), //very good
      am5.color(0x668886) //unknown
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
      color: am5.color(0x2A3837)
    }, {
      name: "Fairly Bad",
      color: am5.color(0x4A605F)
    },
    {
      name: "Fairly Good",
      color: am5.color(0x4C908D)
    },
    {
      name: "Very Good",
      color: am5.color(0x73BBB8)
    },
    {
      name: "Unknown",
      color: am5.color(0x668886)
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
        min: am5.color(0xffddc7),
        minValue: 0,
        max: am5.color(0xff7621),
        maxValue: 126,
        key: "fill"
      }]);
   
var heatLegend = heatmap.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0xffddc7),
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
        //console.log("Clicked on a column", Object.keys(ev.target));
        console.log("Clicked on a column", ev.target['_dataItem']['_settings']['id']);
        //console.log(ev.target['uid']);
        switch(ev.target['_dataItem']['_settings']['id']) {
          case 'EE':
            var data = [
              {id: "EE", value: 12, category: "FBAD"},
              {id: "EE", value: 56, category: "FGOOD"}, 
              {id: "EE", value: 24, category: "UNK"}, 
              {id: "EE", value: 2, category: "VBAD"},
              {id: "EE", value: 6, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;
          case 'SE':
            var data = [
              {id: "SE", value: 10, category: "FBAD"},
              {id: "SE", value: 53, category: "FGOOD"}, 
              {id: "SE", value: 9, category: "UNK"}, 
              {id: "SE", value: 4, category: "VBAD"},
              {id: "SE", value: 24, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'FI':
            var data = [
              {id:"FI", value: 10, category: "FBAD"},
              {id:"FI", value: 65,category: "FGOOD"},
              {id:"FI", value: 8, category: "UNK"},
              {id:"FI", value: 2, category: "VBAD"},
              {id:"FI", value: 15, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'DK':
            var data = [
              {id:"DK", value:6, category: "FBAD"},
              {id:"DK", value: 51, category: "FGOOD"},
              {id:"DK", value:5, category: "UNK"},
              {id:"DK", value: 1, category: "VBAD"},
              {id:"DK", value: 37, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'IE':
            var data = [
              {id:"IE", value: 13, category: "FBAD"},
              {id:"IE", value: 55, category:"FGOOD"},
              {id:"IE", value: 5, category: "UNK"},
              {id:"IE", value: 7, category:"VBAD"},
              {id:"IE", value: 20, category:"VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'BG':
            var data = [
              {id:"BG", value:35, category: "FBAD"},
              {id:"BG", value: 21, category: "FGOOD"},
              {id:"BG", value: 7, category: "UNK"},
              {id:"BG", value: 35, category: "VBAD"},
              {id:"BG", value: 2, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'HG':
            var data = [
              {id:"HG", value:22, category: "FBAD"},
              {id:"HG", value:44, category: "FGOOD"},
              {id:"HG", value:18, category: "UNK"},
              {id:"HG", value:11, category: "VBAD"},
              {id:"HG", value:5, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'PL':
            var data = [
              {id:"PL", value:32, category:"FBAD"},
              {id:"PL", value:40, category:"FGOOD"},
              {id:"PL", value:11, category:"UNK"},
              {id:"PL", value:12, category:"VBAD"},
              {id:"PL", value:5, category:"VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'RO':
            var data = [
              {id: "RO", value: 23, category: "FBAD"},
              {id: "RO", value:43, category: "FGOOD"},
              {id: "RO", value:11, category: "UNK"},
              {id: "RO", value:15, category: "VBAD"},
              {id: "RO", value:8, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'SK':
            var data = [
              {id: "SK", value:36, category: "FBAD"},
              {id: "SK", value:19, category: "FGOOD"},
              {id: "SK", value:18, category: "UNK"},
              {id: "SK", value:25, category: "VBAD"},
              {id: "SK", value:2, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'SI':
            var data = [
              {id: "SI", value:32, category: "FBAD"},
              {id: "SI", value:27, category: "FGOOD"},
              {id: "SI", value:6, category: "UNK"},
              {id: "SI", value:32, category: "VBAD"},
              {id: "SI", value:3, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'GR':
            var data = [
              {id: "GR", value:26, category: "FBAD"},
              {id: "GR", value:41, category: "FGOOD"},
              {id: "GR", value:11, category: "UNK"},
              {id: "GR", value:16, category: "VBAD"},
              {id: "GR", value:6, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'IT':
            var data = [
              {id: "IT", value:36, category: "FBAD"},
              {id: "IT", value:23, category: "FGOOD"},
              {id: "IT", value:14, category: "UNK"},
              {id: "IT", value:25, category: "VBAD"},
              {id: "IT", value:2, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'PT':
            var data = [
              {id: "PT",value: 31,  category: "FBAD"},
              {id: "PT", value:31,  category: "FGOOD"},
              {id: "PT", value: 23, category: "UNK"},
              {id: "PT", value:13, category: "VBAD"},
              {id: "PT", value: 2, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'ES':
            var data = [
              {id: "ES", value:38, category:"FBAD"},
              {id: "ES", value:27, category:"FGOOD"},
              {id: "ES", value:14, category:"UNK"},
              {id: "ES", value:18, category:"VBAD"},
              {id: "ES", value:3, category:"VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'AT':
            var data = [
              {id: "AT", value:13, category: "FBAD"},
              {id: "AT", value:59, category: "FGOOD"},
              {id: "AT", value:7, category: "UNK"},
              {id: "AT", value:3, category: "VBAD"},
              {id: "AT", value:18, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'FR':
            var data = [
              {id: "FR", value:29, category: "FBAD"},
              {id: "FR", value: 49, category: "FGOOD"},
              {id: "FR", value:7, category: "UNK"},
              {id: "FR", value:10, category: "VBAD"},
              {id: "FR", value:5, category: "VGOOD"} ,
              ];
          
            series.data.setAll(data);
            break;

          case 'DE':
            var data = [
              {id: "DE", value:13, category: "FBAD"},
              {id: "DE", value:54, category: "FGOOD"},
              {id: "DE", value:14, category: "UNK"},
              {id: "DE", value:4, category: "VBAD"},
              {id: "DE", value:15, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'NL':
            var data = [
              {id: "NL", value:9, category: "FBAD"},
              {id: "NL", value:56, category: "FGOOD"},
              {id: "NL", value:16, category: "UNK"},
              {id: "NL", value:3, category: "VBAD"},
              {id: "NL", value:16, category: "VGOOD"},
              ];
          
            series.data.setAll(data);
            break;

          case 'BE':
            var data = [
              {id: "BE", value:19, category: "FBAD"},
              {id: "BE", value:56, category: "FGOOD"},
              {id: "BE", value:12, category: "UNK"},
              {id: "BE", value:7, category: "VBAD"},
              {id: "BE", value:6, category: "VGOOD"},
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

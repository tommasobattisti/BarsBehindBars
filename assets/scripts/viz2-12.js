am5.ready(function() {
    
    // Create root
    var root = am5.Root.new("chartdiv2"); 
    
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
    
    //create chart 
    var pie = container.children.push(am5percent.PieChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
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
    {id: "EE", value: 12, category: "FBAD"},
    {id: "EE", value: 42, category: "FGOOD"}, 
    {id: "EE", value: 39, category: "UNK"}, 
    {id: "EE", value: 2, category: "VBAD"},
    {id: "EE", value: 5, category: "VGOOD"},
    {id: "SE", value: 12, category: "FBAD"},
    {id: "SE", value: 51, category: "FGOOD"}, 
    {id: "SE", value: 10, category: "UNK"}, 
    {id: "SE", value: 6, category: "VBAD"},
    {id: "SE", value: 21, category: "VGOOD"},
    {id:"FI", value: 11, category: "FBAD"},
    {id:"FI", value: 62,category: "FGOOD"},
    {id:"FI", value: 6, category: "UNK"},
    {id:"FI", value: 2, category: "VBAD"},
    {id:"FI", value: 19, category: "VGOOD"},
    {id:"DK", value:5, category: "FBAD"},
    {id:"DK", value: 46, category: "FGOOD"},
    {id:"DK", value:7, category: "UNK"},
    {id:"DK", value: 2, category: "VBAD"},
    {id:"DK", value: 40, category: "VGOOD"},
    {id:"IE", value: 11, category: "FBAD"},
    {id:"IE", value: 51, category:"FGOOD"},
    {id:"IE", value: 7, category: "UNK"},
    {id:"IE", value: 8, category:"VBAD"},
    {id:"IE", value: 23, category:"VGOOD"},
    {id:"BG", value:37, category: "FBAD"},
    {id:"BG", value: 24, category: "FGOOD"},
    {id:"BG", value: 11, category: "UNK"},
    {id:"BG", value: 26, category: "VBAD"},
    {id:"BG", value: 2, category: "VGOOD"},
    {id:"HG", value:21, category: "FBAD"},
    {id:"HG", value:43, category: "FGOOD"},
    {id:"HG", value:24, category: "UNK"},
    {id:"HG", value:7, category: "VBAD"},
    {id:"HG", value:5, category: "VGOOD"},
    {id:"PL", value:26, category:"FBAD"},
    {id:"PL", value:45, category:"FGOOD"},
    {id:"PL", value:13, category:"UNK"},
    {id:"PL", value:11, category:"VBAD"},
    {id:"PL", value:5, category:"VGOOD"},
    {id: "RO", value: 19, category: "FBAD"},
    {id: "RO", value:43, category: "FGOOD"},
    {id: "RO", value:15, category: "UNK"},
    {id: "RO", value:16, category: "VBAD"},
    {id: "RO", value:7, category: "VGOOD"},
    {id: "SK", value:35, category: "FBAD"},
    {id: "SK", value:21, category: "FGOOD"},
    {id: "SK", value:18, category: "UNK"},
    {id: "SK", value:24, category: "VBAD"},
    {id: "SK", value:2, category: "VGOOD"},
    {id: "SI", value:30, category: "FBAD"},
    {id: "SI", value:34, category: "FGOOD"},
    {id: "SI", value:14, category: "UNK"},
    {id: "SI", value:21, category: "VBAD"},
    {id: "SI", value:1, category: "VGOOD"},
    {id: "GR", value:25, category: "FBAD"},
    {id: "GR", value:44, category: "FGOOD"},
    {id: "GR", value:12, category: "UNK"},
    {id: "GR", value:11, category: "VBAD"},
    {id: "GR", value:8, category: "VGOOD"},
    {id: "IT", value:38, category: "FBAD"},
    {id: "IT", value:30, category: "FGOOD"},
    {id: "IT", value:11, category: "UNK"},
    {id: "IT", value:19, category: "VBAD"},
    {id: "IT", value:2, category: "VGOOD"},
    {id: "PT",value: 30,  category: "FBAD"},
    {id: "PT", value:40,  category: "FGOOD"},
    {id: "PT", value: 14, category: "UNK"},
    {id: "PT", value:14, category: "VBAD"},
    {id: "PT", value: 2, category: "VGOOD"},
    {id: "ES", value:39, category:"FBAD"},
    {id: "ES", value:28, category:"FGOOD"},
    {id: "ES", value:11, category:"UNK"},
    {id: "ES", value:19, category:"VBAD"},
    {id: "ES", value:3, category:"VGOOD"},
    {id: "AT", value:14, category: "FBAD"},
    {id: "AT", value:58, category: "FGOOD"},
    {id: "AT", value:6, category: "UNK"},
    {id: "AT", value:2, category: "VBAD"},
    {id: "AT", value:20, category: "VGOOD"},
    {id: "FR", value:26, category: "FBAD"},
    {id: "FR", value: 50, category: "FGOOD"},
    {id: "FR", value:10, category: "UNK"},
    {id: "FR", value:11, category: "VBAD"},
    {id: "FR", value:3, category: "VGOOD"} ,
    {id: "DE", value:12, category: "FBAD"},
    {id: "DE", value:59, category: "FGOOD"},
    {id: "DE", value:6, category: "UNK"},
    {id: "DE", value:4, category: "VBAD"},
    {id: "DE", value:19, category: "VGOOD"},
    {id: "NL", value:8, category: "FBAD"},
    {id: "NL", value:51, category: "FGOOD"},
    {id: "NL", value:12, category: "UNK"},
    {id: "NL", value:4, category: "VBAD"},
    {id: "NL", value:25, category: "VGOOD"},
    {id: "BE", value:21, category: "FBAD"},
    {id: "BE", value:54, category: "FGOOD"},
    {id: "BE", value:14, category: "UNK"},
    {id: "BE", value:6, category: "VBAD"},
    {id: "BE", value:5, category: "VGOOD"}
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
      
    heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor")
      });
      
    heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor")
      });


      var suicideData = polygonSeries.data.setAll([
      {id:"EE", value: 1,
    }, 
    {   id: "SE",  value: 1,
    }, 
    {   id:"FI",  value: 2,
    }, 
    {   id:"DK",  value: 4,
    }, 

    {   id:"BG",  value: 5,
    },

    {   id:"HU",  value: 4,
    },

    {id:"RO",  value: 9,
    },

    {id:"SK", value: 10,
    },

    {id:"IT", value: 48,
    },

    {id:"SI",  value: 1,
    },

    {id:"GR",  value: 0,
    },

    {id:"PT", value: 15,
    },

    {id:"ES", value: 27,
    },

    {id:"AT", value: 11,
    },

    {id:"FR", value: 88,  
    },

    {id:"DE", value: 82,
    },

    {id:"NL", value: 14,
    },

    {id:"BE", value: 13, 
    }
      ]);
  });

;// end am5.ready()

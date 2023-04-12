// JUSTICE-SUICIDE 2016 

<!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("JusticeSuicide2016");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
    var data = [
 
        {   "countrycode": "SE",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 10,
            "FGOOD": 53,
            "UNK": 9,
            "VBAD": 4,
            "VGOOD": 24
        }, 
        {   "countrycode":"FI",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 10,
            "FGOOD": 65,
            "UNK": 8,
            "VBAD": 2,
            "VGOOD": 15
        }, 
        {   "countrycode":"DK",
            "Deaths due to external causes: by suicide": 8,
            "FBAD": 6,
            "FGOOD": 51,
            "UNK": 5,
            "VBAD": 1,
            "VGOOD": 37
        }, 

        {   "countrycode":"BG",
            "Deaths due to external causes: by suicide": 3,
            "FBAD": 35,
            "FGOOD": 21,
            "UNK": 7,
            "VBAD": 35,
            "VGOOD": 2
        },

        {   "countrycode":"HU",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 22,
            "FGOOD": 44,
            "UNK": 18,
            "VBAD": 11,
            "VGOOD": 5
        },

        {   "countrycode":"PL",
            "Deaths due to external causes: by suicide": 24,
            "FBAD": 32,
            "FGOOD": 40,
            "UNK": 11,
            "VBAD": 12,
            "VGOOD": 5
        },

        {"countrycode":"RO",
            "Deaths due to external causes: by suicide": 11,
            "FBAD": 23,
            "FGOOD": 43,
            "UNK": 11,
            "VBAD": 15,
            "VGOOD": 8},

        {"countrycode":"SK",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 36,
            "FGOOD": 19,
            "UNK": 18,
            "VBAD": 25,
            "VGOOD": 2
        },
        
        {"countrycode":"IT",
            "Deaths due to external causes: by suicide": 39,
            "FBAD": 36,
            "FGOOD": 23,
            "UNK": 14,
            "VBAD": 25,
            "VGOOD": 2},
        
        {"countrycode":"SI",
            "Deaths due to external causes: by suicide": 3,
            "FBAD": 32,
            "FGOOD": 27,
            "UNK": 6,
            "VBAD": 32,
            "VGOOD": 3},
        
        {"countrycode":"GR",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 26,
            "FGOOD": 41,
            "UNK": 11,
            "VBAD": 16,
            "VGOOD": 6},
        
        {"countrycode":"PT",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 31,
            "FGOOD": 31,
            "UNK": 23,
            "VBAD": 13,
            "VGOOD": 2},
        
        {"countrycode":"ES",
            "Deaths due to external causes: by suicide": 23,
            "FBAD": 38,
            "FGOOD": 27,
            "UNK": 14,
            "VBAD": 18,
            "VGOOD": 3},
        
        {"countrycode":"AT",
            "Deaths due to external causes: by suicide": 10,
            "FBAD": 13,
            "FGOOD": 59,
            "UNK": 7,
            "VBAD": 3,
            "VGOOD": 18},

        {"countrycode":"FR",
            "Deaths due to external causes: by suicide": 125,
            "FBAD": 29,
            "FGOOD": 49,
            "UNK": 7,
            "VBAD": 10,
            "VGOOD": 5},
        
        {"countrycode":"DE",
            "Deaths due to external causes: by suicide": 76,
            "FBAD": 13,
            "FGOOD": 54,
            "UNK": 14,
            "VBAD": 4,
            "VGOOD": 15},
        
        {"countrycode":"NL",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 9,
            "FGOOD": 56,
            "UNK": 16,
            "VBAD": 3,
            "VGOOD": 16},
    ]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "countrycode",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "countrycode"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });
    
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("Deaths due to external causes: by suicide", "Deaths due to external causes: by suicide");
    makeSeries("FBAD", "FBAD");
    makeSeries("FGOOD", "FGOOD");
    makeSeries("VBAD", "VBAD");
    makeSeries("VGOOD", "VGOOD");
    makeSeries("UNK", "UNK");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>
    
    
    
    
    
    // JUSTICE-SUICIDE 2017 
    
    <!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("JusticeSuicide2017");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
    var data = [{
            "countrycode":"EE",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 12,
            "FGOOD": 42,
            "UNK": 39,
            "VBAD": 2,
            "VGOOD": 5
        }, 
        {   "countrycode": "SE",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 12,
            "FGOOD": 51,
            "UNK": 10,
            "VBAD": 6,
            "VGOOD": 21
        }, 
        {   "countrycode":"FI",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 11,
            "FGOOD": 62,
            "UNK": 6,
            "VBAD": 2,
            "VGOOD": 19
        }, 
        {   "countrycode":"DK",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 5,
            "FGOOD": 46,
            "UNK": 7,
            "VBAD": 2,
            "VGOOD": 40
        }, 

        {   "countrycode":"BG",
            "Deaths due to external causes: by suicide": 5,
            "FBAD": 37,
            "FGOOD": 24,
            "UNK": 11,
            "VBAD": 26,
            "VGOOD": 2
        },

        {   "countrycode":"HU",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 21,
            "FGOOD": 43,
            "UNK": 24,
            "VBAD": 7,
            "VGOOD": 5
        },

        {   "countrycode":"PL",
            "FBAD": 26,
            "FGOOD": 45,
            "UNK": 13,
            "VBAD": 11,
            "VGOOD": 5
        },

        {"countrycode":"RO",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 19,
            "FGOOD": 43,
            "UNK": 15,
            "VBAD": 16,
            "VGOOD": 7},

        {"countrycode":"SK",
            "Deaths due to external causes: by suicide": 10,
            "FBAD": 35,
            "FGOOD": 21,
            "UNK": 18,
            "VBAD": 24,
            "VGOOD": 2
        },
        
        {"countrycode":"IT",
            "Deaths due to external causes: by suicide": 48,
            "FBAD": 38,
            "FGOOD": 30,
            "UNK": 11,
            "VBAD": 19,
            "VGOOD": 2},
        
        {"countrycode":"SI",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 30,
            "FGOOD": 34,
            "UNK": 14,
            "VBAD": 21,
            "VGOOD": 1
        },
        
        {"countrycode":"GR",
            "Deaths due to external causes: by suicide": 0,
            "FBAD": 25,
            "FGOOD": 44,
            "UNK": 12,
            "VBAD": 11,
            "VGOOD": 8
        },
        
        {"countrycode":"PT",
            "Deaths due to external causes: by suicide": 15,
            "FBAD": 30,
            "FGOOD": 40,
            "UNK": 14,
            "VBAD": 14,
            "VGOOD": 2
        },
        
        {"countrycode":"ES",
            "Deaths due to external causes: by suicide": 27,
            "FBAD": 39,
            "FGOOD": 28,
            "UNK": 11,
            "VBAD": 19,
            "VGOOD": 3
        },
        
        {"countrycode":"AT",
            "Deaths due to external causes: by suicide": 11,
            "FBAD": 14,
            "FGOOD": 58,
            "UNK": 6,
            "VBAD": 2,
            "VGOOD": 20
        },

        {"countrycode":"FR",
            "Deaths due to external causes: by suicide": 88,
            "FBAD": 26,
            "FGOOD": 50,
            "UNK": 10,
            "VBAD": 11,
            "VGOOD": 3
        },
        
        {"countrycode":"DE",
            "Deaths due to external causes: by suicide": 82,
            "FBAD": 12,
            "FGOOD": 59,
            "UNK": 6,
            "VBAD": 4,
            "VGOOD": 19
        },
        
        {"countrycode":"NL",
            "Deaths due to external causes: by suicide": 14,
            "FBAD": 8,
            "FGOOD": 51,
            "UNK": 12,
            "VBAD": 4,
            "VGOOD": 25
        },

        {"countrycode":"BE",
            "Deaths due to external causes: by suicide": 13,
            "FBAD": 21,
            "FGOOD": 54,
            "UNK": 14,
            "VBAD": 6,
            "VGOOD": 5
        },
    ]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "countrycode",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "countrycode"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });
    
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("Deaths due to external causes: by suicide", "Deaths due to external causes: by suicide");
    makeSeries("FBAD", "FBAD");
    makeSeries("FGOOD", "FGOOD");
    makeSeries("VBAD", "VBAD");
    makeSeries("VGOOD", "VGOOD");
    makeSeries("UNK", "UNK");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>
    
    
    // JUSTICE - SUICIDE 2018 
    
    
     <!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("JusticeSuicide2018");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
    var data = [{
            "countrycode":"EE",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 11,
            "FGOOD": 54,
            "UNK": 27,
            "VBAD": 1,
            "VGOOD": 7
        }, 
        {   "countrycode": "SE",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 11,
            "FGOOD": 53,
            "UNK": 11,
            "VBAD": 3,
            "VGOOD": 22
        }, 
        {   "countrycode":"FI",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 9,
            "FGOOD": 65,
            "UNK": 8,
            "VBAD": 1,
            "VGOOD": 17
        }, 
        {   "countrycode":"DK",
            "Deaths due to external causes: by suicide": 5,
            "FBAD": 7,
            "FGOOD": 49,
            "UNK": 4,
            "VBAD": 2,
            "VGOOD": 38
        }, 

        {   "countrycode":"BG",
            "Deaths due to external causes: by suicide": 3,
            "FBAD": 31,
            "FGOOD": 27,
            "UNK": 13,
            "VBAD": 26,
            "VGOOD": 3
        },

        {   "countrycode":"HU",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 22,
            "FGOOD": 42,
            "UNK": 22,
            "VBAD": 8,
            "VGOOD": 6
        },

        {   "countrycode":"PL",
            "Deaths due to external causes: by suicide": 26,
            "FBAD": 29,
            "FGOOD": 37,
            "UNK": 13,
            "VBAD": 16,
            "VGOOD": 5
        },

        {"countrycode":"RO",
            "Deaths due to external causes: by suicide": 11,
            "FBAD": 24,
            "FGOOD": 42,
            "UNK": 14,
            "VBAD": 15,
            "VGOOD": 5},

        {"countrycode":"SK",
            "Deaths due to external causes: by suicide": 5,
            "FBAD": 39,
            "FGOOD": 26,
            "UNK": 13,
            "VBAD": 19,
            "VGOOD": 3
        },
        
        {"countrycode":"IT",
            "Deaths due to external causes: by suicide": 61,
            "FBAD": 32,
            "FGOOD": 29,
            "UNK": 15,
            "VBAD": 21,
            "VGOOD": 3},
        
        {"countrycode":"SI",
            "Deaths due to external causes: by suicide": 0,
            "FBAD": 32,
            "FGOOD": 31,
            "UNK": 13,
            "VBAD": 22,
            "VGOOD": 2
        },
        
        {"countrycode":"GR",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 22,
            "FGOOD": 48,
            "UNK": 10,
            "VBAD": 9,
            "VGOOD": 11
        },
        
        {"countrycode":"PT",
            "Deaths due to external causes: by suicide": 11,
            "FBAD": 32,
            "FGOOD": 48,
            "UNK": 7,
            "VBAD": 11,
            "VGOOD": 2
        },
        
        {"countrycode":"ES",
            "Deaths due to external causes: by suicide": 33,
            "FBAD": 32,
            "FGOOD": 32,
            "UNK": 12,
            "VBAD": 17,
            "VGOOD": 7
        },
        
        {"countrycode":"AT",
            "Deaths due to external causes: by suicide": 12,
            "FBAD": 7,
            "FGOOD": 58,
            "UNK": 10,
            "VBAD": 2,
            "VGOOD": 23
        },

        {"countrycode":"FR",
            "Deaths due to external causes: by suicide": 103,
            "FBAD": 23,
            "FGOOD": 52,
            "UNK": 11,
            "VBAD": 8,
            "VGOOD": 6
        },
        
        {"countrycode":"NL",
            "Deaths due to external causes: by suicide": 13,
            "FBAD": 7,
            "FGOOD": 54,
            "UNK": 11,
            "VBAD": 3,
            "VGOOD": 25
        },

        {"countrycode":"BE",
            "Deaths due to external causes: by suicide": 16,
            "FBAD": 18,
            "FGOOD": 55,
            "UNK": 13,
            "VBAD": 5,
            "VGOOD": 9
        },
    ]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "countrycode",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "countrycode"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });
    
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("Deaths due to external causes: by suicide", "Deaths due to external causes: by suicide");
    makeSeries("FBAD", "FBAD");
    makeSeries("FGOOD", "FGOOD");
    makeSeries("VBAD", "VBAD");
    makeSeries("VGOOD", "VGOOD");
    makeSeries("UNK", "UNK");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>
    
    
    // JUSTICE-SUICIDE 2019 
    
    <!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("JusticeSuicide2019");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
    var data = [{
            "countrycode":"EE",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 12,
            "FGOOD": 49,
            "UNK": 30,
            "VBAD": 3,
            "VGOOD": 6
        }, 
        {   "countrycode": "SE",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 10,
            "FGOOD": 50,
            "UNK": 8,
            "VBAD": 3,
            "VGOOD": 29
        }, 
        {   "countrycode":"FI",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 9,
            "FGOOD": 62,
            "UNK": 7,
            "VBAD": 1,
            "VGOOD": 21
        }, 
        {   "countrycode":"DK",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 5,
            "FGOOD": 47,
            "UNK": 7,
            "VBAD": 1,
            "VGOOD": 40
        }, 

        {   "countrycode":"BG",
            "Deaths due to external causes: by suicide": 3,
            "FBAD": 35,
            "FGOOD": 31,
            "UNK": 8,
            "VBAD": 23,
            "VGOOD": 3
        },

        {   "countrycode":"HU",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 21,
            "FGOOD": 37,
            "UNK": 24,
            "VBAD": 12,
            "VGOOD": 6
        },

        {   "countrycode":"PL",
            "Deaths due to external causes: by suicide": 24,
            "FBAD": 30,
            "FGOOD": 35,
            "UNK": 11,
            "VBAD": 20,
            "VGOOD": 4
        },

        {"countrycode":"RO",
            "Deaths due to external causes: by suicide": 7,
            "FBAD": 27,
            "FGOOD": 36,
            "UNK": 16,
            "VBAD": 17,
            "VGOOD": 4},
        
        {"countrycode":"IT",
            "Deaths due to external causes: by suicide": 53,
            "FBAD": 29,
            "FGOOD": 34,
            "UNK": 17,
            "VBAD": 17,
            "VGOOD": 3},
        
        {"countrycode":"SI",
            "Deaths due to external causes: by suicide": 0,
            "FBAD": 28,
            "FGOOD": 37,
            "UNK": 14,
            "VBAD": 19,
            "VGOOD": 2
        },

        {"countrycode":"PT",
            "Deaths due to external causes: by suicide": 11,
            "FBAD": 33,
            "FGOOD": 40,
            "UNK": 12,
            "VBAD": 13,
            "VGOOD": 2
        },
        
        {"countrycode":"ES",
            "Deaths due to external causes: by suicide": 43,
            "FBAD": 37,
            "FGOOD": 32,
            "UNK": 8,
            "VBAD": 18,
            "VGOOD": 5
        },
        
        {"countrycode":"AT",
            "Deaths due to external causes: by suicide": 9,
            "FBAD": 8,
            "FGOOD": 65,
            "UNK": 7,
            "VBAD": 2,
            "VGOOD": 18
        },

        {"countrycode":"FR",
            "Deaths due to external causes: by suicide": 128,
            "FBAD": 23,
            "FGOOD": 53,
            "UNK": 10,
            "VBAD": 8,
            "VGOOD": 6
        },
        
        {"countrycode":"NL",
            "Deaths due to external causes: by suicide": 12,
            "FBAD": 11,
            "FGOOD": 51,
            "UNK": 14,
            "VBAD": 4,
            "VGOOD": 20
        },

        {"countrycode":"BE",
            "Deaths due to external causes: by suicide": 12,
            "FBAD": 17,
            "FGOOD": 53,
            "UNK": 13,
            "VBAD": 8,
            "VGOOD": 9
        },
    ]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "countrycode",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "countrycode"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });
    
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("Deaths due to external causes: by suicide", "Deaths due to external causes: by suicide");
    makeSeries("FBAD", "FBAD");
    makeSeries("FGOOD", "FGOOD");
    makeSeries("VBAD", "VBAD");
    makeSeries("VGOOD", "VGOOD");
    makeSeries("UNK", "UNK");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>
    
    // JUSTICE - SUCIDE 2020 
    
    
     <!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("JusticeSuicide2020");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
    var data = [{
            "countrycode":"EE",
            "Deaths due to external causes: by suicide": 3,
            "FBAD": 12,
            "FGOOD": 48,
            "UNK": 29,
            "VBAD": 2,
            "VGOOD": 9
        }, 
        {   "countrycode": "SE",
            "Deaths due to external causes: by suicide": 2,
            "FBAD": 8,
            "FGOOD": 52,
            "UNK": 7,
            "VBAD": 4,
            "VGOOD": 29
        }, 
        {   "countrycode":"FI",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 7,
            "FGOOD": 61,
            "UNK": 8,
            "VBAD": 1,
            "VGOOD": 23
        }, 
        {   "countrycode":"DK",
            "Deaths due to external causes: by suicide": 4,
            "FBAD": 6,
            "FGOOD": 45,
            "UNK": 6,
            "VBAD": 2,
            "VGOOD": 41
        }, 

        {   "countrycode":"BG",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 31,
            "FGOOD": 3,
            "UNK": 15,
            "VBAD": 17,
            "VGOOD": 3
        },

        {   "countrycode":"HU",
            "Deaths due to external causes: by suicide": 5,
            "FBAD": 24,
            "FGOOD": 42,
            "UNK": 18,
            "VBAD": 10,
            "VGOOD": 6
        },

        {   "countrycode":"PL",
            "Deaths due to external causes: by suicide": 27,
            "FBAD": 31,
            "FGOOD": 29,
            "UNK": 11,
            "VBAD": 24,
            "VGOOD": 5
        },


        {"countrycode":"RO",
            "Deaths due to external causes: by suicide": 14,
            "FBAD": 28,
            "FGOOD": 33,
            "UNK": 18,
            "VBAD": 17,
            "VGOOD": 4},
        
        {"countrycode":"IT",
            "Deaths due to external causes: by suicide": 61,
            "FBAD": 37,
            "FGOOD": 26,
            "UNK": 15,
            "VBAD": 17,
            "VGOOD": 5},
        
        {"countrycode":"SI",
            "Deaths due to external causes: by suicide": 1,
            "FBAD": 31,
            "FGOOD": 39,
            "UNK": 12,
            "VBAD": 15,
            "VGOOD": 3
        },

        {"countrycode":"GR",
            "Deaths due to external causes: by suicide": 6,
            "FBAD": 24,
            "FGOOD": 47,
            "UNK": 12,
            "VBAD": 11,
            "VGOOD": 6
        },
        
        {"countrycode":"PT",
            "Deaths due to external causes: by suicide": 21,
            "FBAD": 34,
            "FGOOD": 39,
            "UNK": 11,
            "VBAD": 15,
            "VGOOD": 1
        },
        
        {"countrycode":"ES",
            "Deaths due to external causes: by suicide": 51,
            "FBAD": 34,
            "FGOOD": 35,
            "UNK": 7,
            "VBAD": 15,
            "VGOOD": 8
        },
        
        {"countrycode":"AT",
            "Deaths due to external causes: by suicide": 8,
            "FBAD": 7,
            "FGOOD": 62,
            "UNK": 5,
            "VBAD": 2,
            "VGOOD": 24
        },

        {"countrycode":"FR",
            "Deaths due to external causes: by suicide": 119,
            "FBAD": 22,
            "FGOOD": 51,
            "UNK": 13,
            "VBAD": 9,
            "VGOOD": 5
        },
        
        {"countrycode":"NL",
            "Deaths due to external causes: by suicide": 13,
            "FBAD": 7,
            "FGOOD": 50,
            "UNK": 13,
            "VBAD": 3,
            "VGOOD": 27
        },

        {"countrycode":"BE",
            "Deaths due to external causes: by suicide": 15,
            "FBAD": 19,
            "FGOOD": 54,
            "UNK": 11,
            "VBAD": 7,
            "VGOOD": 9
        },
    ]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "countrycode",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "countrycode"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });
    
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("Deaths due to external causes: by suicide", "Deaths due to external causes: by suicide");
    makeSeries("FBAD", "FBAD");
    makeSeries("FGOOD", "FGOOD");
    makeSeries("VBAD", "VBAD");
    makeSeries("VGOOD", "VGOOD");
    makeSeries("UNK", "UNK");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>

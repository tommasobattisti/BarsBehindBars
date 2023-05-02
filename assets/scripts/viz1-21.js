am5.ready(function() {


    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("NRJust2016");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      //layout: root.verticalLayout
    }));
    
    // Add title
    var title = container.children.push(am5.Label.new(root, {
      text: "Corruption Index\nand\nJustice Perception",
      textAlign: "center",
      x: am5.p50,
      y: am5.p50,
      centerX: am5.p50,
      centerY: am5.p50,
      fontSize: 20,
      fontWeight: "150",
      fill: am5.color(0x385d63)
    }));
    
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.Sunburst.new(root, {
      singleBranchOnly: true,
      downDepth: 2,
      initialDepth: 2,
      topDepth: 1,
      innerRadius: 100,
      valueField: "value",
      categoryField: "name",   //this is the thing which shows the 100 on hover
      childDataField: "children"
    }));
    
    series.slices.setAll({
      text: "{value}"
    });
    
    series.labels.template.setAll({
      text: "{name}\n[bold]{NR}"
    });
    
    
    series.slices.template.setAll({
      templateField: "nodeSettings"
    });
    
    series.labels.template.setAll({
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      baseRadius: am5.p100,
      centerX: am5.p100,
      textAlign: "start"
    });
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    var data = [{
      name: "DATA",
      nodeSettings: { fill: am5.color(0xaaaaaa) },
      children: [{
        name: "Sweden",
        id: "SE",
        NR: 12,
        nodeSettings: { fill: am5.color(0xff7621) },
        children: [
          //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 12 },
          { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 12},
          { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 51 },
          { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 9},
          { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 4},
          { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 24 }
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Finland",
        id:"FI",
        NR: 11, 
        nodeSettings: { fill: am5.color(0xff8a44) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 11},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 11},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 62},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value:6},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 2},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 19}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Denmark",
        id: "DK",
        NR: 10,
        nodeSettings: { fill: am5.color(0xDF8362) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 10},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 5 },
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 46},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 7},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 2},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 40}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Bulgaria",
        id: "BG",
        NR: 41,
        nodeSettings: { fill: am5.color(0xff9e63) },
      children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 41 },
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 35},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 21},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 18},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 24},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 2}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Hungary",
        id:"HU",
        NR: 48,
        nodeSettings: { fill: am5.color(0xffb181) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 48},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 21},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 43},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 24},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 7},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 5}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Poland",
        id:"PL",
        NR: 38,
        nodeSettings: { fill: am5.color(0xffc49f) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 38 },
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 32 },
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 40},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 11},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value:12 },
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 5 }
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Romania",
        id:"RO",
        NR: 48, 
        nodeSettings: { fill: am5.color(0xff8a44) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 48},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 23},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 43 },
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 11},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 15},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 8}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Slovakia",
        id: "SK",
        NR: 51,
        nodeSettings: { fill: am5.color(0xDF8D61) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 51},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 36},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 19},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 18},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 25},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 2}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Slovenia",
        id:"SI",
        NR: 39,
        nodeSettings: { fill: am5.color(0xDF8D61) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 39},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 32},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 27},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 6},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 32},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 3}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Italy",
        id: "IT",
        NR: 47,
        nodeSettings: { fill: am5.color(0xff995b) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 47},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 36},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 23},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 14},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 25},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 2}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Greece",
        id: "GR",
        NR: 44,
        nodeSettings: { fill: am5.color(0xff7621) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 44},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 26},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 41},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 11},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 16},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 6}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Portugal",
        id: "PT",
        NR: 38,
        nodeSettings: { fill: am5.color(0xffbb90) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 38},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 31},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 31},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 23},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 13},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 2}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }
      }, {
        name: "Spain",
        id: "ES",
        NR: 42,
        nodeSettings: { fill: am5.color(0xffb181) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 42},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 38},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 27},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 14},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 18},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 3}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) },
      
      }, {
        name: "Austria",
        id: "AT",
        NR: 25,
        nodeSettings: { fill: am5.color(0xff9e63) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 25},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 13},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 59},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 7},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 3},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 18}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }, 
    
      }, {
        name: "France",
        id: "FR",
        NR: 31,
        nodeSettings: { fill: am5.color(0xEB8258) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 31},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 29},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 49},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 7},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 10},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 5}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) }, 
    
      }, {
        name: "Germany",
        id: "DE",
        NR: 19,
        nodeSettings: { fill: am5.color(0xFF8B33) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 19},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 13},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 54},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 14},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 4},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 15}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) },
      
      }, {
        name: "Netherlands",
        id: "NL",
        NR: 17,
        nodeSettings: { fill: am5.color(0xDF8D61) },
        children: [
        //{ name: "NR", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 17},
        { name: "FBAD", nodeSettings: { fill: am5.color(0x4A605F) }, value: 9},
        { name: "FGOOD", nodeSettings: { fill: am5.color(0x4C908D) }, value: 56},
        { name: "UNK", nodeSettings: { fill: am5.color(0x668886) }, value: 16},
        { name: "VBAD", nodeSettings: { fill: am5.color(0x2A3837) }, value: 3},
        { name: "VGOOD", nodeSettings: { fill: am5.color(0x73BBB8) }, value: 16}
        ]
      }, {
        //value: 0.1, 
        nodeSettings: { fill: am5.color(0xffffff) },
        
    
      }]
    }];
    
    series.data.setAll(data);
    series.set("selectedDataItem", series.dataItems[0]);
    
    // Make stuff animate on load
    series.appear(1000, 100);
    
    }); // end am5.ready()
function openTab(year, viz) {
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent-viz-"+viz).addClass("hidden");
    //show the one with the id passed in as year
    $("#tabcontent-viz-"+viz+"-"+year).removeClass("hidden");
  } 
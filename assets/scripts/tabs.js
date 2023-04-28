function openyear(year, viz) {
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent-viz-"+viz).addClass("hidden");
    $("#tabcontent-viz-"+viz+"-"+year).removeClass("hidden");
  } 
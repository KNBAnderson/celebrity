$(function() {
  $("form").submit(function(event) {
    var gender = $("#gender").val();
    var age = $("#age").val();
    if (gender === "female" && age === "80s") {
      $(".musician:not(#madonna)").hide();
      $("#madonna").show();
    } else if (gender === "male" && age ==="80s") {
      $(".musician:not(#mercury)").hide();
      $("#mercury").show();
    } else if (gender === "both" && age ==="80s") {
      $(".musician:not(#mercury,#madonna)").hide();
      $("#mercury,#madonna").show();
    } else if (gender === "female" && age === "90s") {
      $(".musician:not(#spice)").hide();
      $("#spice").show();
    } else if (gender === "male" && age ==="90s") {
      $(".musician:not(#backstreet)").hide();
      $("#backstreet").show();
    } else if (gender === "both" && age ==="90s") {
      $(".musician:not(#backstreet,#spice)").hide();
      $("#backstreet,#spice").show();
    } else if (gender === "female" && age === "00s") {
      $(".musician:not(#beyonce)").hide();
      $("#beyonce").show();
    } else if (gender === "male" && age ==="00s") {
      $(".musician:not(#lovasi)").hide();
      $("#lovasi").show();
    } else if (gender === "both" && age ==="00s") {
      $(".musician:not(#beyonce,#lovasi)").hide();
      $("#beyonce,#lovasi").show();
    } else if (gender === "male" && age ==="everything") {
      $(".musician:not(.male)").hide();
      $(".male").show();
    }else if (gender === "female" && age ==="everything") {
      $(".musician:not(.female)").hide();
      $(".female").show();
    }else if (gender === "both" && age ==="everything") {
      $(".musician").hide();
      $(".musician").show();
    }
    $('.musicians').show();
    event.preventDefault();
  });
});

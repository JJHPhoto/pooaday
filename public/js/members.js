$(document).ready(() => {
  // user name display
  $.get("/api/user_data").then((user) => {
    $(".member-name").text(` hello , ${user.name} ! `);
  });
  // datepicker/timepicker setup
  $("#datepicker").datepicker({
    format: "yyyy-mm-dd",
  });
  $("#timepicker").timepicker();

  // pickeddate display
  $("#datepicker").on("change", () => {
    const pickedDate = $("input").val();
    $("#pickedDate").text(` for  ${pickedDate} `);
  });

  /// range slider reading value //// BM style

  // 1.range slider reading for style -BM
  // Read value on page load
  $("#resultStyle b").html($("#styleRange").val());
  // Read value on change
  $("#styleRange").change(() => {
    const styleVal = $("input#styleRange").val();
    console.log(styleVal);

    if (styleVal === "1") {
      $("#resultStyle").html(
        '<p class ="text-muted"> my bowel was liquid </p>'
      );
    } else if (styleVal === "2") {
      $("#resultStyle").html('<p class ="text-muted"> my bowel was soft </p>');
    } else if (styleVal === "3") {
      $("#resultStyle").html(
        '<p class ="text-muted"> my bowel was normal </p>'
      );
    } else if (styleVal === "4") {
      $("#resultStyle").html('<p class ="text-muted"> my bowel was hard </p>');
    } else {
      $("#resultStyle").html('<p class ="text-muted"> my bowel was solid</p>');
    }
  });
  /////////////////////////

  //2. range slider reading for amount -BM

  $("#resultAmount b").html($("#amountRange").val());

  // Read value on change
  $("#amountRange").change(() => {
    const amountVal = $("input#amountRange").val();

    if (amountVal === "1") {
      $("#resultAmount").html('<p class ="text-muted"> little </p>');
    } else if (amountVal === "2") {
      $("#resultAmount").html('<p class ="text-muted"> normal </p>');
    } else {
      $("#resultAmount").html('<p class ="text-muted"> a lot  </p>');
    }
  });

  // 3 speed
  $("#resultSpeed b").html($("#speedRange").val());

  // Read value on change
  $("#speedRange").change(() => {
    const speedVal = $("input#speedRange").val();

    if (speedVal === "1") {
      $("#resultSpeed").html('<p class ="text-muted"> less than 5 mins  </p>');
    } else if (speedVal === "2") {
      $("#resultSpeed").html('<p class ="text-muted"> 5 to 10 mins  </p>');
    } else {
      $("#resultSpeed").html('<p class ="text-muted"> more than 10 mins  </p>');
    }
  });

  //  4.comfort level value
  $("#comfortRating").on("click", () => {
    // display clicked value
    const comfortVal = $(".comfort:checked").val();

    if (comfortVal === "1") {
      $("#resultComfort").html(
        '<p class ="text-muted"> very uncomfortable </p>'
      );
    } else if (comfortVal === "2") {
      $("#resultComfort").html('<p class ="text-muted"> uncomfortable </p>');
    } else if (comfortVal === "3") {
      $("#resultComfort").html('<p class ="text-muted"> it\'s okay </p>');
    } else if (comfortVal === "4") {
      $("#resultComfort").html('<p class ="text-muted"> nice</p>');
    } else {
      $("#resultComfort").html('<p class ="text-muted"> great! </p>');
    }

    // $("#resultComfort").html($("input:checked").val() + " is checked");
  });

  ///////////////////
  $("#moodRating").on("click", () => {
    // display clicked value
    $("#resultMood").html($("input:checked").val() + " is checked");
  });
});

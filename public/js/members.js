$(document).ready(() => {
  // date picker
  // $(".datepicker").datepicker({
  // 	clearBtn: true,
  // 	format: "mm-dd-yyyy",
  // });
  $("#datepicker").datepicker({
    format: "yyyy-mm-dd",
  });
  $("#timepicker").timepicker();

  let pickedDate;

  // picked date from date picker
  $("#datepicker").on("change", function () {
    pickedDate = $("input").val();

    $("#pickedDate").text(pickedDate);
  });

  // user name display
  $.get("/api/user_data").then((user) => {
    $(".member-name").text(`${user.name} ! `);
  });

  // display today's date
  let today = new Date();
  const date = today.toDateString();
  $("#date-display").text(date);
  console.log(date);
  // (fri jan 22 2021 format)

  /// range slider reading value //// BM style

  // 1.range slider reading for style -BM
  // Read value on page load
  $("#resultStyle b").html($("#styleRange").val());
  // Read value on change
  $("#styleRange").change(function () {
    $("#resultStyle b").html($(this).val());
  });
  /////////////////////////
  //2. range slider reading for amount -BM

  $("#resultAmount b").html($("#amountRange").val());

  // Read value on change
  $("#amountRange").change(function () {
    $("#resultAmount b").html($(this).val());
  });
  // 3 speed
  $("#resultSpeed b").html($("#speedRange").val());

  // Read value on change
  $("#speedRange").change(function () {
    $("#resultSpeed b").html($(this).val());
  });

  //  4.comfort level value
  $("#comfortRating").on("click", function () {
    // display clicked value
    $("#resultComfort").html($("input:checked").val() + " is checked");
  });

  ///////////////////
  $("#moodRating").on("click", function () {
    // display clicked value
    $("#resultMood").html($("input:checked").val() + " is checked");
  });
});

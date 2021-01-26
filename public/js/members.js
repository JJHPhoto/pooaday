$(document).ready(() => {
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(`${data.name} ! `);
  });

  const today = new Date();
  const date = today.toDateString();
  $("#date-display").text(date);
  console.log(date);
});

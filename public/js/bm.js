$(document).ready(() => {
  let today = new Date();
  const date = today.toDateString();

  $("#date-display").text(date);

  function convertDate() {
    today = new Date();
    let sYear = today.getFullYear();
    let sMonth = today.getMonth() + 1;
    let sDate = today.getDate();
    sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
    sDate = sDate > 9 ? sDate : "0" + sDate;
    return sYear + "-" + sMonth + "-" + sDate;
  }

  const convertedDate = convertDate(today);
  console.log(convertDate(today), "today");
  //////////////////
  const bmStyle = ["liquid", "soft", "normal", "hard", "solid"];
  const bmAmount = ["little", "normal", "a lot"];
  const bmSpeed = ["less than 5 mins", "5 - 10 mins", "more than 10 mins"];
  const bmComfort = [
    "very uncomfortable",
    "comfortable",
    "it's okay",
    "nice",
    "great",
  ];

  $("#BM-modal-btn").on("click", (event) => {
    event.preventDefault();
    const pickedDate = $("#datepicker").val();
    console.log(convertedDate, "convertDate");
    let date;
    if (!pickedDate) {
      date = convertedDate;
    } else {
      date = pickedDate;
    }

    if (!date) {
      return false;
    }
    const time = $("#timepicker").val();
    const style = $("#styleRange").val();
    const styleIndex = parseInt(style) - 1;

    const amount = $("#amountRange").val();
    const amountIndex = parseInt(amount) - 1;

    const speed = $("#speedRange").val();
    const speedIndex = parseInt(speed) - 1;
    const comfort = $(".comfort:checked").val();
    const comfortIndex = parseInt(comfort) - 1;
    console.log(comfort);
    $.ajax({
      method: "POST",
      url: "/api/bm",
      data: {
        date: date,
        time: time,
        style: bmStyle[styleIndex],
        amount: bmAmount[amountIndex],
        speed: bmSpeed[speedIndex],
        comfort: bmComfort[comfortIndex],
      },
    }).then((res) => {
      console.log(res, "res");
      //this showing nothing...
      location.reload();
    });
  });
  // //////////////

  const url = window.location.search;
  let UserId;
  if (url.indexOf("?User_id=") !== -1) {
    UserId = url.split("=")[1];
    getPosts(UserId);
  } else {
    getPosts();
  }
  // this gets all posts from database....
  function getPosts(user) {
    UserId = user || "";
    if (UserId) {
      UserId = "/?User_id=" + UserId;
    }
    $.get("/api/bm" + UserId, function (data) {
      console.log("BMs", data);
      // showing correct data
      bms = data;
      console.log(bms[1].date);
      // showing correct data
    });
  }

  //////////////////////////
  $("#BM-edit-btn").on("click", (event) => {
    const date = $("#datepicker").val();
    const time = $("#timepicker").val();
    const style = $("#styleRange").val();
    const amount = $("#amountRange").val();
    const speed = $("#speedRange").val();
    const comfort = $(".comfort:checked").val();

    const bm = { date, time, style, amount, speed, comfort };
    $.ajax({
      method: "PUT",
      url: "/api/bm",
      data: bm,
    }).then((res) => {
      return res.json(bm);
    });
  });
});

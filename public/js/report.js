// const convertedDate = convertDate(today);


$("#addReport").on("click", () =>{



    // const pickedDate = $("#datepicker").val();
	// 	console.log(convertedDate, "convertDate");
	// 	let date;
	// 	if (!pickedDate) {
	// 		date = convertedDate;
	// 	} else {
	// 		date = pickedDate;
	// 	}

	// 	if (!date) {
	// 		return false;
	// 	}
  const mood = $(".mood:checked").val();
  const water = $(".water:checked").val();
  const food = $(".food:checked").val();
  const activity = $("#activityRange").val();
  const sleep = $("#sleepRange").val();

  $.ajax({
      method: "POST",
      url: "/api/members",
      data: {
          mood: mood,
          water: water,
          food: food,
          activity: activity,
          sleep: sleep,
          

      },
  }).then((res) => {
    console.log(res, "res");
    //this showing nothing...
    location.reload();
});
})
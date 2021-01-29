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
	// console.log(convertDate(today), "today");

	$("#BM-add-btn").on("click", () => {
		const pickedDate = $("#datepicker").val();
		// console.log(convertedDate, "convertDate");
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

		const amount = $("#amountRange").val();
		const speed = $("#speedRange").val();
		const comfort = $(".comfort:checked").val();
		// console.log(comfort);
		$.ajax({
			method: "POST",
			url: "/api/bm",
			data: {
				date: date,
				time: time,
				style: style,
				amount: amount,
				speed: speed,
				comfort: comfort,
			},
		}).then((res) => {
			console.log(res);
		});
	});

	$("#BM-edit-btn").on("click", (event) => {
    event.preventDefault();
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
      res.render(bm);
		});
	});
});

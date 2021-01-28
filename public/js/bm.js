$("#BM-add-btn").on("click", () => {
    const date = $("#datepicker").val();
     if(!date){
         return false;
     }
     const time = $("#timepicker").val();
     const style = $("#styleRange").val();
     
     const amount = $("#amountRange").val();
     const speed = $("#speedRange").val();
     const comfort = $(".comfort:checked").val();
     console.log(comfort);
  $.ajax({
    method: "POST",
    url: "/api/bm",
    data: {
      date: date,
      time: time,
      type: style,
      amount: amount,
      speed: speed,
      comfort: comfort,
    },
  }).then((res)=>{
    console.log(res);
  })
});

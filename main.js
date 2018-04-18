$(function() {


  $('.button').click(function() {
    var country = $('#nazione').val()
    var year = $('#anno').val()
    var month = $('#mese').val()
    $.ajax({
      url:"https://holidayapi.com/v1/holidays",
      method:"GET",
      data:{
        key:'54a6fac8-a41c-4f07-9392-cac57a3b19e9',
        country: country,
        year: year,
        month: month,
      },
      success:function(data) {
        var vacanze = data
        console.log(vacanze)
        var holidays = []
        holidays.push(vacanze)
        console.log(holidays)

      },
    })
  })
})

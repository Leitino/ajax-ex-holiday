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

        $('.vacanze').html('')
        for (var i = 0; i < data.holidays.length; i++) {
          var dateOfHoliday = moment(data.holidays[i].date)
          var dateOfYear =dateOfHoliday.dayOfYear();
          var dayOfWeek = dateOfHoliday.format('dddd');

          var now = moment();
          var diffInDays = now.diff(dateOfHoliday, 'minutes')
          console.log(diffInDays)

          $('.vacanze').append('<div class="risultati">'+data.holidays[i].name + ' nel giorno ' +data.holidays[i].date)
          $('.vacanze').append(data.holidays[i]['date'])
          $('.vacanze').append('giorno dell anno ' + dateOfYear )
          $('.vacanze').append('giorno della settimana '+ dayOfWeek)
        }

      },
    })
  })
})

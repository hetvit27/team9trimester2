<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <input type="number" id="yearInput"></input>
    <button onclick="firstDayOfYear(document.getElementById('yearInput').value)">Send</button>
    <div id="year"></div>
    <div id="day"></div>
    <script>
        firstDayOfYear(2018)
        function firstDayOfYear(year){
            fetch("/api/calendar/firstDayOfYear/"+year, {"method": "GET"})
            // response is a RESTful "promise" on any successful fetch
            .then(response => {
            // check for response errors
            if (response.status !== 200) {
                error("GET API response failure: " + response.status)
                return;  // api failure
            }
            // valid response will have JSON data
            response.json().then(data => {
                console.log(data);
                document.getElementById("year").innerText = data.year;
                var dayOfWeek = "Sunday";
                if (data.firstDayOfYear == 1) {
                dayOfWeek = "Monday"
                }
                if (data.firstDayOfYear == 2) {
                dayOfWeek = "Tuesday"
                }
                if (data.firstDayOfYear == 3) {
                dayOfWeek = "Wednesday"
                }
                if (data.firstDayOfYear == 4) {
                dayOfWeek = "Thursday"
                }
                if (data.firstDayOfYear == 5) {
                dayOfWeek = "Friday"
                }
                if (data.firstDayOfYear == 6) {
                dayOfWeek = "Saturday"
                }
                document.getElementById("day").innerText = "The first day of " + data.year + " is a " + dayOfWeek;
            })
            })
            // catch fetch errors (ie Nginx ACCESS to server blocked)
            .catch(err => {
            error(err + " " );
            });
        }
    </script>
  </body>
</html>
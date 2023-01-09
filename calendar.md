<<<<<<< HEAD
<h1>Calendar</h1>

<button onclick="isLeapYear()">Leap Year</button>
<button onclick="firstDayOfYear()">First Day of Year</button>

<p>Is Leap Year??</p>
<p id="answer"></p>

<p>First Day of the Year?</p>
<p id="answer2"></p>



<script>
  
  function isLeapYear() {
    let yearInput = prompt("Year?");

    const urlStart = "https://hetvitrivedi.tk/api/calendar/";
      let url = urlStart + "isLeapYear/" + yearInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer").innerHTML = data.result; 
      
      })
      
  }

  function firstDayOfYear() {
    let yearFirst = prompt("Year?");

    const urlStart = "https://hetvitrivedi.tk/api/calendar/";
      let url = urlStart + "firstDayOfYear/" + yearFirst;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer2").innerHTML = data.result; 
      
      })
      
  }
</script>

<style> 
button {
	width: 100px;
	height: 35px;
	font-size: 16px;
	background-color: #333;
	color: #fff;
	border: none;
	cursor: pointer;
}

p {
  font-size: 18px;
}
</style>
=======
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
>>>>>>> 736044bab75b70c8381482aad5d5c4461d4e5df9

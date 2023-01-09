<button onclick="isLeapYear()">Leap Year</button>
<button onclick="firstDayOfYear()">First Day of the Year</button>

<p>The result is:</p>
<p id="answer1"></p>

<p>The result is:</p>
<p id="answer2"></p>




<script>
  
  function isLeapYear() {
    let year = prompt("Year?");

    const urlStart = "https://hetvitrivedi.tk/api/calendar/";
    const url = urlStart + isLeapYear/ + year;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer1").innerHTML = data.result; 
      
      })
      
  }

  function firstDayOfYear() {
    let year = prompt("Year?");

    const urlStart = "https://hetvitrivedi.tk/api/calendar/";
    const url = urlStart + firstDayOfYear/ + year;

    console.log(url); 

    fetch(url)

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
            // catch fetch errors (ie Nginx ACCESS to server blocked)
            .catch(err => {
            error(err + " " );
            });
      
  }
</script>

<style> 
button {
	width: 120px;
	height: 45px;
	font-size: 25px;
	background-color: #ACA1E6;
	color: #fff;
	border: none;
	cursor: pointer;
}

p {
  font-size: 25px;
}
</style>
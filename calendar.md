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
<button onclick="isLeapYear()">Leap Year</button>

<p>The result is:</p>
<p id="answer"></p>




<script>
  
  function isLeapYear() {
    let year = prompt("Year?");

    const urlStart = "https://hetvitrivedi.tk/api/calendar/";
    const url = urlStart + year;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer").innerHTML = data.result; 
      
      })
      
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
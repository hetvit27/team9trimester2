<button onclick="calculator()">Calculate Now!</button>

<p> Your result is:</p>
<p id="answer"></p>




<script>
  
  function calculator() {
    let expression = prompt("What problem would you like to solve?");
    const urlStart = "https://hetvitrivedi.tk/api/calculator/";
    const url = urlStart + expression;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer").innerHTML = data.result; 
      
      })
      
  }
function getNumbers(){
    let inputNumbers = document.getElementById("inputNumbers").value;
    return inputNumbers;
}

function Calculator(solve) {
    
    result = document.getElementById("CalculatorResult");

    // Fetch data from API
    fetch('https://hetvitrivedi.tk/api/calculator/' + solve)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result.innerHTML = "The answer to " + solve + " is " + data.Calculator;

    })
}


</script>

### Equation Solver
<input id="inputNumbers" placeholder="Input your equation">
<button onclick="Calculator(getNumbers())">Submit</button>
<p id="CalculatorResult"></p>

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
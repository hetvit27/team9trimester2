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
function getEquation(){
    let inputEquation = document.getElementById("inputEquation").value;
    return inputEquation;
}

function Calculator1(equationparam) {
    
    result = document.getElementById("EquationResult");

    // Fetch data from API
    fetch('https://hetvitrivedi.tk/api/calculator/' + equationparam)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        result.innerHTML = "The answer to " + equationparam + " is: " + dataCalculator1;

    })
}

</script>

### Enter your Equation!
<input id="inputEquation" placeholder="Input an Equation!">
<button onclick="Calculator1(getEquation())">Submit</button>
<p id="EquationResult"></p>

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
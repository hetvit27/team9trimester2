#### This is the frontend for FRQ 3. In FRQ 3, we used Array/ArrayList to compute mathematical expressions. If you click the button below, we will be able to solve your equation. We can perform addition, multiplication, division, powers, and square root functions. Try it out!



<button onclick="calculator()">Calculate Now!</button>

<p> The answer to your equation is 
<p id = "answer"> </p>



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
</script>


<style> 
button {
	width: 120px;
	height: 40px;
	font-size: 15px;
	background-color: #43B4E5;
	color: #fff;
	border: none;
	cursor: pointer;
}

p {
  font-size: 20px;
  color: #FCFCFC;
}
</style>

<script>

function calculate(){
    var expression = document.getElementById("expression").value;

    var str_url_expression = "https://hetvitrivedi.tk/api/calculator/" + expression;
    console.log(str_url_expression)

    fetch(str_url_expression)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
    if (response.status !== 200) {
        error('GET API/Fetch Response Failure: ' + response.status);
        return;
    }
    
    // valid response will have JSON data
    response.json().then(data => {
        console.log(data);
        console.log(data.result);
        document.getElementById("calculated_result").innerHTML = "Result: " + data.result;
    })
})

}

</script>

<br>
<h2>Calculate: </h2>
<label for="expression">Enter Expression: </label>
<input type="text" id="expression" name="expression" >
<br>
<button onclick="calculate()">Calculate Now!</button> 
<br>
<h3 id="calculated_result">Result: </h3>
<br>
<br>

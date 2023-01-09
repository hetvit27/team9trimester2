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
</script>

<style> 
button {
	width: 150pc;
	height: 50px;
	font-size: 20px;
	background-color: #43B4E5;
	color: #fff;
	border: none;
	cursor: pointer;
}

p {
  font-size: 20px;
}
</style>
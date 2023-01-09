#### This is the frontend for FRQ 3. In FRQ 3, we used Array/ArrayList to compute mathematical expressions. If you click the button below, we will be able to solve your equation. We can perform addition, multiplication, division, powers, and square root functions. Try it out!



<button onclick="calculator()">Calculate Now!</button>

<p> The answer to your equation is id="answer"> </p>




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
  color: #010000;
}
</style>
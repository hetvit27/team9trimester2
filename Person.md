#### This is the frontend for FRQ 2.



<button onclick="calculator()">Enter data</button>

Person: <p id="answer"> </p>




<script>
  
  function calculator() {
    let personId = prompt("Enter a person id");
    const urlStart = "https://hetvitrivedi.tk/api/person/";
    const url = urlStart + personId;

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
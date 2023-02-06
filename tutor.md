<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Tutor

<h3>Find a Tutor Today!</h3>


<!-- Create inputs for search and question -->
<br>
<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>location</option>
</select>
<br>
<br>
<br>
<!-- Create table to display question posts -->
<tr>
<table id="tutorTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Age</th>
				<th>Experience</th>
				<th>Location</th>
		</tr>
</table>

<script>
  tutors();
  function tutors() {
    const url = "https://hetvitrivedi.tk/api/tutors/";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(JSON.stringify(data));

		for (let i = 0; i < data.length; i++) {
			let tableRow = document.createElement("tr");
			let idCell = document.createElement("td");
			idCell.innerText = i; // other fields are data[i].problem, etc.
			tableRow.appendChild(idCell);
			let problemCell = document.createElement("td");
			problemCell.innerText = data[i].problem;
			tableRow.appendChild(problemCell);
			let unitCell = document.createElement("td");
			unitCell.innerText = data[i].unit;
			tableRow.appendChild(unitCell);
			let topicCell = document.createElement("td");
			topicCell.innerText = data[i].topic;
			tableRow.appendChild(topicCell);
			let tagsCell = document.createElement("td");
			tagsCell.innerText = data[i].tags;
			tableRow.appendChild(tagsCell);

			document.getElementById("tutorsTable").appendChild(tableRow);
		}

        // document.getElementById("result").innerHTML = JSON.stringify(data);

        // var result = document.getElementById("result");
        // // for (var i = 0; i < data.length; i++) {
        // //   result.appendChild(document.createTextNode(data));
        // // }
        // // document.getElementById("answer").innerHTML = data.name;

        // for (var prop in data) {
        //   if (Object.prototype.hasOwnProperty.call(data, prop)) {
        //     result.appendChild(document.createTextNode(data.prop));
        //   }
        // }
      })
  }

</script>
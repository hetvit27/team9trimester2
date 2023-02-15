<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Practice Problems

<h3>Keep track of practice problems for different units</h3>

Features:
- Create, edit, and delete questions
- Save questions to a personal database
- Filter questions by unit
- View all saved questions in a table
- Search questions

<!-- Create inputs for search and question -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>

<input id="question" placeholder="Question">
<input id="unit" placeholder="Unit">
<input id="topic" placeholder="Topic">
<input id="tags" placeholder="Tags">
<button onclick="addProblem()">Save</button>


<!-- Create table to display question posts -->

<table id="practiceTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Problem</th>
				<th>CB Unit</th>
				<th>CB Topic</th>
				<th>Tags</th>
		</tr>
</table>

<script>
  problems();
  function problems() {
  	const options = {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            };
    const url = "https://hetvitrivedi.tk/api/problems";
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(JSON.stringify(data));

		for (let i = 0; i < data.length; i++) {
			addTableRow(data[i].problem, data[i].unit, data[i].topic, data[i].tags);
		}
      });
  }

  function addProblem() {
	const postOptions = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            };
	var problemData = new URLSearchParams();
	problemData.append(`problem`, document.getElementById("question").value);
	problemData.append(`Unit`, document.getElementById("unit").value);
	problemData.append(`Topic`, document.getElementById("topic").value);
	problemData.append(`Tags`, document.getElementById("tags").value);

	// fetch the API
	fetch("https://hetvitrivedi.tk/api/problems/add", postOptions)
	// response is a RESTful "promise" on any successful fetch
	.then(response => {
	// check for response errors
	if (response.status !== 200) {
		error("PUT API response failure: " + response.status)
		return;  // api failure
	}
	// valid response will have JSON data
	response.json().then(data => {
		console.log(data);
	})
	})
	// catch fetch errors (ie Nginx ACCESS to server blocked)
	.catch(err => {
	console.log(err + " ");
	});
  }

  function search() {
  	const options = {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            };
	var searchData = new URLSearchParams();
	searchData.append(`term`, document.getElementById("search").value);

	// fetch the API
	fetch("https://hetvitrivedi.tk/api/problems/search", options)
	// response is a RESTful "promise" on any successful fetch
	.then(response => {
	// check for response errors
	if (response.status !== 200) {
		error("PUT API response failure: " + response.status)
		return;  // api failure
	}
	// valid response will have JSON data
	response.json().then(data => {
		console.log(data);
	})
	})
	// catch fetch errors (ie Nginx ACCESS to server blocked)
	.catch(err => {
	console.log(err + " ");
	});
  }

  function addTableRow(question, unit, topic, tags) {
	let tableRow = document.createElement("tr");
	let idCell = document.createElement("td");
	idCell.innerText = i; // other fields are data[i].problem, etc.
	tableRow.appendChild(idCell);
	let problemCell = document.createElement("td");
	problemCell.innerText = question;
	tableRow.appendChild(problemCell);
	let unitCell = document.createElement("td");
	unitCell.innerText = unit;
	tableRow.appendChild(unitCell);
	let topicCell = document.createElement("td");
	topicCell.innerText = topic;
	tableRow.appendChild(topicCell);
	let tagsCell = document.createElement("td");
	tagsCell.innerText = tags;
	tableRow.appendChild(tagsCell);

	document.getElementById("practiceTable").appendChild(tableRow);
  }

  function removeTableRows() {
	let numRows = document.getElementById("practiceTable").rows.length;
	for (let i = numRows-1; i > 0; i--) {
		document.getElementById("practiceTable").removeChild(document.getElementById("practiceTable").rows[i]);
	}
  }

</script>
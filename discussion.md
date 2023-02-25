<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Question Discussion Board

<h3>Post your questions here and have fellow students answer them</h3>

<!-- Create inputs for search and question -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>unit</option>
	<option>tags</option>
	<option>email</option>
</select>

<input id="question" placeholder="Question">
<input id="unit" placeholder="Unit">
<input id="tags" placeholder="Tags">
<input id="email" placeholder="Email">
<button onclick="addDisc()">Post</button>
<input type = "checkbox"> anonymous post


<!-- Create table to display question posts -->
<table id="discussionTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Question</th>
				<th>Unit</th>
				<th>Tags</th>
				<th>Email</th>
		</tr>
</table>

<script>
  Discussion();
  function Discussion() {
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
    const url = "https://hetvitrivedi.tk/api/discussions/";
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(JSON.stringify(data));

		for (let i = 0; i < data.length; i++) {
			addTableRow(data[i].question, data[i].unit, data[i].tags, data[i].email);
		}
      });
  }

  function addDisc() {
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
	// var problemData = new URLSearchParams();
	// problemData.append(`problem`, document.getElementById("question").value);
	// problemData.append(`Unit`, document.getElementById("unit").value);
	// problemData.append(`Topic`, document.getElementById("topic").value);
	// problemData.append(`Tags`, document.getElementById("tags").value);
	var url = "https://hetvitrivedi.tk/api/discussions/add";
	url += "?question=" + document.getElementById("question").value;
	url += "&Unit=" + document.getElementById("Unit").value;
	url += "&Tags=" + document.getElementById("Tags").value;
	url += "&Email=" + document.getElementById("Email").value;
	// fetch the API
	fetch(url, postOptions)
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
  function addTableRow(question, unit, tags, email) {
	let tableRow = document.createElement("tr");
	let idCell = document.createElement("td");
	tableRow.appendChild(idCell);
	let questionCell = document.createElement("td");
	questionCell.innerText = question;
	tableRow.appendChild(questionCell);
	let unitCell = document.createElement("td");
	unitCell.innerText = unit;
	tableRow.appendChild(unitCell);
	let tagsCell = document.createElement("td");
	tagsCell.innerText = tags;
	tableRow.appendChild(tagsCell);
	let emailCell = document.createElement("td");
	emailCell.innerText = email;
	tableRow.appendChild(emailCell);

	document.getElementById("discussionTable").appendChild(tableRow);
  }

  function removeTableRows() {
	let numRows = document.getElementById("discussionTable").rows.length;
	for (let i = numRows-1; i > 0; i--) {
		document.getElementById("discussionTable").removeChild(document.getElementById("discussionTable").rows[i]);
	}
  }

</script>
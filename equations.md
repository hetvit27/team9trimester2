<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Equations

<h3>Your saved physics equations</h3>

<!-- Features:
- Create, edit, and delete equations
- Save equations to a database
- View equations in a table
- Add tags for CB unit and topic
- Search equations
- Filter by tags -->

<!-- Create inputs for search and filter -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>Test tag</option>
</select>

<!-- Create inputs for CRUD -->

<input id="equation" placeholder="Enter equation">
<!-- <input id="cbunit" placeholder="CB Unit">
<input id="cbtopic" placeholder="CB Topic"> -->
<!-- <input id="tags" placeholder="Tags"> -->
<button onclick="createEquation()">Create</button>

<input id="deleteid" placeholder="Equation ID">
<button onclick="deleteEquation()">Delete</button>

<input id="updateid" placeholder="Equation ID">
<input id="updateequation" placeholder="Enter equation">
<!-- <input id="updatecbunit" placeholder="CB Unit">
<input id="updatecbtopic" placeholder="CB Topic">
<input id="updatetags" placeholder="Tags"> -->
<button onclick="">Update</button>

<!-- Create table to display equations -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Equation</th>
				<!-- <th>CB Unit</th> -->
				<!-- <th>CB Topic</th> -->
				<!-- <th>Tags</th> -->
		</tr>
		<tr>
				<!-- <td>0</td> -->
				<!-- <td>F=ma</td> -->
				<!-- <td>1</td> -->
				<!-- <td>1.1 Newton's Laws</td> -->
				<!-- <td>physics, newton's laws, force, mass, acceleration</td> -->
		</tr>
</table>

<!-- Create script to handle CRUD -->

<script>
	// fetch from database
	const resultContainer = document.getElementById("equationsTable");

	const equation_url = "https://hetvitrivedi.tk/api/equation";
	const person_url = "https://hetvitrivedi.tk/api/person";
	
	// TODO: get person id from person database
	const person_id = 36; // tester for now

	const get_url = equation_url + "/" + person_id;

	// prepare fetch GET options
	const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const post_options = {...options, method: 'POST'}; // clones and replaces method

	// fetch equations
	fetch(get_url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
        error('GET API response failure: ' + response.status);
        return;
      }
      // valid response will have JSON data
      response.json().then(data => {
        console.log(data);
				// TODO: display data in table
				// add 'text' to equation table
				for (let i = 0; i < data.length; i++) {
					let row = resultContainer.insertRow(i+1);
					let id = row.insertCell(0);
					let equation = row.insertCell(1);
					// let cbunit = row.insertCell(2);
					// let cbtopic = row.insertCell(3);
					// let tags = row.insertCell(4);
					id.innerHTML = data[i].id;
					equation.innerHTML = data[i].text;
					// cbunit.innerHTML = data[i].cbunit;
					// cbtopic.innerHTML = data[i].cbtopic;
					// tags.innerHTML = data[i].tags;
				}
			});
		})
		// catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
  	error(err + " " + get_url);
		console.log(err);
  });

	/* Delete equation */
	function deleteEquation() {

		const id = document.getElementById("deleteid").value;
		const delete_url = equation_url + "/delete/" + person_id;

		fetch(delete_url + "/" + id, post_options)
			.then(response => {
				if (response.status !== 200) {
					error('DELETE API response failure: ' + response.status);
					return;
				}
				response.json().then(data => {
					console.log(data);
					// update table by removing row with id
					for (let i = 0; i < resultContainer.rows.length; i++) {
						if (resultContainer.rows[i].cells[0].innerHTML == id) {
							resultContainer.deleteRow(i);
							break;
						}
					}
				});
			})
			.catch(err => {
				error(err + " " + delete_url);
				console.log(err);
			});
	}

	/* Create equation */
	function createEquation() {

		const equation = document.getElementById("equation").value;
		// encode URI to handle special characters
		const equation_encoded = encodeURIComponent(equation);
		const create_url = equation_url + "/create?person_id=" + person_id + "&text=" + equation_encoded;

		// This one is a RequestParam in backend
		
		fetch(create_url, post_options)
			.then(response => {
				if (response.status !== 200) {
					error('CREATE API response failure: ' + response.status);
					return;
				}
				response.json().then(data => {
					console.log(data);
					// update table by adding row with id
					let row = resultContainer.insertRow(resultContainer.rows.length);
					let id = row.insertCell(0);
					let equation = row.insertCell(1);
					// let cbunit = row.insertCell(2);
					// let cbtopic = row.insertCell(3);
					// let tags = row.insertCell(4);
					id.innerHTML = data.id;
					equation.innerHTML = data.text;
					// cbunit.innerHTML = data.cbunit;
					// cbtopic.innerHTML = data.cbtopic;
					// tags.innerHTML = data.tags;
				});
			})

		// clear input fields
		document.getElementById("equation").value = "";
	}

</script>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Equations

<h3>Your saved physics equations</h3>

Features:
- Create, edit, and delete equations
- Save equations to a database
- View equations in a table
- Add tags for CB unit and topic
- Search equations
- Filter by tags

<!-- Create inputs for search and filter -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>Test tag</option>
</select>

<!-- Create table to display equations -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Equation</th>
				<th>CB Unit</th>
				<th>CB Topic</th>
				<th>Tags</th>
		</tr>
		<tr>
				<td>0</td>
				<td>F=ma</td>
				<td>1</td>
				<td>1.1 Newton's Laws</td>
				<td>physics, newton's laws, force, mass, acceleration</td>
		</tr>
</table>

<!-- Create inputs for CRUD -->

<input id="equation" placeholder="Enter equation">
<input id="cbunit" placeholder="CB Unit">
<input id="cbtopic" placeholder="CB Topic">
<input id="tags" placeholder="Tags">
<button onclick="">Create</button>

<input id="deleteid" placeholder="Equation ID">
<button onclick="">Delete</button>

<input id="updateid" placeholder="Equation ID">
<input id="updateequation" placeholder="Enter equation">
<input id="updatecbunit" placeholder="CB Unit">
<input id="updatecbtopic" placeholder="CB Topic">
<input id="updatetags" placeholder="Tags">
<button onclick="">Update</button>

<!-- Create script to handle CRUD -->

<script>
	// Create
	function create() {
		// Get inputs
		var equation = document.getElementById("equation").value;
		var cbunit = document.getElementById("cbunit").value;
		var cbtopic = document.getElementById("cbtopic").value;
		var tags = document.getElementById("tags").value;
		// Create JSON object
		var data = {
			"equation": equation,
			"cbunit": cbunit,
			"cbtopic": cbtopic,
			"tags": tags
		};
		// Send POST request
		fetch("/equations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		// Check for response errors
		.then(response => {
			if (response.status !== 200) {
				error("POST API response failure: " + response.status);
				return;  // api failure
			}
			// Valid response will have JSON data
			response.json().then(data => {
				console.log(data);
				// Clear previous results
				document.getElementById("result").innerHTML = "";
				// Display results
				var result = document.createElement("p");
				result.innerHTML = "Equation created: " + data.equation;
				document.getElementById("result").appendChild(result);
			})
			// Catch fetch errors
			.catch(err => {
				error(err + " " );
			});
		});
	}
	// Read
	function read() {
		// Send GET request
		fetch("/equations")
		// Check for response errors
		.then(response => {
			if (response.status !== 200) {
				error("GET API response failure: " + response.status);
				return;  // api failure
			}
			// Valid response will have JSON data
			response.json().then(data => {
				console.log(data);
				// Clear previous results
				document.getElementById("result").innerHTML = "";
				// Display results
				var result = document.createElement("p");
				result.innerHTML = "Equations: " + data.equations;
				document.getElementById("result").appendChild(result);
			})
			// Catch fetch errors
			.catch(err => {
				error(err + " " );
			});
		});
	}
	// Update
	function update() {
		// Get inputs
		var id = document.getElementById("updateid").value;
		var equation = document.getElementById("updateequation").value;
		var cbunit = document.getElementById("updatecbunit").value;
		var cbtopic = document.getElementById("updatecbtopic").value;
		var tags = document.getElementById("updatetags").value;
		// Create JSON object
		var data = {
			"equation": equation,
			"cbunit": cbunit,
			"cbtopic": cbtopic,
			"tags": tags
		};
		// Send PUT request
		fetch("/equations/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		// Check for response errors
		.then(response => {
			if (response.status !== 200) {
				error("PUT API response failure: " + response.status);
				return;  // api failure
			}
			// Valid response will have JSON data
			response.json().then(data => {
				console.log(data);
				// Clear previous results
				document.getElementById("result").innerHTML = "";
				// Display results
				var result = document.createElement("p");
				result.innerHTML = "Equation updated: " + data.equation;
				document.getElementById("result").appendChild(result);
			})
			// Catch fetch errors
			.catch(err => {
				error(err + " " );
			});
		});
	}
	// Delete
	function delete() {
		// Get inputs
		var id = document.getElementById("deleteid").value;
		// Send DELETE request
		fetch("/equations/" + id, {
			method: "DELETE"
		})
		// Check for response errors
		.then(response => {
			if (response.status !== 200) {
				error("DELETE API response failure: " + response.status);
				return;  // api failure
			}
			// Valid response will have JSON data
			response.json().then(data => {
				console.log(data);
				// Clear previous results
				document.getElementById("result").innerHTML = "";
				// Display results
				var result = document.createElement("p");
				result.innerHTML = "Equation deleted: " + data.equation;
				document.getElementById("result").appendChild(result);
			})
			// Catch fetch errors
			.catch(err => {
				error(err + " " );
			});
		});
	}
	// Error
	function error(message) {
		console.log(message);
		// Clear previous results
		document.getElementById("result").innerHTML = "";
		// Display results
		var result = document.createElement("p");
		result.innerHTML = "Error: " + message;
		document.getElementById("result").appendChild(result);
	}

	// Search button
	function search() {
		console.log("searching");
		var $rows = $('#equations tr');
		$search = $('#search').val().toLowerCase();
		console.log($search);
		$rows.hide();
		$rows.filter(function() {
			return $(this).text().toLowerCase().indexOf($search) !== -1;
		}).show();
	}
</script>
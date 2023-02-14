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

<!-- Create script to handle CRUD -->

<script>
	// fetch from database
	const resultContainer = document.getElementById("equationsTable");

	const equation_url = "https://hetvitrivedi.tk/api/equation";
	const person_url = "https://hetvitrivedi.tk/api/person";
	
	// TODO: get person id from person database
	const person_id = 22; // tester for now

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
			});
		})
		// catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
  	error(err + " " + get_url);
		console.log(err);
  });

</script>
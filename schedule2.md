<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Schedule Test

<h3>Your classmates</h3>

<!-- Features:
- Create, edit, and delete equations
- Save equations to a database
- View equations in a table
- Add tags for CB unit and topic
- Search equations
- Filter by tags -->

<!-- Create inputs for search and filter -->

<!-- Create inputs for CRUD -->

<input id="classname" placeholder="Enter classname">
<input id="period" placeholder="Enter Period Number">
<!-- <input id="cbunit" placeholder="CB Unit">
<input id="cbtopic" placeholder="CB Topic"> -->
<!-- <input id="tags" placeholder="Tags"> -->
<button onclick="createClass()">Create</button>

<input id="deleteid" placeholder="Student ID">
<button onclick="deleteClass()">Delete</button>

<!-- Create table to display equations -->

<table id="scheduleTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Class Name</th>
                <th>Period</th>
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
	const resultContainer = document.getElementById("scheduleTable");

	const schedule_url = "https://hetvitrivedi.tk/api/classes";
	const person_url = "https://hetvitrivedi.tk/api/person";
	
	// TODO: get person id from person database
	// if (sessionStorage.getItem("id") == null) {
	const person_id = 36; // tester for now
	// } else {
	// 	const person_id = sessionStorage.getItem("id");
	// }

	const get_url = schedule_url + "/" + person_id;

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
					let classname = row.insertCell(1);
                    let period = row.insertCell(2);
					// let cbunit = row.insertCell(2);
					// let cbtopic = row.insertCell(3);
					// let tags = row.insertCell(4);
					id.innerHTML = data[i].id;
					classname.innerHTML = data[i].classname;
                    period.innerHTML = data[i].period;
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
	function deleteClass() {

		const id = document.getElementById("deleteid").value;
		const delete_url = schedule_url + "/delete/" + person_id;

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
	function createClass() {

		const classname = document.getElementById("classname").value;
		// encode URI to handle special characters
		const classname_encoded = encodeURIComponent(classname);
        const period_encoded = encodeURIComponent(period);
		const create_url = schedule_url + "/add?person_id=" + person_id + "&classname=" + classname_encoded + "&period=" + period_encoded;

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
					let classname = row.insertCell(1);
                    let period = row.insertCell(2);


					// let cbunit = row.insertCell(2);
					// let cbtopic = row.insertCell(3);
					// let tags = row.insertCell(4);
					id.innerHTML = data.id;
					classname.innerHTML = data.classname;
                    period.innerHTML = data.period;
					// cbunit.innerHTML = data.cbunit;
					// cbtopic.innerHTML = data.cbtopic;
					// tags.innerHTML = data.tags;
				});
			})

		// clear input fields
		document.getElementById("classname").value = "";
        document.getElementById("period").value = "";

	}

</script>
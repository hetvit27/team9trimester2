<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Lessons List

<h3>Students and the Lessons they are presenting</h3>

<!-- Create inputs for search and question -->


<input id="name" placeholder="Name">
<input id="Grade" placeholder="Grade">
<input id="Course" placeholder="Course">
<input id="Email" placeholder="Email">
<button onclick="addStudent()">Post</button>


<input id="id" placeholder="ID">
<button onclick="delete()">Delete</button>


<!-- Create table to display question posts -->
<table id="lessonTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Grade</th>
				<th>Course</th>
				<th>Email</th>
		</tr>
</table>

<script>
  Lessons();
  function Lessons() {
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
    const url = "https://hetvitrivedi.tk/api/schedule/";
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(JSON.stringify(data));

		for (let i = 0; i < data.length; i++) {
			addTableRow(data[i].name, data[i].Grade, data[i].Course, data[i].Email);
		}
      });
  }

  function addStudent() {
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
	var url = "https://hetvitrivedi.tk/api/schedule/add";
	url += "?name=" + document.getElementById("name").value;
	url += "&Grade=" + document.getElementById("Grade").value;
	url += "&Course=" + document.getElementById("Course").value;
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
  function addTableRow(name, Grade, Course, Email) {
	let tableRow = document.createElement("tr");
	let idCell = document.createElement("td");
	tableRow.appendChild(idCell);
	let nameCell = document.createElement("td");
	nameCell.innerText = name;
	tableRow.appendChild(nameCell);
	let GradeCell = document.createElement("td");
	GradeCell.innerText = Grade;
	tableRow.appendChild(GradeCell);
	let CourseCell = document.createElement("td");
	CourseCell.innerText = Course;
	tableRow.appendChild(CourseCell);
	let EmailCell = document.createElement("td");
	EmailCell.innerText = Email;
	tableRow.appendChild(EmailCell);

	document.getElementById("lessonTable").appendChild(tableRow);
  }

  function removeTableRows() {
	let numRows = document.getElementById("lessonTable").rows.length;
	for (let i = numRows-1; i > 0; i--) {
		document.getElementById("lessonTable").removeChild(document.getElementById("lessonTable").rows[i]);
	}
  }

</script>
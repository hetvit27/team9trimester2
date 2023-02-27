<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Physics Class Schedules


<!-- Create inputs for search and question -->


<input id="id" placeholder="Id">
<input id="classname" placeholder="Class Name">
<input id="period" placeholder="Period">
<button onclick="post()">Post</button>
<br>
<!-- Create table to display question posts -->
<body>
<br>
<br>
<h1 class="text-center m-5 text-success">Student List</h1>
     <br>
    <div class="table-responsive mx-5">
        <table >
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">Period</th>
                    <!-- Update and delete -->
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider" id="classes">
            </tbody>
        </table>
    </div>
 	<script>
        // prepare fetch urls
        // const club_url = "http://localhost:8192/api/club";
        const classes_url = "https://hetvitrivedi.tk/api/classes";
        const get_url = classes_url + "/";
        const classesContainer = document.getElementById("classes");
        // prepare fetch GET options
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
        // fetch the API
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
                for (const row of data) {
                    console.log(row);
                    // columns
                    const tr = document.createElement("tr");
                    const id = document.createElement("td");
                    const classname = document.createElement("td");
                    const period = document.createElement("td");
                    id.innerHTML = row.id;
                    classname.innerHTML = row.classname;
                    period.innerHTML = row.period;
                    // add all columns to the row
                    tr.appendChild(id);
                    tr.appendChild(classname);
                    tr.appendChild(period);
                    // add row to table
                    classesContainer.appendChild(tr);
                }    
            })
        })
        // catch fetch errors (ie Nginx ACCESS to server blocked)
        .catch(err => {
            error(err + " " + get_url);
        });
        // Something went wrong with actions or responses
        function error(err) {
            // log as Error in console
            console.error(err);
            // append error to resultContainer
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = err;
            tr.appendChild(td);
            classesContainer.appendChild(tr);
        }
        /* Create equation */
          function addClass() {
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
            var url = "https://hetvitrivedi.tk/api/classes/add";
            url += "?person_id=" + person_id;
            url += "&classname=" + document.getElementById("classname").value;
            url += "&period=" + document.getElementById("period").value;
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
    function addTableRow(id, classname, period) {
        let tableRow = document.createElement("tr");
        let idCell = document.createElement("td");
        tableRow.appendChild(idCell);
        let classnameCell = document.createElement("td");
        classnameCell.innerText = classname;
        tableRow.appendChild(classnameCell);
        let periodCell = document.createElement("td");
        periodCell.innerText = period;
        tableRow.appendChild(periodCell);
        document.getElementById("classes").appendChild(tableRow);
    }
    function removeTableRows() {
        let numRows = document.getElementById("classes").rows.length;
        for (let i = numRows-1; i > 0; i--) {
            document.getElementById("classes").removeChild(document.getElementById("classes").rows[i]);
        }
    }
    </script>
<body>




<html>
    <head>
        <style>
            .role {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1 class="text-center m-5 text-success">Tutor List</h1>
        <br>
        <div class="table-responsive mx-5">
            <table class="table table-hover table-bordered border-secondary mb-5">
                <thead>
                    <tr>
                        <th scope="col">Tutor Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Area</th>
                        <th scope="col">Contact</th>
                        <input id="tutorname" placeholder="Enter Tutor Name">
                        <input id="age" placeholder="Enter Tutor Age">
                        <input id="area" placeholder="Enter Tutor Location">
                        <input id="contact" placeholder="Enter Tutor Contact Info">
                        <button onclick="createTutor()">Submit</button>
                        <br>
                        <!-- Update and delete -->
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="tutors">
                </tbody>
            </table>
        </div>
        <script>
            // prepare fetch urls
            // const club_url = "http://localhost:8192/api/club";
            const tutor_url = "https://hetvitrivedi.tk/api/tutor";
            const get_url = tutor_url + "/";
            const tutorContainer = document.getElementById("tutors");
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
            const post_options = {...options, method: 'POST'}; // clones and replaces method
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
                        const tutorname = document.createElement("td");
                        const age = document.createElement("td");
                        const area = document.createElement("td");
                        const contact = document.createElement("td");
                        tutorname.innerHTML = row.tutorname;
                        age.innerHTML = row.age;
                        area.innerHTML = row.area;
                        contact.innerHTML = row.contact
                        // add all columns to the row
                        tr.appendChild(tutorname);
                        tr.appendChild(age);
                        tr.appendChild(area);
                        tr.appendChild(contact);
                        // add row to table
                        tutorContainer.appendChild(tr);
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
                tutorContainer.appendChild(tr);
            }
            /* Create new tutor */
	function createTutor() {
		const tutorname = document.getElementById("tutorname").value;
		// encode URI to handle special characters
		const tutorname_encoded = encodeURIComponent(tutorname);
        const age_encoded = encodeURIComponent(age);
        const area_encoded = encodeURIComponent(area);
        const contact_encoded = encodeURIComponent(contact);
        const create_url = tutor_url + "/add" + "/" + tutorname_encoded + + age_encoded + area_encoded + contact_encoded;
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
					let tutorname = row.insertCell(0);
					let age = row.insertCell(1);
                    let area = row.insertCell(2);
                    let contact = row.insertCell(3);
					// let cbunit = row.insertCell(2);
					// let cbtopic = row.insertCell(3);
					// let tags = row.insertCell(4);
					tutorname.innerHTML = data.tutorname;
					age.innerHTML = data.age;
                    area.innerHTML = data.area;
                    contact.innerHTML = data.contact;
				});
			})
		    // clear input fields
		    document.getElementById("tutorname").value = "";
	}
        </script>
    </body>
</html>
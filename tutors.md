<html>
    <head>
        <style>
            .role {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1 class="text-center m-5 text-success">Physics Tutors List</h1>
        <div class="table-responsive mx-5">
            <table class="table table-hover table-bordered border-secondary mb-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">names</th>
                        <th scope="col">Age</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="names">
                </tbody>
            </table>
        </div>
        <script>
            // prepare fetch urls
            const url = "https://hetvitrivedi.tk/api/tutors";
            const get_url = url + "/";
            const namesContainer = document.getElementById("names");
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
                        const names = document.createElement("td");
                        const Age = document.createElement("td");
                        const Experience = document.createElement("td");
                        const Location = document.createElement("td");
                        id.innerHTML = row.id;
                        names.innerHTML = row.names;
                        Age.innerHTML = row.Age;
                        Experience.innerHTML = row.Experience;
                        Location.innerHTML = row.Location
                        // add all columns to the row
                        tr.appendChild(id);
                        tr.appendChild(names);
                        tr.appendChild(Age);
                        tr.appendChild(Experience);
                        tr.appendChild(Location);
                        // add row to table
                        namesContainer.appendChild(tr);
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
                namesContainer.appendChild(tr);
            }
        </script>
    </body>
</html>
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
                        <!-- Update and delete -->
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="clubs">
                </tbody>
            </table>
        </div>
        <script>
            // prepare fetch urls
            // const club_url = "http://localhost:8192/api/club";
            const club_url = "https://hetvitrivedi.tk/api/tutor";
            const get_url = club_url + "/";
            const clubContainer = document.getElementById("clubs");
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
                        clubContainer.appendChild(tr);
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
                clubContainer.appendChild(tr);
            }
        </script>
    </body>
</html>
<html>
  <head>
  <body>
    <form id="form" method="post">
    <input type="text" id="name" placeholder="Name"/>
    <input type="text" id="age" placeholder="age" />
    <input type="text" id="area" placeholder="area" />
    <input type="text" id="contact" placeholder="contact" />
    <input type="submit" value="Add Tutor" />
  <body>
  <script>
  var form= document.getElementbyID('form')
  form.addEventListener('submit',function(e)){
    e.preventDefault()
    var name = document.getElementbyId('name')
    var age = document.getElementbyId('age') var area = document.getElementbyId('area')
    var contact = document.getElementbyId('contact')
    var url = "https://hetvitrivedi.tk/api/tutor";
    const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: flashcardsJson // body data type must match "Content-Type" header
        };
        fetch(url, options).then(response => {
            response.json().then(data => {
                console.log(data);
                window.location = `/flashcard.html?id=` + data.id;
            })
        })
        .catch(err => {
            console.log("Error: " + err);
        })
  }

  }

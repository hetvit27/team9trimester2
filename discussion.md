<html>
    <head>
        <style>
            .role {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1 class="text-center m-5 text-success">Discussion Board</h1>
        <br>
        <div class="table-responsive mx-5">
            <table class="table table-hover table-bordered border-secondary mb-5">
                <thead>
                    <tr>
                        <th scope="col">Question</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Email</th>
                        <!-- Update and delete -->
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="questions">
                </tbody>
            </table>
        </div>
        <script>
            // prepare fetch urls
            const discussion_url = "https://hetvitrivedi.tk/api/discussions";
            const get_url = discussion_url + "/";
            const discussionContainer = document.getElementById("questions");
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
                        const question = document.createElement("td");
                        const Unit = document.createElement("td");
                        const Tags = document.createElement("td");
                        const Email = document.createElement("td");
                        question.innerHTML = row.question;
                        Unit.innerHTML = row.Unit;
                        Tags.innerHTML = row.Tags;
                        Email.innerHTML = row.Email
                        // add all columns to the row
                        tr.appendChild(question);
                        tr.appendChild(Unit);
                        tr.appendChild(Tags);
                        tr.appendChild(Email);
                        // add row to table
                        discussionContainer.appendChild(tr);
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
                discussionContainer.appendChild(tr);
            }
        </script>
    </body>
</html>
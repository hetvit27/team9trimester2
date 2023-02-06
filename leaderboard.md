<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Physics Leaderboard Equations 
<h3>Upvote and downvote your favorite physics equations!</h3>
<table>
  <thead>
  <tr>
    <th>Equation</th>
    <th>Likes</th>
    <th>Dislikes</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

</html>

<!-- Script is layed out in a sequence (without a function) and will execute when page is loaded -->
<script>

  var ip = location.host;
  console.log(ip);

  // prepare HTML defined "result" container for new output
  const resultContainer = document.getElementById("result");

  // keys for equation reactions
  const LIKE = "like";
  const DISLIKE = "dislike";

  // prepare fetch urls
  // const url = "https://flask.nighthawkcodingsociety.com/api/equations";
  const url = "https://hetvitrivedi.tk/api/physics";
  const get_url = url +"/";
  const like_url = url + "/like/";  // haha reaction
  const dislike_url = url + "/dislike/";  // DISLIKE reaction

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
          console.log(data);
          for (const row of data) {
            // make "tr element" for each "row of data"
            const tr = document.createElement("tr");
            
            // td for equation cell
            const equation = document.createElement("td");
              equation.innerHTML = row.id + ". " + row.equation;  // add fetched data to innerHTML

            // td for like cell with onclick actions
            const like = document.createElement("td");
              const like_but = document.createElement('button');
              like_but.id = LIKE+row.id   // establishes a LIKE JS id for cell
              like_but.innerHTML = row.like;  // add fetched "like count" to innerHTML
              like_but.onclick = function () {
                // onclick function call with "like parameters"
                reaction(LIKE, like_url+row.id, like_but.id);  
              };
              like.appendChild(like_but);  // add "like button" to like cell

            // td for DISLIKE cell with onclick actions
            const dislike = document.createElement("td");
              const dislike_but = document.createElement('button');
              dislike_but.id = DISLIKE+row.id  // establishes a DISLIKE JS id for cell
              dislike_but.innerHTML = row.dislike;  // add fetched "dislike count" to innerHTML
              dislike_but.onclick = function () {
                // onclick function call with "jeer parameters"
                reaction(DISLIKE, dislike_url+row.id, dislike_but.id);  
              };
              dislike.appendChild(dislike_but);  // add "dislike button" to dislike cell
             
            // this builds ALL td's (cells) into tr (row) element
            tr.appendChild(equation);
            tr.appendChild(like);
            tr.appendChild(dislike);

            // this adds all the tr (row) work above to the HTML "result" container
            resultContainer.appendChild(tr);
          }
      })
  })
  // catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
    error(err + " " + get_url);
  });

  // Reaction function to likes or jeers user actions
  function reaction(type, post_url, elemID) {

    // fetch the API
    fetch(post_url, post_options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          error("post API response failure: " + response.status)
          return;  // api failure
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
          // Likes or Jeers updated/incremented
          if (type === LIKE) // like data element
            document.getElementById(elemID).innerHTML = data.like;  // fetched like data assigned to like Document Object Model (DOM)
          else if (type === DISLIKE) // jeer data element
            document.getElementById(elemID).innerHTML = data.dislike;  // fetched dislike data assigned to dislike Document Object Model (DOM)
          else
            error("unknown type: " + type);  // should never occur
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + post_url);
    });
    
  }

  // Something went wrong with actions or responses
  function error(err) {
    // log as Error in console
    console.error(err);
    // append error to resultContainer
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }

</script>
## FRQ4

<script>

function simulate(generation){
    console.log("button clicked");
    fetch("/api/lightboard/simulate/"+(parseInt(generation)-1), {"method": "GET"}) // generation - 1 because 0 indexing
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
    // check for response errors
    if (response.status !== 200) {
        error("GET API response failure: " + response.status)
        return;  // api failure
    }
    // valid response will have JSON data
    response.json().then(data => {

      console.log(data);
      //clear previous results
      document.getElementById("result").innerHTML = "";

      // json output is an Array where each element is a Lightboard
      // each Lightboard has 3x3 array of Lights
      // each Light has dictionary of on/off, rgb, effect

      for (var b = 0; b < data.length; b++) {
        // create a table for each Lightboard
        var board = data[b];
        console.log(board);

        // print generation number
        var text = document.createTextNode("Generation " + (parseInt(b)));
        document.getElementById("result").appendChild(text);

        var table = document.createElement("table");
        table.setAttribute("border", "1");
        table.setAttribute("style", "border-collapse: collapse;");
        var tableBody = document.createElement("tbody");

        for (var i = 0; i < board.lights.length; i++) {
          var row = document.createElement("tr");
          for (var j = 0; j < board.lights[i].length; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(board.lights[i][j].on);
            // set color of cell based on rgb hex code if light is on
            if (board.lights[i][j].on) {
              cell.setAttribute("style", "background-color: " + board.lights[i][j].rgb);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
          tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        document.getElementById("result").appendChild(table);
      }
    })
    // catch fetch errors
    .catch(err => {
    error(err + " " );
    });
    })
}

</script>

<button onclick="">Generate lightboard</button>
<div id="result">

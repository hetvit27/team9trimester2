<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Question Discussion Board

<h3>Post your questions here and have fellow students answer them</h3>

<!-- Create inputs for search and question -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>unit</option>
	<option>tags</option>
	<option>email</option>
</select>

<input id="question" placeholder="Question">
<input id="unit" placeholder="Unit">
<input id="tags" placeholder="Tags">
<input id="email" placeholder="Email">
<button onclick="addDisc()">Post</button>
<input type = "checkbox"> anonymous post


<!-- Create table to display question posts -->
<table id="discussionTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Question</th>
				<th>Unit</th>
				<th>Tags</th>
				<th>Email</th>
		</tr>
</table>

<script>
  Disc();
  function Disc() {
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
    const url = "https://hetvitrivedi.tk/api/discussions/";
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(JSON.stringify(data));

		for (let i = 0; i < data.length; i++) {
			addTableRow(data[i].question, data[i].unit, data[i].tags, data[i].email);
		}
      });
  }

</script>
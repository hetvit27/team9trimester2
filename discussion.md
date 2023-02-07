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
</select>

<input id="question" placeholder="Question">
<input id="unit" placeholder="Unit">
<button onclick="post()">Post</button>
<input type = "checkbox"> anonymous post


<!-- Create table to display question posts -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>User</th>
                <th>Unit</th>
				<th>Question</th>
				<th>Tags</th>
				<th>Email</th>
				<th>Reply</th>
		</tr>
		<tr>
				<td>physics student</td>
                <td>3</td>
				<td>How do I convert Potential Energy to Kinetic Energy in my Rube Goldberg Machine?</td>
				<td>project, kinetic energy, potential energy</td>
				<td>student@physics.com</td>
                <td><input id="answer" placeholder="Answer">
                <button onclick="reply()">Reply</button>
                </td>
		</tr>
</table>
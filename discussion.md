<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Equations

<h3>Your saved physics equations</h3>

Features:
- Create, edit, and delete equations
- Save equations to a database
- View equations in a table
- Add tags for CB unit and topic
- Search equations
- Filter by tags

<!-- Create inputs for search and question -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>

<input id="question" placeholder="Question">
<button onclick="post()">Post</button>

<!-- Create table to display question posts -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>User</th>
				<th>Question</th>
				<th>Reply</th>
		</tr>
		<tr>
				<td>physics student</td>
				<td>How do I convert Potential Energy to Kinetic Energy in my Rube Goldberg Machine?</td>
				<td>
                <input id="answer" placeholder="Answer">
                <button onclick="reply()">Reply</button>
                </td>
		</tr>
</table>
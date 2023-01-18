<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Practice Problems

<h3>Keep track of practice problems for different units</h3>

Features:
- Create, edit, and delete questions
- Save questions to a personal database
- Filter questions by unit
- View all saved questions in a table
- Search questions

<!-- Create inputs for search and question -->

<input id="search" placeholder="Search">
<button onclick="search()">Search</button>
<select id="filter">
	<option>Filter by...</option>
	<option>unit</option>
</select>

<input id="question" placeholder="Question">
<input id="unit" placeholder="Unit">
<button onclick="save()">Save</button>


<!-- Create table to display question posts -->

<table id="practiceTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Problem</th>
				<th>CB Unit</th>
				<th>CB Topic</th>
				<th>Tags</th>
		</tr>
		<tr>
				<td>0</td>
				<td>Two students, S1 and S2, are rushing to class. They are waiting for green light at the same intersection. As soon as the light turns green, both students start walking with constant acceleration. The acceleration of student S1 is a1, and the acceleration of student S2 is a2, When student S1 has reached a velocity v1, she has walked a distance D1, while student S2 has walked a distance D2 = 1/3D1. In terms of v1 and D1, what is the correct expression for a2, the acceleration of student S2?</td>
				<td>1</td>
				<td>1.1 Newton's Laws</td>
				<td>physics, newton's laws, force, mass, acceleration</td>
		</tr>
</table>
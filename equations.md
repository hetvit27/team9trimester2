## Equations

<h3>Your saved physics equations</h3>

Features:
- Create, edit, and delete equations
- Save equations to a database
- View equations in a table
- Add tags for CB unit and topic
- Search equations
- Filter by tags

<!-- Create inputs for search and filter -->

<input id="search" placeholder="Search">
<select id="filter">
	<option>Filter by...</option>
	<option>Test tag</option>
</select>

<!-- Create table to display equations -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Id</th>
				<th>Equation</th>
				<th>CB Unit</th>
				<th>CB Topic</th>
				<th>Tags</th>
		</tr>
		<tr>
				<td>0</td>
				<td>F=ma</td>
				<td>1</td>
				<td>1.1 Newton's Laws</td>
				<td>physics, newton's laws, force, mass, acceleration</td>
		</tr>
</table>

<!-- Create inputs for CRUD -->

<input id="equation" placeholder="Enter equation">
<input id="cbunit" placeholder="CB Unit">
<input id="cbtopic" placeholder="CB Topic">
<input id="tags" placeholder="Tags">
<button onclick="">Create</button>

<input id="deleteid" placeholder="Equation ID">
<button onclick="">Delete</button>

<input id="updateid" placeholder="Equation ID">
<input id="updateequation" placeholder="Enter equation">
<input id="updatecbunit" placeholder="CB Unit">
<input id="updatecbtopic" placeholder="CB Topic">
<input id="updatetags" placeholder="Tags">
<button onclick="">Update</button>

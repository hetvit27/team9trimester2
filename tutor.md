<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Discussion Qs

<h3> Search for a tutor</h3>

Features:
- Shows tutor information that is stored in a database from sign up
- Submit reviews for tutors that accumulate
- See tutors experience
- Users can post reviews anonymously
- View all tutors in a tale
- Search by location

<!-- Create inputs for search and question -->

<input id="Location for Tutor" placeholder="Enter your location">
<button onclick="search()">Search</button>
<br>
<br>


<!-- Create table to display question posts -->

<table id="equationsTable" border="1" style="border-collapse: collapse;">
		<tr>
				<th>Tutor Name</th>
				<th>Location</th>
				<th>Experience</th>
                <th>Past Reviews</th>
                <th>Meeting Preference</th>
                <th> Submit a Review</th>
		</tr>
		<tr>
				<td>Hetvi Trivedi</td>
				<td>San Diego</td>
                <td>Tutored in other STEM subjects. Has taken AP Physics Mechanics and did well. </td>
                <td> User13904: Great experience! </td>
                <td> Zoom or in-person </td>
				<td>
                <input id="review" placeholder="Review">
                <button onclick="reply()">Submit</button>
                </td>
		</tr>
</table>
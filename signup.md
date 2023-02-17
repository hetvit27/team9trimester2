## Register 

Have an account? Click here to <a href="https://hetvit27.github.io/team9trimester2/login">login.

<div class="signup-input">
		<label>Email <input type="email" name="email" id="email" /></label>
		<label>Password <input type="password" name="password" id="password" required> </label>   
		<!-- <label>Confirm Password <input type="password" name="confirmpassword" id="confirmpassword" required> </label> -->
		<label>Name <input type="text" name="name" id="name" /></label>
		<label>DOB <input type="text" name="dob" id="dob" /></label>
		<button onclick="register_user()">Register</button>
</div>

<script>
	// send login request for JWT token

	const register_url = 'https://hetvitrivedi.tk/register';

	function register_user() {

		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const name = document.getElementById("name").value;
		const dob = document.getElementById("dob").value;
		// parse dob to mm-dd-yyyy
		// const dob = d.split("-").reverse().join("-");

		console.log("Button clicked");
				// Set body to include login data
				const body = {
						'email': email,
						'password': password,
						'name': name,
						'dob': dob,
				};

				console.log(email);
				console.log(body);

				// // encode body using encodeURIComponent

				// for (var key in body) {
				// 	if (body.hasOwnProperty(key)) {
				// 		body[key] = encodeURIComponent(body[key]);
				// 	}
				// }

				// // create form body

				// const formbody = JSON.stringify(body);

				// console.log(formbody)
				
				// Set Headers to support cross origin
				const options = {
					method: 'POST',
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'include',
					headers: {
        		'Content-Type': 'application/json'
    			},
    			body: body
				};

				// Fetch JWT

				// if successful, redirect to home page
				// if unsuccessful, display error message on page
				fetch(register_url, options)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						if (data.status == 200) {
							window.location.href = "https://hetvit27.github.io/team9trimester2/home";
						} else {
							// create document element and append error message to page
							const error = document.createElement("p");
							error.innerHTML = data.message;
						}
					})
					.catch(error => {
						console.log(error);
					});

				
				// fetch(register_url, options)
				// .then(response => console.log(response.text()))
    		// .then(result => console.log(result))
    		// .catch(error => console.log('error', error));

	}
</script>

<!-- 
<div class="sign_up">
<h1>Sign Up Form<span>Already have an account? Click here to <a href="https://hetvit27.github.io/team9trimester2/login" class="blacktext">login</a>.</span></h1>
<form>
    <div class="section"><span>1</span>First Name & DOB</div>
    <div class="inner-wrap">
        <label>Full Name <input type="text" name="fullname" id="fullname" /></label>
		<label>Birthday <input type="date" name="dob" id="dob" /></label>    
    </div>

 <div class="section"><span>2</span>Email & Password</div>
<div class="inner-wrap">
        <label>Email Address <input type="email" name="email" id="email" /></label>
        <label>Password <input type="password" name="password" id="password" required> </label>
        <label>Confirm Password <input type="password" name="confirmpassword" id="confirmpassword" required> </label>
    </div>

<div class="section"><span>3</span>Account Info</div>
        <div class="inner-wrap">
        <label>School/Affiliation <input type="text" name="school" id="school"> </label>
	<label for="role-choice">Desired Account</label>
		<select id="role-choice" name="role-choice">
  			<option value="admin">Student</option>
  			<option value="user">Tutor</option>
</select>
    </div>
 <div class="button-section">
     <input type="submit" name="Sign Up" />
     <span class="privacy-policy">
     </span> 
    </div>
</form>
</div> -->

<!-- 
<style> 
    <link href='http://fonts.googleapis.com/css?family=Bitter' rel='stylesheet' type='text/css'>
<style type="text/css">
.sign_up{
	width:450px;
	padding:30px;
	margin:40px auto;
	background: #FFF;
	border-radius: 10px;
	-webkit-border-radius:10px;
	-moz-border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
	-moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
	-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
}
.sign_up .inner-wrap{
	padding: 30px;
	background: #F8F8F8;
	border-radius: 6px;
	margin-bottom: 15px;
}
.sign_up h1{
	background: #257cb9;
	padding: 20px 30px 15px 30px;
	margin: -30px -30px 30px -30px;
	border-radius: 10px 10px 0 0;
	-webkit-border-radius: 10px 10px 0 0;
	-moz-border-radius: 10px 10px 0 0;
	color: #fff;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
	font: normal 30px 'Bitter', serif;
	-moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	-webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	border: 1px solid #257C9E;
}
.sign_up h1 > span{
	display: block;
	margin-top: 2px;
	font: 13px Arial, Helvetica, sans-serif;
}
.sign_up label{
	display: block;
	font: 13px Arial, Helvetica, sans-serif;
	color: #888;
	margin-bottom: 15px;
}
.sign_up input[type="text"],
.sign_up input[type="date"],
.sign_up input[type="datetime"],
.sign_up input[type="email"],
.sign_up input[type="number"],
.sign_up input[type="search"],
.sign_up input[type="time"],
.sign_up input[type="url"],
.sign_up input[type="password"],
.sign_up textarea,
.sign_up select {
	display: block;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	padding: 8px;
	border-radius: 6px;
	-webkit-border-radius:6px;
	-moz-border-radius:6px;
	border: 2px solid #fff;
	box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
	-moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
	-webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
}

.sign_up .section{
	font: normal 20px 'Bitter', serif;
	color: #257cb9;
	margin-bottom: 5px;
}
.sign_up .section span {
	background: #257cb9;
	padding: 5px 10px 5px 10px;
	position: absolute;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border: 4px solid #fff;
	font-size: 14px;
	margin-left: -45px;
	color: #fff;
	margin-top: -3px;
}
.sign_up input[type="button"], 
.sign_up input[type="submit"]{
	background: #257cb9;
	padding: 8px 20px 8px 20px;
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	color: #fff;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
	font: normal 30px 'Bitter', serif;
	-moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	-webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
	border: 1px solid #257C9E;
	font-size: 15px;
}
.sign_up input[type="button"]:hover, 
.sign_up input[type="submit"]:hover{
	background: #257cb9;
	-moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
	-webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
	box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
}
.sign_up .privacy-policy{
	float: right;
	width: 250px;
	font: 12px Arial, Helvetica, sans-serif;
	color: #4D4D4D;
	margin-top: 10px;
	text-align: right;
}
</style> -->

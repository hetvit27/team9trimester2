

<div class="login">
<h1>Login<span>Don't have an account? Click here to <a href="https://hetvit27.github.io/team9trimester2/signup" class="blacktext">signup.</a>.</span></h1>
<form>
    <div class="section"><span>1</span>Email and Password</div>
    <div class="inner-wrap">
        <label>Email <input type="email" name="email" id="email" /></label>
        <label>Password <input type="password" name="password" id="password" required> </label>     
    </div>

 <div class="button-section">
     <input type="submit" name="Login" />
     <span class="privacy-policy">
     </span> 
    </div>
</form>
</div>

<script>
	// send login request for JWT token

	const url = 'https://hetvitrivedi.tk'
	const loginResponse = await fetch(url + '/authenticate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		}),
	});

	// if login was successful, server will return a JWT token
	if (loginResponse.ok) {
		const jwt = loginResponse.headers.get('Authorization').split(' ')[1];
	}

	// store JWT in cookie or local storage
	document.cookie = `jwt=${jwt}`; // or localStorage.setItem('jwt', jwt);
</script>

<style> 
    <link href='http://fonts.googleapis.com/css?family=Bitter' rel='stylesheet' type='text/css'>
<style type="text/css">
.login {
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
.login .inner-wrap{
	padding: 30px;
	background: #F8F8F8;
	border-radius: 6px;
	margin-bottom: 15px;
}
.login h1{
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
.login h1 > span{
	display: block;
	margin-top: 2px;
	font: 13px Arial, Helvetica, sans-serif;
}
.login label{
	display: block;
	font: 13px Arial, Helvetica, sans-serif;
	color: #888;
	margin-bottom: 15px;
}
.login input[type="text"],
.login input[type="date"],
.login input[type="datetime"],
.login input[type="email"],
.login input[type="number"],
.login input[type="search"],
.login input[type="time"],
.login input[type="url"],
.login input[type="password"],
.login textarea,
.login select {
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

.login .section{
	font: normal 20px 'Bitter', serif;
	color: #257cb9;
	margin-bottom: 5px;
}
.login .section span {
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
.login input[type="button"], 
.login input[type="submit"]{
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
.login input[type="button"]:hover, 
.login input[type="submit"]:hover{
	background: #257cb9;
	-moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
	-webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
	box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
}
.login .privacy-policy{
	float: right;
	width: 250px;
	font: 12px Arial, Helvetica, sans-serif;
	color: #4D4D4D;
	margin-top: 10px;
	text-align: right;
}

</style>
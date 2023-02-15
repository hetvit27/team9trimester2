<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

## Login

Don't have an account? Click here to <a href="https://hetvit27.github.io/team9trimester2/signup">signup.

<form>
    <div class="login-input">
        <label>Email <input type="email" name="email" id="email" /></label>
        <label>Password <input type="password" name="password" id="password" required> </label>     
    </div>

  <div class="button">
    <input type="submit" name="Login" value="Login" onclick="login_user()">
  </div>
</form>

<script>
	// send login request for JWT token

	const login_url = 'https://hetvitrivedi.tk/authenticate';
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

	function login_user() {
        // Set body to include login data
        const body = {
            email: email,
            password: password,
        };

        console.log(body);

        // Set Headers to support cross origin
        const requestOptions = {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        };

        // Fetch JWT
        fetch(login_url, requestOptions)
        .then(response => {

            console.log(response);
            // trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            console.log('Login successful!');
            // Redirect to Database location
            // window.location.href = "/APCSA/data/database";
        })
        .catch(error => {
            console.log('Error: ', error);
        });
    }
</script>
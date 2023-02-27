## Login

Don't have an account? Click here to <a href="https://hetvit27.github.io/team9trimester2/signup">signup.

<div class="login-input">
    <label>Email <input type="email" name="email" id="email" /></label>
    <label>Password <input type="password" name="password" id="password" required> </label>     
    <button onclick="login_user()">Login</button>
</div>


<script>
	// send login request for JWT token

	function login_user() {
        const login_url = 'https://hetvitrivedi.tk/authenticate';
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Set body to include login data
        const body = {
            'email': email,
            'password': password,
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
            // Redirect to home page
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://hetvitrivedi.tk/api/person/getPersonNameAndId?email=" + email, requestOptions)
                .then(response => response.json()) {
                    console.log(response);
                    sessionStorage.setItem("email", email);
                    sessionStorage.setItem("name", response.name);
                    sessionStorage.setItem("id", response.id);
                    window.location.href = "https://hetvit27.github.io/team9trimester2/";
                    // window.location.href = "{{site.baseurl}}/";
                })
                .catch(error => console.log('error', error));
                })
    }
</script>
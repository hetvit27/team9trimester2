<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <h1 class="text-center m-5 text-success">Trying to Post Tutors</h1>
<head>
<body>
    <form class="form">
        <input name="tutorname" type="text" placeholder="name">
        <br>
        <input name="age" type="text" placeholder="age">
        <br>
        <input name="area" type="text" placeholder="area">
        <br>
        <input name="contact" type="text" placeholder="contact">
        <br>
        <button type="submit">Submit</button>
    </form>
    <script>
        const formEl = document.querySelector('.form');
        formEl.addEventListener('submit' , () => {
            event.preventDefault();
            const formData = new FormData(formEl);
            var url = "https://hetvitrivedi.tk/api/tutor";
            const options = {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: class // body data type must match "Content-Type" header
            };
            const post_options = {...options, method: 'POST'}; // clones and replaces method
            fetch(url, options).then(response => {
                response.json().then(data => {
                    console.log(data);
                })
            })
        .catch(err => {
            console.log("Error: " + err);
        })
    });
          

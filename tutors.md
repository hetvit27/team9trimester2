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
            const data = Object.fromEntries(formData);
            fetch('https://hetvitrivedi.tk/api/tutor/', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));
        });
    </script>

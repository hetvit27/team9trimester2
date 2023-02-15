const buttonForm = document.getElementById('buttonForm');

buttonForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = {
		name: document.getElementById('name').value,
		age: document.getElementById('age').value,
		area: document.getElementById('area').value,
		contact: document.getElementById('contact').value
	};

	try {
		const response = await fetch('https://hetvitrivedi.tk/api/tutor/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (response.ok) {
			alert('Button input form submitted successfully!');
			buttonForm.reset();
		} else {
			throw new Error('Error submitting form.');
		}
	} catch (error) {
		alert(error.message);
	}
});
const form = document.getElementById('sign-up-form');
const submitBtn = document.getElementById('submit-btn')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password1').value;
	const confirmPassword = document.getElementById('password2').value;
	const gender = document.getElementById('gender').value;
	const region = document.getElementById('region').value;
	const number = document.getElementById('number').value;


	
	

	
	alert('Sign up successful!');
	console.log(firstName, lastName, email, password, confirmPassword, gender, region, number)
});



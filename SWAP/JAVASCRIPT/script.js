const searchInput = document.querySelector('input[type="search"]');
searchInput.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		alert('You searched for: ' + searchInput.value);
	}
});
// Get the modal window and button elements
var modal = document.getElementById("sponsor-modal");
var button = document.getElementById("sponsor-button");

// Get the close button element
var close = document.getElementsByClassName("close")[0];

// When the button is clicked, open the modal window
button.onclick = function() {
	modal.style.display = "block";
}

// When the close button is clicked, close the modal window
close.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside the modal window, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
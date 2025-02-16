document.addEventListener("DOMContentLoaded", function() {
	const button = document.getElementById("button");
	const heading = document.getElementById("heading");

	button.addEventListener("click", function() {
		heading.textContent = "You clicked the button!";
	});
});
const search = document.getElementById('search'),
submit = document.getElementById('submit'),
random = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
resultHeading = document.getElementById('result-heading'),
single_meailEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
	e.preventDefault();

	// Clear single meal
	single_meailEl.innerHTML = '';

	// Get search term
	const term = search.value;

	console.log(term);
}


//Event Listeners
submit.addEventListener('submit', searchMeal);
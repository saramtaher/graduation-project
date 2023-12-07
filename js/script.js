
  // script.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function(event) {
  // Get the search form element
  const searchForm = document.getElementById('search-form');

  // Add event listener for the form submission
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the search input value
    const searchTerm = document.getElementById('search-input').value;

    // Perform a search based on the input value (Example: log to console)
    console.log('Searching for: ' + searchTerm);

    // You can make an AJAX request here to fetch search results and update the UI accordingly
    // For simplicity, this example just logs the search term to the console
  });
});
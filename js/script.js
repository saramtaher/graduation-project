// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the "Find a Property" button
    var ctaButton = document.querySelector('.cta-button');
  
    // Add a click event listener to the button
    ctaButton.addEventListener('click', function(event) {
      // Prevent the default behavior of the button (in this case, following the link)
      event.preventDefault();
  
      // Log a message to the console
      console.log('Button clicked! You can add more functionality here.');
    });
  });
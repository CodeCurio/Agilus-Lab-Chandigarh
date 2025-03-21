// navbar.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load navbar content
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    fetch('navbar.html')
      .then(response => response.text())
      .then(html => {
        navbarContainer.innerHTML = html;
        
        // Initialize hamburger menu after navbar is loaded
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
          hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
          });

          // Close menu when clicking a link
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              navLinks.classList.remove('active');
            });
          });
        }
      })
      .catch(err => {
        console.error('Error loading the navbar:', err);
      });
  }
});

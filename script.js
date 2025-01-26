// JavaScript to add interactivity if necessary (e.g., smooth scrolling or other features)

// Example: Smooth scrolling for the navigation menu
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Remove the '#' character
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // 50px offset for the sticky header
        behavior: 'smooth'
      });
    });
  });
  

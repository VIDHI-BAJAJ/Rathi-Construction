// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Add a delay to ensure the drawing animation completes
    setTimeout(function() {
        preloader.classList.add('preloader-hidden');
        
        // Remove preloader from DOM after animation completes
        setTimeout(function() {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 1000); // Match this to the CSS transition duration
    }, 4500); // Match this to the drawing animation duration (4s + 0.5s buffer)
});

// Mobile Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}
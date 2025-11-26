// Preloader functionality
function hidePreloader() {
    try {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            console.log('Hiding preloader');
            preloader.classList.add('preloader-hidden');
            
            // Remove preloader from DOM after animation completes
            setTimeout(function() {
                if (preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                    console.log('Preloader removed from DOM');
                }
            }, 1000);
        } else {
            console.log('Preloader element not found');
        }
    } catch (error) {
        console.error('Error hiding preloader:', error);
    }
}

// Hide preloader when page is fully loaded
window.addEventListener('load', function() {
    console.log('Window loaded, starting preloader hide timer');
    setTimeout(hidePreloader, 4500); // Wait for drawing animation to complete
});

// Fallback: Remove preloader after 10 seconds in case of errors
setTimeout(hidePreloader, 10000);

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
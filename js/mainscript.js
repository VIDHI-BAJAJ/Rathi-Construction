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

// Additional fallback for DOM ready state
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, starting preloader hide timer');
    setTimeout(hidePreloader, 4500); // Wait for drawing animation to complete
});

// Hide preloader after 10 seconds in case of errors
setTimeout(function() {
    console.log('Fallback timer triggered');
    hidePreloader();
}, 10000);

// Mobile Navbar Toggle
function initMobileNavbar() {
    console.log('Initializing mobile navbar');
    
    // Use a more robust selector that waits for elements to be available
    function waitForElements() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            initializeNavbar(hamburger, navMenu);
        } else {
            console.log('Waiting for navbar elements to be available...');
            setTimeout(waitForElements, 500); // Check every 500ms
        }
    }
    
    function initializeNavbar(hamburger, navMenu) {
        console.log('Navbar elements found, initializing');
        console.log('Hamburger element:', hamburger);
        console.log('Nav menu element:', navMenu);
        
        // Additional debugging
        if (hamburger) {
            console.log('Hamburger computed styles:', window.getComputedStyle(hamburger));
        }
        
        if (navMenu) {
            console.log('Nav menu computed styles:', window.getComputedStyle(navMenu));
        }
        
        // Ensure we don't add duplicate event listeners
        // Remove any existing listeners first
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        const newNavMenu = navMenu.cloneNode(true);
        navMenu.parentNode.replaceChild(newNavMenu, navMenu);
        
        // Now add our event listeners to the new elements
        newHamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked');
            console.log('Event:', e);
            console.log('Hamburger class list before:', newHamburger.classList);
            console.log('Nav menu class list before:', newNavMenu.classList);
            
            newHamburger.classList.toggle('active');
            newNavMenu.classList.toggle('active');
            
            console.log('Hamburger class list after:', newHamburger.classList);
            console.log('Nav menu class list after:', newNavMenu.classList);
        });
        
        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Nav link clicked, closing menu');
                console.log('Event:', e);
                newHamburger.classList.remove('active');
                newNavMenu.classList.remove('active');
            });
        });
        
        console.log('Navbar initialization complete');
    }
    
    // Start waiting for elements
    waitForElements();
}

// Initialize navbar with multiple approaches to ensure it works
console.log('Document ready state:', document.readyState);

// Approach 1: DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    initMobileNavbar();
});

// Approach 2: Window load event
window.addEventListener('load', function() {
    console.log('Window load event fired');
    initMobileNavbar();
});

// Approach 3: Immediate initialization if DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM already ready, initializing navbar');
    initMobileNavbar();
}

// Approach 4: Timeout fallback
setTimeout(function() {
    console.log('Timeout fallback, initializing navbar');
    initMobileNavbar();
}, 2000);

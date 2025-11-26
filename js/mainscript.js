// Preloader functionality
function hidePreloader() {
    try {
        console.log('Attempting to hide preloader');
        const preloader = document.getElementById('preloader');
        if (preloader) {
            console.log('Preloader found, hiding it');
            preloader.classList.add('preloader-hidden');
            
            // Remove preloader from DOM after animation completes
            setTimeout(function() {
                const preloader = document.getElementById('preloader');
                if (preloader && preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                    console.log('Preloader removed from DOM');
                }
            }, 1000);
        } else {
            console.log('Preloader element not found');
        }
    } catch (error) {
        console.error('Error hiding preloader:', error);
        // Fallback: try to remove preloader directly
        try {
            const preloader = document.getElementById('preloader');
            if (preloader && preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
                console.log('Preloader forcefully removed from DOM');
            }
        } catch (fallbackError) {
            console.error('Error in fallback preloader removal:', fallbackError);
        }
    }
}

// Hide preloader when page is fully loaded
window.addEventListener('load', function() {
    console.log('Window loaded, starting preloader hide timer');
    // Use shorter timeout for mobile devices
    const isMobile = window.innerWidth <= 768;
    const timeout = isMobile ? 3500 : 4500; // Shorter timeout for mobile
    setTimeout(hidePreloader, timeout);
});

// Additional fallback for DOM ready state
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, starting preloader hide timer');
    // Use shorter timeout for mobile devices
    const isMobile = window.innerWidth <= 768;
    const timeout = isMobile ? 3500 : 4500; // Shorter timeout for mobile
    setTimeout(hidePreloader, timeout);
});

// Hide preloader after 10 seconds in case of errors
setTimeout(function() {
    console.log('Main fallback timer triggered');
    hidePreloader();
}, 10000);

// Additional mobile-specific preloader handling
function handleMobilePreloader() {
    console.log('Checking if we need mobile-specific preloader handling');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log('Mobile device detected, setting up mobile preloader handling');
        
        // Additional timeout for mobile devices
        setTimeout(function() {
            console.log('Mobile-specific preloader timeout triggered');
            hidePreloader();
        }, 5000);
        
        // Extra check for mobile devices
        setTimeout(function() {
            console.log('Mobile extra check preloader timeout triggered');
            hidePreloader();
        }, 8000);
    }
}

// Run mobile preloader handling
handleMobilePreloader();

// Additional check for when the page is visible
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log('Page became visible, checking preloader status');
        setTimeout(hidePreloader, 2000);
    }
});

// Check if page is already visible
if (document.visibilityState === 'visible') {
    console.log('Page is already visible, setting preloader check');
    setTimeout(hidePreloader, 2000);
}

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

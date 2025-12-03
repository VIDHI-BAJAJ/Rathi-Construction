// Counter Animation for Stats Section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Create observer options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                // Stop observing this element to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll(
        '.hero-title, .hero-button, .about-image-wrapper, .about-content, ' +
        '.projects-header, .stats-title, .stats-subtitle, .stats-text-content, .stats-container, .stats-image, .stats-grid, ' +
        '.why-choose-title, .why-choose-subtitle, .feature-card, ' +
        '.featured-title, .featured-subtitle, .featured-slider-wrapper, ' +
        '.testimonials-section, .testimonials-title, .testimonials-subtitle, ' +
        '.cta-title, .cta-description, .cta-button-wrapper'
    );

    // Also get stat cards, project cards, featured items, and testimonial cards specifically
    const statCards = document.querySelectorAll('.stat-card');
    const projectCards = document.querySelectorAll('.project-card');
    const featuredItems = document.querySelectorAll('.featured-item');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Add initial-hidden class to all animated elements to ensure they start hidden
    animatedElements.forEach(element => {
        if (!element.classList.contains('animate-visible')) {
            element.classList.add('initial-hidden');
        }
    });

    // Add initial-hidden class to stat cards, project cards, featured items, and testimonial cards as well
    statCards.forEach(card => {
        if (!card.classList.contains('animate-visible')) {
            card.classList.add('initial-hidden');
        }
    });

    projectCards.forEach(card => {
        if (!card.classList.contains('animate-visible')) {
            card.classList.add('initial-hidden');
        }
    });

    featuredItems.forEach(item => {
        if (!item.classList.contains('animate-visible')) {
            item.classList.add('initial-hidden');
        }
    });

    testimonialCards.forEach(card => {
        if (!card.classList.contains('animate-visible')) {
            card.classList.add('initial-hidden');
        }
    });

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Observe stat cards
    statCards.forEach(card => {
        observer.observe(card);
    });

    // Observe project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Observe featured items
    featuredItems.forEach(item => {
        observer.observe(item);
    });

    // Observe testimonial cards
    testimonialCards.forEach(card => {
        observer.observe(card);
    });
});

// Ongoing Projects Slider
const ongoingSlider = document.querySelector('.projects-slider');
if (ongoingSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    ongoingSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        ongoingSlider.style.cursor = 'grabbing';
        startX = e.pageX - ongoingSlider.offsetLeft;
        scrollLeft = ongoingSlider.scrollLeft;
    });

    ongoingSlider.addEventListener('mouseleave', () => {
        isDown = false;
        ongoingSlider.style.cursor = 'grab';
    });

    ongoingSlider.addEventListener('mouseup', () => {
        isDown = false;
        ongoingSlider.style.cursor = 'grab';
    });

    ongoingSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ongoingSlider.offsetLeft;
        const walk = (x - startX) * 2;
        ongoingSlider.scrollLeft = scrollLeft - walk;
    });
}

// Featured Projects Horizontal Slider Functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
const prevBtn = document.getElementById('prevBtn');
const mobileViewMore = document.getElementById('mobileViewMore');
const featuredSlider = document.getElementById('featuredSlider');
const progressBar = document.getElementById('featuredProgress');
const totalProjects = 6;
let currentIndex = 0;
const itemsPerView = 3;

// Check if mobile view
function isMobile() {
    return window.innerWidth <= 640;
}

// Show/hide mobile button on load and resize
function updateMobileButton() {
    if (isMobile()) {
        mobileViewMore.style.display = 'inline-flex';
        document.querySelector('.view-project-btn').style.display = 'none';
    } else {
        mobileViewMore.style.display = 'none';
        document.querySelector('.view-project-btn').style.display = 'inline-flex';
    }
}

function updateProgressBar() {
    const percentage = ((currentIndex + itemsPerView) / totalProjects) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

function updateButtons() {
    // Show/hide next button
    if (currentIndex + itemsPerView >= totalProjects) {
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.5';
    } else {
        viewMoreBtn.disabled = false;
        viewMoreBtn.style.opacity = '1';
    }
    
    // Show/hide previous button (only when progress is 100%)
    if (currentIndex + itemsPerView >= totalProjects && currentIndex > 0) {
        prevBtn.style.display = 'flex';
    } else if (currentIndex === 0) {
        prevBtn.style.display = 'none';
    }
}

function slideToNext() {
    if (currentIndex + itemsPerView < totalProjects) {
        currentIndex += itemsPerView;
        const slideAmount = currentIndex * (100 / itemsPerView);
        featuredSlider.style.transform = `translateX(-${slideAmount}%)`;
        updateProgressBar();
        updateButtons();
    }
}

function slideToPrev() {
    if (currentIndex > 0) {
        currentIndex -= itemsPerView;
        const slideAmount = currentIndex * (100 / itemsPerView);
        featuredSlider.style.transform = `translateX(-${slideAmount}%)`;
        updateProgressBar();
        updateButtons();
    }
}

// Mobile view more functionality
function showAllMobileProjects() {
    window.location.href = './project.html';
}

if (viewMoreBtn && featuredSlider) {
    viewMoreBtn.addEventListener('click', slideToNext);
}

if (prevBtn && featuredSlider) {
    prevBtn.addEventListener('click', slideToPrev);
}

if (mobileViewMore) {
    mobileViewMore.addEventListener('click', showAllMobileProjects);
}

// Initialize
updateProgressBar();
updateButtons();
updateMobileButton();

// Update on window resize
window.addEventListener('resize', updateMobileButton);

// Testimonials Slider Functionality
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialsSlider = document.getElementById('testimonialsSlider');
const totalTestimonials = 5; // Actual number of unique testimonials
let testimonialIndex = 0;
let testimonialsPerView = 4;

// For infinite loop, we now have duplicated testimonials
const totalTestimonialCards = 10; 

function updateTestimonialsPerView() {
    if (window.innerWidth <= 640) {
        testimonialsPerView = 1;
    } else if (window.innerWidth <= 968) {
        testimonialsPerView = 2;
    } else if (window.innerWidth <= 1200) {
        testimonialsPerView = 3;
    } else {
        testimonialsPerView = 4;
    }
}

function slideTestimonialNext() {
    testimonialIndex++;
    // Calculate the percentage to move based on one testimonial width
    const oneTestimonialWidth = 100 / testimonialsPerView;
    const slideAmount = testimonialIndex * oneTestimonialWidth;
    testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
    
    // Reset to beginning when reaching the duplicate set
    if (testimonialIndex >= totalTestimonials) {
        setTimeout(() => {
            testimonialsSlider.style.transition = 'none';
            testimonialIndex = 0;
            const slideAmount = testimonialIndex * oneTestimonialWidth;
            testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
            // Force reflow
            testimonialsSlider.offsetHeight;
            testimonialsSlider.style.transition = 'transform 0.5s ease';
        }, 500);
    }
}

function slideTestimonialPrev() {
    if (testimonialIndex > 0) {
        testimonialIndex--;
    } else {
        // Jump to the end of the original set when going backwards from start
        testimonialIndex = totalTestimonials - 1;
        const oneTestimonialWidth = 100 / testimonialsPerView;
        testimonialsSlider.style.transition = 'none';
        const slideAmount = (testimonialIndex + 1) * oneTestimonialWidth;
        testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
        // Force reflow
        testimonialsSlider.offsetHeight;
        testimonialsSlider.style.transition = 'transform 0.5s ease';
        // Then move to the correct position
        setTimeout(() => {
            testimonialIndex--;
            const slideAmount = testimonialIndex * oneTestimonialWidth;
            testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
        }, 10);
        return;
    }
    
    // Calculate the percentage to move based on one testimonial width
    const oneTestimonialWidth = 100 / testimonialsPerView;
    const slideAmount = testimonialIndex * oneTestimonialWidth;
    testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
}

if (testimonialNext && testimonialsSlider) {
    testimonialNext.addEventListener('click', slideTestimonialNext);
}

if (testimonialPrev && testimonialsSlider) {
    testimonialPrev.addEventListener('click', slideTestimonialPrev);
}

// Update testimonials per view on resize
window.addEventListener('resize', () => {
    updateTestimonialsPerView();
    testimonialIndex = 0;
    if (testimonialsSlider) {
        testimonialsSlider.style.transition = 'none';
        testimonialsSlider.style.transform = 'translateX(0)';
        // Force reflow
        testimonialsSlider.offsetHeight;
        testimonialsSlider.style.transition = 'transform 0.5s ease';
    }
});

// Initialize testimonials
updateTestimonialsPerView();
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
            }
        });
    }, observerOptions);

    // About Us Section
    const aboutImage = document.querySelector('.about-image-wrapper');
    const aboutContent = document.querySelector('.about-content');
    if (aboutImage) observer.observe(aboutImage);
    if (aboutContent) observer.observe(aboutContent);

    // Ongoing Projects Section
    const projectsHeader = document.querySelector('.projects-header');
    if (projectsHeader) observer.observe(projectsHeader);

    // Stats Section
    const statsTitle = document.querySelector('.stats-title');
    const statsSubtitle = document.querySelector('.stats-subtitle');
    const statsContainer = document.querySelector('.stats-container');
    const statsImage = document.querySelector('.stats-image');
    if (statsTitle) observer.observe(statsTitle);
    if (statsSubtitle) observer.observe(statsSubtitle);
    if (statsContainer) observer.observe(statsContainer);
    if (statsImage) observer.observe(statsImage);

    // Why Choose Us Section
    const whyChooseTitle = document.querySelector('.why-choose-title');
    const whyChooseSubtitle = document.querySelector('.why-choose-subtitle');
    const featureCards = document.querySelectorAll('.feature-card');
    if (whyChooseTitle) observer.observe(whyChooseTitle);
    if (whyChooseSubtitle) observer.observe(whyChooseSubtitle);
    featureCards.forEach(card => observer.observe(card));

    // Featured Projects Section
    const featuredTitle = document.querySelector('.featured-title');
    const featuredSubtitle = document.querySelector('.featured-subtitle');
    const featuredSlider = document.querySelector('.featured-slider-wrapper');
    if (featuredTitle) observer.observe(featuredTitle);
    if (featuredSubtitle) observer.observe(featuredSubtitle);
    if (featuredSlider) observer.observe(featuredSlider);

    // Testimonials Section
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialsSection) observer.observe(testimonialsSection);

    // CTA Section
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDescription = document.querySelector('.cta-description');
    const ctaButton = document.querySelector('.cta-button-wrapper');
    if (ctaTitle) observer.observe(ctaTitle);
    if (ctaDescription) observer.observe(ctaDescription);
    if (ctaButton) observer.observe(ctaButton);
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
const totalTestimonials = 5;
let testimonialIndex = 0;
let testimonialsPerView = 4;

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
    // Move one testimonial at a time
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    // Calculate the percentage to move based on one testimonial width
    const oneTestimonialWidth = 100 / testimonialsPerView;
    const slideAmount = testimonialIndex * oneTestimonialWidth;
    testimonialsSlider.style.transform = `translateX(-${slideAmount}%)`;
}

function slideTestimonialPrev() {
    // Move one testimonial at a time
    testimonialIndex = (testimonialIndex - 1 + totalTestimonials) % totalTestimonials;
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
        testimonialsSlider.style.transform = 'translateX(0)';
    }
});

// Initialize testimonials
updateTestimonialsPerView();
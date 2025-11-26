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

    // Amenities Section
    const amenitiesHeader = document.querySelector('.amenities-header-content');
    const amenitiesSubtitle = document.querySelector('.amenities-header-subtitle');
    const amenitiesGrid = document.querySelector('.amenities-grid');
    const amenityCards = document.querySelectorAll('.amenity-card');
    
    if (amenitiesHeader) observer.observe(amenitiesHeader);
    if (amenitiesSubtitle) observer.observe(amenitiesSubtitle);
    if (amenitiesGrid) observer.observe(amenitiesGrid);
    amenityCards.forEach(card => observer.observe(card));

    // Floor Plans Section
    const floorHeader = document.querySelector('.floor-header-section');
    const floorCarousel = document.querySelector('.carousel-wrapper');
    
    if (floorHeader) observer.observe(floorHeader);
    if (floorCarousel) observer.observe(floorCarousel);

    // Map Section
    const mapHeader = document.querySelector('.map-header-section');
    const mapContainer = document.querySelector('.maps');
    
    if (mapHeader) observer.observe(mapHeader);
    if (mapContainer) observer.observe(mapContainer);

    // Related Projects Section
    const projectsHeader = document.querySelector('.header-section');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectsHeader) observer.observe(projectsHeader);
    if (projectsGrid) observer.observe(projectsGrid);
    projectCards.forEach(card => observer.observe(card));

    // CTA Section
    const ctaContent = document.querySelector('.cta-content');
    const ctaButton = document.querySelector('.cta-button-wrapper');
    
    if (ctaContent) observer.observe(ctaContent);
    if (ctaButton) observer.observe(ctaButton);
});
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

    // Stats Section
    const statsTitle = document.querySelector('.stats-title');
    const statsSubtitle = document.querySelector('.stats-subtitle');
    const statsContainer = document.querySelector('.stats-container');
    const statsImage = document.querySelector('.stats-image');
    if (statsTitle) observer.observe(statsTitle);
    if (statsSubtitle) observer.observe(statsSubtitle);
    if (statsContainer) observer.observe(statsContainer);
    if (statsImage) observer.observe(statsImage);

    // Leadership Section
    const leadershipText = document.querySelector('.leadership-purple-panel');
    const leadershipImages = document.querySelector('.leaders-grid');
    if (leadershipText) observer.observe(leadershipText);
    if (leadershipImages) observer.observe(leadershipImages);

    // Why Choose Us Section
    const whyChooseTitle = document.querySelector('.why-choose-title');
    const whyChooseSubtitle = document.querySelector('.why-choose-subtitle');
    const featureCards = document.querySelectorAll('.feature-card');
    if (whyChooseTitle) observer.observe(whyChooseTitle);
    if (whyChooseSubtitle) observer.observe(whyChooseSubtitle);
    featureCards.forEach(card => observer.observe(card));

    // CTA Section
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDescription = document.querySelector('.cta-description');
    const ctaButton = document.querySelector('.cta-button-wrapper');
    if (ctaTitle) observer.observe(ctaTitle);
    if (ctaDescription) observer.observe(ctaDescription);
    if (ctaButton) observer.observe(ctaButton);
});
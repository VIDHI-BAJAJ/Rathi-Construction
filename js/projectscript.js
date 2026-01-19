const projects = [
    {
        id: 1,
        title: "Sri Tirumala Golden Gate,Shamsheer Gunj, Near Falukunuma Palace, Hyderabad",
        image: "./Images/On Going/Golden Gate.png",
        category: "upcoming",
        link: "./projects/goldengate.html"
    },
    {
        id: 2,
        title: "Sri Tirumala Golden Pride,Mallapur, Near NOMA Convention Centre, Nacharam, Hyderabad",
        image: "./Images/On Going/Goldenpride.png",
        category: "upcoming",
        link: "./projects/goldenpride.html"
    },
    {
        id: 3,
        title: "Sri Tirumala Bliss,Raghavendra Colony, Aramghar Circle, Hyderabad",
        image: "./Images/On Going/SriTirumalaBliss.png",
        category: "upcoming",
        link: "./projects/tirumalabliss.html"
    },
    {
        id: 20,
        title: " Sri Tirumala Fortune,Srinagar Village, Maheshwaram Mandal, Hyderabad",
        image: "./Images/On Going/st-fortune.jpg",
        category: "upcoming",
        link: "./projects/fortune.html"
    },

    {
        id: 21,
        title: "Needs 3,Hoyasala Nagar Main Road, Horamavu, Bengaluru",
        image: "./Images/On Going/Needs 3.png",
        category: "upcoming",
        link: "./projects/need3.html"
    },

    // Moved to end as requested to show full building width
    // {
    //     id: 4,
    //     title: "Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad",
    //     image: "./Images/Completed/Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad.webp",
    //     category: "completed"
    // },
    {
        id: 5,
        title: "Sri Tirumala Lotus, Shivarampally, Hyderabad",
        image: "./Images/Completed/Tirumal Lotus.png",
        category: "completed"
    },
    {
        id: 6,
        title: "Sri Tirumala Elite, Shivarampally, Hyderabad",
        image: "./Images/Completed/Tirumal Elite.png",
        category: "completed"
    },
    // Moved to end as requested to show full building width
    // {
    //     id: 7,
    //     title: "Sri Tirumala Prestige, Erramanzil, Kahirtabad.",
    //     image: "./Images/Completed/Splendor.jpg",
    //     category: "completed"
    // },
    {
        id: 8,
        title: "Sri Tirumala Anmol, Esamiya Bazaar, Hyderabad",
        image: "./Images/Completed/Sri Tirumala Anmol.png",
        category: "completed"
    },
    {
        id: 9,
        title: "Sri Tirumala Almond, Shivarampally, Hyderabad",
        image: "./Images/Completed/Sri Tirumala Almond.png",
        category: "completed"
    },
    {
        id: 10,
        title: "Sri Tirumala Dreams, Shivarampally, Hyderabad",
        image: "./Images/Completed/Tirumal Dreams.png",
        category: "completed"
    },
    {
        id: 11,
        title: "Sri Tirumala Crest, Karmanghat, Hyderabad",
        image: "./Images/Completed/Tirumal Crest.png",
        category: "completed"
    },
    // Moved to end as requested to show full building width
    // {
    //     id: 12,
    //     title: "Sri Tirumala Sarovar, Hosur Road, Bangalore",
    //     image: "./Images/Completed/Sarovar.png",
    //     category: "completed"
    // },
    {
        id: 13,
        title: "Sri Tirumala Millennium, Mallapur, Hyderabad",
        image: "./Images/Completed/Millennium.png",
        category: "completed"
    },
    {
        id: 14,
        title: "Sri Tirumala harmony, Kapra, Hyderabad",
        image: "./Images/Completed/Harmony.png",
        category: "completed"
    },
    {
        id: 15,
         title: "Sri Tirumala splendar, Silk Board Bangalore.",
        image: "./Images/Completed/Sri Tirumala splendar.png",
        category: "completed"
    },
    // Moved to end as requested to show full building width
    // {
    //     id: 16,
    //     title: "Sri Tirumala Hamilton A&B, Musheerabad, Hyderabad",
    //     image: "./Images/Completed/Tirumal Hamilton A&B.png",
    //     category: "completed"
    // },
    {
        id: 17,
        title: "Tirumala Jewels, Gandhinagar, Hyderabad",
        image: "./Images/Completed/Tirumala Jewels.png",
        category: "completed"
    },
    {
        id: 18,
        title: "Gopal Dham, Ashok Nagar, Hyderabad",
        image: "./Images/Completed/Gopal Dham.png",
        category: "completed"
    },
    {
        id: 19,
        title: "Tirumala Orchid, GandhiNagar, Hyderabad",
        image: "./Images/Completed/Tirumala Orchid.png",
        category: "completed"
    },
    // Projects moved to end as requested to show full building width
    {
        id: 4,
        title: "Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad",
        image: "./Images/Completed/Sri Tirumala Pranmoksha.png",
        category: "completed"
    },
    {
        id: 7,
        title: "Sri Tirumala Prestige, Erramanzil, Kahirtabad.",
        image: "./Images/Completed/Prestige.png",
        category: "completed"
    },
    {
        id: 12,
        title: "Sri Tirumala Sarovar, Hosur Road, Bangalore",
        image: "./Images/Completed/Sarovar.png",
        category: "completed"
    },
    {
        id: 16,
        title: "Sri Tirumala Hamilton A&B, Musheerabad, Hyderabad",
        image: "./Images/Completed/Tirumal Hamilton A&B.png",
        category: "completed"
    }
];



let currentFilter = 'upcoming';
let currentPage = 1;
const projectsPerPage = 12; // Increased for better distribution on larger screens

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create observer for animations
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

    // Observe hero section elements
    const heroTitle = document.querySelector('.hero-title');
    const breadcrumb = document.querySelector('.breadcrumb');
    if (heroTitle) observer.observe(heroTitle);
    if (breadcrumb) observer.observe(breadcrumb);

    // Observe main content elements
    const container = document.querySelector('.container');
    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header-text');
    const filterDropdown = document.querySelector('.filter-dropdown');
    
    if (container) observer.observe(container);
    if (header) observer.observe(header);
    if (headerText) observer.observe(headerText);
    if (filterDropdown) observer.observe(filterDropdown);

    // Toggle dropdown
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropdownBtn && dropdownMenu) {
        // Remove any existing event listeners to prevent duplicates
        const newBtn = dropdownBtn.cloneNode(true);
        dropdownBtn.parentNode.replaceChild(newBtn, dropdownBtn);
        
        newBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });
        
        // Update reference to the new button
        const updatedDropdownBtn = newBtn;

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (dropdownMenu && !e.target.closest('.filter-dropdown')) {
                dropdownMenu.classList.remove('active');
            }
        });

        // Filter projects
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function(item) {
            // Remove any existing event listeners to prevent duplicates
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
            
            newItem.addEventListener('click', function(e) {
                e.stopPropagation();
                currentFilter = e.target.dataset.filter;
                updatedDropdownBtn.textContent = e.target.textContent;
                dropdownMenu.classList.remove('active');
                currentPage = 1;
                renderProjects();
            });
        });
    }

    // Navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProjects();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const filteredProjects = currentFilter === 'all' 
                ? projects 
                : projects.filter(p => p.category === currentFilter);
                
            // No artificial limits - calculate totalPages based on all projects in category
            const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
            
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects();
            }
        });
    }

    // Initial render with "Upcoming" as default
    setTimeout(() => {
        renderProjects();
    }, 100);
});

// Render projects
function renderProjects() {
    let filteredProjects = currentFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category === currentFilter);
        
    // Remove artificial limits - show all projects in category
    // This ensures continuous flow without awkward pagination
    
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        // Remove special layout class
        projectsGrid.classList.remove('special-layout');
        
        projectsGrid.innerHTML = currentProjects.map(project => {
            // Split the title to extract project name and location
            // Assuming the format is "Project Name,Location Details"
            const titleParts = project.title.split(',');
            const projectName = titleParts[0];
            const location = titleParts.slice(1).join(', ');
            
            // Simple card class
            const cardClass = `project-card ${project.category === 'upcoming' ? 'clickable' : 'not-clickable'}`;
            
            return `
            <div class="${cardClass}" 
                 onclick="${project.category === 'upcoming' && project.link ? `redirectToProject('${project.link}')` : ''}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/500x400?text=Image+Not+Found';" loading="eager" decoding="async">
                    <div class="project-status ${project.category}">${project.category === 'upcoming' ? 'Ongoing' : 'Completed'}</div>
                </div>
                <div class="project-info">
                    <h3 class="project-name">${projectName}</h3>
                    ${location ? `
                    <div class="project-location">
                        <svg class="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span class="location-text">${location}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
        }).join('');
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
    
    updateNavButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Images are now handled with CSS object-fit: contain
}

// Redirect function - REAL NAVIGATION ENABLED
function redirectToProject(link) {
    // For GitHub Pages, we need to ensure the link is relative to the root
    if (link.startsWith('./')) {
        window.location.href = link;
    } else if (link.startsWith('/')) {
        // Handle absolute paths for GitHub Pages
        window.location.href = '.' + link;
    } else {
        // Handle relative paths without ./ prefix
        window.location.href = './' + link;
    }
}

// Update navigation button styles
function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        if (prevBtn.disabled) {
            prevBtn.style.opacity = '0.4';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
    }
    
    if (nextBtn) {
        if (nextBtn.disabled) {
            nextBtn.style.opacity = '0.4';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
}

// Image adjustment functions removed as we're now using CSS object-fit: contain

// Function to observe project cards
function observeProjectCards() {
    // Use a slight delay to ensure cards are rendered
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            // Add delay based on index for staggered animation
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }, 50);
}

// Window resize handling removed as images are now handled with CSS
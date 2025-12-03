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
        id: 4,
        title: "Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad",
        image: "./Images/Completed/Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad.webp",
        category: "completed"
    },
    {
        id: 5,
        title: "Sri Tirumala Lotus, Shivarampally, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Lotus.jpg",
        category: "completed"
    },
    {
        id: 6,
        title: "Sri Tirumala Elite, Shivarampally, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Elite.jpg",
        category: "completed"
    },
    {
        id: 7,
        title: "Sri Tirumala Prestige, Erram Manzi, Kahirtabad.",
        image: "./Images/Completed/Splendor.jpg",
        category: "completed"
    },
    {
        id: 8,
        title: "Sri Tirumala Anmol, Esamia Bazar, Hyderabad",
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
        image: "./Images/Completed/Tirumal Dreams.jpg",
        category: "completed"
    },
    {
        id: 11,
        title: "Sri Tirumala Crest, Karmanghat, Hyderabad",
        image: "./Images/Completed/Tirumal Crest.png",
        category: "completed"
    },
    {
        id: 12,
        title: "Sri Tirumala Sarovar, Hosur Road, Bangalore",
        image: "./Images/Completed/Sarovar.png",
        category: "completed"
    },
    {
        id: 13,
        title: "Sri Tirumala splendar, Silk Board Bangalore.",
        image: "./Images/Completed/Splendor.jpg",
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
        title: "Sri Tirumala Millennium, Mallapur, Hyderabad",
        image: "./Images/Completed/Millennium.png",
        category: "completed"
    },
    {
        id: 16,
        title: "Sri Tirumala Hamilton A&B, Musheerabad, Hyderabad",
        image: "./Images/Completed/Tirumal Hamilton A&B.png",
        category: "completed"
    },
    {
        id: 17,
        title: "Tirumala Jewels, Gandhinagar, Hyderabad",
        image: "./Images/Completed/Tirumala Jewels.jpeg",
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
    }
];

let currentFilter = 'upcoming';
let currentPage = 1;
const projectsPerPage = 6;

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
                
            // Apply limits based on category
            let limitedProjects = filteredProjects;
            if (currentFilter === 'upcoming') {
                limitedProjects = filteredProjects.slice(0, 3); // Limit to 6 upcoming projects (2 rows of 3)
            } else if (currentFilter === 'completed') {
                limitedProjects = filteredProjects.slice(0, 18);
            } else if (currentFilter === 'all') {
                limitedProjects = filteredProjects.slice(0, 20);
            }
                
            const totalPages = Math.ceil(limitedProjects.length / projectsPerPage);
            
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
        
    // Apply limits based on category
    if (currentFilter === 'upcoming') {
        filteredProjects = filteredProjects.slice(0, 6); // Limit to 6 upcoming projects (2 rows of 3)
    } else if (currentFilter === 'completed') {
        filteredProjects = filteredProjects.slice(0, 18); // Limit to 18 completed projects
    } else if (currentFilter === 'all') {
        filteredProjects = filteredProjects.slice(0, 20); // Limit to 20 total projects
    }

    // Define special projects that need to be grouped together at the end
    const specialProjects = [
        'Sri Tirumala Pranmoksha Pride',
        'Sri Tirumala Sarovar',
        'Sri Tirumala splendar',
        'Sri Tirumala Prestige',
        'Sri Tirumala Millennium',
        'Sri Tirumala harmony',
        'Sri Tirumala Hamilton A&B'
    ];

    // Separate special and regular projects
    const specialFilteredProjects = filteredProjects.filter(project => {
        const projectName = project.title.split(',')[0];
        return specialProjects.includes(projectName);
    });

    const regularFilteredProjects = filteredProjects.filter(project => {
        const projectName = project.title.split(',')[0];
        return !specialProjects.includes(projectName);
    });

    // Combine projects with special projects at the end
    let orderedProjects = [...regularFilteredProjects, ...specialFilteredProjects];

    const totalPages = Math.ceil(orderedProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = orderedProjects.slice(startIndex, endIndex);

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        // Use the specialProjects array defined earlier
        const hasSpecialProjects = currentProjects.some(project => {
            const projectName = project.title.split(',')[0];
            return specialProjects.includes(projectName);
        });
        
        // Apply special layout class if needed
        if (hasSpecialProjects) {
            projectsGrid.classList.add('special-layout');
        } else {
            projectsGrid.classList.remove('special-layout');
        }
        
        projectsGrid.innerHTML = currentProjects.map(project => {
            // Split the title to extract project name and location
            // Assuming the format is "Project Name,Location Details"
            const titleParts = project.title.split(',');
            const projectName = titleParts[0];
            const location = titleParts.slice(1).join(', ');
            
            // Preload image to improve loading speed
            const img = new Image();
            img.src = project.image;
            
            // Check if this project needs full building display
            const needsFullBuilding = specialProjects.includes(projectName);
            const imageClass = needsFullBuilding ? 'project-image full-building' : 'project-image';
            
            // Check if this is one of the special projects that needs reduced height
            const needsReducedHeight = specialProjects.includes(projectName);
            
            // Check if this is the specific Hamilton A&B project that needs 300px height
            const isHamiltonProject = projectName === 'Sri Tirumala Hamilton A&B';
            
            // Build card class with additional specificity for Hamilton project
            let cardClass = 'project-card';
            if (needsReducedHeight) {
                cardClass += ' reduced-height';
                if (isHamiltonProject) {
                    cardClass += ' hamilton-project';
                }
            }
            cardClass += ` ${project.category === 'upcoming' ? 'clickable' : 'not-clickable'}`;
            
            return `
            <div class="${cardClass}" 
                 onclick="${project.category === 'upcoming' && project.link ? `redirectToProject('${project.link}')` : ''}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="${imageClass}" onerror="this.onerror=null;this.src='https://via.placeholder.com/500x400?text=Image+Not+Found';" loading="eager" decoding="async" width="500" height="400">
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
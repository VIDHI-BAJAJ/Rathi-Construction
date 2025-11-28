const projects = [
    {
        id: 1,
        title: "Sri Tirumala Golden Gate,Shamsheer Gunj, Near Falukunuma Palace, Hyderabad",
        image: "./Images/golden gate/Golden Gate.jpg",
        category: "upcoming",
        link: "./projects/goldengate.html"
    },
    {
        id: 2,
        title: "Sri Tirumala Pranmoksha Pride,Mallapur, Near NOMA Convention Centre, Nacharam, Hyderabad",
        image: "./Images/Golden Pride/Golden-pride.jpg",
        category: "upcoming",
        link: "./projects/goldenpride.html"
    },
    {
        id: 3,
        title: "Sri Tirumala Bliss,Raghavendra Colony, Aramghar Circle, Hyderabad",
        image: "./Images/Bliss/Home Elevation.jpg",
        category: "upcoming",
        link: "./projects/tirumalabliss.html"
    },
    {
        id: 4,
        title: "Sri Tirumala Pranmoksha Pride, Kapra, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Elite.jpg",
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
        title: "Sri Tirumala Hamilton A&B, Musheerabad, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 8,
        title: "Sri Tirumala Anmol, Esamia Bazar, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 9,
        title: "Sri Tirumala Almond, Shivarampally, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 10,
        title: "Sri Tirumala Dreams, Shivarampally, Hyderabad",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop",
        category: "completed"
    },
    {
        id: 11,
        title: "Sri Tirumala Crest, Karmanghat, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 12,
        title: "Sri Tirumala Sarovar, Hosur Road, Bangalore",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
        category: "completed"
    },
    {
        id: 13,
        title: "Sri Tirumala splendar, Silk Board Bangalore.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
        category: "completed"
    },
    {
        id: 14,
        title: "Sri Tirumala harmony, Kapra, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 15,
        title: "Sri Tirumala Millennium, Mallapur, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 16,
        title: "Sri Tirumala Prestige, Erram Manzi, Kahirtabad.",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 17,
        title: "Tirumala Jewels, Gandhinagar, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 18,
        title: "Gopal Dham, Ashok Nagar, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 19,
        title: "Tirumala Orchid, GandhiNagar, Hyderabad",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    },
    {
        id: 20,
        title: "Sri Tirumala Riverside Plaza",
        image: "./Images/Homepage/Ongoing projects/Final-image.jpg",
        category: "completed"
    }
];

let currentFilter = 'upcoming';
let currentPage = 1;
const projectsPerPage = 6;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdown
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (dropdownMenu && !e.target.closest('.filter-dropdown')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Filter projects
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.filter;
            if (dropdownBtn) {
                dropdownBtn.textContent = e.target.textContent;
            }
            if (dropdownMenu) {
                dropdownMenu.classList.remove('active');
            }
            currentPage = 1;
            renderProjects();
        });
    });

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
                limitedProjects = filteredProjects.slice(0, 6); // Limit to 6 upcoming projects (2 rows of 3)
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
    renderProjects();
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

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = currentProjects.map(project => {
            // Split the title to extract project name and location
            // Assuming the format is "Project Name,Location Details"
            const titleParts = project.title.split(',');
            const projectName = titleParts[0];
            const location = titleParts.slice(1).join(', ');
            
            return `
            <div class="project-card ${project.category === 'upcoming' ? 'clickable' : 'not-clickable'}" 
                 onclick="${project.category === 'upcoming' && project.link ? `redirectToProject('${project.link}')` : ''}">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/500x400?text=Image+Not+Found';">
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
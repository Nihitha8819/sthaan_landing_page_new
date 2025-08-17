// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Property card hover effects
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    });
});

// Search form enhancement
document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const searchValue = searchInput.value.trim();
    
    if (searchValue) {
        // Simulate search action
        searchInput.style.borderColor = '#667eea';
        setTimeout(() => {
            alert(`Searching for properties in "${searchValue}"...`);
            searchInput.style.borderColor = '';
        }, 300);
    } else {
        searchInput.style.borderColor = '#ff6b6b';
        searchInput.placeholder = 'Please enter a location to search';
        setTimeout(() => {
            searchInput.style.borderColor = '';
            searchInput.placeholder = 'Search for locality, landmark, project, or builder...';
        }, 2000);
    }
});

// Dynamic insights counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.insight-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + (target === 99 ? '%' : target >= 1000 ? 'K+' : '+');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + (target === 99 ? '%' : target >= 1000 ? 'K+' : '+');
            }
        }, 20);
    });
}

// Trigger counter animation when insights section is visible
const insightsSection = document.querySelector('.insights');
const insightsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            insightsObserver.unobserve(entry.target);
        }
    });
});

insightsObserver.observe(insightsSection);

// Mobile menu toggle functionality (optional enhancement)
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.display = 'block';
    
        // Append the button to the nav
        nav.appendChild(mobileMenuBtn);
    
        // Toggle nav links visibility on button click
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
/**
 * Azman Sabbir - Portfolio Website
 * Lead Automation Engineer | SQA Specialist
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initNavigation();
    initScrollEffects();
    initTypingEffect();
    initCounterAnimation();
    initSkillBars();
    initPortfolioFilter();
    initTestimonialSlider();
    initFAQAccordion();
    initContactForm();
    initParticles();
    initAOS();
});

/**
 * Preloader
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }, 500);
    });
}

/**
 * Navigation
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Active link on scroll
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
    const backToTop = document.getElementById('back-to-top');

    // Back to top button visibility
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Back to top click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

/**
 * Typing Effect
 */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const text = typingElement.textContent;
    typingElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start typing after a delay
    setTimeout(type, 1000);
}

/**
 * Counter Animation
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer for counters
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        threshold: 0.5
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

/**
 * Portfolio Filter
 */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Portfolio modal
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const modal = document.getElementById('project-modal');
    const modalClose = modal.querySelector('.modal-close');
    const modalBody = modal.querySelector('.modal-body');

    // Project data
    const projects = {
        1: {
            title: 'Playwright TypeScript Framework',
            category: 'Playwright',
            image: 'assets/images/project1.jpg',
            problem: 'The client needed a robust, maintainable E2E testing framework that could scale with their growing application and integrate seamlessly with their CI/CD pipeline.',
            solution: 'Designed and implemented a comprehensive Playwright framework using TypeScript with Page Object Model pattern, custom utilities for common operations, and detailed reporting.',
            tools: ['Playwright', 'TypeScript', 'Page Object Model', 'Allure Reports', 'GitHub Actions'],
            outcome: 'Reduced test execution time by 40%, improved test reliability to 98%, and enabled parallel test execution across multiple browsers.'
        },
        2: {
            title: 'Playwright BDD (Gherkin) Framework',
            category: 'Playwright',
            image: 'assets/images/project2.jpg',
            problem: 'Non-technical stakeholders needed visibility into test scenarios and the ability to contribute to test specifications.',
            solution: 'Implemented BDD automation using Playwright with Cucumber and Gherkin syntax, enabling business-readable test scenarios.',
            tools: ['Playwright', 'Cucumber', 'Gherkin', 'TypeScript', 'HTML Reports'],
            outcome: 'Improved stakeholder engagement, better test coverage documentation, and clearer acceptance criteria.'
        },
        3: {
            title: 'CI/CD Automation Pipeline',
            category: 'CI/CD',
            image: 'assets/images/project3.jpg',
            problem: 'Manual test execution was slowing down releases and causing inconsistent quality checks.',
            solution: 'Designed CI/CD pipelines with GitHub Actions and Jenkins, implementing parallel test execution, automatic retries, and comprehensive reporting.',
            tools: ['GitHub Actions', 'Jenkins', 'Docker', 'Playwright', 'Slack Integration'],
            outcome: 'Achieved 70% faster feedback cycles, automated nightly regression runs, and real-time test result notifications.'
        },
        4: {
            title: 'UI Automation for Crowdfundly',
            category: 'Cypress',
            image: 'assets/images/project4.jpg',
            problem: 'Critical user journeys including payment flows needed comprehensive automated testing.',
            solution: 'Developed end-to-end test suite using Cypress covering user registration, campaign creation, donation flows, and admin operations.',
            tools: ['Cypress', 'JavaScript', 'Stripe Testing', 'Mochawesome Reports'],
            outcome: 'Achieved 85% coverage of critical paths, caught 15+ bugs before production, and reduced regression testing time by 60%.'
        }
    };

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                modalBody.innerHTML = `
                    <div class="project-modal-content">
                        <img src="${project.image}" alt="${project.title}" class="project-modal-image">
                        <div class="project-modal-info">
                            <span class="project-modal-category">${project.category}</span>
                            <h2 class="project-modal-title">${project.title}</h2>

                            <div class="project-modal-section">
                                <h3><i class="fas fa-exclamation-circle"></i> Problem</h3>
                                <p>${project.problem}</p>
                            </div>

                            <div class="project-modal-section">
                                <h3><i class="fas fa-lightbulb"></i> Solution</h3>
                                <p>${project.solution}</p>
                            </div>

                            <div class="project-modal-section">
                                <h3><i class="fas fa-tools"></i> Tools Used</h3>
                                <div class="project-modal-tools">
                                    ${project.tools.map(tool => `<span>${tool}</span>`).join('')}
                                </div>
                            </div>

                            <div class="project-modal-section">
                                <h3><i class="fas fa-chart-line"></i> Outcome</h3>
                                <p>${project.outcome}</p>
                            </div>
                        </div>
                    </div>
                `;

                modal.classList.add('active');
                document.body.classList.add('no-scroll');
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    const totalSlides = cards.length;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.testimonial-dots .dot');

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-advance every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}

/**
 * FAQ Accordion
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/**
 * Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        margin-left: 10px;
    `;
    closeBtn.addEventListener('click', () => notification.remove());

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to head
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    /* Project Modal Styles */
    .project-modal-content {
        display: flex;
        flex-direction: column;
    }

    .project-modal-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 25px;
    }

    .project-modal-category {
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        color: #0ea5e9;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }

    .project-modal-title {
        font-size: 24px;
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 25px;
    }

    .project-modal-section {
        margin-bottom: 20px;
    }

    .project-modal-section h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #0ea5e9;
        margin-bottom: 10px;
    }

    .project-modal-section p {
        font-size: 14px;
        color: #94a3b8;
        line-height: 1.7;
    }

    .project-modal-tools {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .project-modal-tools span {
        font-size: 12px;
        padding: 6px 14px;
        background: #334155;
        color: #94a3b8;
        border-radius: 4px;
    }
`;
document.head.appendChild(notificationStyles);

/**
 * Particles Background
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(14, 165, 233, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        left: ${left}%;
        top: 100%;
        animation: floatUp ${duration}s linear ${delay}s infinite;
    `;

    container.appendChild(particle);
}

// Add particle animation
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            disable: 'mobile'
        });
    }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle scroll events with throttling for better performance
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based animations can be added here
}, 100));

// Handle resize events with debouncing
window.addEventListener('resize', debounce(function() {
    // Handle resize events
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}, 250));

// ===========================
// Utility Functions
// ===========================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showLocation(eventName) {
    alert(`Location details for ${eventName}:\n\nThe Grand Palace Hotel\n123 MG Road, Bangalore, Karnataka 560001, India\n\nOpening in Google Maps...`);
    window.open('https://www.google.com/maps/search/The+Grand+Palace+Hotel+Bangalore', '_blank');
}

// ===========================
// Falling Flowers Animation
// ===========================

function createFallingFlowers() {
    const container = document.getElementById('fallingFlowers');
    if (!container) return;

    const flowerCount = 20;
    const flowerSymbol = '❀';

    for (let i = 0; i < flowerCount; i++) {
        const petal = document.createElement('span');
        petal.className = 'flower-petal';
        petal.textContent = flowerSymbol;

        // Randomize position and animation
        petal.style.left = Math.random() * 100 + '%';
        petal.style.fontSize = (12 + Math.random() * 5) + 'px';
        petal.style.animationDelay = Math.random() * 8 + 's';
        petal.style.animationDuration = (6 + Math.random() * 4) + 's';

        container.appendChild(petal);
    }
}

// Initialize falling flowers on page load
document.addEventListener('DOMContentLoaded', createFallingFlowers);


// ===========================
// Navigation Scroll Effect
// ===========================

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Mobile Navigation Toggle
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ===========================
// Wishes Form Handler
// ===========================

const wishesForm = document.getElementById('wishesForm');
const messagesFeed = document.getElementById('messagesFeed');

wishesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create new message card
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.style.opacity = '0';

    // Get current time
    const now = new Date();
    const timeString = 'Just now';

    messageCard.innerHTML = `
        <div class="message-header">
            <span class="message-author">${escapeHtml(name)}</span>
            <span class="message-date">${timeString}</span>
        </div>
        <p class="message-text">${escapeHtml(message)}</p>
    `;

    // Insert at the beginning of the feed
    messagesFeed.insertBefore(messageCard, messagesFeed.firstChild);

    // Animate in
    setTimeout(() => {
        messageCard.style.transition = 'opacity 0.5s ease';
        messageCard.style.opacity = '1';
    }, 10);

    // Reset form
    wishesForm.reset();

    // Show success message
    showNotification('Thank you for your wishes! ❤️');
});

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===========================
// Notification System
// ===========================

function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: linear-gradient(135deg, #9B7D4B 0%, #C4A574 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        box-shadow: 0 5px 20px rgba(155, 125, 75, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add notification animations to the page
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Chat Button Handler
// ===========================

const chatButton = document.getElementById('chatButton');

chatButton.addEventListener('click', () => {
    alert('Chat feature coming soon! 💬\n\nFor now, please feel free to leave your message in the Wishes section or contact us directly.');
});

// ===========================
// Active Navigation Link Highlight
// ===========================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Parallax Effect for Hero Section
// ===========================

window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;

    if (heroContent && scrollPosition < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrollPosition / window.innerHeight);
    }
});

// ===========================
// Gallery Item Click Handler
// ===========================

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Gallery lightbox feature coming soon! 📸');
    });
});

// ===========================
// Auto-scroll Timeline Animation
// ===========================

// ===========================
// Auto-scroll Timeline Animation (Left to Right)
// ===========================

const timelineSection = document.querySelector('.timeline-section');
const timelineItems = document.querySelectorAll('.timeline-item');

// Initial state
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)'; // Start with fade-up
    item.style.transition = 'opacity 0.8s ease, transform 0.1s linear'; // Short transform transition for smooth scroll
});

window.addEventListener('scroll', () => {
    if (!timelineSection) return;

    const sectionTop = timelineSection.offsetTop;
    const sectionHeight = timelineSection.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check if within view
    if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {

        // Calculate progress (0 to 1) through the section
        const progress = (scrollY + windowHeight - sectionTop) / (windowHeight + sectionHeight);

        timelineItems.forEach((item, index) => {
            // Fade in logic
            if (scrollY + windowHeight > sectionTop + 100) {
                item.style.opacity = '1';
            }

            // Horizontal movement logic (Left to Right)
            // Stagger movement slightly for effect
            const moveAmount = (progress * 100) - 20; // Move from -20px to +80px roughly

            // Apply horizontal translation based on scroll
            // We preserve the vertical fade-in '0' once it's visible
            item.style.transform = `translateX(${moveAmount * (index + 1) * 0.5}px)`;
        });
    }
});

// ===========================
// Countdown Timer (Optional Feature)
// ===========================

function updateCountdown() {
    const weddingDate = new Date('2025-02-14T11:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // You can display this in a countdown element if you add one to HTML
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s until the wedding!`);
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// ===========================
// Preload Images (for better performance)
// ===========================

function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// ===========================
// Easter Egg: Confetti on Certain Actions
// ===========================

function createConfetti() {
    const colors = ['#9B7D4B', '#C4A574', '#F8F6F1', '#38332E'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            z-index: 9999;
            pointer-events: none;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Trigger confetti on form submission
wishesForm.addEventListener('submit', () => {
    createConfetti();
});

// ===========================
// Log initialization
// ===========================

console.log('%c💒 Wedding Website Loaded Successfully! 💒', 'color: #9B7D4B; font-size: 20px; font-weight: bold;');
console.log('%cUday & Neha - February 14, 2025', 'color: #38332E; font-size: 14px;');

// ===========================
// Royal Curtain Preloader
// ===========================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Wait a moment then open curtains
        setTimeout(() => {
            preloader.classList.add('open');
            // Allow pointer events on body after open
            document.body.style.overflow = 'auto'; // Ensure scroll is enabled
        }, 2000); // 2 seconds delay
    }
});

// ===========================
// Scroll-Triggered Event Flower Bursts
// ===========================

const eventObserverOptions = {
    threshold: 0.6, // Trigger when 60% visible
    rootMargin: "0px"
};

const eventObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const theme = entry.target.dataset.theme;
            if (theme && !entry.target.dataset.triggered) {
                triggerEventTheme(theme, entry.target);
                entry.target.dataset.triggered = "true"; // Only trigger once per session or remove this to trigger every time
            }
        }
    });
}, eventObserverOptions);

document.querySelectorAll('.timeline-event').forEach(event => {
    eventObserver.observe(event);
});

function triggerEventTheme(theme, element) {
    const colors = {
        'haldi': { color: '#FFD700', symbol: '🌻' }, // Yellow
        'mehendi': { color: '#4CAF50', symbol: '🌿' }, // Green
        'sangeet': { color: '#E91E63', symbol: '🎵' }, // Pink
        'wedding': { color: '#D32F2F', symbol: '🌹' }, // Red
        'reception': { color: '#1976D2', symbol: '✨' } // Blue/Gold
    };

    const config = colors[theme];
    if (!config) return;

    // Create Full Screen Burst
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createFullScreenFlower(config.color, config.symbol);
    }
}

function createFlowerParticle(x, y, color, symbol) {
    const particle = document.createElement('div');
    particle.className = 'flower-burst-particle';
    particle.textContent = symbol;
    particle.style.color = color;
    particle.style.position = 'absolute';
    particle.style.left = (x + (Math.random() * 200 - 100)) + 'px'; // Spread width
    particle.style.top = (y + (Math.random() * 100 - 50)) + 'px';   // Spread height

    // Randomize animation
    particle.style.animation = `floatUpFade ${2 + Math.random()}s ease-out forwards`;
    particle.style.fontSize = (15 + Math.random() * 20) + 'px';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}


function createFullScreenFlower(color, symbol) {
    const particle = document.createElement('div');
    particle.className = 'flower-burst-particle';
    particle.textContent = symbol;
    particle.style.color = color;
    particle.style.position = 'fixed';
    particle.style.zIndex = '9998';

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';

    particle.style.transition = 'transform ' + (3 + Math.random() * 2) + 's ease-out, opacity ' + (3 + Math.random() * 2) + 's ease-out';
    particle.style.fontSize = (20 + Math.random() * 30) + 'px';

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
        const endY = -100;
        const rotate = Math.random() * 360;
        const randomX = (Math.random() * 200) - 100;

        particle.style.transform = 'translate(' + randomX + 'px, ' + (endY - startY) + 'px) rotate(' + rotate + 'deg)';
        particle.style.opacity = '0';
    });

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// ===========================
// 3D Tilt Effect for Travel Cards
// ===========================

document.querySelectorAll('.travel-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on cursor position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Increased intensity to 20
        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===========================
// Heart Rain Animation
// ===========================

document.getElementById('wishesForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent reload to show animation
    triggerHeartRain();

    // Show success feedback
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.backgroundColor = '#4CAF50';
    btn.style.borderColor = '#4CAF50';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        this.reset();
    }, 3000);
});

function triggerHeartRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('falling-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5s fall
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 50); // Fast release
    }
}

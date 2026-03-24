// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
  });

  // Close menu when a link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('mobile-menu');
    });
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks?.classList.remove('mobile-menu');
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA Button Navigation
const ctaButtons = document.querySelectorAll('.cta-btn, .hero-cta');
ctaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
});

// Dark/Light Mode with localStorage
const htmlElement = document.documentElement;
const storedMode = localStorage.getItem('theme');

if (storedMode) {
  htmlElement.setAttribute('data-theme', storedMode);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

// Toggle Theme (optional feature - can be added via a button)
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      project: document.getElementById('project').value,
      message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);
    
    // Reset form
    contactForm.reset();
    
    // Show success message (replace with actual API call)
    alert('Thank you for your message! We will get back to you soon.');
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

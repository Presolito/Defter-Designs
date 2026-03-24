// ===== PREMIUM NAVIGATION & SCROLL EFFECTS =====
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// Mobile Menu Toggle
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('mobile-menu');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('mobile-menu');
      hamburger.classList.remove('active');
    });
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks?.classList.remove('mobile-menu');
    hamburger?.classList.remove('active');
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== CTA BUTTON NAVIGATION =====
const ctaButtons = document.querySelectorAll('.cta-btn, .hero-cta, .btn-accent');
ctaButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Only navigate if not a link already
    if (btn.tagName !== 'A') {
      e.preventDefault();
      window.location.href = 'contact.html';
    }
  });
});

// ===== SCROLL ANIMATION OBSERVER =====
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
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===== SMOOTH HOVER EFFECTS =====
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
});

// ===== BUTTON RIPPLE EFFECT =====
const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-accent, .cta-btn');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'translate(-50%, -50%)';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== FORM FOCUS EFFECTS =====
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transition = 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
  
  input.addEventListener('blur', function() {
    if (!this.value) {
      this.style.boxShadow = 'none';
    }
  });
});

// ===== GALLERY LAZY LOAD =====
const galleryImages = document.querySelectorAll('.gallery-item img');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.src) {
        img.style.animation = 'fadeIn 0.6s ease-out';
      }
      imageObserver.unobserve(img);
    }
  });
}, { threshold: 0.05 });

galleryImages.forEach(img => imageObserver.observe(img));

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navLinks?.classList.remove('mobile-menu');
    hamburger?.classList.remove('active');
  }
});

console.log('✨ Premium animations loaded successfully');

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

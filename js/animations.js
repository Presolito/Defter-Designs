// Intersection Observer for Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Additional animation: gallery items on hover
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Community images hover effect
const communityImages = document.querySelectorAll('.community-image');
communityImages.forEach(image => {
  image.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(1deg)';
  });
  image.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Stagger animation for multiple elements
function staggerAnimation(elements, delay = 100) {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
    element.classList.add('visible');
  });
}

// Apply stagger to philosophy cards on view
const philosophyCards = document.querySelectorAll('.philosophy-card');
if (philosophyCards.length > 0) {
  const philosophyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        staggerAnimation(document.querySelectorAll('.philosophy-card'), 150);
        philosophyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  philosophyCards.forEach(card => {
    philosophyObserver.observe(card);
  });
}

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
}

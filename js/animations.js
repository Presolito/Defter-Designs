// ===== PREMIUM SCROLL ANIMATIONS =====
const animationOptions = {
  threshold: [0.1, 0.5],
  rootMargin: '0px 0px -100px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Don't unobserve - allow for multiple triggers
    }
  });
}, animationOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
  animationObserver.observe(element);
});

// Make fade-in elements visible
const style = document.createElement('style');
style.textContent = `
  .fade-in.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===== GALLERY ITEM ANIMATIONS =====
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
  item.style.animation = `fadeIn 0.8s ease-out forwards`;
  item.style.animationDelay = `${index * 0.1}s`;
  
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ===== CARD HOVER EFFECTS =====
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', x + 'px');
    this.style.setProperty('--mouse-y', y + 'px');
  });
});

// ===== COMMUNITY IMAGES ENHANCED =====
const communityImages = document.querySelectorAll('.community-image');
communityImages.forEach((image, index) => {
  image.style.animation = `scaleIn 0.6s ease-out forwards`;
  image.style.animationDelay = `${index * 0.05}s`;
  
  image.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.12) rotate(2deg)';
    this.style.filter = 'brightness(1.1) saturate(1.2)';
  });
  
  image.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.filter = 'brightness(1) saturate(1)';
  });
});

// ===== ENHANCED PARALLAX HERO =====
const heroSection = document.querySelector('.hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroTop = heroSection.offsetTop;
    const heroHeight = heroSection.offsetHeight;
    
    // Only apply parallax when hero is visible
    if (scrollPosition < heroTop + heroHeight) {
      const parallaxValue = (scrollPosition - heroTop) * 0.5;
      heroSection.style.background = `
        linear-gradient(135deg, var(--surface) 0%, var(--surface-alt) 100%),
        var(--gradient-mesh)
      `;
    }
  }, { passive: true });
}

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration = 1500) {
  let current = 0;
  const increment = target / (duration / 16); // 60fps
  
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }
  }, 16);
}

// Trigger stats animation when visible
const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
          const text = stat.textContent;
          const num = parseInt(text.replace(/\D/g, ''));
          if (!isNaN(num)) {
            animateCounter(stat, num, 1200);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsGrid);
}

// ===== PHILOSOPHY CARDS STAGGER =====
const philosophyCards = document.querySelectorAll('.philosophy-card');
philosophyCards.forEach((card, index) => {
  card.style.animation = `slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
  card.style.animationDelay = `${index * 0.1}s`;
  card.style.opacity = '0';
});

// ===== BUTTON HOVER TEXT EFFECTS =====
const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-accent');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.letterSpacing = '1px';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.letterSpacing = 'normal';
  });
});

// ===== SECTION TITLE ANIMATIONS =====
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
  const h2 = title.querySelector('h2');
  const p = title.querySelector('p');
  
  if (h2) h2.style.animation = 'fadeInUp 0.8s ease-out forwards';
  if (p) {
    p.style.animation = 'fadeInUp 0.8s ease-out forwards';
    p.style.animationDelay = '0.1s';
  }
});

// ===== PROGRESSIVE IMAGE LOADING =====
const lazyImages = document.querySelectorAll('img[src]');
lazyImages.forEach(img => {
  img.style.transition = 'all 0.6s ease-out';
  
  // Add loading placeholder effect
  const canvas = document.createElement('canvas');
  canvas.width = 10;
  canvas.height = 10;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e0e0e0';
  ctx.fillRect(0, 0, 10, 10);
  
  img.addEventListener('load', function() {
    this.style.opacity = '1';
    this.style.filter = 'blur(0)';
  });
  
  img.addEventListener('error', function() {
    this.style.opacity = '0.5';
  });
});

// ===== ADD SLIDEUP ANIMATION =====
const slideUpStyle = document.createElement('style');
slideUpStyle.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(slideUpStyle);

console.log('✨ Premium animations initialized successfully');


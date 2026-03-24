// Testimonials Slider
const testimonialSlides = document.querySelectorAll('.testimonials-slide');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
  // Handle wrapping
  if (index >= testimonialSlides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = testimonialSlides.length - 1;
  }

  // Remove active class from all slides and dots
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  sliderDots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  testimonialSlides[currentSlide].classList.add('active');
  sliderDots[currentSlide].classList.add('active');
}

// Slider dot click handler
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide();
  });
});

// Auto-advance slides every 6 seconds
let autoSlideTimer;

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 6000);
}

// Initialize auto-slide
resetAutoSlide();

// Pause auto-slide on hover
const testimonialContainer = document.querySelector('.testimonials-slide')?.parentElement;
if (testimonialContainer) {
  testimonialContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideTimer);
  });

  testimonialContainer.addEventListener('mouseleave', () => {
    resetAutoSlide();
  });
}

// Touch support for mobile swiping
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
  if (touchEndX < touchStartX - 50) {
    // Swiped left
    currentSlide++;
    showSlide(currentSlide);
  }
  if (touchEndX > touchStartX + 50) {
    // Swiped right
    currentSlide--;
    showSlide(currentSlide);
  }
  resetAutoSlide();
}

if (testimonialContainer) {
  testimonialContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  testimonialContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  }, false);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (document.querySelector('.testimonials-slide')) {
    if (e.key === 'ArrowLeft') {
      currentSlide--;
      showSlide(currentSlide);
      resetAutoSlide();
    } else if (e.key === 'ArrowRight') {
      currentSlide++;
      showSlide(currentSlide);
      resetAutoSlide();
    }
  }
});

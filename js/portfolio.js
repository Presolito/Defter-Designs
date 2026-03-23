// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

// Project data
const projectData = {
  'luxury-penthouse': {
    title: 'Luxury Penthouse',
    category: 'Residential',
    description: 'A stunning high-rise penthouse featuring floor-to-ceiling windows, custom furnishings, and a minimalist aesthetic. This project showcases the perfect blend of luxury and livability.',
    details: 'Location: Lagos\nArea: 3,500 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'scandinavian-home': {
    title: 'Scandinavian Home',
    category: 'Residential',
    description: 'Warm and inviting residential space inspired by Nordic design principles. Featuring organic materials, neutral tones, and functional beauty.',
    details: 'Location: Lagos\nArea: 2,800 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'hotel-lobby': {
    title: 'Luxury Hotel Lobby',
    category: 'Commercial',
    description: 'Grand hotel lobby designed to create an unforgettable first impression. Features sophisticated lighting, premium materials, and optimal flow.',
    details: 'Location: Lagos\nArea: 5,000 sq ft\nCompleted: 2023\nClient Focus: Hospitality'
  },
  'office-space': {
    title: 'Contemporary Office Space',
    category: 'Commercial',
    description: 'Modern office environment designed to boost productivity and creativity. Open layouts, collaborative zones, and executive spaces.',
    details: 'Location: Lagos\nArea: 4,200 sq ft\nCompleted: 2023\nClient Focus: Corporate'
  },
  'victorian-kitchen': {
    title: 'Victorian Kitchen Renovation',
    category: 'Renovation',
    description: 'Complete kitchen renovation of a historic Victorian home. Preserved original character while adding modern amenities and functionality.',
    details: 'Location: Lagos\nArea: 400 sq ft\nCompleted: 2024\nClient Focus: Residential Update'
  },
  'bungalow-refresh': {
    title: 'Bungalow Refresh',
    category: 'Renovation',
    description: 'Complete interior refresh of a 40-year-old bungalow. New color schemes, updated furnishings, and modern lighting throughout.',
    details: 'Location: Lagos\nArea: 3,200 sq ft\nCompleted: 2023\nClient Focus: Full Renovation'
  },
  'farmhouse-living': {
    title: 'Farmhouse Living Room',
    category: 'Residential',
    description: 'Rustic yet elegant farmhouse living space with reclaimed wood, vintage pieces, and comfortable seating arrangements.',
    details: 'Location: Outskirts of Lagos\nArea: 600 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'restaurant': {
    title: 'Fine Dining Restaurant',
    category: 'Commercial',
    description: 'Upscale restaurant interior with sophisticated ambiance, optimal table placement, and premium finishes throughout.',
    details: 'Location: Lagos\nArea: 3,800 sq ft\nCompleted: 2023\nClient Focus: F&B'
  }
};

// Filter functionality
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    // Filter portfolio items
    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      if (filterValue === 'all' || filterValue === itemCategory) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Modal functionality
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectId = item.getAttribute('data-project');
    const project = projectData[projectId];

    if (project) {
      const modalBody = document.getElementById('modal-body');
      modalBody.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <div style="width: 100%; aspect-ratio: 16/9; background-color: #E8DDD0; margin-bottom: 2rem; border-radius: 4px;"></div>
          <h2 style="margin-bottom: 1rem;">${project.title}</h2>
          <p style="color: #D4AF77; font-weight: 600; margin-bottom: 1.5rem;">${project.category}</p>
          <p style="margin-bottom: 2rem; line-height: 1.9;">${project.description}</p>
          <div style="background-color: #F9F7F4; padding: 1.5rem; border-radius: 4px; margin-top: 2rem;">
            <h4 style="margin-bottom: 1rem; font-weight: 600;">Project Details</h4>
            <p style="white-space: pre-line; font-size: 0.95rem;">${project.details}</p>
          </div>
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(44, 44, 44, 0.1);">
            <p style="font-size: 0.95rem; color: var(--dark-gray);">Interested in a similar project? <a href="contact.html" style="color: #D4AF77; font-weight: 600;">Get in touch</a></p>
          </div>
        </div>
      `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

// Project data with enhanced images
const projectData = {
  'luxury-penthouse': {
    title: 'Luxury Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600121848334-35f83c7244ca?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'A stunning high-rise penthouse featuring floor-to-ceiling windows, custom furnishings, and a minimalist aesthetic. This project showcases the perfect blend of luxury and livability.',
    details: 'Location: Lagos\nArea: 3,500 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'scandinavian-home': {
    title: 'Scandinavian Home',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1547825487-8910df13e7fd?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Warm and inviting residential space inspired by Nordic design principles. Featuring organic materials, neutral tones, and functional beauty.',
    details: 'Location: Lagos\nArea: 2,800 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'hotel-lobby': {
    title: 'Luxury Hotel Lobby',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070144c?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Grand hotel lobby designed to create an unforgettable first impression. Features sophisticated lighting, premium materials, and optimal flow.',
    details: 'Location: Lagos\nArea: 5,000 sq ft\nCompleted: 2023\nClient Focus: Hospitality'
  },
  'office-space': {
    title: 'Contemporary Office Space',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1520876212653-2c2b8cc352cb?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1485288184021-d9b2cff4fdf1?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Modern office environment designed to boost productivity and creativity. Open layouts, collaborative zones, and executive spaces.',
    details: 'Location: Lagos\nArea: 4,200 sq ft\nCompleted: 2023\nClient Focus: Corporate'
  },
  'victorian-kitchen': {
    title: 'Victorian Kitchen Renovation',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1556357875-a7c3d6b7a2a5?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Complete kitchen renovation of a historic Victorian home. Preserved original character while adding modern amenities and functionality.',
    details: 'Location: Lagos\nArea: 400 sq ft\nCompleted: 2024\nClient Focus: Residential Update'
  },
  'bungalow-refresh': {
    title: 'Bungalow Refresh',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1604857209411-fd75bc12fc80?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1600210492493-757c62f2b5d4?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Complete interior refresh of a 40-year-old bungalow. New color schemes, updated furnishings, and modern lighting throughout.',
    details: 'Location: Lagos\nArea: 3,200 sq ft\nCompleted: 2023\nClient Focus: Full Renovation'
  },
  'farmhouse-living': {
    title: 'Farmhouse Living Room',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1547825487-8910df13e7fd?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&h=800&fit=crop&auto=format&q=90',
    description: 'Rustic yet elegant farmhouse living space with reclaimed wood, vintage pieces, and comfortable seating arrangements.',
    details: 'Location: Outskirts of Lagos\nArea: 600 sq ft\nCompleted: 2024\nClient Focus: Residential'
  },
  'restaurant': {
    title: 'Fine Dining Restaurant',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1504674900154-e4727b46ea1d?w=1000&h=800&fit=crop&auto=format&q=90',
    fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4706a6a48b51?w=1000&h=800&fit=crop&auto=format&q=90',
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

// Modal functionality with image handling
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectId = item.getAttribute('data-project');
    const project = projectData[projectId];

    if (project) {
      const modalBody = document.getElementById('modal-body');
      const imageHtml = `
        <div class="modal-image-container" style="position: relative; width: 100%; margin-bottom: 2rem; background: var(--surface-alt); border-radius: 12px; overflow: hidden; min-height: 400px;">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="modal-image responsive-image"
            style="width: 100%; height: auto; max-height: 600px; object-fit: cover; display: block;"
            onerror="this.src='${project.fallbackImage}'"
            loading="eager"
            decoding="async"
          >
        </div>
      `;
      
      modalBody.innerHTML = `
        <div style="margin-bottom: 2rem;">
          ${imageHtml}
          <h2 style="margin-bottom: 1rem;">${project.title}</h2>
          <p style="color: #D4AF77; font-weight: 600; margin-bottom: 1.5rem; font-size: 1.1rem;">${project.category}</p>
          <p style="margin-bottom: 2rem; line-height: 1.9; font-size: 1rem; color: var(--text-secondary);">${project.description}</p>
          <div style="background-color: #F9F7F4; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; border-left: 4px solid #d4a76a;">
            <h4 style="margin-bottom: 1rem; font-weight: 600; color: var(--primary);">Project Details</h4>
            <p style="white-space: pre-line; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">${project.details}</p>
          </div>
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(44, 44, 44, 0.1);">
            <p style="font-size: 0.95rem; color: var(--text-secondary);">Interested in a similar project? <a href="contact.html" style="color: #D4AF77; font-weight: 600; text-decoration: underline;">Get in touch</a></p>
          </div>
        </div>
      `;

      // Add animation class to modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Trigger animation
      setTimeout(() => {
        modalBody.style.animation = 'slideUp 0.4s ease-out';
      }, 10);
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

console.log('🎨 Portfolio gallery system initialized with premium images');

/**
 * PREMIUM IMAGE SYSTEM
 * Production-grade image handling with fallbacks, loading states, and performance optimization
 */

// ===== IMAGE DATABASE =====
const IMAGE_LIBRARY = {
  hero: {
    primary: 'https://images.unsplash.com/photo-1600121848334-35f83c7244ca?w=1600&h=900&fit=crop&auto=format&q=95',
    fallback: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1600&h=900&fit=crop&auto=format&q=95'
  },
  
  services: {
    residential: {
      primary: 'https://images.unsplash.com/photo-1600121848334-35f83c7244ca?w=800&h=600&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format&q=90'
    },
    commercial: {
      primary: 'https://images.unsplash.com/photo-1497366216548-37526070144c?w=800&h=600&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format&q=90'
    },
    renovation: {
      primary: 'https://images.unsplash.com/photo-1520876212653-2c2b8cc352cb?w=800&h=600&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1485288184021-d9b2cff4fdf1?w=800&h=600&fit=crop&auto=format&q=90'
    }
  },

  portfolio: {
    'luxury-penthouse': {
      primary: 'https://images.unsplash.com/photo-1600121848334-35f83c7244ca?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1600121848334-35f83c7244ca?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'scandinavian-home': {
      primary: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1547825487-8910df13e7fd?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'hotel-lobby': {
      primary: 'https://images.unsplash.com/photo-1497366216548-37526070144c?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1497366216548-37526070144c?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'office-space': {
      primary: 'https://images.unsplash.com/photo-1520876212653-2c2b8cc352cb?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1520876212653-2c2b8cc352cb?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1485288184021-d9b2cff4fdf1?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'victorian-kitchen': {
      primary: 'https://images.unsplash.com/photo-1556357875-a7c3d6b7a2a5?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1556357875-a7c3d6b7a2a5?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'bungalow-refresh': {
      primary: 'https://images.unsplash.com/photo-1604857209411-fd75bc12fc80?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1604857209411-fd75bc12fc80?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1600210492493-757c62f2b5d4?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'farmhouse-living': {
      primary: 'https://images.unsplash.com/photo-1547825487-8910df13e7fd?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1547825487-8910df13e7fd?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&auto=format&q=90'
    },
    'restaurant': {
      primary: 'https://images.unsplash.com/photo-1504674900154-e4727b46ea1d?w=1200&h=1600&fit=crop&auto=format&q=95',
      gallery: 'https://images.unsplash.com/photo-1504674900154-e4727b46ea1d?w=800&h=1000&fit=crop&auto=format&q=90',
      fallback: 'https://images.unsplash.com/photo-1517248135467-4706a6a48b51?w=800&h=1000&fit=crop&auto=format&q=90'
    }
  },

  about: {
    team: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=90',
    workspace: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format&q=90',
    culture: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=90',
    fallback: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=90'
  }
};

// ===== IMAGE COMPONENT CLASS =====
class ImageHandler {
  constructor() {
    this.imageCache = new Map();
    this.loadingElements = new Set();
    this.failedImages = new Set();
    this.initImageObserver();
  }

  /**
   * Get image URL with fallback chain
   */
  getImageUrl(library, key, variant = 'primary') {
    try {
      const image = library[key];
      if (!image) {
        console.warn(`Image not found: ${key}`);
        return this.getPlaceholderImage();
      }

      if (typeof image === 'string') {
        return image;
      }

      return image[variant] || image.primary || image.fallback || this.getPlaceholderImage();
    } catch (error) {
      console.error(`Error getting image URL: ${error}`);
      return this.getPlaceholderImage();
    }
  }

  /**
   * Placeholder image (solid color SVG)
   */
  getPlaceholderImage() {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e8ddd0" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="system-ui" font-size="16" fill="%23a89a8d" text-anchor="middle" dominant-baseline="middle"%3EImage Loading...%3C/text%3E%3C/svg%3E';
  }

  /**
   * Create responsive image element with error handling
   */
  createImage(src, alt, options = {}) {
    const img = document.createElement('img');
    const imageKey = `${src}_${alt}`;

    // Set attributes
    img.src = src;
    img.alt = alt || 'Design showcase image';
    img.loading = options.lazy !== false ? 'lazy' : 'eager';
    img.decoding = 'async';

    // Apply custom attributes
    if (options.width) img.width = options.width;
    if (options.height) img.height = options.height;
    if (options.className) img.className = options.className;
    if (options.style) Object.assign(img.style, options.style);

    // Error handling
    img.addEventListener('error', (e) => {
      console.warn(`Image failed to load: ${src}`);
      this.failedImages.add(imageKey);
      
      // Try fallback if available
      if (options.fallback && !this.failedImages.has(`${options.fallback}_${alt}`)) {
        img.src = options.fallback;
      } else {
        // Use placeholder on final failure
        img.src = this.getPlaceholderImage();
        img.classList.add('image-error');
        img.style.backgroundColor = '#e8ddd0';
      }
    });

    // Loading state
    img.addEventListener('load', (e) => {
      this.loadingElements.delete(imageKey);
      img.classList.add('image-loaded');
      img.style.animation = 'fadeIn 0.6s ease-out';
    });

    // Add to tracking
    this.loadingElements.add(imageKey);
    img.classList.add('image-loading');

    return img;
  }

  /**
   * Intersection Observer for lazy loading optimization
   */
  initImageObserver() {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.tagName === 'IMG') {
            const img = entry.target;
            if (img.dataset.src && !img.src) {
              img.src = img.dataset.src;
            }
            this.observer.unobserve(img);
          }
        });
      },
      { rootMargin: '50px' }
    );
  }

  /**
   * Observe image for lazy loading
   */
  observeImage(img) {
    if (this.observer) {
      this.observer.observe(img);
    }
  }

  /**
   * Validate image URL by testing it
   */
  async validateImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  /**
   * Preload critical images
   */
  preloadImages(urls) {
    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  /**
   * Get image by project ID with all variants
   */
  getProjectImage(projectId, variant = 'gallery') {
    return this.getImageUrl(IMAGE_LIBRARY.portfolio, projectId, variant);
  }

  /**
   * Get service image
   */
  getServiceImage(serviceType, variant = 'primary') {
    return this.getImageUrl(IMAGE_LIBRARY.services, serviceType, variant);
  }
}

// Initialize globally
const imageHandler = new ImageHandler();

// Preload critical hero images on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    imageHandler.preloadImages([
      IMAGE_LIBRARY.hero.primary,
      IMAGE_LIBRARY.services.residential.primary,
      IMAGE_LIBRARY.services.commercial.primary,
      IMAGE_LIBRARY.services.renovation.primary
    ]);
  });
} else {
  imageHandler.preloadImages([
    IMAGE_LIBRARY.hero.primary,
    IMAGE_LIBRARY.services.residential.primary,
    IMAGE_LIBRARY.services.commercial.primary,
    IMAGE_LIBRARY.services.renovation.primary
  ]);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { imageHandler, IMAGE_LIBRARY, ImageHandler };
}

console.log('✨ Premium Image System initialized');

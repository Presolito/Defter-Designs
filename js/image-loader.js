/**
 * IMAGE LOADER & ERROR HANDLER
 * Manages image loading states, fallbacks, and error recovery
 */

class ImageLoader {
  constructor() {
    this.images = new Map();
    this.loadingCount = 0;
    this.failedCount = 0;
    this.successCount = 0;
    this.retryAttempts = new Map();
    this.maxRetries = 2;
    this.initErrorTracking();
  }

  /**
   * Load image with automatic fallback and error handling
   */
  loadImage(src, alt = '', options = {}) {
    return new Promise((resolve) => {
      const img = new Image();
      const startTime = performance.now();

      img.addEventListener('load', () => {
        const duration = performance.now() - startTime;
        this.successCount++;
        console.log(`✓ Image loaded: ${alt || src} (${duration.toFixed(0)}ms)`);
        
        if (options.onLoad) {
          options.onLoad(img, duration);
        }
        
        resolve({
          success: true,
          img,
          src,
          duration,
          fallback: false
        });
      });

      img.addEventListener('error', () => {
        this.failedCount++;
        console.warn(`✗ Image failed: ${src}`);

        // Retry with fallback if available
        if (options.fallback && !this.retryAttempts.has(src)) {
          this.retryAttempts.set(src, 1);
          console.log(`↻ Retrying with fallback: ${options.fallback}`);
          
          this.loadImage(options.fallback, alt, {
            ...options,
            fallback: options.fallbackFallback || null,
            onLoad: (img, duration) => {
              if (options.onLoad) {
                options.onLoad(img, duration);
              }
              resolve({
                success: true,
                img,
                src: options.fallback,
                duration,
                fallback: true
              });
            }
          });
        } else {
          // Use placeholder
          const placeholder = this.createPlaceholder(alt);
          if (options.onError) {
            options.onError(placeholder);
          }
          
          resolve({
            success: false,
            img: placeholder,
            src,
            duration: 0,
            fallback: false,
            error: true
          });
        }
      });

      // Timeout fallback
      const timeout = setTimeout(() => {
        if (!img.complete) {
          img.src = '';
          console.warn(`⏱ Image timeout: ${src}`);
          
          if (options.fallback) {
            clearTimeout(timeout);
            this.loadImage(options.fallback, alt, options);
          } else {
            const placeholder = this.createPlaceholder(alt);
            resolve({
              success: false,
              img: placeholder,
              src,
              duration: 0,
              fallback: false,
              timeout: true
            });
          }
        }
      }, options.timeout || 8000);

      img.alt = alt;
      img.src = src;
    });
  }

  /**
   * Create placeholder image
   */
  createPlaceholder(text = 'Image') {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#e8ddd0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#a89a8d';
      ctx.font = '16px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 200, 190);
      ctx.fillText('Loading...', 200, 220);
    }
    
    const img = new Image();
    img.src = canvas.toDataURL();
    img.alt = text;
    img.classList.add('image-placeholder');
    
    return img;
  }

  /**
   * Batch load multiple images
   */
  async loadMultiple(imageArray, options = {}) {
    const promises = imageArray.map((image) =>
      this.loadImage(image.src, image.alt, {
        fallback: image.fallback,
        fallbackFallback: image.fallbackFallback,
        onLoad: image.onLoad,
        onError: image.onError,
        timeout: options.timeout || 8000
      })
    );

    return Promise.allSettled(promises);
  }

  /**
   * Initialize error tracking
   */
  initErrorTracking() {
    window.addEventListener('error', (event) => {
      if (event.target.tagName === 'IMG') {
        console.error(`Image error caught:`, event.target.src);
      }
    });
  }

  /**
   * Get loading statistics
   */
  getStats() {
    return {
      loaded: this.successCount,
      failed: this.failedCount,
      total: this.successCount + this.failedCount,
      successRate: this.successCount / (this.successCount + this.failedCount) || 0
    };
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.images.clear();
    this.retryAttempts.clear();
    console.log('Image cache cleared');
  }

  /**
   * Monitor image performance
   */
  monitorImagePerformance() {
    if ('PerformanceObserver' in window) {
      try {
        const perfObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.initiatorType === 'img') {
              console.log(`Image Performance: ${entry.name}`, {
                duration: entry.duration,
                size: entry.transferSize,
                decodedSize: entry.decodedBodySize
              });
            }
          }
        });
        
        perfObserver.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.warn('Performance monitoring not available');
      }
    }
  }
}

// Initialize globally
const imageLoader = new ImageLoader();

// Monitor performance on page load
if (document.readyState === 'complete') {
  imageLoader.monitorImagePerformance();
} else {
  window.addEventListener('load', () => {
    imageLoader.monitorImagePerformance();
  });
}

console.log('📸 Image Loader initialized');

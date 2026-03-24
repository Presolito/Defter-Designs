# 🖼️ Image System Quick Reference

## 📍 File Locations

```
js/image-system.js      ← Image database & handler
js/image-loader.js      ← Advanced loading manager
css/styles.css          ← Image component styles
```

## 🔗 HTML Image Template (Copy & Use)

### Service Card
```html
<div class="card fade-in">
  <div class="image-container aspect-video hover-zoom">
    <img 
      class="responsive-image card-image"
      src="https://images.unsplash.com/photo-ID?w=600&h=450&fit=crop&auto=format&q=90"
      alt="Descriptive text"
      loading="lazy"
      decoding="async"
    >
  </div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Gallery Item
```html
<div class="gallery-item fade-in portfolio-grid-item" data-category="category">
  <img 
    src="https://images.unsplash.com/photo-ID?w=1200&h=1600&fit=crop&auto=format&q=90"
    alt="Descriptive text"
    loading="lazy"
    decoding="async"
    class="responsive-image"
  >
</div>
```

### Hero Image
```html
<div class="hero-image-wrapper">
  <img 
    src="https://images.unsplash.com/photo-ID?w=1600&h=600&fit=crop&auto=format&q=95"
    alt="Descriptive text"
    loading="eager"
    decoding="async"
  >
</div>
```

## 🎨 CSS Classes Available

| Class | Purpose | Usage |
|-------|---------|-------|
| `.image-container` | Base wrapper | All images |
| `.aspect-video` | 16:9 ratio | Hero, services |
| `.aspect-square` | 1:1 ratio | Profiles |
| `.aspect-portrait` | 3:4 ratio | Gallery items |
| `.aspect-tall` | 4:5 ratio | Portraits |
| `.responsive-image` | Responsive sizing | All images |
| `.card-image` | Card styling | Service cards |
| `.gallery-item` | Gallery styling | Portfolio |
| `.portfolio-grid-item` | Portfolio grid | Gallery |
| `.hover-zoom` | Scale on hover | Cards |
| `.hover-lift` | Elevate on hover | Gallery |
| `.image-loading` | Shimmer animation | During load |
| `.image-loaded` | Fade-in effect | After load |
| `.image-error` | Error styling | On failure |

## 🖼️ Image URL Format

**Base Structure:**
```
https://images.unsplash.com/photo-PHOTO_ID?w=WIDTH&h=HEIGHT&fit=crop&auto=format&q=QUALITY
```

**Query Parameters:**
- `w=` — Width in pixels (default: 1200)
- `h=` — Height in pixels (default: 1600)
- `fit=crop` — Always use crop for consistent sizing
- `auto=format` — Automatic WebP for browsers that support it
- `q=` — Quality (85-95 recommended)

**Examples:**
```
Card image:    ?w=600&h=450&fit=crop&auto=format&q=90
Gallery:       ?w=1200&h=1600&fit=crop&auto=format&q=90
Hero:          ?w=1600&h=900&fit=crop&auto=format&q=95
Thumbnail:     ?w=300&h=300&fit=crop&auto=format&q=85
```

## 📊 Available Images in Library

### Services
```javascript
IMAGE_LIBRARY.services.residential.primary
IMAGE_LIBRARY.services.commercial.primary
IMAGE_LIBRARY.services.renovation.primary
```

### Portfolio (8 Projects)
```javascript
IMAGE_LIBRARY.portfolio['luxury-penthouse'].primary
IMAGE_LIBRARY.portfolio['scandinavian-home'].primary
IMAGE_LIBRARY.portfolio['hotel-lobby'].primary
IMAGE_LIBRARY.portfolio['office-space'].primary
IMAGE_LIBRARY.portfolio['victorian-kitchen'].primary
IMAGE_LIBRARY.portfolio['bungalow-refresh'].primary
IMAGE_LIBRARY.portfolio['farmhouse-living'].primary
IMAGE_LIBRARY.portfolio['restaurant'].primary
```

### About
```javascript
IMAGE_LIBRARY.about.team
IMAGE_LIBRARY.about.workspace
IMAGE_LIBRARY.about.culture
```

## 💻 JavaScript Usage

### Get Image URL
```javascript
const url = imageHandler.getImageUrl(
  IMAGE_LIBRARY.services,
  'residential',
  'primary'
);
```

### Create Image Element
```javascript
const img = imageHandler.createImage(
  'https://...',
  'Alt text',
  {
    fallback: 'https://...',
    clipboard: 'card-image',
    lazy: true,
    style: { borderRadius: '12px' }
  }
);
document.body.appendChild(img);
```

### Load Image with Promise
```javascript
imageLoader.loadImage('https://...', 'Alt text', {
  fallback: 'https://...',
  timeout: 8000,
  onLoad: (img) => console.log('Loaded!'),
  onError: (img) => console.log('Failed!')
}).then(result => {
  if (result.success) {
    console.log('Image loaded:', result.src);
  }
});
```

### Batch Load Images
```javascript
imageLoader.loadMultiple([
  { 
    src: 'img1.jpg',
    alt: 'Image 1',
    fallback: 'fallback1.jpg'
  },
  {
    src: 'img2.jpg',
    alt: 'Image 2', 
    fallback: 'fallback2.jpg'
  }
]).then(results => {
  console.log(results);
});
```

### Get Stats
```javascript
const stats = imageLoader.getStats();
console.log(stats);
// Output: { loaded: 15, failed: 0, total: 15, successRate: 1 }
```

## 🐛 Debugging

### Check Image Stats
```javascript
console.log(imageLoader.getStats());
```

### Monitor Image Performance
```javascript
imageLoader.monitorImagePerformance();
```

### Validate Image URL
```javascript
imageHandler.validateImage('https://...').then(valid => {
  console.log('Image valid:', valid);
});
```

### Browser DevTools
```
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by Img
4. Check for failed images (red)
5. Check response headers for caching
```

## ⚠️ Common Issues & Solutions

**Issue: Image not loading**
- Check URL is HTTPS
- Verify Unsplash link format
- Check browser console for errors
- Ensure fallback URL is valid

**Issue: Images look blurry**
- Increase quality parameter: `q=95`
- Check if image dimensions match container
- Use `object-fit: cover` in CSS

**Issue: Slow loading**
- Reduce image dimensions with `w=` parameter
- Use appropriate quality: `q=85` for thumbnails, `q=95` for hero
- Ensure `loading="lazy"` and `decoding="async"`

**Issue: Layout shift (CLS)**
- Always specify aspect ratio container
- Use `aspect-video`, `aspect-square`, etc.
- Avoid images without defined dimensions

## 🚀 Adding New Images

### Step 1: Find image on Unsplash
```
https://unsplash.com → Search → Copy ID from URL
Example: photo-1600121848334-35f83c7244ca → use as PHOTO_ID
```

### Step 2: Add to IMAGE_LIBRARY
```javascript
// In image-system.js
IMAGE_LIBRARY.yourSection = {
  'image-name': {
    primary: 'https://images.unsplash.com/photo-ID?w=1200&...',
    gallery: 'https://images.unsplash.com/photo-ID?w=800&...',
    fallback: 'https://images.unsplash.com/photo-ID2?w=800&...'
  }
}
```

### Step 3: Use in HTML
```html
<img src="https://images.unsplash.com/photo-ID?w=600&h=450&fit=crop&auto=format&q=90" />
```

## 📱 Responsive Breakpoints

```css
/* All devices - base styles */
.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .gallery { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
}

/* Tablet (768px - 1023px) */
@media (max-width: 768px) {
  .gallery { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
}

/* Mobile (480px - 767px) */
@media (max-width: 480px) {
  .gallery { grid-template-columns: 1fr; }
}
```

## 🔍 SEO Best Practices

✅ Use descriptive alt text
```html
<img alt="Luxury penthouse living room with floor-to-ceiling windows" />
```

✅ Add Open Graph for social sharing
```html
<meta property="og:image" content="https://...">
<meta property="og:title" content="Page Title">
```

✅ Include structured data
```html
<img itemprop="image" src="..." />
```

✅ Use appropriate dimensions
```html
<!-- Social: 1200x630, Hero: 1600x900, Gallery: 1200x1600 -->
```

## 📞 Support Files

- `IMAGE_SYSTEM_IMPLEMENTATION.md` — Full documentation
- `js/image-system.js` — Image library & core handler
- `js/image-loader.js` — Advanced loading manager
- `css/styles.css` — All image styles

---

**Last Updated:** 2026-03-24  
**Status:** Production Ready ✅

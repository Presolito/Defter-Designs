# Dexter Designs - Luxury Interior Design Website

A premium, modular, production-ready website for Defter Designs, a luxury interior design brand based in Lagos, Nigeria.

## 🏗️ Project Structure

```
defter-designs/
├── index.html              # Homepage
├── about.html              # About & Company Story
├── portfolio.html          # Project Gallery with Filtering
├── contact.html            # Contact Form & Info
├── css/
│   └── styles.css         # All styles (Responsive, Animations)
├── js/
│   ├── main.js            # Core functionality (Menu, Forms, Theme)
│   ├── animations.js      # Scroll animations & Effects
│   ├── portfolio.js       # Gallery filtering & Modal
│   └── slider.js          # Testimonials carousel
├── assets/
│   ├── images/            # Project images & content
│   └── icons/             # SVG icons & graphics
└── README.md              # This file
```

## 🎨 Design System

**Colors:**
- Cream (Background): `#F5F0E8`
- Charcoal (Text): `#2C2C2C`
- Gold (Accent): `#D4AF77`
- Light Gray: `#F9F7F4`

**Typography:**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Served via Google Fonts CDN

**Features:**
- Responsive grid-based layout
- Premium spacing & typography
- Smooth animations & transitions
- Accessibility-first HTML structure

## 🚀 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles, animations, grid/flexbox
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Custom typography

## 📄 Pages

### index.html
- Hero section with parallax effect
- About preview
- Services overview
- Featured portfolio gallery
- Testimonials carousel (auto-rotating)
- Community section with social links
- Image grid
- Responsive footer

### about.html
- Brand story & mission
- Design philosophy (6 principles)
- Statistics section
- Leadership team profiles

### portfolio.html
- Filterable project gallery
- Categories: Residential, Commercial, Renovation
- Modal project viewer with details
- Keyboard & touch navigation support

### contact.html
- Contact form (HTML5 validation)
- Business information
- Office location & hours
- Social media links
- Map placeholder for integration

## ✨ Features

### JavaScript Functionality

**main.js:**
- Mobile hamburger menu
- Smooth navigation
- Contact form handling
- Dark/Light mode toggle (with localStorage)
- Navbar scroll effects

**animations.js:**
- Scroll-triggered fade-in animations
- Intersection Observer for performance
- Gallery hover effects
- Staggered animations
- Parallax effects

**portfolio.js:**
- Real-time gallery filtering
- Modal lightbox for projects
- Keyboard & click navigation
- Escape key to close modals
- Click-outside to close

**slider.js:**
- Auto-rotating testimonials (6s interval)
- Dot navigation
- Touch/swipe support
- Keyboard arrow navigation
- Pause on hover

### Responsive Design

- Mobile-first approach
- Hamburger menu for tablets/mobile
- Responsive grid layouts
- Touch-friendly interactions
- Optimized typography scaling

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text placeholders for images
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements

## 🔧 Installation & Usage

1. **No build process required** - Just open `index.html` in a browser
2. **For development:**
   - Use a local server: `python -m http.server` or `npx serve`
   - Enables proper CSS/JS loading

3. **Customization:**
   - Edit colors in `css/styles.css` (`:root` variables)
   - Update content in HTML files
   - Modify fonts in Google Fonts import
   - Add images to `assets/images/`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Minimal dependencies (CDN fonts only)
- CSS animations use GPU acceleration
- Lazy-loaded images in gallery
- Optimized JavaScript (no bloat)
- ~50KB total CSS + JS

## 📝 SEO & Meta Tags

- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML5
- Descriptive meta descriptions
- Proper heading structure

## 🔐 Security

- No external scripts (fonts only)
- Form validation on client-side
- No sensitive data handling
- Clean, maintainable code

## 📞 Contact Information

**Dexter Designs**
- Location: Plot 1B, Lekki Phase 1, Lagos, Nigeria
- Email: hello@defterdesigns.com
- Phone: +234 (0) 123 456 7890
- Office Hours: Mon-Fri 9AM-6PM, Sat 10AM-3PM

## 📄 License

Professional project template. Customize for your brand.

---

**Built for production. Ready to deploy.**

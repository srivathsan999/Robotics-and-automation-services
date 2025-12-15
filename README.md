# RoboTech - Futuristic Robotics & Automation Services Website

A fully functional, static, multi-page Robotics & Automation Services website with a futuristic, professional design, clean animations, and perfect alignment.

## 🚀 Features

- **Static HTML + Tailwind CSS** - No build process required
- **Dark/Light Theme Toggle** - Persists using localStorage
- **Responsive Design** - Works perfectly on all screen sizes (320px - 1920px+)
- **Smooth Animations** - Fade-in effects on scroll using Intersection Observer
- **Glassmorphism & Neomorphism** - Modern design elements
- **Professional Content** - Real, industry-specific content (no Lorem Ipsum)
- **Zero Layout Issues** - Perfect alignment and spacing

## 📁 Project Structure

```
robotics-automation-website/
├── index.html
├── services.html
├── industries.html
├── case-studies.html
├── about.html
├── contact.html
├── login.html
├── register.html
├── 404.html
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── logo.svg
│       ├── favicon.svg
│       └── hero.jpg
│
└── README.md
```

## 🎨 Design System

### Color Palette
- **Background**: `#0B0F1A` (Dark futuristic)
- **Surface**: `#111827`
- **Primary Accent**: `#00D9FF` (Electric Cyan)
- **Secondary Accent**: `#8B5CF6` (Violet Glow)
- **Text Primary**: `#E5E7EB`
- **Text Muted**: `#9CA3AF`

### Design Elements
- **Glassmorphism**: Used in navbar, hero sections, modals, login/register cards
- **Neomorphism**: Used in buttons, toggles, feature highlights
- **Neon Accents**: Applied to borders, icons, dividers, hover states, CTA emphasis

## 📄 Pages

1. **index.html** - Homepage with hero, services overview, industries, tech stack, case study preview, and CTA
2. **services.html** - Detailed service offerings (Robotics Integration, Industrial Automation, AI & Vision Systems, Maintenance & Support)
3. **industries.html** - Industry-specific solutions (Manufacturing, Automotive, Healthcare, Logistics, Energy)
4. **case-studies.html** - Real case studies with problem-solution-outcome format and measurable results
5. **about.html** - Company story, mission, vision, and values
6. **contact.html** - Contact form and business information
7. **login.html** - Glassmorphic login page (no navbar)
8. **register.html** - Glassmorphic registration page (no navbar)
9. **404.html** - Futuristic error page with navigation options

## 🛠️ Usage

### Local Development

Simply open `index.html` in your web browser. All files are statically linked and work immediately.

```bash
# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to Repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Select `/ (root)` folder
5. Save and wait for deployment
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### Custom Domain (Optional)

1. Add a `CNAME` file in the root with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 425px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ✨ Key Features Implementation

### Theme Toggle
- Toggle button in navbar (desktop and mobile)
- Theme persists using localStorage
- Smooth transition between dark and light modes

### Animations
- Fade-in effects on scroll using Intersection Observer
- Smooth transitions on hover
- No infinite animations or autoplay sliders

### Forms
- Contact form with validation
- Login and Register forms (UI only - backend integration required)
- Form submissions show alert messages (replace with actual backend calls)

## 🔧 Customization

### Colors
Edit the color values in:
- HTML files (inline Tailwind classes)
- `assets/css/styles.css` (CSS variables and custom styles)

### Content
All content is directly in HTML files - edit as needed.

### Images
Replace placeholder images in `assets/img/`:
- `logo.svg` - Company logo
- `favicon.svg` - Site favicon
- `hero.jpg` - Hero section background (if needed)

## 📝 Notes

- **No Backend**: This is a static website. Forms require backend integration for actual functionality.
- **Tailwind CDN**: Uses Tailwind CSS via CDN for easy deployment.
- **SVG Favicon**: Uses SVG favicon for modern browser support. Older browsers may need PNG fallback.

## 🤝 License

This project is available for use as a template. Customize as needed for your business.

## 📧 Support

For questions or issues, please contact the development team.

---

Built with ❤️ for the future of automation


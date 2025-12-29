# Azman Sabbir - Portfolio Website

A modern, professional portfolio website for a Lead Automation Engineer / SQA Specialist.

## Features

- Clean, modern design with dark theme
- Blue/Teal accent colors (tech-focused)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations using AOS library
- Interactive elements (navigation, sliders, accordions)
- SEO optimized
- Fast loading

## Sections

1. **Home** - Hero section with intro and tech stack
2. **About** - Professional summary and approach
3. **Resume** - Experience, education, and skills
4. **Portfolio** - Project showcase with filtering
5. **Services** - Service offerings
6. **Testimonials** - Client feedback carousel
7. **Blog** - Latest articles
8. **FAQ** - Common questions
9. **Contact** - Contact form and details

## Project Structure

```
azman-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── images/         # Portfolio images
│   └── icons/          # SVG icons
└── README.md           # This file
```

## Setup Instructions

### 1. Replace Placeholder Images

Replace the SVG placeholder images in `assets/images/` with your actual images:

- `profile.jpg` - Your profile photo (recommended: 400x400px)
- `about.jpg` - About section image (recommended: 500x400px)
- `project1.jpg` to `project4.jpg` - Project screenshots (recommended: 600x400px)
- `blog1.jpg` to `blog4.jpg` - Blog featured images (recommended: 600x400px)
- `client1.jpg` to `client3.jpg` - Client photos (recommended: 100x100px)

### 2. Add Your Resume

Add your resume PDF file:
- Save as `assets/Azman_Sabbir_Resume.pdf`

### 3. Update Contact Form

The contact form currently simulates submission. To make it functional:

**Option A: Use Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Use EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their integration guide
3. Update `script.js` with your EmailJS credentials

### 4. Customize Content

Edit `index.html` to update:
- Personal information
- Work experience
- Education details
- Project descriptions
- Testimonials
- Blog posts
- FAQ answers

### 5. Update Social Links

In `index.html`, update the social media links:
- LinkedIn URL
- GitHub URL (add your actual GitHub profile)
- Email address

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this project to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Or connect your GitHub repository for auto-deploy

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #0ea5e9;      /* Main accent color */
    --secondary-color: #14b8a6;    /* Secondary accent */
    --bg-primary: #0f172a;         /* Background dark */
    --bg-secondary: #1e293b;       /* Background lighter */
    --text-primary: #f8fafc;       /* Main text color */
}
```

### Fonts

The website uses:
- **Inter** - Main font for body text
- **Fira Code** - Monospace font for code elements

To change fonts, update the Google Fonts link in `index.html` and the CSS variables.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Credits

- [Font Awesome](https://fontawesome.com) - Icons
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Google Fonts](https://fonts.google.com) - Typography

## License

This project is open source and available for personal use.

---

Built with care for **Azman Sabbir** - Lead Automation Engineer & SQA Specialist

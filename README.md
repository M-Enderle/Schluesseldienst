# Schlüsseldienst Kaufbeuren - Professional Locksmith Website

## 🏢 Overview

Modern, SEO-optimized website for Schlüsseldienst Kaufbeuren (Andreas Pabst) built with Astro.js. Features comprehensive accessibility, multi-location support, and professional design optimized for local locksmith services.

## ✨ Key Features

### 🎨 **Modern Design & UX**
- Professional blue color scheme with gradient accents
- Mobile-first responsive design
- Smooth animations and transitions
- Floating call-to-action button for mobile users
- Interactive service area map with Leaflet.js

### ♿ **Accessibility Excellence**
- Comprehensive ARIA labels for all interactive elements
- Screen reader optimized navigation
- Semantic HTML structure with proper landmarks
- WCAG 2.1 compliance improvements
- Context-aware descriptions for assistive technologies

### 🌍 **Multi-Location Support**
- Configurable text system for different cities
- Current configurations: Kaufbeuren & München
- Easy expansion to new service areas
- Centralized content management

### 📱 **Performance Optimized**
- Astro.js static site generation for blazing speed
- Optimized images with proper alt text
- Minimal JavaScript footprint
- CSS custom properties for consistent theming

## 🏗️ Technical Architecture

### **Framework & Tools**
- **Astro.js 4.x** - Static site generator
- **TypeScript** - Type safety and better DX
- **CSS Custom Properties** - Consistent design system
- **Leaflet.js** - Interactive maps
- **Image optimization** - Built-in Astro image processing

### **Project Structure**
```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Site navigation & phone
│   ├── Hero.astro      # Main landing section
│   ├── Services.astro  # Service offerings grid
│   ├── Testimonials.astro # Customer reviews
│   ├── FAQ.astro       # Frequently asked questions
│   ├── Partners.astro  # ADAC partnership
│   ├── Map.astro       # Interactive service area map
│   └── Footer.astro    # Site footer & links
├── config/             # Content configuration
│   ├── texts.json      # Kaufbeuren content
│   └── texts-munich.json # München content
├── layouts/
│   └── Layout.astro    # Base HTML template
├── pages/              # Route pages
│   ├── index.astro     # Homepage
│   ├── impressum.astro # Legal imprint
│   └── datenschutz.astro # Privacy policy
├── styles/
│   └── global.css      # Global styles
└── utils/
    └── textConfig.ts   # Configuration loader
```

## 🎯 Content Management System

### **Text Configuration**
All website content is managed through JSON configuration files:

```typescript
// Automatic city detection and content loading
const texts = getTexts(); // Loads appropriate config
```

### **Available Configurations**
- **Kaufbeuren** (`texts.json`) - Default configuration
- **München** (`texts-munich.json`) - Munich variant
- Easy to add new locations by copying and customizing

### **Content Sections**
- Company information & contact details
- SEO meta tags and descriptions
- Service descriptions and features
- Customer testimonials
- FAQ items and answers
- ARIA labels for accessibility
- Legal page content

## ♿ Accessibility Features

### **ARIA Labels**
Comprehensive labeling system for all interactive elements:

```typescript
ariaLabels: {
  header: {
    logo: "Zur Startseite von Schlüsseldienst Kaufbeuren",
    phoneLink: "Telefonnummer anrufen: 24h Notdienst",
    callButton: "Jetzt anrufen für sofortige Hilfe"
  },
  services: {
    ctaButton: "Service beauftragen - Jetzt anrufen",
    serviceCard: "Servicekarte für"
  }
  // ... and many more
}
```

### **Semantic HTML**
- Proper heading hierarchy (h1-h6)
- Landmark roles (`contentinfo`, `navigation`)
- Article and section elements
- Accessible form labels and descriptions

### **Screen Reader Optimizations**
- Descriptive alt text for all images
- `aria-hidden="true"` for decorative elements
- Context-aware button and link descriptions
- Proper focus management

## 🔧 Development

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd Schluesseldienst-Kaufbeuren

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### **Environment Setup**
```bash
# Development
npm run dev
# → http://localhost:4321

# Production build
npm run build
# → dist/ folder ready for deployment
```

## 🎨 Design System

### **Color Palette**
```css
:root {
  /* Primary Blue Theme */
  --primary-blue: #1e3a8a;
  --primary-blue-light: #3b82f6;
  --primary-blue-dark: #1e40af;
  --secondary-blue: #0ea5e9;
  --accent-blue: #06b6d4;
  
  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  
  /* Neutral Grays */
  --gray-50: #f8fafc;
  --gray-900: #0f172a;
}
```

### **Typography Scale**
- Font stack: System fonts for optimal performance
- Responsive font sizes using CSS custom properties
- Consistent line heights and spacing

### **Component Architecture**
- Reusable Astro components
- Consistent props interface
- TypeScript for type safety
- CSS scoped to components

## 📊 SEO & Performance

### **SEO Features**
- Comprehensive meta tags and Open Graph
- Structured data (Schema.org) for local business
- FAQ schema markup for rich snippets
- Canonical URLs and proper redirects
- XML sitemap generation

### **Performance Optimizations**
- Static site generation with Astro
- Optimized images with lazy loading
- Minimal JavaScript bundle
- CSS custom properties for theming
- DNS prefetching for external resources

### **Local SEO**
- Google My Business integration ready
- Local business schema markup
- Service area targeting
- Location-specific content

## 🚀 Deployment

### **Build Process**
```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

### **Deployment Targets**
- Hetzner

### **Environment Variables**
```bash
# Optional: Analytics tracking
GA_MEASUREMENT_ID=your-google-analytics-id
```

## 🔄 Adding New Locations

### **Step 1: Create Configuration**
```bash
# Copy existing config
cp src/config/texts.json src/config/texts-newcity.json
```

### **Step 2: Update Content**
Edit the new configuration file:
- Company name and contact details
- Service area information
- Local keywords and SEO content
- City-specific testimonials and FAQ

### **Step 3: Update Text Loader**
Modify `src/utils/textConfig.ts` to include the new configuration.

## 📞 Business Information

### **Schlüsseldienst Kaufbeuren**
- **Owner**: Andreas Pabst
- **Phone**: +49 1604 996655
- **Email**: firma@pabst-andreas.de
- **Address**: Kästobel 13, 87509 Immenstadt
- **Service Area**: Kaufbeuren and surrounding Allgäu region
- **Hours**: 24/7 Emergency Service

### **Services Offered**
- 🚪 Professional door opening (damage-free)
- 🚗 Car locksmith services (all makes/models)
- 🔐 Lock installation and repair
- 🛡️ Security consultation
- 🔑 Key duplication and replacement
- 🆘 24/7 emergency response

## 📈 Future Enhancements

### **Planned Features**
- [ ] Blog system for content marketing
- [ ] Online booking system
- [ ] Customer review integration
- [ ] Multi-language support (English)
- [ ] Progressive Web App features
- [ ] Advanced analytics dashboard

### **SEO Roadmap**
- [ ] Local landing pages for each district
- [ ] Service-specific pages
- [ ] Customer review schema
- [ ] Video testimonials
- [ ] Local backlink building

### **Accessibility Goals**
- [ ] Full WCAG 2.1 AA compliance audit
- [ ] Voice navigation testing
- [ ] High contrast mode
- [ ] Keyboard navigation improvements

## 🤝 Contributing

### **Code Standards**
- TypeScript for type safety
- Consistent component patterns
- Accessibility-first development
- Mobile-first responsive design

### **Content Updates**
- All content changes through JSON configs
- Maintain consistency across locations
- Test accessibility after changes
- Validate SEO impact

## 📄 License

Private project for Schlüsseldienst Kaufbeuren (Andreas Pabst). All rights reserved.

---

**Last Updated**: December 2024  
**Version**: 2.0  
**Astro Version**: 4.x  
**Node Version**: 18+

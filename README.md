# 🎓 Rwanda Olympiad Program Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

The official website for the **Rwanda Olympiad Program (ROP)** — the national umbrella organization that coordinates, develops, and promotes all Olympiad disciplines in Rwanda, including Mathematics, Physics, Informatics, and Artificial Intelligence.

🌐 **Live Website:** [rwandaolympiad.org](https://rwandaolympiad.org)

---

## 📋 Table of Contents

- [About ROP](#about-rop)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About ROP

The Rwanda Olympiad Program is dedicated to nurturing Rwanda's future innovators through excellence in STEM education. We:

- 🔬 **Train 500+ students** annually in Mathematics, Physics, Computing, and AI
- 🏆 **Win 50+ international medals** at global competitions
- 🎓 **Support university admissions** to MIT, Harvard, Yale, Cambridge, Carnegie Mellon, and more
- 🌍 **Represent Rwanda** at international Olympiad competitions
- 🤝 **Partner with leading institutions** to provide world-class training

---

## ✨ Features

### 🎨 User Experience
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Accessibility** - WCAG compliant with semantic HTML
- **Dark Mode Ready** - Theme provider integration (optional)

### 📄 Content Sections
- **Hero Section** - Eye-catching introduction with statistics
- **About ROP** - Mission, vision, and impact
- **Programs** - Mathematics, Physics, Computing & AI Olympiads
- **Activities** - Training sessions and workshops
- **Global Reach** - International competition participation
- **Success Stories** - Alumni achievements at top universities
- **Partners** - Sponsors and partner organizations
- **News & Updates** - Latest announcements
- **FAQ** - Expandable accordion with common questions
- **Contact Form** - Easy communication channel
- **Code of Conduct** - Community guidelines

### 🚀 Technical Features
- **Next.js 15** - Latest React framework with App Router
- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Image Optimization** - Next.js Image component for performance
- **SEO Optimized** - Comprehensive metadata and structured data
- **PWA Support** - Progressive Web App capabilities
- **Analytics Integration** - Vercel Analytics built-in
- **Performance Optimized** - Excellent Core Web Vitals scores

### 🔍 SEO Features
- Complete metadata system with Open Graph & Twitter Cards
- Structured Data (JSON-LD) for rich snippets
- Dynamic XML sitemap
- Robots.txt optimization
- Geographic targeting (Rwanda/Kigali)
- 20+ optimized keywords
- Mobile-first indexing ready

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Geist Font](https://vercel.com/font)** - Modern typography

### Tools & Libraries
- **[class-variance-authority](https://cva.style/docs)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** - Class name utilities
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[date-fns](https://date-fns.org/)** - Date utilities

### Development
- **[pnpm](https://pnpm.io/)** - Fast package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

### Analytics & Monitoring
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance & user analytics

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ndevu12/ROP_website.git
   cd ROP_website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

---

## 📁 Project Structure

```
ROP_website/
├── app/                          # Next.js App Router
│   ├── code-of-conduct/         # Code of Conduct page
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── robots.ts                # Robots.txt generation
│   └── sitemap.ts               # Sitemap generation
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Radix)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ... (40+ components)
│   ├── about.tsx                # About section
│   ├── activities.tsx           # Activities section
│   ├── contact.tsx              # Contact form
│   ├── faq.tsx                  # FAQ with accordion
│   ├── footer.tsx               # Site footer
│   ├── global.tsx               # Global reach section
│   ├── header.tsx               # Site header
│   ├── hero.tsx                 # Hero section
│   ├── news.tsx                 # News section
│   ├── partners.tsx             # Partners/sponsors
│   ├── programs.tsx             # Olympiad programs
│   ├── success-stories.tsx      # Alumni success stories
│   ├── structured-data.tsx      # SEO structured data
│   └── theme-provider.tsx       # Theme context
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                          # Utility functions
│   ├── socials.ts               # Social media links
│   ├── sponsors.ts              # Sponsor data
│   └── utils.ts                 # Helper functions
├── public/                       # Static assets
│   ├── images/                  # Images and logos
│   └── manifest.json            # PWA manifest
├── styles/                       # Additional styles
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn/ui configuration
├── SEO_GUIDE.md                 # SEO implementation guide
├── DEPLOYMENT_SEO_CHECKLIST.md  # Deployment checklist
├── SEO_SUMMARY.md               # SEO quick reference
├── SOCIAL_MEDIA_GUIDE.md        # Social media strategy
└── README.md                    # This file
```

---

## 🔍 SEO Optimization

This website is fully optimized for search engines to rank #1 in Rwanda:

### Implemented Features
✅ Comprehensive metadata (Open Graph, Twitter Cards)  
✅ Structured Data (Organization, Website, Event, FAQ, Breadcrumb)  
✅ Dynamic XML sitemap  
✅ Optimized robots.txt  
✅ Geographic targeting (Rwanda/Kigali)  
✅ Mobile-first responsive design  
✅ Fast loading times (Core Web Vitals optimized)  
✅ Semantic HTML structure  
✅ PWA support  

### Target Keywords
- Rwanda Olympiad Program
- Mathematics Olympiad Rwanda
- Physics Olympiad Rwanda
- Computing Olympiad Rwanda
- AI Olympiad Rwanda
- STEM education Rwanda
- *...and 15+ more optimized keywords*

### Documentation
- 📖 **[SEO_GUIDE.md](SEO_GUIDE.md)** - Complete SEO strategy
- ✅ **[DEPLOYMENT_SEO_CHECKLIST.md](DEPLOYMENT_SEO_CHECKLIST.md)** - Pre-launch checklist
- 📊 **[SEO_SUMMARY.md](SEO_SUMMARY.md)** - Quick reference
- 📱 **[SOCIAL_MEDIA_GUIDE.md](SOCIAL_MEDIA_GUIDE.md)** - Social media strategy

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy automatically

3. **Configure Domain**
   - Add your custom domain in Vercel settings
   - Update domain in SEO files (see checklist)

### Pre-Deployment Checklist

Before going live, complete these steps:

- [ ] Update domain URLs in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `components/structured-data.tsx`
- [ ] Add Google verification code in `app/layout.tsx`
- [ ] Create required images: `og-image.png`, `twitter-image.png`, `favicon.ico`, `apple-touch-icon.png`
- [ ] Update social media links in `components/structured-data.tsx`
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console

**📋 Full checklist:** See [DEPLOYMENT_SEO_CHECKLIST.md](DEPLOYMENT_SEO_CHECKLIST.md)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues
- Use GitHub Issues to report bugs
- Include screenshots and steps to reproduce
- Check existing issues before creating new ones

### Pull Requests
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design on all devices

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Rwanda Olympiad Program**

- 🌐 Website: [rwandaolympiad.org](https://rwandaolympiad.org)
- 📧 Email: info@rwandaolympiad.org
- 📍 Location: Kigali, Rwanda

### Social Media
- Twitter: [@RwandaOlympiad](https://twitter.com/RwandaOlympiad)
- Facebook: [Rwanda Olympiad Program](https://facebook.com/RwandaOlympiad)
- LinkedIn: [Rwanda Olympiad Program](https://linkedin.com/company/rwanda-olympiad-program)
- Instagram: [@rwandaolympiad](https://instagram.com/rwandaolympiad)

### Development Team
- **GitHub**: [@Ndevu12](https://github.com/Ndevu12)
- **Repository**: [ROP_website](https://github.com/Ndevu12/ROP_website)

---

## 🙏 Acknowledgments

- All ROP coaches and mentors
- Partner universities and organizations
- Students and alumni who make ROP successful
- Open source community for amazing tools

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Ndevu12/ROP_website?style=social)
![GitHub forks](https://img.shields.io/github/forks/Ndevu12/ROP_website?style=social)
![GitHub issues](https://img.shields.io/github/issues/Ndevu12/ROP_website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ndevu12/ROP_website)

---

<div align="center">
  <p>Built with LOVE by Ndevu12</p>
  <p>Empowering Rwanda's Future Innovators 🇷🇼</p>
  <p><strong>2025 © Rwanda Olympiad Program. All rights reserved.</strong></p>
</div>

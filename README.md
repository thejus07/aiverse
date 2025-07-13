# AiVerse Marketing Site

Welcome to the AiVerse Marketing Site! This project is a fully responsive, visually striking marketing website for an AI agency specializing in end-to-end machine learning, computer vision, NLP, and data automation services.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode

## Features

- ✨ Modern, minimalistic design with dark-mode toggle
- 🎨 Smooth scroll animations and micro-interactions
- 📱 Fully responsive 12-column grid layout
- 🔍 SEO optimized with meta tags, Open Graph, sitemap.xml, robots.txt
- ♿ WCAG AA compliant accessibility
- 🚀 Optimized for performance (Lighthouse score 90+)
- 📊 Analytics integration ready
- 🔧 CI/CD with GitHub Actions
- 🌐 Vercel deployment ready

## Site Sections

1. **Hero Section** - Full-viewport animated gradient with CTA
2. **Services Overview** - Interactive cards for AI services
3. **How It Works** - 3-step timeline (Discover → Build → Deploy)
4. **Case Studies** - Tabbed interface with featured projects
5. **Testimonials** - Client feedback with animations
6. **Tech Stack** - Technology integrations and partnerships
7. **Blog Preview** - Latest articles and insights
8. **Contact Form** - Lead capture with embedded map
9. **Footer** - Newsletter signup and comprehensive links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aiverse-site.git
cd aiverse-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Deploy

Build for production:
```bash
npm run build
```

Deploy to Vercel:
```bash
npm run deploy
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── header.tsx
│   ├── hero.tsx
│   ├── services.tsx
│   ├── how-it-works.tsx
│   ├── case-studies.tsx
│   ├── testimonials.tsx
│   ├── tech-stack.tsx
│   ├── blog-preview.tsx
│   ├── contact-and-newsletter.tsx
│   ├── footer.tsx
│   └── theme-provider.tsx
└── ...
```

## Key Features

### Performance
- Lazy loading for images
- Code splitting
- Optimized fonts (Inter, Fira Code)
- Minimal bundle size

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Color contrast compliance

### SEO
- Dynamic meta tags
- Open Graph integration
- Structured data
- XML sitemap
- Robots.txt configuration

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_SITE_URL=https://aiverse.solutions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@aiverse.solutions or join our Slack channel.

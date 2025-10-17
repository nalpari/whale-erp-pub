# Whale ERP Demo

A modern ERP demo application built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server with Turbopack
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.5.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & Design
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss)** - PostCSS integration
- **[Geist Font Family](https://vercel.com/font)** - Optimized fonts from Vercel

### Build Tools
- **[Turbopack](https://turbo.build/pack)** - Next.js's Rust-based bundler for faster builds
- **[ESLint 9](https://eslint.org/)** - Code quality and consistency

## 📁 Project Structure

```
whale-erp-demo-pub/
├── src/
│   └── app/                 # Next.js App Router
│       ├── layout.tsx       # Root layout with font configuration
│       ├── page.tsx         # Home page
│       ├── globals.css      # Global styles and Tailwind directives
│       └── favicon.ico      # App icon
├── public/                  # Static assets
│   ├── next.svg
│   ├── vercel.svg
│   └── *.svg                # Icon assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint flat config
├── postcss.config.mjs       # PostCSS configuration
└── tailwind.config.ts       # Tailwind CSS configuration (auto-generated)
```

## 🎨 Styling Architecture

### Tailwind CSS v4 Features
- **CSS-first configuration** using `@theme` directive
- **Native CSS custom properties** for theming
- **Dark mode support** via `prefers-color-scheme`
- **Responsive design** with mobile-first approach

### Theme Configuration

The app uses a custom theme defined in [globals.css](src/app/globals.css):

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Font System

Optimized Google Fonts via `next/font`:
- **Geist Sans** - Primary UI font
- **Geist Mono** - Code and monospace text

Font variables are globally available:
- `--font-geist-sans`
- `--font-geist-mono`

## 🔧 Development

### TypeScript Configuration

- **Path Aliases**: `@/*` maps to `./src/*`
- **Strict Mode**: Enabled for type safety
- **Module Resolution**: Bundler mode optimized for Next.js

Example import:
```typescript
import { Component } from '@/components/Component'
```

### Code Quality

```bash
# Run ESLint
pnpm lint
# or
npm run lint
```

ESLint is configured with:
- `next/core-web-vitals` - Performance and accessibility rules
- `next/typescript` - TypeScript-specific Next.js rules

### App Router Patterns

This project uses Next.js App Router with:
- **Server Components** by default (no "use client" directive needed)
- **Metadata API** for SEO optimization
- **File-based routing** in `src/app/`
- **Image Optimization** via `next/image` component

## 🚀 Performance Optimizations

### Turbopack
- Enabled for both development and production builds
- Significantly faster than Webpack
- Optimized for Next.js workflows

### Image Optimization
- Automatic image optimization via `next/image`
- WebP/AVIF support
- Responsive images with srcSet

### Font Optimization
- Automatic font subsetting
- Self-hosted fonts for privacy and performance
- Zero layout shift with `font-display: swap`

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn React 19 features
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) - Explore Tailwind CSS capabilities
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Master TypeScript

## 🌐 Deployment

### Vercel (Recommended)

The easiest deployment option for Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## 📝 License

This project is private and for demonstration purposes.

---

Built with ❤️ using [Next.js](https://nextjs.org)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** application using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project uses **Turbopack** for faster builds and development.

## Development Commands

### Core Development
- **Start dev server**: `npm run dev` (uses Turbopack)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

### Package Manager
This project uses **pnpm** (evidenced by `pnpm-lock.yaml`). While npm commands work, prefer pnpm for consistency:
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.5 with App Router
- **React**: 19.2.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Build Tool**: Turbopack (Next.js's Rust-based bundler)
- **Fonts**: Geist Sans and Geist Mono (via next/font)

### Project Structure
```
src/
  app/              # App Router directory
    layout.tsx      # Root layout with font configuration
    page.tsx        # Home page
    globals.css     # Global styles with Tailwind directives
    favicon.ico     # Site favicon
```

### TypeScript Configuration
- **Path alias**: `@/*` maps to `./src/*`
- **Target**: ES2017
- **Module Resolution**: bundler mode (optimized for Next.js)
- **Strict mode**: enabled

### Styling Approach
- Tailwind CSS v4 with PostCSS integration
- Utility-first CSS with responsive modifiers (`sm:`, `dark:`)
- Custom font variables defined in layout: `--font-geist-sans`, `--font-geist-mono`

### ESLint Configuration
- Uses Next.js recommended configs: `next/core-web-vitals`, `next/typescript`
- Flat config format (ESLint 9)
- Ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`

## Development Notes

### App Router Patterns
- Server Components by default (no "use client" needed unless using hooks/interactivity)
- Metadata exports for SEO in layouts and pages
- File-based routing in `src/app/`

### Font Optimization
- Fonts are loaded via `next/font/google` for automatic optimization
- Font variables are applied to `<body>` and available globally via CSS variables

### Build Optimizations
- Turbopack is enabled for both dev and production builds
- Image optimization via `next/image` component (already in use on page.tsx)

### Current State
This is a fresh create-next-app installation with default template content. The project is ready for custom feature development.

### Memo
- 모든 답변과 추론과정은 한국어로 해주세요.
- 커밋메세지의 타이틀은 영어로, 내용은 한국어로 해주세요. 예시 'feat: 회원가입 기능 추가' 

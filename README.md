# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

100% vibed btw.

## Features

- **Static Site Generation**: Optimized for fast loading with Next.js static export
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the codebase
- **Modern UI**: Clean and professional design

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site for production (outputs to `out/` directory)
- `npm run lint` - Run ESLint

## Deployment to Cloudflare Pages

Cloudflare Pages automatically deploys your site when you push to your Git repository.

### Setup Instructions

1. **Connect your repository to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages → Create a project
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave as default)

3. **Environment variables** (if needed):
   - Add any required environment variables in the Cloudflare Pages dashboard

4. **Deploy**:
   - Cloudflare Pages will automatically build and deploy on every push to your main branch
   - You can also trigger manual deployments from the dashboard

### Custom Domain

1. In Cloudflare Pages dashboard, go to your project → Custom domains
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Cloudflare will automatically provision an SSL certificate

### Build Output

The static site is generated in the `out/` directory after running `npm run build`. This directory contains all the HTML, CSS, JavaScript, and assets needed to serve the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── cv/                # CV page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── page.tsx           # Home page
├── components/            # React components
├── public/                # Static assets (images, logos)
└── out/                   # Static export output (generated)

```

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

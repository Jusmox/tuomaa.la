# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Configured for static export and GitHub Pages deployment.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build a static export:

```bash
npm run build
```

This will generate a static site in the `out/` directory that can be deployed to any static hosting service.

## Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site on every push to the `main` branch

### Manual Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory

3. If your repository is named `your-username.github.io`, the site will be available at `https://your-username.github.io`

4. If your repository has a different name, you may need to:
   - Update `next.config.js` and set `basePath: '/your-repo-name'`
   - Update `trailingSlash: true` in `next.config.js`
   - Your site will be available at `https://your-username.github.io/your-repo-name`

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components
- `types/` - TypeScript type definitions
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflow for automatic deployment

## Features

- Modern, responsive design
- Static site generation (SSG)
- TypeScript for type safety
- Tailwind CSS for styling
- Accessible components
- Optimized performance
- GitHub Pages compatible



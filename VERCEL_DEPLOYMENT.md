# Deploying to Vercel

This guide will help you deploy your Sedrick Wall portfolio website to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Your code pushed to GitHub, GitLab, or Bitbucket

## Quick Deploy

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Build Settings** (should auto-populate from vercel.json)
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Root Directory**: `.` (leave as default)

4. **Click "Deploy"**
   - Your site will be live at `https://your-project.vercel.app` in ~2 minutes

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel

   # For production deployment
   vercel --prod
   ```

## Configuration Files

Your project includes these Vercel configuration files:

### `vercel.json`
- Specifies build commands and output directory
- Configures URL rewrites for client-side routing
- Sets cache headers for optimal performance

### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size and time

## Custom Domain

After deploying, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `sedrickwall.com`)
4. Follow DNS configuration instructions

## Environment Variables

If you add backend functionality in the future:

1. Go to Project Settings → "Environment Variables"
2. Add any required variables (API keys, database URLs, etc.)
3. Redeploy to apply changes

## Troubleshooting

### Build Fails

**Error**: Module not found or dependency issues
- **Solution**: Make sure all dependencies are in `package.json`
- Run `npm install` locally to verify

### 404 on Page Refresh

**Error**: Page not found when refreshing on routes like `/community` or `/blog`
- **Solution**: Already configured in `vercel.json` with rewrites
- Vercel will route all requests to `/index.html` for client-side routing

### Images Not Loading

**Error**: Generated images or assets return 404
- **Solution**: 
  - Ensure all images are in the `attached_assets` folder
  - Verify Vite alias configuration in `vite.config.ts`
  - Check that images are imported correctly using `@assets/...`

### Slow Initial Load

**Optimization**: 
- Vercel automatically optimizes images and assets
- Consider enabling "Edge Functions" in Vercel settings for faster global delivery

## Performance Optimization

Your site is already optimized with:
- ✅ Static site generation (ultra-fast)
- ✅ Asset caching (1 year cache for images/fonts)
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Compression (Gzip/Brotli)

## Post-Deployment

After your first successful deployment:

1. **Test all pages**: Home, Community, Real Estate, Blog
2. **Check all links**: Resume download, social links, navigation
3. **Verify mobile responsiveness**: Test on different devices
4. **Check analytics**: Set up [Vercel Analytics](https://vercel.com/analytics) (optional)

## Updating Your Site

To deploy updates:

1. **Make changes locally**
2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. **Vercel auto-deploys** (if enabled)
   - Or redeploy manually from Vercel Dashboard

## Vercel Project Settings

Recommended settings for your portfolio:

- **Auto-assign domains**: Enabled
- **Automatically expose System Environment Variables**: Enabled
- **Speed Insights**: Enabled (helps track performance)
- **Deployment Protection**: None (since it's a public portfolio)

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Summary

Your portfolio is a **static site** - no backend server needed. This means:
- 🚀 Blazing fast performance
- 💰 Free hosting on Vercel
- 🌍 Global CDN distribution
- 🔒 Automatic HTTPS
- 📱 Perfect mobile performance

Just push to GitHub and deploy to Vercel - it's that simple!

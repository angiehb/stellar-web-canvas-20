
# GitHub Pages Deployment Guide

## Step 1: Update package.json
Add these fields to your package.json file:

```json
{
  "homepage": "https://angiehannabugueiro.com",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## Step 2: Deploy to GitHub Pages
Run these commands in your terminal:

```bash
npm install
npm run deploy
```

## Step 3: Configure GitHub Repository
1. Go to your GitHub repository settings
2. Navigate to Pages section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Select "/ (root)" folder

## Step 4: Custom Domain Configuration
1. In your repository settings under Pages
2. Add your custom domain: angiehannabugueiro.com
3. Enable "Enforce HTTPS"

This process will:
- Build your app properly for GitHub Pages
- Deploy to a gh-pages branch
- Serve files with correct MIME types
- Handle client-side routing properly

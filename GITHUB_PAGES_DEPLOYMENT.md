# Deploying ProxiTech Website to GitHub Pages with Custom Domain

This guide walks you through deploying your website to GitHub Pages at `www.proxitech.com.au`.

## Prerequisites

- ✅ Node.js 20+ installed (via nvm)
- ✅ Git repository ready
- ✅ GitHub account
- ✅ Domain registrar access for `proxitech.com.au`

## Step 1: Push Your Code to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `proxitech-website` (or your choice)
3. Set as **Public** (required for free GitHub Pages)
4. **Don't** initialize with README (we already have files)
5. Click "Create repository"

### 1.2 Push Your Local Code

```bash
# Make sure nvm is loaded
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Add the GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/proxitech-website.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically deploy on the next push

## Step 3: Configure Your Domain

### 3.1 DNS Configuration at Your Domain Registrar

You need to add these DNS records for `proxitech.com.au`:

#### Option A: Use `www` subdomain (Recommended)

**Add these DNS records:**

| Type | Name  | Value                   | TTL  |
|------|-------|-------------------------|------|
| CNAME| www   | `YOUR-USERNAME.github.io` | 3600 |
| A    | @     | `185.199.108.153`          | 3600 |
| A    | @     | `185.199.109.153`          | 3600 |
| A    | @     | `185.199.110.153`          | 3600 |
| A    | @     | `185.199.111.153`          | 3600 |

Replace `YOUR-USERNAME` with your GitHub username.

**Example if your username is `oscar`:**
- `www.proxitech.com.au` → `oscar.github.io`

#### Option B: Use Apex Domain (Root domain)

**Add these A records:**

| Type | Name  | Value              | TTL  |
|------|-------|--------------------|------|
| A    | @     | `185.199.108.153`   | 3600 |
| A    | @     | `185.199.109.153`   | 3600 |
| A    | @     | `185.199.110.153`   | 3600 |
| A    | @     | `185.199.111.153`   | 3600 |

If using apex domain, also update the `public/CNAME` file to use `proxitech.com.au` instead of `www.proxitech.com.au`.

### 3.2 Where to Add DNS Records

The location depends on your domain registrar. Common providers:

- **Cloudflare**: DNS dashboard → Add records
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: DNS → Custom resource records
- **GoDaddy**: My Products → DNS Management
- **AU Domain**: DNS Hosting → DNS Management

### 3.3 Verify DNS Propagation

After adding the records, verify they're working:

```bash
# Check CNAME record
dig www.proxitech.com.au CNAME

# Check A records
dig proxitech.com.au A
```

Or use online tools like:
- https://dnschecker.org/
- https://www.whatsmydns.net/

## Step 4: Configure Custom Domain in GitHub

After DNS is configured:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Scroll to "Custom domain" section
4. Enter: `www.proxitech.com.au` (or `proxitech.com.au` if using apex)
5. Check **"Enforce HTTPS"** (may take a few minutes to become available)
6. GitHub will automatically create the `CNAME` file in your repository

## Step 5: Deploy and Verify

### 5.1 Initial Deployment

After the first push, GitHub Actions will:

1. Build your Next.js site
2. Generate static files in `out/` directory
3. Deploy to GitHub Pages

### 5.2 Monitor Deployment

1. Go to your repository
2. Click the **Actions** tab
3. Watch the workflow run
4. A green checkmark means success!

### 5.3 Access Your Site

Your site will be available at:
- `https://www.proxitech.com.au` (after DNS propagates)
- `https://YOUR-USERNAME.github.io/proxitech-website` (immediately)

**Note:** DNS propagation can take 5 minutes to 48 hours, but usually completes within 1-2 hours.

## Step 6: HTTPS Certificate

GitHub Pages automatically provisions SSL certificates for custom domains via Let's Encrypt. This happens automatically after:

1. DNS records are correctly configured
2. The domain is added in GitHub Pages settings
3. GitHub verifies domain ownership

The certificate is usually ready within 24 hours, often much sooner.

## Troubleshooting

### Site Not Loading

1. **Check DNS**: Use `dig` or online tools to verify DNS records
2. **Wait**: DNS propagation can take time
3. **Check workflow**: Go to Actions tab, ensure deployment succeeded
4. **Check domain**: Verify domain is listed in Pages settings

### Mixed Content Warnings

Make sure all your images and assets use HTTPS URLs.

### Build Failures

Check the Actions tab for error messages. Common issues:
- Node.js version issues
- Dependency conflicts
- TypeScript errors

### Domain Still Redirecting to GitHub URL

1. Clear browser cache
2. Wait for DNS to fully propagate (up to 48 hours)
3. Try incognito/private browsing mode

## Updating Your Site

To update your site, simply push changes:

```bash
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically rebuild and deploy!

## Development Workflow

### Make Changes Locally

```bash
# Start dev server
npm run dev

# Preview at http://localhost:3000
```

### Build and Test Locally

```bash
# Build static files
npm run build

# Preview build
npx serve out
```

### Push Changes

```bash
git add .
git commit -m "Description of changes"
git push
```

## Additional Configuration

### Subdirectory on Domain

If you want to host multiple sites on one domain (e.g., `www.proxitech.com.au/blog`), you'll need to:

1. Update `next.config.mjs`:
```javascript
basePath: '/blog',
assetPrefix: '/blog',
```

2. Update `public/CNAME` (it will be created by GitHub)

### Analytics and Tracking

Add your analytics tracking code to `app/layout.tsx` in the `<head>` section.

## Support

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Next.js Static Export: https://nextjs.org/docs/advanced-features/static-html-export
- DNS Issues: Contact your domain registrar support

## Summary

✅ Code is configured for static export  
✅ GitHub Actions workflow ready  
✅ CNAME file created for custom domain  
✅ Ready to push to GitHub and configure DNS  

**Next Steps:**
1. Push code to GitHub
2. Enable GitHub Pages
3. Configure DNS records
4. Add custom domain in GitHub
5. Wait for HTTPS certificate
6. Enjoy your live site! 🚀

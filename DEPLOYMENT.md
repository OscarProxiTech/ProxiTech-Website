# Deployment Guide for ProxiTech Website

## Current Setup Status

✅ Repository initialised and ready  
✅ Next.js configured for static export  
✅ GitHub Actions workflow created  
✅ Dependencies installed  
✅ Node.js v20.19.5 installed via nvm  
✅ Build tested and working successfully  

## Next Steps

### Setup nvm in Your Shell (Optional but Recommended)

If you open a new terminal, you'll need to load nvm:

```bash
# Add to your ~/.bashrc (if not already there)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Or just run in current shell
source ~/.bashrc

# Verify Node.js 20 is available
nvm use 20
node --version  # Should show v20.19.5
```

### 1. Node.js Setup (Already Complete)

You need Node.js 20+ to build the website. Use one of these methods:

#### Option A: Using nvm (Recommended)

```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload your shell configuration
source ~/.bashrc

# Install and use Node.js 20
nvm install 20
nvm use 20

# Verify
node --version
```

#### Option B: Using snap

```bash
sudo snap install node --classic
```

#### Option C: Download from nodejs.org

Visit https://nodejs.org/ and download Node.js 20 LTS.

### 2. Test the Build

Once Node.js is upgraded:

```bash
# Test the build process
npm run build

# If successful, you should see an 'out' directory created
ls -la out/
```

### 3. Push to GitHub

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/proxitech-website.git
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow file (`.github/workflows/deploy.yml`) will automatically run on every push to `main`

### 5. Access Your Site

Your site will be available at:
- `https://YOUR-USERNAME.github.io/proxitech-website/`

If you want it at the root of your GitHub Pages site (`https://YOUR-USERNAME.github.io/`):
1. Create a repository named `YOUR-USERNAME.github.io`
2. Push this code there
3. Update `next.config.mjs` and remove the `basePath` and `assetPrefix` comments

## Development Workflow

### Making Changes Locally

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
```

### Building

```bash
# Build static files
npm run build

# Preview the build locally
npx serve out
```

### Pushing Changes

```bash
# After making changes
git add .
git commit -m "Your commit message"
git push

# The GitHub Actions workflow will automatically deploy
```

## Important Notes

- The site is configured for static export (no server-side rendering)
- Images are unoptimized for GitHub Pages compatibility
- TypeScript build errors are ignored for now (`ignoreBuildErrors: true`)
- Hot reload is available during development but not in the static build

## Troubleshooting

### "You are using Node.js X" error
You need to upgrade Node.js to version 20 or higher. See the upgrade instructions above.

### Dependencies won't install
Run with `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

### Build fails
Check the error messages and ensure:
- Node.js version is 20+
- All dependencies are installed
- No TypeScript errors (if possible, fix them)

## Customisation

### Changing the base path

If deploying to a subdirectory, edit `next.config.mjs`:

```javascript
basePath: '/proxitech-website',
assetPrefix: '/proxitech-website',
```

### Removing type ignore
To fix TypeScript errors instead of ignoring them, remove `ignoreBuildErrors: true` from `next.config.mjs`.

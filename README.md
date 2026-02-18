# Manni Raam Reddy Pannala — Portfolio Website

A production-ready, single-page portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Quick Start (GitHub Pages)

### Option A: New Repository
1. Create a new GitHub repo named `your-github-username.github.io`
2. Upload all files maintaining this folder structure:
```
your-repo/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
        └── profile.jpg   ← PUT YOUR PHOTO HERE
```
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site will be live at `https://your-github-username.github.io`

### Option B: Project Repository
1. Create a repo with any name (e.g., `portfolio`)
2. Upload all files as above
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Site will be at `https://your-github-username.github.io/portfolio`

---

## 📸 Adding Your Profile Photo
Replace `assets/img/profile.jpg` with your own photo:
- **Recommended size**: 400×400px or larger (square)
- **Format**: JPG or PNG
- **Keep the filename**: `profile.jpg` (or update the `src` in `index.html`)

If no photo is provided, a user icon placeholder will appear automatically.

---

## ✏️ Personalizing Content

All content is in `index.html`. Search for these to update:

| What to update | Where to find it |
|---|---|
| Name, role, tagline | `#home` section hero text |
| Email | `mailto:` and `data-copy` values in `#contact` |
| Phone | `tel:` and `data-copy` values in `#contact` |
| LinkedIn URL | `href` in LinkedIn contact card |
| GitHub URL | `href` in GitHub contact card |
| Medium URL | `href` in Medium contact card |
| About paragraph | `#about` section |
| Stats numbers | `data-target` attributes on `.stat-num` elements |

---

## 🛠️ Local Development
No build tools needed. Just open `index.html` in a browser, or use a simple server:
```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```
Then visit `http://localhost:8000`

---

## 🎨 Customization

### Colors
Edit CSS variables at the top of `assets/css/style.css`:
```css
:root {
  --accent: #38bdf8;    /* Main accent (cyan) */
  --accent2: #818cf8;   /* Secondary accent (indigo) */
  --accent3: #34d399;   /* Green (availability badge) */
}
```

### Fonts
Change the Google Fonts import in `index.html` and the font variables in `style.css`:
```css
--font-display: 'Syne', sans-serif;
--font-body: 'DM Sans', sans-serif;
```

---

## 📱 Features
- ✅ Single-page scrolling with sticky nav
- ✅ Smooth scroll + scrollspy active link highlighting
- ✅ Animated hero with CSS planet/moon decoration
- ✅ Scroll-triggered reveal animations
- ✅ Animated stat counters
- ✅ Company/project tabbed panel (no page reload)
- ✅ Copy-to-clipboard with toast notification
- ✅ Mobile-responsive (hamburger menu)
- ✅ Keyboard accessible (ARIA labels, focus states)
- ✅ Back-to-top button
- ✅ SEO meta tags + Open Graph
- ✅ No frameworks, no build step, no dependencies

---

## 📄 License
MIT — free to use and customize.

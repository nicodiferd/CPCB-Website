# CPCB Mustangs Baseball Website

A modern, custom-built replacement for the existing Wix-based website at cpcbmustangs.com. This project aims to provide better functionality and reduce operating costs for the CPCB Mustangs baseball team.

## Project Overview

This website is being developed to replace the current Wix subscription-based site with a custom solution that offers:
- Better performance and loading speeds
- More flexibility and customization options
- Lower long-term costs (no monthly Wix subscription)
- Improved user experience for team members and visitors

## Project Structure

```
CPCB Website/
├── index.html          # Main homepage
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Image assets
├── assets/            # Other assets (documents, etc.)
└── README.md          # Project documentation
```

## Current Features

- Responsive navigation header
- Modern, clean design
- Smooth scrolling navigation
- Mobile-friendly layout

## Planned Features

- [ ] Team roster and player profiles
- [ ] Game schedule and results
- [ ] News and announcements section
- [ ] Photo gallery
- [ ] Contact form
- [ ] Sponsor information
- [ ] Team statistics

## Getting Started

To view the website locally:
1. Clone this repository
2. Open `index.html` in your web browser
3. No build process required for basic HTML/CSS/JS

## Git Workflow & Development

This project uses a **feature branch workflow** for version control and deployment.

### Branch Structure
- **`main`** - Production branch → Deployed to production domain
- **`dev`** - Development branch → Deployed to dev/staging domain
- **`feature/*`** - Feature branches → Get automatic preview deployments

### Quick Start Workflow

**Starting a new feature:**
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

**Working and committing:**
```bash
git add .
git commit -m "Your descriptive commit message"
git push -u origin feature/your-feature-name
```

**Merging to dev for testing:**
```bash
git checkout dev
git merge feature/your-feature-name
git push origin dev
```

**Deploying to production:**
```bash
git checkout main
git merge dev
git push origin main
```

### Deployment
- **Production:** `main` branch auto-deploys to Vercel
- **Development:** `dev` branch auto-deploys to Vercel preview
- **Features:** Each feature branch gets its own preview URL

## Future Development

As the project grows, we may consider:
- Adding a static site generator (e.g., Eleventy, Hugo)
- Implementing a CMS for easier content management
- Adding a build process for optimization
- Integration with GameChanger API for live stats

## Contributing

This project is maintained for the CPCB Mustangs baseball team. For questions or suggestions, please contact the team administrator.

## License

Copyright © 2025 CPCB Mustangs Baseball. All rights reserved.

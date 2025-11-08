# Simply Nourished — Minimalist Wellness Site

This is a small, modern, minimalist static site scaffold for a wellness brand called "Simply Nourished." It emphasizes calm visuals, accessible typography, and a soothing color palette (sage green, beige, blush, ivory). The site features a range of pages: Home, About, Programs (including the 100-Day Nourish Plan), Blog, Resources, and Contact.

What's included
- `index.html` — Home with hero, featured programs, latest posts, newsletter placeholder, and Instagram tiles.
- `about.html` — Brand story and philosophy.
- `programs.html` & `program-100-day.html` — Programs listing and dedicated 100-Day page.
- `blog.html` — Blog listing (sample posts).
- `resources.html` — Downloadable resources listing (placeholders).
- `contact.html` — Contact form placeholder.
- `css/styles.css` — Central styles with variables for the color palette and responsive rules.
- `js/main.js` — Small JS for mobile nav and subscription form placeholder.
- `assets/placeholder.jpg` — Placeholder image (replace with your photos).

Local preview
1. Open `index.html` in your browser. On Windows, you can double-click the file or open it from your browser's File > Open.

# Simply Nourished — Minimalist Wellness Site

This is a small, modern, minimalist static site scaffold for a wellness brand called "Simply Nourished." It emphasizes calm visuals, accessible typography, and a soothing color palette (sage green, beige, blush, ivory). The site features a range of pages: Home, About, Programs (including the 100-Day Nourish Plan), Blog, Resources, and Contact.

What's included
- `index.html` — Home with enhanced hero, featured programs, latest posts, newsletter placeholder, Instagram mock tiles, and testimonials.
- `about.html` — Brand story and philosophy.
- `programs.html` & `program-100-day.html` — Programs listing and dedicated 100-Day page.
- `blog.html` — Blog listing (sample posts) with categories and read times.
- `resources.html` — Downloadable resources with sample PDFs.
- `contact.html` — Contact form placeholder with client-side validation.
- `css/styles.css` — Central styles with variables for the color palette and responsive rules, plus animations.
- `js/main.js` — Interactivity: mobile nav toggle, reveal-on-scroll, testimonials slider, and newsletter modal demo.

New interactive features
- Hero enhancements and subtle visuals on the homepage.
- Reveal-on-scroll animations and micro-interactions.
- Testimonials slider (auto-advances) for social proof.
- Newsletter modal which appears after a short delay (placeholder).
- Downloadable sample resources (habit tracker and meal planner) in `assets/`.

Local preview
1. Open `index.html` in your browser. On Windows, you can double-click the file or open it from your browser's File > Open.

For a local server (recommended for consistent relative paths), you can run a quick static server. On Windows PowerShell, one easy way is:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser (run the command in the `simply_nourished` folder).

Notes about the newsletter modal
- The site includes a placeholder modal that will appear after ~12 seconds for first-time visitors (stored in localStorage). This is a front-end demo; replace with a real provider as described below.

Integration notes
- Email subscription: The newsletter forms are placeholders. To integrate Mailchimp, ConvertKit, or a similar provider:
	1. Create the form in your provider and copy the form `action` URL from their embed code.
	2. Replace the `action="#"` on `<form id="subscribe-form">` and the modal form with the provider's action URL. Adjust the email input `name` if required (e.g., Mailchimp expects `EMAIL`).
	3. Add any hidden fields (list ids/tags) the provider requires.

- Instagram: Embeds require either the official Instagram embedding (oembed) or a third-party widget. For a simple static grid, replace the `.ig-tile` blocks with images; for an automated feed, use services like LightWidget, SnapWidget, or the Instagram Basic Display API (requires app access token).

Accessibility & improvements
- Add alt text for all real images.
- Provide server-side handling for contact and subscription forms, or use a trusted 3rd-party provider.
- Add a proper favicon, meta/social tags, and structured data for SEO.

Deployment
- This is a static site and can be deployed to GitHub Pages, Netlify, Vercel, or any static host.

Next steps (suggested)
- Replace placeholder images with brand photography.
- Replace the modal and forms with a real email provider (I can wire Mailchimp/ConvertKit examples).
- Add a CMS or static generator (e.g., Eleventy or Hugo) if you want dynamic blog posting.
- Replace the placeholder PDFs with designed printables and upload to `assets/`.

If you'd like, I can:
- Convert this to a React/Next or Vue app, or create an Eleventy/Hugo setup for the blog.
- Implement Mailchimp/ConvertKit wiring with an example serverless function.
- Replace placeholders with curated sample photos and refine responsive behavior.

Social & Instagram notes
- Footer includes a small Instagram grid using static images; to make this live use a widget (LightWidget, SnapWidget) or the Instagram Basic Display API for programmatic pulls.
- Social icons are in `assets/icon-*.svg`. Replace links in the footer with your live social URLs.
- For best performance on mobile, use optimized images (WEBP/JPEG) and lazy-load offscreen content.

Instagram account for this project
- The site is configured to point to the Instagram profile: https://www.instagram.com/simply_nourishedd/

Embedding the live feed
- Quick embed (recommended): use a service like LightWidget or SnapWidget — they provide simple iframe snippets you can paste into `index.html` or the footer.
- More control: use the Instagram Basic Display API to fetch posts server-side and render them dynamically. This requires creating a Facebook/Meta app and an access token. I can scaffold a serverless function and client-side rendering if you'd like.

---

Deployment (added files)
-------------------------

I added a minimal GitHub Pages deployment setup so the site can be published directly from this repository.

- `.nojekyll` — prevents GitHub Pages from processing the site with Jekyll (files served as-is).
- `.github/workflows/pages.yml` — a GitHub Actions workflow that uploads the repository root as the Pages artifact and deploys it whenever you push to the `main` branch.
- `.gitignore` — common ignores for local files.

Notes:
- The workflow deploys the repository root. If you only want to publish a subfolder (e.g., `dist/`), update `path` in `.github/workflows/pages.yml`.
- After the first push the Pages site should appear under the repository Settings → Pages. The Action will handle subsequent deployments automatically on pushes to `main`.

If you'd like, I can:
- Enable GitHub Pages for a custom domain (add a `CNAME` file and configure DNS).
- Switch deployment to Netlify, Vercel, or Cloudflare Pages and add a small configuration for those providers.
- Optimize and add local copies of images with `srcset` and lazy-loading for performance before publishing.

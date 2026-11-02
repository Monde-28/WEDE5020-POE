# Sterling & Co. Properties

**WEDE5020 – Web Development (Introduction)**  
**Student:** N Nene  
**Part 3 – Enhancing Functionality and SEO**

A professional multi-page website for an independent real estate brokerage based in Cape Town, South Africa. The site showcases residential, commercial and rental property services with modern responsive design, interactive JavaScript features, form validation, SEO optimisation and deployment readiness.

---

## Live Demo / Deployment

- **GitHub Pages / Netlify** (after push):  
  `https://your-username.github.io/sterling-properties/`  
  or your Netlify URL

Recommended free platforms: **GitHub Pages** or **Netlify**.

---

## Project Structure

```
sterling-properties/
├── index.html              # Home page
├── about.html              # About Us + team
├── services.html           # Properties & Services (with search + dynamic listings)
├── enquiry.html            # Property enquiry form
├── contact.html            # Contact form + interactive map
├── css/
│   └── style.css           # Main stylesheet (responsive, design tokens)
├── js/
│   └── script.js           # All interactive functionality
├── images/                 # Optimised property & office images
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap for SEO
└── README.md               # This file
```

---

## Features Implemented (Part 3)

### 1. Feedback from Part 2
- Comprehensive README with all required sections
- Detailed Changelog documenting every Part 2 feedback fix and Part 3 enhancement
- Improved documentation quality

### 2. JavaScript Functionality
- **Mobile navigation toggle** (hamburger menu)
- **Dynamic content** – property listings rendered from a JavaScript data array
- **Live search & filter** on the Properties page (by title, location, type, price)
- **Gallery lightbox** – click any property image to view a larger version with keyboard/close support
- **Accordion / expandable sections** on the Services page
- **Interactive map** (Leaflet.js) on the Contact page showing both offices
- **CSS + JS animations** and smooth transitions
- **Form validation** (client-side) with custom error messages for both Enquiry and Contact forms
- **AJAX-style form submission simulation** with success feedback
- Dynamic copyright year in footer

### 3. SEO Best Practices
- Unique, keyword-rich `<title>` tags on every page
- Meta descriptions and meta keywords
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive image file names and meaningful `alt` attributes
- Clean internal linking
- Mobile-friendly (responsive design already present)
- `robots.txt` and `sitemap.xml`
- Semantic HTML throughout

### 4. Forms
- **enquiry.html** – full enquiry form (buying, selling, renting, valuation, commercial) with validation and response message
- **contact.html** – general contact form with office preference, validation and success feedback
- HTML5 validation attributes + custom JavaScript validation
- Clear user feedback and error handling

### 5. GitHub & Deployment
- Multiple descriptive commits
- This README + Changelog + References
- Ready for GitHub Pages or Netlify deployment

---

## How to Run Locally

1. Clone or download the repository.
2. Open `index.html` in a modern browser  
   **or** use a local server (recommended):

   ```bash
   # Using Python
   python -m http.server 8000

   # Using VS Code Live Server extension
   ```

3. Navigate to `http://localhost:8000`

---

## Technologies Used

- HTML5 (semantic structure)
- CSS3 (Custom Properties / design tokens, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6+)
- Leaflet.js (interactive maps)
- Google Fonts (Fraunces + Public Sans)

---

## Changelog

### [Part 3] – 2026-11-02 – Enhancing Functionality & SEO

#### Feedback from Part 2 (Knowledge criterion)
- Completely rewrote the README.md to include project overview, structure, features, how-to-run, technologies, deployment notes and reference.
- Created a detailed Changelog section that records every significant edit made in response to Part 2 feedback and all new Part 3 work.
- Improved overall project documentation quality and clarity for the lecturer.

#### Functionality – Interactive Elements
- Added property search and live filtering on `services.html` (search by keyword, location or type).
- Implemented dynamic rendering of property cards from a JavaScript data array (advanced DOM manipulation).
- Built a fully functional lightbox gallery for property images (click to enlarge, Escape / click outside to close).
- Added accordion-style expandable sections on the Services page for better content organisation.
- Enhanced mobile navigation with improved accessibility attributes.
- Added subtle CSS transitions and JavaScript-powered animations for cards and interactive elements.

#### Functionality – Interactive Maps
- Replaced static Google Maps iframes with a proper interactive Leaflet.js map on the Contact page.
- Map displays both Claremont Head Office and Sea Point Branch with custom markers and popups.
- Map is fully zoomable, draggable and responsive.

#### Form Functionality & Validation
- Strengthened client-side validation on both `enquiry.html` and `contact.html`.
- Added pattern validation for South African phone numbers.
- Custom error messages displayed next to invalid fields.
- AJAX-style form handling: prevents default submit, validates, shows success message, resets form.
- Differentiated purpose between Enquiry form (property-related) and Contact form (general message).

#### Search Engine Optimisation (SEO)
- Audited and improved `<title>` tags and meta descriptions on all pages.
- Added relevant meta keywords.
- Ensured consistent heading hierarchy.
- Reviewed and improved image `alt` attributes and used descriptive file names.
- Created `robots.txt` and `sitemap.xml`.
- Confirmed mobile-friendliness (existing responsive design already solid).

#### Other Improvements
- Updated all internal links for consistency.
- Added smooth scrolling and reduced-motion support (already present, reinforced).
- Prepared the project for deployment on GitHub Pages / Netlify.

### [Part 2] – Previous Submission
- External stylesheet created and linked on all pages.
- Comprehensive CSS with design tokens, typography, layout, colours, pseudo-classes and media queries.
- Responsive design for tablet and mobile (hamburger menu, adjusted grids, typography and images).
- Multiple descriptive Git commits.
- Basic form structure present on Enquiry and Contact pages.
- README and Changelog were incomplete (addressed in Part 3).

---

## References

1. MDN Web Docs – HTML, CSS and JavaScript reference.  
   https://developer.mozilla.org/

2. Leaflet.js Documentation.  
   https://leafletjs.com/

3. Google Fonts – Fraunces & Public Sans.  
   https://fonts.google.com/

4. W3C HTML Validator & CSS Validator.  
   https://validator.w3.org/ | https://jigsaw.w3.org/css-validator/

5. Google Search Central – SEO Starter Guide.  
   https://developers.google.com/search/docs/fundamentals/seo-starter-guide

6. Real Estate Business Owners of South Africa (REBOSA) & EAAB – industry context for content accuracy.

7. Independent Institute of Education – WEDE5020 Module Guide & Rubrics (2026).

---

## Author

**N Nene**  
WEDE5020 – Web Development (Introduction)  
Part 3 Submission – 2026

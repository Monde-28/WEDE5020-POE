// ============================================================
// Sterling & Co. Properties — script.js  (Part 3)
// Features: mobile nav, dynamic listings, search/filter,
// lightbox gallery, accordion, form validation, Leaflet map
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. Mobile navigation toggle
     ---------------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     2. Dynamic footer year
     ---------------------------------------------------------- */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     3. Property data (used for dynamic content + search)
     ---------------------------------------------------------- */
  const properties = [
    {
      id: 1,
      title: 'Sea Point Ocean-View Apartment',
      price: 'R 3,250,000',
      priceValue: 3250000,
      beds: 2,
      baths: 2,
      location: 'Sea Point',
      type: 'Residential',
      image: 'images/jeanvdmeulen-modern-minimalist-lounge-3100785_1920.jpg',
      alt: 'Modern apartment in Sea Point with ocean view',
      description: 'A bright, modern apartment with uninterrupted ocean views, open-plan living, and secure parking.'
    },
    {
      id: 2,
      title: 'Constantia Family Home',
      price: 'R 6,900,000',
      priceValue: 6900000,
      beds: 4,
      baths: 3,
      location: 'Constantia',
      type: 'Residential',
      image: 'images/publicdomainpictures-mansion-164866_1920.jpg',
      alt: 'Family home in Constantia with garden',
      description: 'A spacious family home set on a landscaped garden plot, close to top schools and wine estates.'
    },
    {
      id: 3,
      title: 'CBD Office Suite',
      price: 'R 45,000 / month',
      priceValue: 45000,
      beds: null,
      baths: null,
      location: 'Cape Town CBD',
      type: 'Commercial',
      image: 'images/st4n-office-6804143_1920.jpg',
      alt: 'Commercial office suite in Cape Town CBD',
      description: 'A fitted office suite in the heart of the CBD, with fibre connectivity and basement parking.'
    },
    {
      id: 4,
      title: 'Camps Bay Villa',
      price: 'R 18,500,000',
      priceValue: 18500000,
      beds: 5,
      baths: 5,
      location: 'Camps Bay',
      type: 'Residential',
      image: 'images/ab-nach-mallorca-sea-943428_1920.jpg',
      alt: 'Luxury villa in Camps Bay with pool and sea views',
      description: 'A luxury villa with private pool, mountain backdrop, and panoramic sea views.'
    },
    {
      id: 5,
      title: 'Claremont Townhouse',
      price: 'R 2,450,000',
      priceValue: 2450000,
      beds: 3,
      baths: 2,
      location: 'Claremont',
      type: 'Residential',
      image: 'images/erikawittlieb-house-2414374_1920.jpg',
      alt: 'Secure townhouse in Claremont',
      description: 'A secure, low-maintenance townhouse in a sought-after complex close to shops and transport.'
    },
    {
      id: 6,
      title: 'Woodstock Loft',
      price: 'R 1,950,000',
      priceValue: 1950000,
      beds: 1,
      baths: 1,
      location: 'Woodstock',
      type: 'Residential',
      image: 'images/mufbatz3000-path-7965967_1920.jpg',
      alt: 'Industrial-style loft apartment in Woodstock',
      description: 'An industrial-style loft in Cape Town\'s creative district, ideal for first-time buyers or investors.'
    },
    {
      id: 7,
      title: 'Modern Minimalist Home',
      price: 'R 8,750,000',
      priceValue: 8750000,
      beds: 3,
      baths: 3,
      location: 'Constantia',
      type: 'Residential',
      image: 'images/afveda-house-8774767_1920.jpg',
      alt: 'Contemporary minimalist house with garden and water features',
      description: 'Sleek contemporary architecture with open living spaces and carefully landscaped outdoor areas.'
    },
    {
      id: 8,
      title: 'Atlantic Seaboard Apartment',
      price: 'R 4,100,000',
      priceValue: 4100000,
      beds: 2,
      baths: 2,
      location: 'Sea Point',
      type: 'Residential',
      image: 'images/photo-1721222204525-1118ce3860e1.jpg',
      alt: 'Modern apartment lounge with mountain and ocean views',
      description: 'Light-filled apartment offering spectacular views of Table Mountain and the Atlantic Ocean.'
    }
  ];

  /* ----------------------------------------------------------
     4. Dynamic property rendering + Search / Filter
     ---------------------------------------------------------- */
  const listingsContainer = document.getElementById('property-listings');
  const searchInput = document.getElementById('property-search');
  const typeFilter = document.getElementById('type-filter');
  const resultsCount = document.getElementById('results-count');

  function createPropertyCard(property) {
    const meta = property.beds
      ? property.beds + ' Bed | ' + property.baths + ' Bath | ' + property.location
      : property.type + ' | ' + property.location;

    return '<div class="card property-card" data-id="' + property.id + '" data-type="' + property.type.toLowerCase() + '" data-location="' + property.location.toLowerCase() + '">' +
      '<img src="' + property.image + '" alt="' + property.alt + '" class="lightbox-trigger" data-full="' + property.image + '" loading="lazy">' +
      '<div class="card-body">' +
      '<h3>' + property.title + '</h3>' +
      '<p class="price">' + property.price + '</p>' +
      '<p class="meta">' + meta + '</p>' +
      '<p>' + property.description + '</p>' +
      '<a href="enquiry.html" class="btn btn-outline mt-20">Enquire About This Property</a>' +
      '</div></div>';
  }

  function renderProperties(list) {
    if (!listingsContainer) return;

    if (list.length === 0) {
      listingsContainer.innerHTML = '<div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;"><h3>No properties match your search</h3><p>Try adjusting your keywords or filters.</p></div>';
    } else {
      listingsContainer.innerHTML = list.map(createPropertyCard).join('');
    }

    if (resultsCount) {
      resultsCount.textContent = list.length + ' propert' + (list.length === 1 ? 'y' : 'ies') + ' found';
    }

    // Re-attach lightbox triggers after re-render
    initLightbox();
  }

  function filterProperties() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const selectedType = typeFilter ? typeFilter.value : 'all';

    const filtered = properties.filter(function (p) {
      const matchesType = selectedType === 'all' || p.type.toLowerCase() === selectedType;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);
      return matchesType && matchesQuery;
    });

    renderProperties(filtered);
  }

  // Initial render on services page
  if (listingsContainer) {
    renderProperties(properties);

    if (searchInput) {
      searchInput.addEventListener('input', filterProperties);
    }
    if (typeFilter) {
      typeFilter.addEventListener('change', filterProperties);
    }
  }

  /* ----------------------------------------------------------
     5. Lightbox Gallery
     ---------------------------------------------------------- */
  function initLightbox() {
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        openLightbox(this.getAttribute('data-full') || this.src, this.alt);
      });
    });
  }

  function openLightbox(src, alt) {
    // Remove existing if any
    const existing = document.querySelector('.lightbox-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<div class="lightbox-content"><button class="lightbox-close" aria-label="Close lightbox">&times;</button><img src="' + src + '" alt="' + (alt || 'Enlarged property image') + '"></div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Close handlers
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeLightbox();
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  function closeLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) {
      overlay.remove();
      document.body.style.overflow = '';
    }
  }

  // Also enable lightbox on static images that have the class (e.g. home page)
  initLightbox();

  /* ----------------------------------------------------------
     6. Accordion (Services page)
     ---------------------------------------------------------- */
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(function (el) {
        el.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ----------------------------------------------------------
     7. Form Validation (Enquiry + Contact)
     ---------------------------------------------------------- */
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(function (form) {
    // Create error message containers if they don't exist
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      if (field.type === 'checkbox' || field.type === 'hidden') return;

      const group = field.closest('.form-group');
      if (group && !group.querySelector('.error-message')) {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.setAttribute('aria-live', 'polite');
        group.appendChild(error);
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(function (el) {
        el.textContent = '';
      });
      form.querySelectorAll('.invalid').forEach(function (el) {
        el.classList.remove('invalid');
      });

      // Validate each required field
      form.querySelectorAll('[required]').forEach(function (field) {
        const group = field.closest('.form-group');
        const errorEl = group ? group.querySelector('.error-message') : null;
        let message = '';

        if (!field.value.trim()) {
          message = 'This field is required.';
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          message = 'Please enter a valid email address.';
        } else if (field.type === 'tel' && field.value.trim()) {
          // South African phone pattern (basic)
          const phone = field.value.replace(/[\s\-()]/g, '');
          if (!/^(\+27|0)[1-9]\d{8}$/.test(phone)) {
            message = 'Please enter a valid South African phone number (e.g. 021 555 0132 or +27 21 555 0132).';
          }
        }

        if (message) {
          isValid = false;
          field.classList.add('invalid');
          if (errorEl) errorEl.textContent = message;
        }
      });

      if (!isValid) {
        // Focus first invalid field
        const firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Success handling
      const successMessage = form.querySelector('.form-success');
      if (successMessage) {
        // Customise message based on form
        if (form.querySelector('#enquiry-type')) {
          successMessage.innerHTML = 'Thank you! Your enquiry has been received. A Sterling &amp; Co. agent will contact you within one business day regarding availability, pricing or next steps.';
        } else {
          successMessage.innerHTML = 'Thank you for your message! Our team will respond as soon as possible.';
        }
        successMessage.classList.add('visible');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      form.reset();

      // Hide success after a while (optional UX)
      setTimeout(function () {
        if (successMessage) successMessage.classList.remove('visible');
      }, 8000);
    });

    // Real-time validation feedback on blur
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.classList.add('invalid');
        } else {
          this.classList.remove('invalid');
          const group = this.closest('.form-group');
          const errorEl = group ? group.querySelector('.error-message') : null;
          if (errorEl) errorEl.textContent = '';
        }
      });
    });
  });

  /* ----------------------------------------------------------
     8. Interactive Map (Leaflet) – Contact page
     ---------------------------------------------------------- */
  const mapContainer = document.getElementById('office-map');
  if (mapContainer && typeof L !== 'undefined') {
    // Cape Town centre-ish
    const map = L.map('office-map').setView([-33.9249, 18.4241], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    // Claremont Head Office
    const claremont = L.marker([-33.9806, 18.4652]).addTo(map);
    claremont.bindPopup(
      '<strong>Sterling & Co. – Head Office</strong><br>' +
      '12 Main Road, Claremont<br>' +
      'Tel: +27 21 555 0132'
    );

    // Sea Point Branch
    const seapoint = L.marker([-33.9167, 18.3875]).addTo(map);
    seapoint.bindPopup(
      '<strong>Sterling & Co. – Sea Point Branch</strong><br>' +
      '45 Regent Road, Sea Point<br>' +
      'Tel: +27 21 555 0187'
    );

    // Fit bounds to both markers
    const group = new L.featureGroup([claremont, seapoint]);
    map.fitBounds(group.getBounds().pad(0.2));
  }

});

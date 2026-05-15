/* ===== Footer Dynamic Content ===== */

// Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set last modified date in footer
document.getElementById('lastModified').textContent =
    "Last Modified: " + document.lastModified;


/* ===== Responsive Hamburger Menu ===== */

// Get the header and nav elements
const header = document.querySelector('header');
const nav = document.querySelector('nav');

// Create hamburger button dynamically
const hamburger = document.createElement('button');
hamburger.innerHTML = '&#9776;';                  // ☰ icon
hamburger.setAttribute('id', 'hamburger');
hamburger.setAttribute('aria-label', 'Toggle navigation');

// Insert hamburger button into the header (before the nav)
header.insertBefore(hamburger, nav);

// Toggle navigation when hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');

    // Toggle between ☰ (open) and ✕ (close) icons
    if (nav.classList.contains('open')) {
        hamburger.innerHTML = '&#10005;';         // ✕ icon
    } else {
        hamburger.innerHTML = '&#9776;';          // ☰ icon
    }
});
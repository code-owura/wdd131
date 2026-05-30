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

/* ===== Temple Data Array ===== */

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // ============================================================
    // 🆕 NEW TEMPLES ADDED BELOW (4 temples)
    // ============================================================

    {
        templeName: "Accra Ghana",            // ← NEW #1
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Salt Lake",              // ← NEW #2
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Rome Italy",             // ← NEW #3
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Bangkok Thailand",       // ← NEW #4
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 44405,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    }
    // Add more temple objects here...
];

/* ===== Create Temple Cards ===== */

// Get the main element where temple cards will be added
const main = document.querySelector('main');

// Function to display temple cards
function displayTemples(templeList) {
    // Clear any existing temple cards (useful for filtering later)
    const existingCards = document.querySelectorAll('main figure');
    existingCards.forEach(card => card.remove());

    // Loop through each temple in the array
    templeList.forEach(temple => {
        // Create the figure element (the "card")
        const figure = document.createElement('figure');

        // Create the temple name heading
        const name = document.createElement('h2');
        name.textContent = temple.templeName;

        // Create the location paragraph
        const location = document.createElement('p');
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        // Create the dedicated date paragraph
        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        // Create the area paragraph
        const area = document.createElement('p');
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        // Create the image with native lazy loading
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.templeName);
        img.setAttribute('loading', 'lazy');

        // Append all elements to the figure (card)
        figure.appendChild(name);
        figure.appendChild(location);
        figure.appendChild(dedicated);
        figure.appendChild(area);
        figure.appendChild(img);

        // Append the figure (card) to the main element
        main.appendChild(figure);
    });
}

// Display all temples when the page loads
displayTemples(temples);

/* ===== Filter Temples by Navigation Menu ===== */

// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent the default link behavior (jumping to "#")
        event.preventDefault();

        // Get the text of the clicked link (e.g., "Home", "Old", "New")
        const filter = link.textContent;

        // Filter the temples based on which link was clicked
        let filteredTemples = [];

        if (filter === "Home") {
            // Show all temples
            filteredTemples = temples;
        }
        else if (filter === "Old") {
            // Temples built before 1900
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
        }
        else if (filter === "New") {
            // Temples built after 2000
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
        }
        else if (filter === "Large") {
            // Temples larger than 90,000 sq ft
            filteredTemples = temples.filter(temple => temple.area > 90000);
        }
        else if (filter === "Small") {
            // Temples smaller than 10,000 sq ft
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        // Display the filtered temples
        displayTemples(filteredTemples);

        // Close the mobile menu after clicking (optional)
        nav.classList.remove('open');
        hamburger.innerHTML = '&#9776;';
    });
});
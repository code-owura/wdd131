// Footer dates
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

if (yearSpan) {
    yearSpan.textContent = `${new Date().getFullYear()}`;
}

if (lastModSpan) {
    lastModSpan.textContent = `Last modified: ${document.lastModified}`;
}

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}

// Random fact feature (Home page only)
const factBtn = document.getElementById("new-fact-btn");
const factText = document.getElementById("fact-text");

const facts = [
    "Football is played by over 250 million players in more than 200 countries.",
    "The FIFA World Cup is the most-watched sporting event in the world.",
    "A football match has 2 halves of 45 minutes each, plus added time.",
    "Brazil has won the World Cup more times than any other country — 5 times!",
    "The fastest goal in football history was scored in just 2.4 seconds.",
    "The English Premier League is the most-watched football league globally.",
    "Lionel Messi has won the Ballon d'Or award a record 8 times.",
    "The Maracanã Stadium in Brazil once held over 199,000 spectators in a single match.",
    "Football was first codified in England in 1863.",
    "A standard football weighs between 410 and 450 grams."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = `"${facts[randomIndex]}"`;
}

if (factBtn && factText) {
    showRandomFact();
    factBtn.addEventListener("click", showRandomFact);
}
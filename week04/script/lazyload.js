// Display the current year in the footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Display the last modified date of the document
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = document.lastModified;
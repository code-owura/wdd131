let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

reviewCount++;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('review-count').textContent = reviewCount;


/* ========================================= */
/* FOOTER DATES */
/* ========================================= */
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
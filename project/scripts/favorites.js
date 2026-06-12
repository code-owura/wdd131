const form = document.getElementById("favorite-form");
const favoritesList = document.getElementById("favorites-list");
const favoritesCount = document.getElementById("favorites-count");
const clearAllBtn = document.getElementById("clear-all-btn");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function displayFavorites() {
    favoritesList.innerHTML = "";
    favoritesCount.textContent = `You have ${favorites.length} favorite team${favorites.length !== 1 ? "s" : ""}.`;

    if (favorites.length === 0) {
        favoritesList.innerHTML = `<p>No favorite teams yet. Add one using the form above!</p>`;
        return;
    }

    favorites.forEach((fav, index) => {
        const stars = "⭐".repeat(fav.rating);
        const item = document.createElement("div");
        item.classList.add("favorite-item");
        item.innerHTML = `
            <div>
                <h4>${fav.teamName}</h4>
                <p><strong>League:</strong> ${fav.league}</p>
                <p><strong>Rating:</strong> ${stars}</p>
                ${fav.comments ? `<p><em>"${fav.comments}"</em></p>` : ""}
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        favoritesList.appendChild(item);
    });

    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.target.dataset.index);
            removeFavorite(index);
        });
    });
}

function addFavorite(teamName, league, rating, comments) {
    const newFav = { teamName, league, rating, comments };
    favorites.push(newFav);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
}

function clearAllFavorites() {
    if (confirm("Are you sure you want to clear all your favorites?")) {
        favorites = [];
        localStorage.removeItem("favorites");
        displayFavorites();
    }
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const teamName = document.getElementById("team-name").value.trim();
        const league = document.getElementById("league").value;
        const ratingInput = document.querySelector('input[name="rating"]:checked');
        const rating = ratingInput ? parseInt(ratingInput.value) : 0;
        const comments = document.getElementById("comments").value.trim();

        if (teamName && league && rating) {
            addFavorite(teamName, league, rating, comments);
            form.reset();
            alert(`${teamName} added to your favorites!`);
        }
    });
}

if (clearAllBtn) {
    clearAllBtn.addEventListener("click", clearAllFavorites);
}

if (favoritesList) {
    displayFavorites();
}
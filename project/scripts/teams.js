// Array of team objects
const teams = [
    { name: "Manchester United", league: "Premier League", country: "England", founded: 1878 },
    { name: "Liverpool FC", league: "Premier League", country: "England", founded: 1892 },
    { name: "Arsenal FC", league: "Premier League", country: "England", founded: 1886 },
    { name: "Real Madrid", league: "La Liga", country: "Spain", founded: 1902 },
    { name: "FC Barcelona", league: "La Liga", country: "Spain", founded: 1899 },
    { name: "Atlético Madrid", league: "La Liga", country: "Spain", founded: 1903 },
    { name: "Juventus", league: "Serie A", country: "Italy", founded: 1897 },
    { name: "AC Milan", league: "Serie A", country: "Italy", founded: 1899 },
    { name: "Bayern Munich", league: "Bundesliga", country: "Germany", founded: 1900 },
    { name: "Borussia Dortmund", league: "Bundesliga", country: "Germany", founded: 1909 },
    { name: "Paris Saint-Germain", league: "Ligue 1", country: "France", founded: 1970 }
];

const teamsGrid = document.getElementById("teams-grid");
const leagueFilter = document.getElementById("league-filter");

function displayTeams(filteredTeams) {
    teamsGrid.innerHTML = "";

    if (filteredTeams.length === 0) {
        teamsGrid.innerHTML = `<p>No teams found for this league.</p>`;
        return;
    }

    filteredTeams.forEach(team => {
        const card = document.createElement("article");
        card.classList.add("team-card");
        card.innerHTML = `
            <h3>${team.name}</h3>
            <p class="league">${team.league}</p>
            <p><strong>Country:</strong> ${team.country}</p>
            <p><strong>Founded:</strong> ${team.founded}</p>
        `;
        teamsGrid.appendChild(card);
    });
}

function filterTeams() {
    const selectedLeague = leagueFilter.value;
    const filtered = selectedLeague === "all"
        ? teams
        : teams.filter(team => team.league === selectedLeague);
    displayTeams(filtered);
}

if (leagueFilter) {
    leagueFilter.addEventListener("change", filterTeams);
    displayTeams(teams);
}
// FOOTER YEAR
const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

// LAST MODIFIED
const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modified: ${document.lastModified}`;

// STATIC WEATHER VALUES
const temperature = 10;
const windSpeed = 5;

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// DISPLAY WIND CHILL
const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(
        temperature,
        windSpeed
    )} °C`;
} else {
    windChill.textContent = "N/A";
}
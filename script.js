
function displayLocationInfo() {
    const countryTimezoneElement = document.getElementById('country-timezone');
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userCountry = Intl.DateTimeFormat(undefined, {timeZone: userTimezone}).resolvedOptions().timeZone;
    countryTimezoneElement.textContent = `Location: ${userCountry}, Timezone: ${userTimezone}`;
}

// Call the function when the page loads
window.onload = function() {
    displayLocationInfo();
};

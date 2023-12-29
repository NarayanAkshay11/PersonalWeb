
function displayLocationInfo() {
    const countryTimezoneElement = document.getElementById('country-timezone');
    
    
    const userCountry = new Intl.DateTimeFormat(undefined, {hour12: false}).resolvedOptions().timeZone;
    
    
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    
    
    countryTimezoneElement.textContent = `Country: ${userCountry}, Current Time: ${hours}:${minutes}`;
}


window.onload = function() {
    displayLocationInfo();
};

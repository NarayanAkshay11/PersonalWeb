function displayCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    currentTimeElement.textContent = `Time: ${hours}:${minutes}`;
}

window.onload = function() {
    displayCurrentTime();
};

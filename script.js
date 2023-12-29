function displayCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

window.onload = function() {
    displayCurrentTime();
};

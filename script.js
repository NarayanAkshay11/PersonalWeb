function displayCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    currentTimeElement.textContent = `Current Time: ${hours}:${minutes}`;
}

function toggleMode(mode) {
    const body = document.body;

    if (mode === 'light') {
        body.classList.remove('dark-mode');
    } else if (mode === 'dark') {
        body.classList.add('dark-mode');
    }
}

window.onload = function() {
    displayCurrentTime();
};

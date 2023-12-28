// JavaScript for real-time clock
function updateTime(elementId, timezone) {
    const element = document.getElementById(elementId);
    const options = { timeZone: timezone, hour12: false, hour: 'numeric', minute: 'numeric' };
    const timeString = new Date().toLocaleTimeString('en-US', options);
    element.textContent = `${elementId === 'singapore-time' ? '🕒' : '🕐'} ${elementId === 'singapore-time' ? 'Singapore Time' : 'India Time'}: ${timeString}`;
}

// Update time every second
setInterval(() => {
    updateTime('singapore-time', 'Asia/Singapore');
    updateTime('india-time', 'Asia/Kolkata');
}, 1000);

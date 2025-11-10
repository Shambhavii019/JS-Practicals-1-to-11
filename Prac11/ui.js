import { logEvent } from './helper.js';

// Change background on viewport width
export function handleViewportChange() {
    if (window.innerWidth < 600) {
        document.body.style.background = '#f0f8ff';
    } else {
        document.body.style.background = 'white';
    }
}

// Event delegation on sessions
export function addDynamicSessions() {
    const sessionsDiv = document.getElementById('sessions');

    sessionsDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('session')) {
            alert("You selected: " + e.target.textContent);
            logEvent("Clicked session: " + e.target.textContent);
        }
    });
}

// New: Add a session dynamically
export function addNewSession() {
    const sessionsDiv = document.getElementById("sessions");

    const newSessionTime = prompt("Enter time (HH:MM):", "12:00");
    const newSessionName = prompt("Enter session name:", "New Topic");

    if (!newSessionTime || !newSessionName) return;

    const div = document.createElement("div");
    div.classList.add("session");
    div.dataset.time = newSessionTime;
    div.textContent = `${newSessionName} - ${newSessionTime}`;

    sessionsDiv.appendChild(div);

    logEvent("Added new session: " + newSessionName);
}

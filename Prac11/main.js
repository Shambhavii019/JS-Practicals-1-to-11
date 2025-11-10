import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions, addNewSession } from './ui.js';

const countdownDisplay = document.getElementById('countdown');

// Start 5-minute countdown
startCountdown(300, countdownDisplay);

// Highlight session every minute
setInterval(highlightActiveSession, 60000);
highlightActiveSession();

// Responsive background
window.addEventListener("resize", handleViewportChange);
handleViewportChange();

// Event delegation
addDynamicSessions();

// Add session button
document.getElementById("addBtn").addEventListener("click", addNewSession);

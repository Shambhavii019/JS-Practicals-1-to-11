// helper.js — shared utility functions

// Format time as mm:ss
export function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
}

// Log events to console
export function logEvent(message) {
    console.log("[Scheduler Log]: " + message);
}

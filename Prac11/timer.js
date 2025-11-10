import { formatTime, logEvent } from './helper.js';

// Countdown with color change when < 60 sec
export function startCountdown(duration, display) {
    let time = duration;

    const timer = setInterval(() => {
        display.textContent = `Next session starts in ${formatTime(time)}`;

        // Change color when time < 1 min
        if (time <= 60) {
            display.classList.add("warning");
        }

        time--;

        if (time < 0) {
            clearInterval(timer);
            display.textContent = "Session Started!";
            display.classList.remove("warning");
        }
    }, 1000);

    logEvent("Countdown started for " + duration + " seconds.");
}

// Highlight current session
export function highlightActiveSession() {
    const sessions = document.querySelectorAll(".session");
    const now = new Date();
    const hour = now.getHours();

    sessions.forEach(s => {
        const sessionHour = parseInt(s.dataset.time.split(":")[0]);
        if (sessionHour === hour) {
            s.classList.add("active");
        } else {
            s.classList.remove("active");
        }
    });
}

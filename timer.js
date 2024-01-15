// JavaScript
let isTimerRunning = false; // To track if the timer is running
let timerInterval; // To store the timer interval

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    document.getElementById("timer").textContent = formattedTime;
}

function startTimer() {
    if (!isTimerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        isTimerRunning = true;
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer").textContent = "00:00:00";
}
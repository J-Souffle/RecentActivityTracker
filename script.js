// variables
const loadBtn = document.querySelector("#loadBtn")
const pauseBtn = document.querySelector("#saveBtn")
const saveBtn = document.querySelector("pauseBtn")

let workTittle = document.getElementById('work');

let workTime = 0;

let hours = parseInt(localStorage.getItem('hours')) || 0;
let minutes = parseInt(localStorage.getItem('minutes')) || 0;
let seconds = parseInt(localStorage.getItem('seconds')) || 0;

let isTimerRunning = false; 




// display
window.onload = () => {
    if (seconds < 10) {
        document.getElementById('seconds').innerHTML = "0" + seconds;
    
    } else {
        document.getElementById('seconds').innerHTML = seconds;
    }
    if (minutes < 10) {
        document.getElementById('minutes').innerHTML = "0" + minutes;
        
    } else {
        document.getElementById('minutes').innerHTML = minutes;
    }
    if (hours < 10) {
        document.getElementById('hours').innerHTML = "0" + hours;
        
    } else {
        document.getElementById('hours').innerHTML = hours;
    }

    workTittle.classList.add('active');
}




// start timer
function start() {
    // // change button
    // document.getElementById('start').style.display = "none";
    // document.getElementById('reset').style.display = "block";

    // change the time




    // countdown
    let timerFunction = () => {
        //change the display
        if (seconds < 10) {
            document.getElementById('seconds').innerHTML = "0" + seconds;
        
        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }
        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = "0" + minutes;
            
        } else {
            document.getElementById('minutes').innerHTML = minutes;
        }
        if (hours < 10) {
            document.getElementById('hours').innerHTML = "0" + hours;
            
        } else {
            document.getElementById('hours').innerHTML = hours;
        }

        // start
        seconds = seconds + 1;

        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = 0;
            }
         if (minutes === 60) {
            hours = hours + 1;
            minutes = 0;
            }
            
            localStorage.setItem('hours', hours);
            localStorage.setItem('minutes', minutes);
            localStorage.setItem('seconds', seconds);
        }
    if (!isTimerRunning) {
    // start countdown
    timerInterval = setInterval(timerFunction, 1000); // 1000 = 1s\
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
    document.getElementById("seconds").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("hours").textContent = "00";

    // Clear the timer values from localStorage
    localStorage.removeItem('hours');
    localStorage.removeItem('minutes');
    localStorage.removeItem('seconds');
}

// function saveData(){
//     localStorage.setItem("data1", hours.innerHTML);
//     localStorage.setItem("data2", minutes.innerHTML);
//     localStorage.setItem("data3", seconds.innerHTML);
// }
// function showData() {
//     time.innerHTML = localStorage.getItem("data1");
//     time.innerHTML = localStorage.getItem("data2");
//     time.innerHTML = localStorage.getItem("data3");
// }
// showData();
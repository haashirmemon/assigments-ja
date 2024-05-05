let milliseconds = 0
let minutes = 0
let seconds = 0
let timer;

function start() {
    if (!timer) {
       timer = setInterval(updatestopwatch, 10) 
    }
}
function stop() {
    clearInterval(timer)
    timer = null
}
function reset() {
    timer = null
    milliseconds = 0
    minutes= 0
    seconds= 0
    updateDisplay() 
}

function updatestopwatch() {
    milliseconds += 10
    if (milliseconds>= 1000) {
        milliseconds = 0
        seconds++
    }
    if (seconds >= 60) {
        seconds=0
        minutes++
    }
    updateDisplay() 
}
function updateDisplay() {
    const stopwatchDisplay = document.querySelector('.stopwatch');
    stopwatchDisplay.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds / 10)}`;
  }

function pad(value) {
    return value < 10 ? `0${value}` : value;
  }

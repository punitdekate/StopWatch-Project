const milliseconds = document.getElementById('milliseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');

let timeInterval;
let i = 0;
let secondVar = 0;
let minuteVar = 0;
let hourVar = 0;
const startTimer = document.getElementById('start-timer');
startTimer.addEventListener('click', startWatch);

const stopTimer = document.getElementById('stop-timer');
stopTimer.addEventListener('click', () => {
    clearInterval(timeInterval);
    startTimer.disabled = false;
});

const resetTimer = document.getElementById('reset-timer');
resetTimer.addEventListener('click', () => {
    clearInterval(timeInterval);
    reset();
});

function reset() {
    startTimer.disabled = false;
    setSeconds(0);
    setMillisecond(0);
    setMinutes(0);
    setHours(0);
    i = 0;
    secondVar = 0;
    minuteVar = 0;
    hourVar = 0;
}

function startWatch() {
    startTimer.disabled = true;
    timeInterval = setInterval(() => {
        if (i === 10) {
            secondVar++;
            i = 0;
            if (secondVar === 60) {
                minuteVar++;
                secondVar = 0;
                if (minuteVar === 60) {
                    hourVar++;
                    minuteVar = 0;
                    setHours(hourVar);
                }
                setMinutes(minuteVar);
            }
            setSeconds(secondVar);
        }
        setMillisecond(i++);
    }, 100);
}



function setSeconds(secondVar) {
    seconds.textContent = secondVar.toString().padStart(2, '0');

}

function setMillisecond(i) {
    milliseconds.textContent = i.toString().padStart(2, '0');
}

function setMinutes(minuteVar) {
    minutes.textContent = minuteVar.toString().padStart(2, '0');;
}

function setHours(hourVar) {
    hours.textContent = hourVar.toString().padStart(2, '0');
}
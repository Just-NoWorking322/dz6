let count = document.getElementById('count');
let time = document.getElementById('time');
let start = document.getElementById('start');
let countPerSecond = document.getElementById('count-per-second');
let restart = document.getElementById('restart');

let interval;
let timeout;
let i = 0;
let timeValue = time.value;

time.onchange = (event) => {
    let newValue = parseInt(event.target.value);
    if (newValue < 5) {
        timeValue = 5;
        time.value = 5;
    } else if (newValue > 15) {
        timeValue = 15;
        time.value = 15;
    } else {
        timeValue = newValue;
    }
};

start.onclick = () => {
    i++;
    count.innerHTML = i;
    if (i == 1) {
        time.disabled = true;
        timeout = setTimeout(() => {
            start.disabled = true;
            clearInterval(interval);
            countPerSecond.textContent = i / timeValue;
        }, 1000 * timeValue);
        interval = setInterval(() => {
            timeValue--;
            time.value = timeValue; 
            count.textContent = i;
        }, 1000);
    }
};

restart.onclick = () => {
    start.disabled = false;
    time.disabled = false;
    i = 0;
    count.textContent = i;
    timeValue = time.value; 
    countPerSecond.textContent = 0;
    clearInterval(interval);
    clearTimeout(timeout);
   
};
const su = document.getElementById("su");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let waterLevel = 0;
let interval;

function fillTank() {
    if (waterLevel < 100) {
        waterLevel += 1;
        su.style.height = waterLevel + "%";
    } else {
        clearInterval(interval);
        alert("Su tankı doldu!");
    }
}

function startFilling() {
    interval = setInterval(fillTank, 100);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
}

function stopFilling() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetTank() {
    clearInterval(interval);
    waterLevel = 100;
    su.style.height = waterLevel + "%";
    interval = setInterval(function () {
        if (waterLevel > 0) {
            waterLevel -= 1;
            su.style.height = waterLevel + "%";
        } else {
            clearInterval(interval);
        }
    }, 100);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
}

startBtn.addEventListener("click", startFilling);
stopBtn.addEventListener("click", stopFilling);
resetBtn.addEventListener("click", resetTank);

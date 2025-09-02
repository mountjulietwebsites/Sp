document.getElementById('guy2').style.visibility = "hidden";
document.getElementById('tp2').style.visibility = "hidden";
// timer business
let totalSeconds = 300;
let seconds = totalSeconds;
function updateTimer() {
    let min = Math.floor(Math.abs(seconds) / 60);
    let sec = Math.abs(seconds) % 60;
    let formatted = `${seconds < 0 ? "-" : ""}${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    document.getElementById('timerDiv').textContent = formatted;

    
    //circle 
    let progress = seconds / totalSeconds;
    circle.style.strokeDashoffset = circumference * (1 - progress);

    seconds--;
    if (seconds < -1) {
        negativeFunction();
    }
    if (seconds < 0) {
        document.getElementById('svgOne').style.visibility = "hidden";
    }
    
}


function negativeFunction() {
    document.body.style.backgroundColor = "#b64bd6";
    document.getElementById('centerTextDiv').style.backgroundColor = "#f7076c";
    document.getElementById('guy').style.visibility = "hidden";
    document.getElementById('guy2').style.visibility = "visible";
    document.getElementById('tp').style.visibility = "hidden";
    document.getElementById('tp2').style.visibility = "visible";
    document.getElementById('endPass').style.backgroundColor = "#f2619e";
    document.getElementById('teacher').style.backgroundColor = "#f2619e";
    document.getElementById('bottomSection').style.backgroundColor = "#f7076c";
    document.getElementById('squareOne').style.backgroundColor = "#f2619e";
    document.getElementById('squareTwo').style.backgroundColor = "#f2619e";
    document.getElementById('squareThree').style.backgroundColor = "#f2619e";
    document.getElementById('todayP').style.color = "white";
    document.getElementById('weekP').style.color = "white";
    document.getElementById('monthP').style.color = "white";
    document.getElementById('today').style.color = "white";
    document.getElementById('week').style.color = "white";
    document.getElementById('month').style.color = "white";
}
// circle
const timerDiv = document.getElementById('timerDiv');
const circle = document.querySelector('.circle-progress');
const radius = 90;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;
let timerInterval = setInterval(updateTimer, 1000);


const endPass = document.getElementById('endPass');
function homeFunc() {
    const homeURL = document.getElementById('homeUrl').value;
    window.location.href = homeURL;
}

endPass.addEventListener('click', homeFunc);




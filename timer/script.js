const display = document.getElementById("timeDisplay");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let timer = null;

function updateDisplay(){

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.innerText =
    String(hrs).padStart(2,'0') + ":" +
    String(mins).padStart(2,'0') + ":" +
    String(secs).padStart(2,'0');
}

/* Start */
startBtn.addEventListener("click", ()=>{

  if(timer !== null) return;

  timer = setInterval(()=>{
    seconds++;
    updateDisplay();
  },1000);

});

/* Pause */
pauseBtn.addEventListener("click", ()=>{
  clearInterval(timer);
  timer = null;
});

/* Reset */
resetBtn.addEventListener("click", ()=>{
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
});
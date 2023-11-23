function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervals;
stopBtn.disabled = true;
const body = document.body;
const colorChanger = function () {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
};
const intervalsStart = function () {
  intervals = setInterval(colorChanger, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};
const intervalsStop = function () {
  clearInterval(intervals);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', intervalsStart);
stopBtn.addEventListener('click', intervalsStop);

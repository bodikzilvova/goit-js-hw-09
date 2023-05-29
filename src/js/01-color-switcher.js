const startButton = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let timerId

startButton.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();}, 1000)

    startButton.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);

    startButton.disabled = false;
    stopBtn.disabled = true;
});

function getRandomHexColor(timerId) {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  stopBtn.disabled = true;


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

setDisabledAttOnStopBtn();

function onClickStartBtn() {
  refs.startBtn.disabled = true;
  setDisabledAttOnStopBtn();

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onClickStopBtn() {
  refs.startBtn.disabled = false;
  setDisabledAttOnStopBtn();

  clearInterval(timerId);
}

function setDisabledAttOnStopBtn() {
  refs.stopBtn.disabled = true;

  if (refs.startBtn.disabled) {
    refs.stopBtn.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

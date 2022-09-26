const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

console.log(refs.startBtn);
console.log(refs.stopBtn);
console.log(refs.body);

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

refs.stopBtn.setAttribute('disabled', true);

function onClickStartBtn() {
  console.log('я нажав старт');
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onClickStopBtn() {
  console.log('я нажав стоп');
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

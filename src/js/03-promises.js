import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRefs = document.querySelector('.form');
console.log(formRefs);

formRefs.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  for (let i = 0; i < amount.value; i += 1) {
    const positionTarget = i + 1;
    const deleyTarget = Number(delay.value) + i * Number(step.value);

    createPromise(positionTarget, deleyTarget).
      then(onSuccess).
      catch(onError);
  }
  evt.currentTarget.reset();
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    useIcon: false,
  });
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    useIcon: false,
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

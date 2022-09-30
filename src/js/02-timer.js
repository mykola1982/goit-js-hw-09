import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStartRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');

const notifyOptions = {
  position: 'center-center',
  backOverlay: true,
  clickToClose: true,
};

btnStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] - new Date() <= 0) {
      Notify.failure('Please choose a date in the future!', notifyOptions);
      return;
    }
    btnStartRef.disabled = false;

    btnStartRef.addEventListener('click', () => {
      timer.start(timerRef, selectedDates[0]);
    });
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,
  refs: {},

  start(rootSelector, deadline) {
    const delta = deadline.getTime() - Date.now();
    console.log(delta);

    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const ms = deadline.getTime() - Date.now();

      if (ms <= 1000) {
        clearInterval(this.intervalId);
      }
      const data = this.convertMs(ms);
      Object.entries(data).forEach(([name, value]) => {
        this.refs[name].textContent = this.addLeadingZero(value);
      });
    }, 1000);
  },

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};

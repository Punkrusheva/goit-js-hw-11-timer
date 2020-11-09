import './styles.css';

class CountdownTimer {
    constructor({selector,targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]'),
            timerFace: document.querySelector(`${selector}`),
        };
    }

    renderCountdownTimer() {
        setInterval(() => {
            this.currentTime = Date.now();
            const deltaTime = this.targetDate - this.currentTime;
            this.updateCountdownface(this.getTimeComponents(deltaTime));
        }, 1000);
    }

    updateCountdownface({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 8, 2020'),
});

timer.renderCountdownTimer();

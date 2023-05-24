class Clock {
  constructor(options) {
    this._el = $.el('#clock');
    this._twentyFourHourClock = options.twentyFourHourClock;
    this._setTime = this._setTime.bind(this);
    this._el.addEventListener('click', options.toggleHelp);
    this._start();
  }

  _setTime() {
    const date = new Date();
    let hours = date.getHours();
    let amPm = '';

    if (!this._twentyFourHourClock) {
      if (hours > 12) hours -= 12;
      else if (hours === 0) hours = 12;

      amPm =
        `&nbsp;<span class="am-pm">` +
        `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
    }

    const minutes = $.pad(date.getMinutes());
    const colon = `<span class="flash-colon">:</span>`;
    this._el.innerHTML = `${hours}${colon}${minutes}${amPm}`;
    this._el.setAttribute('datetime', date.toTimeString());
  }

  _start() {
    this._setTime();
    setInterval(this._setTime, 1000);
  }
}
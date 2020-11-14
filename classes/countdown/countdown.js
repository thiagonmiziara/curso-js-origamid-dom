export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    get _atctualDate() {
        return new Date();
    }
    get _futureDate() {
        return new Date(this.futureDate);
    }

    get _timesStampDiff() {
        return this._futureDate.getTime() - this._atctualDate.getTime();
    }

    get days() {
        return Math.floor(this._timesStampDiff / (24 * 60 * 60 * 1000));
    }

    get hours() {
        return Math.floor(this._timesStampDiff / (60 * 60 * 100));
    }

    get minutes() {
        return Math.floor(this._timesStampDiff / (60 * 100));
    }

    get seconds() {
        return Math.floor(this._timesStampDiff / 100);
    }

    get total() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

}
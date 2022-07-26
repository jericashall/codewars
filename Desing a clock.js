class Clock{
    constructor() {
        this.start = new Date();
        this.seconds = this.start.getSeconds();
        this.minutes = this.start.getMinutes();
        this.hour = this.start.getHours();
        this.timeOfDay = ''
        this.currentTime = ''
    }
    initializeTimeOfDay() {
        this.hour > 12 ? this.timeOfDay = 'PM' : this.timeOfDay = 'AM'
        if(this.hour > 12) this.hour -= 12
        if(this.hour === 0) {
            this.hour = 12
        }
    }
    checkSeconds() {
        if(this.seconds > 59) {
            this.seconds = 0
            minutes += 1
        }
    }
    checkMinutes() {
        if(this.minutes > 59) {
            this.minutes = 0
            this.hour += 1
        }
    }
    checkHour() {
        if(this.hour > 12) {
            this.hour = this.hour - 12
        }
        if(this.hour === 0) {
            this.hour = 12
            this.timeOfDay === 'PM' ? 'AM' : 'PM'
        }
    }
    addTime() {
        this.seconds += 1
        this.checkSeconds() 
        this.checkMinutes()
        this.checkHour()
    }
    setTime() {
        this.addTime()
        this.currentTime = `${this.hour}:${this.minutes}:${this.seconds} ${this.timeOfDay}`
    }
}

let clock = new Clock();

clock.initializeTimeOfDay()
setInterval(clock.setTime, 1000)
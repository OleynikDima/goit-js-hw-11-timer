
class CountdownTimer{
  constructor({selector,targetDate}){
    this.targetDate = targetDate;
    this.selector = document.querySelector(`${selector}`);
    this.days = this.selector.querySelector('span[data-value="days"]');
    this.hours = this.selector.querySelector('span[data-value="hours"]');
    this.mins = this.selector.querySelector('span[data-value="mins"]');
    this.secs = this.selector.querySelector('span[data-value="secs"]');
    this.runTimer()
  }

   runTimer(){
    setTimeout(()=>{
      this.timer()
      
      this.interval = setInterval(() => {
        this.timer()
      }, 1000);
    })
  };

  timer(){
    const timeNow = new Date()
    const diff = this.targetDate - timeNow;
    this.dataTime(diff)
    console.log(diff);
  };

  dataTime(time){

    const  days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.days.textContent = days;

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hours.textContent = hours;

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.mins.textContent = mins;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.secs.textContent = secs;

    if (days == 0 && hours == 0 && mins == 0 && secs == 0){
               this.stopInterval();
            };
      }


    stopInterval(){
        console.log('stop');
        clearInterval(this.interval)
    };

};


const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 31, 2020 14:05:30').getTime(),
});


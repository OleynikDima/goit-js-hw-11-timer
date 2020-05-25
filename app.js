
class CountdownTimer{
  constructor({selector,targetDate}){
    this.targetDate = targetDate;
    this.selector = document.querySelector(`${selector}`);
    this.days = this.selector.querySelector('span[data-value="days"]');
    this.hours = this.selector.querySelector('span[data-value="hours"]');
    this.mins = this.selector.querySelector('span[data-value="mins"]');
    this.secs = this.selector.querySelector('span[data-value="secs"]');
  }

  timer(){
    return setInterval(() => {
      const timeNow =new Date();
      let diffTime = this.targetDate - timeNow;
      this.days.textContent = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      this.hours.textContent = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins.textContent = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      this.secs.textContent = Math.floor((diffTime % (1000 * 60)) / 1000);
    });
  }
}

const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
counterDown.timer()

   


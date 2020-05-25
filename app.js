
class CountdownTimer{
  constructor({selector,targetDate}){
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }
  
  timer(){
    return this.timerid = setInterval(() => {
      const timeNow =new Date();
      let diffTime = this.targetDate - timeNow;

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      this.selector.querySelector('span[data-value="days"]').textContent = days;

      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.selector.querySelector('span[data-value="hours"]').textContent = hours;

      const mins = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      this.selector.querySelector('span[data-value="mins"]').textContent = mins;

      const secs = Math.floor((diffTime % (1000 * 60)) / 1000);
      this.selector.querySelector('span[data-value="secs"]').textContent = secs;
    }, 1000);
  }
}


const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
counterDown.timer()

   


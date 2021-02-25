export class Time {
    public duration: number = 0;
    public day: number = 0;
    public hours: number = 0;
    public minutes: number = 0;
    public seconds: number = 0;
    public milliseconds: number = 0;
    public startTime: number = 0;
    public currentTime: number = 0;
  
    constructor(startTime: number = 0, currentTime: number = 0){
      this.duration = currentTime -  startTime;
      let adjTime = this.duration < 0 ? 1 : 0;
      this.day = Math.floor(this.duration / (86400000)) + adjTime;
      this.hours = Math.floor((this.duration % (86400000)) / (3600000)) + adjTime;
      this.minutes = Math.floor((this.duration % (3600000)) / (60000)) + adjTime;
      this.seconds = Math.floor((this.duration % (60000)) / 1000);
      this.milliseconds = Math.floor(this.duration % 1000);
      this.startTime = startTime;
      this.currentTime = currentTime;
    }
  }
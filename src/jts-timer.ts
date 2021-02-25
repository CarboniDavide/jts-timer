import { Time } from './jts-time';
import { TimerState } from './jts-state';

export class Timer {

  constructor(interval=1000){
    this.interval = interval;
  }

  // Properties ----------------------------------------------------------

  private _time?: Time = new Time();
  public get time(): Time { return this._time; }

  private _state: TimerState = TimerState.Undefined;
  public get state(): TimerState { return this._state; }

  private _interval: number = 1000;
  public get interval(): number { return this._interval; }
  public set interval(value: number) { 
    this.stop();
    this.clear();
    this._interval = value; 
    this._next();
  }

  private _countdown: number = 0;
  public get countdown(): number { return this._countdown; }
  public set countdown(value: number) { 
    this._countdown = value; 
    this.stop();
    this.clear();
    this._startTime = this._getStart();
    this._next();
  }

  private _startTime: number = 0;
  public get startTime(): number { return this._startTime; }

  private _currentTime: number = null;
  public get currentTime(): number { return this._currentTime; }

  private _timer?: any = null;

  private _onClock?: Function = () => {};
  public get onClock(): Function | null { return this._onClock; }
  public set onClock(value: Function | null) { this._onClock = value; }

  private _onStart?: Function = () => {};
  public get onStart(): Function | null { return this._onStart; }
  public set onStart(value: Function | null) { this._onStart = value; }

  private _onStop?: Function = () => {};
  public get onStop(): Function | null { return this._onStop; }
  public set onStop(value: Function | null) { this._onStop = value; }

  private _onPause?: Function = () => {};
  public get onPause(): Function | null { return this._onPause; }
  public set onPause(value: Function | null) { this._onPause = value; }

  private _onClear?: Function = () => {};
  public get onClear(): Function | null { return this._onClear; }
  public set onClear(value: Function | null) { this._onClear = value; }

  // Methods ----------------------------------------------------------

  private _onTick(){
    this._next();
    this._onClock();
  }

  private _getStart(): number{
    return new Date().getTime() + (this.countdown*1000);
  }

  private _next(){ 
    this._currentTime = new Date().getTime();
    this._time = new Time(this._startTime, this._currentTime);
  }

  private _setTimer(){
    this._timer = setInterval(this._onTick.bind(this), this._interval);
  }

  private _clearTimer(){
    if (this._timer == null ) { return; }
    clearInterval(this._timer);
  }

  public start() {
    if (this.state == TimerState.Run){ return; }
    this._startTime = (this._state == TimerState.Pause) ? this._startTime : this._getStart(); 
    this._currentTime = (this._state == TimerState.Pause) ? this._currentTime : this._startTime;
    this._state = TimerState.Run;
    this._onStart();
    this._next();
    this._setTimer();
  }

  public pause() {
    if (this._state != TimerState.Run){ return; }
    this._state = TimerState.Pause;
    this._onPause();
    this._next();
    this._clearTimer();
  }

  public stop() { 
    if (this.state == TimerState.Stop){ return; }
    this._state = TimerState.Stop;
    this._onStop();
    this._next();
    this._clearTimer();
  }

  public clear() {
    if (this.state == TimerState.Clear){ return; }
    this._state = TimerState.Clear;
    this._onClear();
    this._startTime = this._getStart();
    this._next();
    this._clearTimer();
  }
}

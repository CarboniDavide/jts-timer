# Timer

Simple JS timer

# How to Install
```
  $ npm i jts-timer --save
```

# API

## Properties

- `time: Time` - Contains the elapsed time expressed in **day, hours, minutes, seconds, milliseconds**. Values are:
  - duration: number. default `0`.
  - day: number. default `0`.
  - hours: number. default `0`.
  - minutes: number. default `0`.
  - seconds: number. default `0`.
  - milliseconds: number. default `0`.
  - startTime: number. default `0`.
  - currentTime: number. default `0`.
- `interval: number` - Refresh interval in milliseconds: Default value: `1000`.
- `state: TimerState` - Current timer state: values are: **Run, Stop, Pause, Clear** and **Undefined**. Default: `Undefined`.
- `countdown: number` - Initial timer value in seconds. Default value: `0`.

## Events

- `onClock` - Emitted each interval.
- `onStart` - Emitted when timer start.
- `onPause` - Emitted when timer is pause
- `onStop` - Emitted when timer is stop
- `onClear` - Emitted when timer is clear

# Integration and Usage
In your code import timer as:

```typescript
import { Timer, Time, TimerState } from 'jts-timer';

...

let timer: Timer;

timer = new Timer(1000);
timer.start();
timer.onClock = () => console.log(timer.time.seconds);

....


```

# License

The MIT License (MIT)

Copyright (c) 2020 Davide Carboni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
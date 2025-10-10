import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss'
})
export class Timer implements OnInit, OnDestroy {
  seconds: number = 0;
  isRunning: boolean = false;
  private intervalId: any;

  ngOnInit() {
    console.log('Timer component initialized');
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.seconds++;
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
    }
  }

  resetTimer() {
    this.seconds = 0;
    this.isRunning = false;
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    console.log('Timer component destroyed');
    clearInterval(this.intervalId);
  }
}

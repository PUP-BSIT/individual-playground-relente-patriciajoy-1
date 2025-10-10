import { Component, signal, ElementRef, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  // // Access the paragraph element
  // @ViewChild('displayParagraph') displayParagraph!: ElementRef;

  // applyText(value: string) {
  //   this.displayParagraph.nativeElement.innerText = value || "Please enter something!";
  //   this.displayParagraph.nativeElement.style.color = 'red';
  // }
  seconds: number = 0;
  isRunning: boolean = false;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('Timer component initialized');
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.seconds++;
        this.cdr.detectChanges();
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

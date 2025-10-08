import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Access the paragraph element
  @ViewChild('displayParagraph') displayParagraph!: ElementRef;

  applyText(value: string) {
    this.displayParagraph.nativeElement.innerText = value || "Please enter something!";
    this.displayParagraph.nativeElement.style.color = 'red';
  }
}

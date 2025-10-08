import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app.component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Access the paragraph element
  @ViewChild('displayParagraph') displayParagraph!: ElementRef;

  applyText(value: string) {
    this.displayParagraph.nativeElement.innerText = value || "Please enter something!";
    this.displayParagraph.nativeElement.style.color = 'red';
  }

}

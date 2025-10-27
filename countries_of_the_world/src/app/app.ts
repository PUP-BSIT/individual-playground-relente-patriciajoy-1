import { Component, signal } from '@angular/core';
import { CountriesComponent } from './countries/countries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountriesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('countries_of_the_world');
}

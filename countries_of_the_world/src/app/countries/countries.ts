import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country.model';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './countries.html',
  styleUrls: ['./countries.scss']
})
export class CountriesComponent implements OnInit {

  // properties
  fb = inject(FormBuilder);
  countryService = inject(CountryService);

  countryForm!: FormGroup;
  country$!: Observable<Country | null>;

  // lifecycle
  ngOnInit(): void {
    this.initializeForm();
    this.handleReactiveSearch();
  }

  // initialization
  private initializeForm(): void {
    this.countryForm = this.fb.group({
      country: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  private handleReactiveSearch(): void {
    this.country$ = this.countryForm.get('country')!.valueChanges.pipe(
      debounceTime(600), // wait for typing to stop
      distinctUntilChanged(), // avoid duplicate calls
      filter((val: string) => val.trim().length >= 2), // prevent short queries
      switchMap((countryName: string) =>
        this.countryService.getCountryDetails(countryName)
      )
    );
  }

  // getters
  get countryControl() {
    return this.countryForm.get('country');
  }
}

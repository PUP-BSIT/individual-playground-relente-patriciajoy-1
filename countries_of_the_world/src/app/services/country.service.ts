import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) { }

  getCountryDetails(country: string): Observable<Country | null> {
    if (!country.trim()) {
      return of(null);
    }

    return this.http.get<Country[]>(`${this.apiUrl}${country}`).pipe(
      retry(2), // retry on failure up to 2 times
      map(response => response[0]), // map array to single object
      catchError(() => of(null)) // handle invalid country
    );
  }
}

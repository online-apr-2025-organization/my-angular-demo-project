import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  allCountries = [
    {
      countryId: 101,
      countryName: 'India',
      countryCurrencyCode: 'INR',
    },
    {
      countryId: 102,
      countryName: 'USA',
      countryCurrencyCode: 'USD',
    },
    {
      countryId: 103,
      countryName: 'Japan',
      countryCurrencyCode: 'YEN',
    },
  ];
  constructor() {}

  getAllCountries() {
    return this.allCountries;
  }

  deleteCountry(countryId: number) {
    for (let i = 0; i < this.allCountries.length; i++) {
      if (this.allCountries[i].countryId == countryId) {
        this.allCountries.splice(i, 1);
        break;
      }
    }
  }
}

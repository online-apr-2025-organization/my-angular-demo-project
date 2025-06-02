import { Component } from '@angular/core';
import { CountryService } from '../services/country-service';
import { CountryItem } from '../country-item/country-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [CountryItem, CommonModule],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList {
  allCountries: any;
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.allCountries = this.countryService.getAllCountries();
  }
  
  removeCountry(countryId: any) {
    this.countryService.deleteCountry(countryId);
  }
}

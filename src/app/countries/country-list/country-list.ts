import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CountryService } from '../services/country-service';
import { CountryItem } from '../country-item/country-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [CountryItem, CommonModule],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked
{
  allCountries: any;
  constructor(private countryService: CountryService) {
    console.log('parent constructor called...');
  }

  ngOnDestroy(): void {
    console.log('parent ngOnDestroy() called...');
  }

  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked() called...');
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit() called...');
  }

  ngAfterContentChecked(): void {
    console.log('parent ngAfterContentChecked() called...');
  }
  
  ngAfterContentInit(): void {
    console.log('parent ngAfterContentInit() called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent ngOnChanges() called...');
  }

  ngOnInit() {
    console.log('parent ngOnInit() called...');
    this.allCountries = this.countryService.getAllCountries();
  }

  removeCountry(countryId: any) {
    this.countryService.deleteCountry(countryId);
  }
}

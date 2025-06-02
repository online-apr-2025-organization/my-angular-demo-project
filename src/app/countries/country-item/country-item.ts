import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'country-item',
  imports: [],
  templateUrl: './country-item.html',
  styleUrl: './country-item.css',
})
export class CountryItem {
  @Input() countryData: any;
  @Output() deleteEventEmitter = new EventEmitter();

  deleteCountry(countryId: number) {
    // we are not going to delete the country here
    // we have to emit this event to the parent component
    // to emit the event to the parent component from the child component, we will use EventEmitter object
    this.deleteEventEmitter.emit(countryId);
  }
}

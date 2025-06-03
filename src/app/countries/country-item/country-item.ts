import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'country-item',
  imports: [],
  templateUrl: './country-item.html',
  styleUrl: './country-item.css',
})
export class CountryItem {
  @Input() countryData: any;
  @Output() deleteEventEmitter = new EventEmitter();

  constructor() {
    console.log('child constructor...');
  }

  ngOnInit() {
    console.log('child ngOnInit() called...');
  }

  ngOnDestroy(): void {
    console.log('child ngOnDestroy() called...');
  }

  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked() called...');
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit() called...');
  }

  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked() called...');
  }

  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit() called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child ngOnChanges() called...');
  }

  deleteCountry(countryId: number) {
    // we are not going to delete the country here
    // we have to emit this event to the parent component
    // to emit the event to the parent component from the child component, we will use EventEmitter object
    this.deleteEventEmitter.emit(countryId);
  }
}

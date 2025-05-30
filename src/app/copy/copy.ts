import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'copy',
  imports: [FormsModule],
  templateUrl: './copy.html',
  styleUrl: './copy.css',
})
export class Copy {
  data1: string = 'Good Morning!';
  data2: string = '';

  copyText() {
    this.data2 = this.data1;
  }
}

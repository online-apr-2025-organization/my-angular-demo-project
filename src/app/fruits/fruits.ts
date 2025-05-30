import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'fruits',
  imports: [CommonModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
})
export class Fruits {
  allFruits: string[] = ['Apple', 'Banana', 'Orange'];
}

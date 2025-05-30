import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  // String movieName = "Avengers: End Game";
  movieName: string = 'Avengers: End Game';
  villianName: string = '';
  heroDeath: string = 'Iron Man';
  displayHeroDeath: boolean = false;

  showVillian() {
    this.villianName = 'Thanos';
  }

  showHeroDeath() {
    this.displayHeroDeath = !this.displayHeroDeath;
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'movie-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './movie-header.html',
  styleUrl: './movie-header.css',
})
export class MovieHeader {}

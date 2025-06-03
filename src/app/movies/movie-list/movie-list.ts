import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  allMovies: any;

  constructor(private moviesService: MoviesService) {}

  // ngOnInit is a lifecycle method
  ngOnInit() {
    this.allMovies = this.moviesService.getAllMovies();
  }

  removeMovie(movieId: number) {
    this.moviesService.deleteMovie(movieId);
  }
}

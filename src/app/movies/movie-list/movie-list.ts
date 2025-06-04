import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  allMovies: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  // ngOnInit is a lifecycle method
  ngOnInit() {
    this.allMovies = this.moviesService.getAllMovies();
  }

  removeMovie(movieId: number) {
    this.moviesService.deleteMovie(movieId);
  }

  updateMovie(movieId: number) {
    // now we should programtically navigate/route to the route path movie-update
    this.router.navigate(['movie-header/movie-update', movieId]);
  }
}

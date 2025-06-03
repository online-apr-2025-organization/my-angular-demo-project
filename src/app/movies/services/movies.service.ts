import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  allMovies = [
    {
      movieId: 3001,
      movieName: 'Wonder Woman',
      movieDescription: 'An action movie from Marvel Studios',
      movieYear: '2015',
      movieImageUrl:
        'https://plus.unsplash.com/premium_photo-1669077047016-e8e7bc7b4e3d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      movieId: 3002,
      movieName: 'X Men Last Stand',
      movieDescription: 'An action movie from Marvel Studios',
      movieYear: '2017',
      movieImageUrl:
        'https://images.unsplash.com/photo-1596079320875-ff665fa4a5dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eCUyMG1lbiUyMG1vdmllfGVufDB8fDB8fHww',
    },
  ];

  constructor() {}

  getAllMovies() {
    return this.allMovies;
  }

  getAMovie(movieId: number) {
    let fetchedMovie = null;
    for (let i = 0; i < this.allMovies.length; i++) {
      if (this.allMovies[i].movieId == movieId) {
        fetchedMovie = this.allMovies[i];
        break;
      }
    }
    return fetchedMovie;
  }

  deleteMovie(movieId: number) {
    for (let i = 0; i < this.allMovies.length; i++) {
      if (this.allMovies[i].movieId == movieId) {
        this.allMovies.splice(i, 1);
        break;
      }
    }
  }

  addMovie(nMovie: Movie) {
    let newMovieId = this.allMovies[this.allMovies.length - 1].movieId + 1;
    nMovie.movieId = newMovieId;
    this.allMovies.push(nMovie);
  }
}

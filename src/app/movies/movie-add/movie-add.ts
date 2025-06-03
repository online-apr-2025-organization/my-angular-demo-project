import { Component } from '@angular/core';
import { Movie } from '../model/movie.model';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie-add',
  imports: [FormsModule],
  templateUrl: './movie-add.html',
  styleUrl: './movie-add.css',
})
export class MovieAdd {
  newMovie: Movie = {
    movieId: 0,
    movieName: '',
    movieDescription: '',
    movieImageUrl: '',
    movieYear: '',
  };

  constructor(private moviesService: MoviesService) {}

  submitAddForm() {
    console.log('Form data is:');
    console.log(this.newMovie);
    this.moviesService.addMovie(this.newMovie);
  }

  changeMovieName(temMovieName: any) {
    console.log('changeMovieName() function is called...');
    console.log(temMovieName);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie-update',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-update.html',
  styleUrl: './movie-update.css',
})
export class MovieUpdate {
  fetchedMovie: any;
  myReactiveForm: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.fetchedMovie = this.moviesService.getAMovie(3002);
    // for reactive forms we create the FormControl objects here
    this.myReactiveForm = new FormGroup({
      movieId: new FormControl(this.fetchedMovie.movieId),
      movieName: new FormControl(this.fetchedMovie.movieName),
      movieDescription: new FormControl(this.fetchedMovie.movieDescription),
      movieYear: new FormControl(this.fetchedMovie.movieYear),
      movieImageUrl: new FormControl(this.fetchedMovie.movieImageUrl),
    });
    // after creating the FormGroup of FormControl object, now link these FormGroup and FormControl objects in the template
  }

  myFormSubmit() {
    console.log(this.myReactiveForm.value);
  }
}

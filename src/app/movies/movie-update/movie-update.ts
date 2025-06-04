import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './movie-update.html',
  styleUrl: './movie-update.css',
})
export class MovieUpdate {
  fetchedMovie: any;
  myReactiveForm: any;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // here we have to extract the route parameter mid
    // for extracting we need ActivatedRoute
    let movId: any = this.activatedRoute.snapshot.paramMap.get('mid');
    this.fetchedMovie = this.moviesService.getAMovie(+movId);
    // for reactive forms we create the FormControl objects here
    this.myReactiveForm = new FormGroup({
      movieId: new FormControl(this.fetchedMovie.movieId),
      movieName: new FormControl(this.fetchedMovie.movieName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      movieDescription: new FormControl(this.fetchedMovie.movieDescription),
      movieYear: new FormControl(
        this.fetchedMovie.movieYear,
        Validators.required
      ),
      movieImageUrl: new FormControl(this.fetchedMovie.movieImageUrl),
    });
    // after creating the FormGroup of FormControl object, now link these FormGroup and FormControl objects in the template
  }

  myFormSubmit() {
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
  }
}

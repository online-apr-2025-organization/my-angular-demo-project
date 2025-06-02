import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from "./display/display";
import { Copy } from "./copy/copy";
import { Fruits } from "./fruits/fruits";
import { Students } from "./students/students";
import { MovieList } from "./movies/movie-list/movie-list";
import { CountryList } from "./countries/country-list/country-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Display, Copy, Fruits, Students, MovieList, CountryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-demo-project';
}

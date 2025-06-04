import { Routes } from '@angular/router';
import { Display } from './display/display';
import { Fruits } from './fruits/fruits';
import { Copy } from './copy/copy';
import { Students } from './students/students';
import { MovieList } from './movies/movie-list/movie-list';
import { CountryList } from './countries/country-list/country-list';

export const routes: Routes = [
  { path: 'display', component: Display },
  { path: 'fruit', component: Fruits },
  { path: 'copy', component: Copy },
  { path: 'student', component: Students },
  { path: 'movie', component: MovieList },
  { path: 'country', component: CountryList },
];

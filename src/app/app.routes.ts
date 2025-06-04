import { Routes } from '@angular/router';
import { Display } from './display/display';
import { Fruits } from './fruits/fruits';
import { Copy } from './copy/copy';
import { Students } from './students/students';
import { MovieList } from './movies/movie-list/movie-list';
import { CountryList } from './countries/country-list/country-list';
import { MovieAdd } from './movies/movie-add/movie-add';
import { MovieHeader } from './movies/movie-header/movie-header';
import { MovieUpdate } from './movies/movie-update/movie-update';

export const routes: Routes = [
  { path: 'display', component: Display },
  { path: 'fruit', component: Fruits },
  { path: 'copy', component: Copy },
  { path: 'student', component: Students },
  { path: 'country', component: CountryList },
  {
    path: 'movie-header',
    component: MovieHeader,
    children: [
      { path: 'movie-add', component: MovieAdd },
      { path: 'movie-list', component: MovieList },
      { path: 'movie-update/:mid', component: MovieUpdate },
    ],
  },
];

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
import { PostList } from './posts/post-list/post-list';
import { NotFound } from './not-found/not-found';
import { Header } from './pms/header/header';
import { OrderHeader } from './pms/orders/order-header/order-header';
import { ProductHeader } from './pms/products/product-header/product-header';
import { OrderList } from './pms/orders/order-list/order-list';
import { OrderAdd } from './pms/orders/order-add/order-add';
import { ProductList } from './pms/products/product-list/product-list';
import { ProductAdd } from './pms/products/product-add/product-add';
import { OrderView } from './pms/orders/order-view/order-view';
import { Login } from './pms/user/login/login';
import { Logout } from './pms/user/logout/logout';

export const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
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
  { path: 'post', component: PostList },
  {
    path: 'pms-header',
    component: Header,
    children: [
      {
        path: 'order-header',
        component: OrderHeader,
        children: [
          { path: 'order-list', component: OrderList },
          { path: 'order-add', component: OrderAdd },
          { path: 'order-view/:orderId', component: OrderView },
        ],
      },
      {
        path: 'product-header',
        component: ProductHeader,
        children: [
          { path: 'product-list', component: ProductList },
          { path: 'product-add', component: ProductAdd },
        ],
      },
      { path: 'login', component: Login },
      { path: 'logout', component: Logout },
    ],
  },
  { path: '**', component: NotFound },
];

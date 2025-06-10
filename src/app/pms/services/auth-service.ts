import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() {}

  storeToken(token: string) {
    sessionStorage.setItem('jwtToken', token);
  }

  retrieveToken() {
    return sessionStorage.getItem('jwtToken');
  }

  deleteToken() {
    sessionStorage.removeItem('jwtToken');
  }

  storeUser(user: User) {
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

  retrieveUser() {
    return sessionStorage.getItem('userInfo');
  }

  deleteUser() {
    sessionStorage.removeItem('userInfo');
  }
}

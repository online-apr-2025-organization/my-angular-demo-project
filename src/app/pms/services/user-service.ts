import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { UserToken } from '../model/user-token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // baseUrl: string = 'http://localhost:1212/api/validate';
  baseUrl: string = 'http://localhost:5555/api/validate';
  constructor(private httpClient: HttpClient) {}

  validateUser(user: User): Observable<UserToken> {
    return this.httpClient.post<UserToken>(this.baseUrl, user);
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string = '';
  userInfo: User = {
    userId: 0,
    userName: '',
    userPassword: '',
    allRoles: [],
  };
  constructor(
    private userService: UserService,
    private changeRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router
  ) {}

  submitUser() {
    this.userService.validateUser(this.userInfo).subscribe({
      next: (response) => {
        // means login is a success
        console.log(response);
        // first take the token and store it sessionStorage
        this.authService.storeToken(response.token);
        // next store user information in then sessionStorage
        this.authService.storeUser(response.user);
        // next set isLoggedIn to true in AUthService
        this.authService.isLoggedIn = true;
        // next navigate to product-list
        this.router.navigate(['pms-header/product-header/product-list']);
      },
      error: (err) => {
        // means login is a failure
        this.errorMessage = 'Oops!Something went wrong!';
        this.changeRef.detectChanges();
      },
    });
  }
}

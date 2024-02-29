import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isAuthenticatedUser()) {
      return true; // User is authenticated, allowed to proceed
    } else {
      this.router.navigate(['/login']); // User is not authenticated, navigate to login page
      return false;
    }
  }
}

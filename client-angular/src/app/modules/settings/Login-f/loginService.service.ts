import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated: boolean = false;

  constructor() { }

  // Method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Method to simulate user login
  login(): void {
    this.isAuthenticated = true;
  }

  // Method to simulate user logout
  logout(): void {
    this.isAuthenticated = false;
  }
}

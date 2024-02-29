import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  // Method to simulate user authentication
  login(username: string, password: string): boolean {
    // Here you can implement your actual authentication logic
    // For demonstration purposes, let's assume authentication is successful if username and password are both "admin"
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  // Method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Method to simulate user logout
  logout(): void {
    this.isAuthenticated = false;
  }
}

import { Component } from '@angular/core';
import { LoginService } from './loginService.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
  })
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  login(): void {
    // Call login method of LoginService to authenticate the user
    this.loginService.login();
  }
}

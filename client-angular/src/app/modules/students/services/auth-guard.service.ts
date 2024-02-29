import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  someCondition: boolean = true;

  constructor() { }

  canActivate(): boolean {
    if (this.someCondition)
      return true;
    return false;
  }
}

import { AuthService } from './../../service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}

  canActivate() {
    if (this.auth.authenticated()) {
      return true;
    }
    this.route.navigateByUrl('/auth/login');
    return false;
  }
}

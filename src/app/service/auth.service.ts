import { CONSTANCE } from './../utils/constance';
import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private login: LoginService) {}

  key: string = CONSTANCE.STORAGE_KEYS.TOKEN;

  storeToken(token: string) {
    localStorage.setItem(this.key, token);
  }

  getToken() {
    const token = localStorage.getItem(this.key);
    return token;
  }

  // authenticate user and return a flag
  authenticated() {
    const token = this.getToken();
    if (token == 'token') {
      this.login.enableTheme.next(true);
      return true;
    } else {
      return false;
    }
  }
}

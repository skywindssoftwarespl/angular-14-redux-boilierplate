import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  enableTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  generateToken(): string {
    const token = 'Token';
    this.enableTheme.next(true);
    return token;
  }
}

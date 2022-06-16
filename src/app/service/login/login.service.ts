import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  enableTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  signIn = '/signin';
  constructor() {
    this.signIn = API_CONFIG.value + this.signIn;
  }
}

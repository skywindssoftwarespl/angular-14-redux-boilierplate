import { LoginService } from './service/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public login: LoginService) {}
  title = 'angular-redux-boilerplate';
}

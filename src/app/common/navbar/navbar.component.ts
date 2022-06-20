import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './../../service/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private login: LoginService,
    private route: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.login.enableTheme.next(false);
    this.auth.storeToken('');
    this.route.navigateByUrl('/auth/login');
  }
}

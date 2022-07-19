import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './../../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANT } from 'src/app/utils/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  languages = CONSTANT.LANGUAGE;

  constructor(
    private login: LoginService,
    private route: Router,
    private auth: AuthService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.login.enableTheme.next(false);
    this.auth.storeToken('');
    this.route.navigateByUrl('/auth/login');
  }

  onLangChange(value: string) {
    this.translate.use(value);
  }
}

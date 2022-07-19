import { LoginService } from './service/login/login.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANT } from './utils/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  language = CONSTANT.LANGUAGE.map((data) => data.value);
  constructor(public login: LoginService, public translate: TranslateService) {
    translate.addLangs(this.language);
    translate.setDefaultLang(this.language[0]);
  }
}

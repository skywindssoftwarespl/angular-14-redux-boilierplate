import { AuthService } from './../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginAction } from './ngrx/login.action';
import { INgrState } from 'src/app/redux/ngrx/store';
import { CONSTANT } from 'src/app/utils/constant';
import { UserNameValidators } from 'src/app/validators/trim';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  isValidFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private store: Store<INgrState>,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.authenticated()) {
      this.route.navigateByUrl('/dashboard');
    }
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, UserNameValidators()]],
      password: [
        null,
        [Validators.required, Validators.pattern(CONSTANT.REGEX.PASSWORD)],
      ],
    });
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.store.dispatch(loginAction(this.loginForm.value));
    }
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
}

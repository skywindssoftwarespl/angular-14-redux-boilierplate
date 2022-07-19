import { UserService } from './../../../service/user/user.service';
import { AuthService } from './../../../service/auth.service';
import { switchMap, mergeMap, catchError, of, Observable, EMPTY } from 'rxjs';
import { LoginService } from './../../../service/login/login.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { loginAction } from './login.action';

@Injectable()
export class loginEffect {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  createLoginPage$ = createEffect(() =>
    this.action$
      .pipe(
        ofType(loginAction),
        switchMap(({ username, password }) => this.userService.post())
      )
      .pipe(
        mergeMap((data) => {
          this.authService.storeToken(data);
          this.router.navigateByUrl('/dashboard');
          return [];
        }),
        catchError((error) => of(new error()))
      )
  );
}

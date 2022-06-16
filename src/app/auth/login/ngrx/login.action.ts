import { ILogin } from './../../../shared/models/auth';
import { actionTypes } from './../../../utils/actionTypes';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  actionTypes.LOGIN.DO_LOGIN,
  props<{ username: ILogin; password: ILogin }>()
);

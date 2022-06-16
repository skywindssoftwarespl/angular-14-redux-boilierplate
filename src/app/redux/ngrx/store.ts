import {
  loginReducer,
  LoginState,
} from './../../auth/login/ngrx/login.reducer';

export interface INgrState {
  uLogin: LoginState;
}

export const reducer = {
  login: loginReducer,
};

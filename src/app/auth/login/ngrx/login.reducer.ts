import { loginAction } from './login.action';
import { ILogin } from './../../../shared/models/auth';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<ILogin> = createEntityAdapter<ILogin>();

export interface LoginState {
  item: EntityState<ILogin>;
  token: string;
}

const initialState = {
  token: '',
};

const _loginReducer = createReducer(
  initialState,
  on(loginAction, (state) => {
    return { ...state, token: 'TOKEN' };
  })
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}

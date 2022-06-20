import { createSelector } from '@ngrx/store';
import { INgrState } from './../../../redux/ngrx/store';
import { adapter } from './login.reducer';

const { selectAll } = adapter.getSelectors();

const selectState = (state: INgrState) => state?.uLogin;

export const selectLogin = createSelector(selectState, (state) =>
  selectAll(state?.item)
);

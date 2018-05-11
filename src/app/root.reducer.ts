import { ActionReducerMap } from '@ngrx/store';
import { NumberState, numberReducer } from './number/number.reducer';
import { AuthState, authReducer } from './auth/auth.reducer';

export interface AppState {
  number: NumberState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  number: numberReducer,
  auth: authReducer
};

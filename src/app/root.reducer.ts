import { ActionReducerMap } from '@ngrx/store';
import { NumberState, numberReducer } from './number/number.reducer';

export interface AppState {
  number: NumberState;
}

export const reducers: ActionReducerMap<AppState> = {
  number: numberReducer
};

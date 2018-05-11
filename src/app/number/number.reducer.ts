import { Action } from '@ngrx/store';

export interface NumberState {
  value: number;
}

export const initialState: NumberState = {
  value: 0
};

export function numberReducer(state = initialState, action: Action): NumberState {
  switch (action.type) {
    case 'INCREMENT': {
      return {value: state.value + 1};
    }
    case 'DECREMENT': {
      return {value: state.value - 1};
    }
    case 'RESET': {
      return {value: 0};
    }
    default: {
      return state;
    }
  }
}

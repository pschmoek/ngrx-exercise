import { AuthActions, LOGIN, LOGOUT } from './auth.actions';

export interface AuthState {
  username: string|null;
  password: string|null;
}

export const initialState: AuthState = {
  username: null,
  password: null
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case LOGIN: {
      return {
        username: action.payload.user.username,
        password: action.payload.user.password
      };
    }
    case LOGOUT: {
      return {
        username: null,
        password: null
      };
    }
    default: {
      return state;
    }
  }
}

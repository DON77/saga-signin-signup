import {
  SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
  SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from './constants';

type UserData = { email: string, password: string };

export const signIn = (data: UserData) => ({
  type: SIGN_IN,
  data,
});

export const signInSuccess = (userData: UserData) => ({
  type: SIGN_IN_SUCCESS,
  userData,
});

export const signInFailure = (error: {}) => ({
  type: SIGN_IN_FAILURE,
  error,
});

export const signUp = (data: UserData) => ({
  type: SIGN_UP,
  data,
});

export const signUpSuccess = (userData: UserData) => ({
  type: SIGN_UP_SUCCESS,
  userData,
});

export const signUpFailure = (error: {}) => ({
  type: SIGN_UP_FAILURE,
  error,
});

import { takeEvery, call, put } from 'redux-saga/effects';

import { SIGN_IN, SIGN_UP } from './constants';
import {
  signInSuccess, signInFailure, signUpSuccess, signUpFailure,
} from './actions';

import request from '../../utils/api';

type UserData = { email: string, password: string };

function* signInSaga({ data }: { type: string, data: UserData }) {
  try {
    const userDetails = yield call(request, {
      method: 'POST',
      path: '/sign-in',
      data,
    });

    yield put(signInSuccess(userDetails));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signUpSaga({ data }: { type: string, data: UserData }) {
  try {
    const userDetails = yield call(request, {
      method: 'POST',
      path: '/sign-up',
      data,
    });

    yield put(signUpSuccess(userDetails));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export default function* () {
  yield takeEvery(SIGN_IN, signInSaga);
  yield takeEvery(SIGN_UP, signUpSaga);
}

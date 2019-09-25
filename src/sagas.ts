import { all } from 'redux-saga/effects';

import userSignInSignUp from './pages/Users/sagas';

export default function* rootSaga() {
  yield all([
    userSignInSignUp(),
  ]);
}

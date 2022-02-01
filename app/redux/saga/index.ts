import { takeEvery, all } from 'redux-saga/effects';

import { loginSaga } from './LoginSaga';
import { signupSaga } from './SignupSaga';
import { createProfileSaga } from './CreateProfileSaga';
import { homeSaga } from './HomeSaga';
import { menuSaga } from './MenuSaga';

export default function* root_saga() {
  yield all([
    takeEvery('LOGIN_REQUEST', loginSaga),
    takeEvery('SIGNUP_REQUEST', signupSaga),
    takeEvery('CREATE_PROFILE_REQUEST', createProfileSaga),
    takeEvery('HOME_REQUEST', homeSaga),
    takeEvery('DROPDOWN_REQUEST', menuSaga),
  ]);
}

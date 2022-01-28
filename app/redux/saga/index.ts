import { takeEvery, all } from 'redux-saga/effects';

import { loginSaga } from './LoginSaga';
import { signupSaga } from './SignupSaga';
import { createProfileSaga } from './CreateProfileSaga';
import { homeSaga } from './HomeSaga';
import { pronounsSaga } from './PronounsSaga';
import { orientationSaga } from './OrientationSaga';
import { ethnicitySaga } from './EthnicitySaga';
import { genderSaga } from './GenderSaga';

export default function* root_saga() {
  yield all([
    takeEvery('LOGIN_REQUEST', loginSaga),
    takeEvery('SIGNUP_REQUEST', signupSaga),
    takeEvery('CREATE_PROFILE_REQUEST', createProfileSaga),
    takeEvery('HOME_REQUEST', homeSaga),
    takeEvery('PRONOUNS_REQUEST', pronounsSaga),
    takeEvery('ORIENTATION_REQUEST', orientationSaga),
    takeEvery('ETHNICITY_REQUEST', ethnicitySaga),
    takeEvery('GENDER_REQUEST', genderSaga),
  ]);
}

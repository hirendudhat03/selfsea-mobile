import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { constant } from '../actionTypes';
import {

  loginSaga,
} from './LoginSaga';
import { signupSaga } from './SignupSaga';
import { createProfileSaga } from './CreateProfileSaga';


// export default function* root_saga() {
//   yield takeEvery('LOGIN_REQUEST', loginSaga);
//   // yield takeEvery('SIGNUP_REQUEST', signupSaga);
// }

export default function* root_saga() {
  yield all([
    takeEvery('LOGIN_REQUEST', loginSaga),
    takeEvery('SIGNUP_REQUEST', signupSaga),
    takeEvery('CREATE_PROFILE_REQUEST', createProfileSaga),
    
  ]);
}


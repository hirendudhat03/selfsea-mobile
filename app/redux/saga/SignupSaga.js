import { put, call } from 'redux-saga/effects';
//import { showMessage } from 'react-native-flash-message';
// import {Login} from '../api/method/Login';
import * as SignupAction from '../actions/SignupAction';
// import Constant from '../../theme/Constant'

export function* signupSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    console.log('call signupSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', Password);
    console.log('birthMonth : ', birthMonth);
    console.log('payload : ', birthYear);
    console.log('url : ', userName);

    try {
      const response = {
        data: {
          createUser: {
            id: 'string',
            email: 'string',
            isOnline: 'boolean',
            username: 'string',
            isUsernameApproved: 'boolean',
            hasAcceptedLatestTerms: 'boolean',
          },
        },
      };
      // await auth().signInWithEmailAndPassword(email, password)

      return response;
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const response = yield call(
    Signup,
    action.email,
    action.Password,
    action.birthMonth,
    action.birthYear,
    action.userName,
  );
  console.warn('response saga', response);
  yield put(SignupAction.SignupResponse(response));
  action.navigation.navigate('CreateProfile');
}

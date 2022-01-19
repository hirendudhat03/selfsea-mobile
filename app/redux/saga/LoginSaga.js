import { put, call } from 'redux-saga/effects';
// import * as LoginAction from '../actions/LoginAction';
import auth from '@react-native-firebase/auth';

export function* loginSaga(action) {
  const Login = async (email, password) => {
    console.log('call loginSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', password);

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('response', response);
      // yield put(LoginAction.LoginResponse(response));
      await auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user.email);
        } else {
          console.log('not verified');
        }
      });
      action.navigation.navigate('DrawerNavigator');
      return response;
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(e);
      console.log(e);
      alert(e);
    }
  };

  const response = yield call(Login, action.email, action.password);
  console.warn('response saga', response);
}

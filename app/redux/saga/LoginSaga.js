import { call } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* loginSaga(action) {
  const Login = async (email, password) => {
    console.log('call loginSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', password);

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('response', response);
      // yield put(LoginAction.LoginResponse(response));

      auth().onAuthStateChanged(user => {
        if (user.emailVerified) {
          AsyncStorage.getItem('user2').then(value => {
            console.log('value:', value);
            if (value === 'true') {
              action.navigation.navigate('DrawerNavigator');
            } else {
              action.navigation.navigate('CreateProfile');
            }
          });

          // action.navigation.navigate('CreateProfile');
        } else {
          console.log('not verified');
        }
      });
      return response;
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
        console.log('That email address is not found!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      if (e.code === 'auth/wrong-password') {
        console.log(
          'The password is invalid or the user does not have a password.',
        );
      }

      // console.error(e);
      console.log('e : ', e);
      // alert(e);
    }
  };

  const response = yield call(Login, action.email, action.password);
  console.warn('response saga', response);
}

import { call, put } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services';
import { LoginResponse } from '../actions/LoginAction';
import { Alert } from 'react-native';

export function* loginSaga(action) {
  const Login = async (email, password) => {
    console.log('call loginSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', password);

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);

      // if (response.user.emailVerified) {
      const token = await response.user.getIdToken();
      console.log('token : ', token);
      await AsyncStorage.setItem('jwtToken', token);
      api.setAuthHeader(token);

      const data = await api.currentUser();
      if (data?.currentUser?.roles[0].name === 'MENTEE') {
        // In future it will be role based redirect
        action.navigation.replace('TabNavigator');
      }
      if (data?.currentUser?.roles[0].name === 'MENTOR') {
        // In future it will be role based redirect
        action.navigation.replace('TabNavigator');
      }
      if (data?.currentUser?.roles[0].name === 'MODERATOR') {
        // In future it will be role based redirect
        action.navigation.replace('TabNavigator');
      }
      if (data?.currentUser?.roles[0].name === 'ADMIN') {
        // In future it will be role based redirect
        action.navigation.replace('TabNavigator');
      }

      // } else {
      //   console.log('not verified');
      //   Alert.alert('not verified');
      // }

      return response;
    } catch (e: unknown) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while logging in');
        return;
      }
      if (e.code && e.code === 'auth/user-not-found') {
        console.log('That email address is not found!');
        Alert.alert('That email address is not found!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        Alert.alert('That email address is invalid!');
      }

      if (e.code === 'auth/wrong-password') {
        console.log(
          'The password is invalid or the user does not have a password.',
        );
        Alert.alert(
          'The password is invalid or the user does not have a password.',
        );
      }

      console.log('e : ', e);
      return null;
    }
  };

  const response = yield call(Login, action.email, action.password);
  console.warn('response saga', response);
  if (response === null) {
    yield put(LoginResponse(null, false));
  } else {
    yield put(LoginResponse(response, false));
  }
}

const isBadRequestError = (e: unknown): e is { code: string } =>
  !!e && typeof e === 'object' && 'code' in e;

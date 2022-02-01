import { call, put } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services';
import { LoginResponse } from '../actions/LoginAction';

import { currentUserQuery } from '../../graphql/queries/UserProfile';
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

      AsyncStorage.getItem('currentUser12').then(value => {
        console.log('value:', value);
        if (value === 'true') {
          const Getuser = async () => {
            const data = await api.client.request(currentUserQuery);
            console.log('data:', JSON.stringify(data));

            if (data.currentUser.roles[0].name === 'MENTEE') {
              action.navigation.navigate('DrawerNavigator');
            }
            if (data.currentUser.roles[0].name === 'MENTOR') {
              action.navigation.navigate('DrawerNavigator');
            }
            if (data.currentUser.roles[0].name === 'MODERATOR') {
              action.navigation.navigate('DrawerNavigator');
            }
            if (data.currentUser.roles[0].name === 'ADMIN') {
              action.navigation.navigate('DrawerNavigator');
            }
          };
          Getuser();
        } else {
          action.navigation.navigate('CreateProfile');
        }
      });
      // } else {
      //   console.log('not verified');
      //   Alert.alert('not verified');
      // }

      return response;
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
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
      Alert.alert(e);
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

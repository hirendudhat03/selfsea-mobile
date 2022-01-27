import { call } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services';

import { currentUserQuery } from '../../graphql/queries/UserProfile';

export function* loginSaga(action) {
  const Login = async (email, password) => {
    console.log('call loginSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', password);

    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      if (response.user.emailVerified) {
        const token = await response.user.getIdToken();
        console.log('token : ', token);
        await AsyncStorage.setItem('jwtToken', token);
        api.setAuthHeader(token);
        // AsyncStorage.getItem('user4').then(value => {
        //   console.log('value:', value);
        //   if (value === 'true') {
        //     action.navigation.navigate('DrawerNavigator');
        //   } else {
        //     action.navigation.navigate('CreateProfile');
        //   }
        // });
        const data = await api.client.request(currentUserQuery);
        if (data.currentUser === null) {
          action.navigation.navigate('CreateProfile');
        } else {
          action.navigation.navigate('DrawerNavigator');
        }
        console.log('data:', data);
        return data;
      } else {
        console.log('not verified');
        // action.navigation.navigate('CreateProfile');
      }
      // auth().onAuthStateChanged(user => {
      //   if (user.emailVerified) {
      //     AsyncStorage.getItem('user3').then(value => {
      //       console.log('value:', value);
      //       if (value === 'true') {
      //         action.navigation.navigate('DrawerNavigator');
      //       } else {
      //         action.navigation.navigate('CreateProfile');
      //       }
      //     });

      //     // action.navigation.navigate('CreateProfile');
      //   } else {
      //     console.log('not verified');
      //   }
      // });
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

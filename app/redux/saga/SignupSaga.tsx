import auth from '@react-native-firebase/auth';
import { api } from '../../services';
import { call, put } from 'redux-saga/effects';
import { createUserMutation } from '../../graphql/mutations/UserMutation';
import { Alert } from 'react-native';
import { SignupResponse } from '../actions/SignupAction';

export function* signupSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        Password,
      );

      const token = await response.user.getIdToken();
      api.setAuthHeader(token);
      console.log('token : ', token);

      await response.user.sendEmailVerification();

      const mutationVariables = {
        email,
        authId: response.user.uid,
        birthMonth: birthMonth.toUpperCase(),
        birthYear: parseFloat(birthYear),
        username: userName,
      };
      const data = await api.client.request(
        createUserMutation,
        mutationVariables,
      );
      console.log('data::', data);
      action.navigation.navigate('DrawerNavigator');
      return { ...data, ...response };
    } catch (e) {
      console.log('klasjdlkasjld');
      if (e.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        Alert.alert('That email address is already in use!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        Alert.alert('That email address is invalid!');
      }

      console.log(e.message);
      // Alert.alert(e.message);
      return {
        error:
          'this is an invalid email/password, please visit selfsea.org for more resources.',
      };
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

  // if (response === null) {
  //   yield put(
  //     SignupResponse(
  //       {
  //         error:
  //           'this is an invalid email/password, please visit selfsea.org for more resources.',
  //       },
  //       false,
  //     ),
  //   );
  // } else {
  yield put(SignupResponse(response, false));
  // }
}

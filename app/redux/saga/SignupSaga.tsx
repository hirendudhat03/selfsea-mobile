import auth from '@react-native-firebase/auth';
import { api } from '../../services';
import { call, put } from 'redux-saga/effects';
import { createUserMutation } from '../../graphql/mutations/UserMutation';
import { Alert } from 'react-native';
import { SignupResponse } from '../actions/SignupAction';
import { isUsernameValidQuery } from '../../graphql/queries/UserProfile';

export function* signupSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    try {
      try {
        const username = await api.client.request(isUsernameValidQuery, {
          username: userName,
        });
        console.log('username::', JSON.stringify(username));

        if (!username.isUsernameValid.isValid) {
          return {
            errorname: 'username',
            error: 'this username is taken.',
          };
        } else {
          const response = await auth().createUserWithEmailAndPassword(
            email,
            Password,
          );

          await response.user.sendEmailVerification();

          try {
            const mutationVariables = {
              email,
              authId: response.user.uid,
              birthMonth: birthMonth.toUpperCase(),
              birthYear: parseFloat(birthYear),
              username: userName,
            };
            console.log('mutationVariables::', mutationVariables);
            const data = await api.client.request(
              createUserMutation,
              mutationVariables,
            );
            console.log('mutationVariables::', data);
            action.navigation.navigate('Signin');

            return { ...data, ...response };
          } catch (e) {
            console.log({ errorHere: e });
            // Alert.alert('something went to worng.');
          }
        }
        return userName;
      } catch (e: any) {
        console.log({ code: e.code });
        if (e.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('That email address is already in use!');
        }

        if (e.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('That email address is invalid!');
        }

        console.log(e.message);
        return {
          errorname: 'email',
          error:
            'this is an invalid email/password, please visit selfsea.org for more resources.',
        };
      }
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        Alert.alert('That email address is already in use!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        Alert.alert('That email address is invalid!');
      }

      console.log(e.message);
      return {
        errorname: 'email',
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

  yield put(SignupResponse(response, false));
}

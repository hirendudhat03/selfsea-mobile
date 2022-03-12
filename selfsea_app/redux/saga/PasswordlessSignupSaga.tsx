import auth from '@react-native-firebase/auth';
import { api } from '../../services';
import { call, put } from 'redux-saga/effects';
// import { createUserMutation } from '../../graphql/mutations/UserMutation';
import { Alert } from 'react-native';
import { SignUpResponse } from '../actions/SignUpAction';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function* passwordlessSignupSaga(action) {
  const Signup = async (email, birthMonth, birthYear, userName) => {
    try {
      const username = await api.isUsernameValid({ username: userName });
      console.log('username::', JSON.stringify(username.isUsernameValid));

      if (!username?.isUsernameValid?.isValid) {
        return {
          errorName: 'username',
          error: 'this username is taken.',
        };
      } else {
        console.log('Here 3');
        var token: any = '';
        var response: any = '';
        if (action.platform === 'google') {
          var tokens = await GoogleSignin.getTokens();

          var credToken =
            action.userInfo.idToken !== null
              ? action.userInfo.idToken
              : tokens.accessToken;
          const googleCredential =
            auth.GoogleAuthProvider.credential(credToken);
          response = await auth().signInWithCredential(googleCredential);
          await response.user.sendEmailVerification();
        }

        if (action.platform === 'apple') {
          token = action.token;
        }

        api.setAuthHeader(token);
        // api.currentUser(token);
        // await response.user.sendEmailVerification();
        console.log('Action', action.uid);

        const mutationVariables = {
          email,
          authId:
            action.platform === 'apple' ? action.uid : response?.user?.uid,
          birthMonth: birthMonth.toUpperCase(),
          birthYear: parseFloat(birthYear),
          username: userName,
        };

        const data = await api.createUser(mutationVariables);
        action.navigation.navigate('DrawerNavigator');
        return { ...data, ...response };
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

      console.log('Error Message Passwordless Saga', e.message);
      return {
        error:
          'this is an invalid email/password, please visit selfsea.org for more resources.',
      };
    }
  };

  const response = yield call(
    Signup,
    action.email,
    action.birthMonth,
    action.birthYear,
    action.userName,
  );
  console.warn('passwordless response saga', response);

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
  yield put(SignUpResponse(response, false));
  // }
}

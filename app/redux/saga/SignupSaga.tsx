import auth from '@react-native-firebase/auth';
import { api } from '../../services';
import { call, put } from 'redux-saga/effects';
import { SignupResponse } from '../actions/SignupAction';

export function* signUpSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    try {
      const username = await api.isUsernameValid({ username: userName });
      console.log('username::', JSON.stringify(username.isUsernameValid));

      if (!username?.isUsernameValid?.isValid) {
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
          const data = await api.createUser(mutationVariables);

          console.log('mutationVariables::', data);
          action.navigation.navigate('Signin');

          return { ...data, ...response };
        } catch (e) {
          console.log({ errorHere: e });
          // Alert.alert('something went to worng.');
        }
      }
      return userName;
    } catch (e) {
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

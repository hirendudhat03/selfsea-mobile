import auth from '@react-native-firebase/auth';
import { api } from '../../services';
import { call } from 'redux-saga/effects';
import { createUserMutation } from '../../graphql/mutations/UserMutation';

export function* signupSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        Password,
      );

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
      action.navigation.navigate('Signin');
      return { ...data, ...response };
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.log(e.message);
    }
  };

  yield call(
    Signup,
    action.email,
    action.Password,
    action.birthMonth,
    action.birthYear,
    action.userName,
  );
}

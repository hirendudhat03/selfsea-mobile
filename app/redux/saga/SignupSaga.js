import auth from '@react-native-firebase/auth';
import { api } from '../../services';
// import * as SignupAction from '../actions/SignupAction';
import { call } from 'redux-saga/effects';
import { createUserMutation } from '../../graphql/mutations/UserMutation';

export function* signupSaga(action) {
  const Signup = async (email, Password, birthMonth, birthYear, userName) => {
    console.log('call signupSaga : ', action);

    console.log('url : ', email);
    console.log('payload : ', Password);
    console.log('birthMonth : ', birthMonth);
    console.log('payload : ', birthYear);
    console.log('url : ', userName);

    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        console.log(email),
        Password,
        console.log(Password),
      );
      console.log('response', response);
      // send verification mail.
      await response.user.sendEmailVerification();
      // return true
      // alert('Email sent');
      action.navigation.navigate('Signin');

      const mutationVariables = {
        email,
        password: Password,
        authId: response.user.uid,
        birthMonth: birthMonth.toUpperCase(),
        birthYear: parseFloat(birthYear),
        username: userName,
      };
      const data = await api.client.request(
        createUserMutation,
        console.log('createUserMutation', createUserMutation),
        mutationVariables,
        console.log('mutation variable', mutationVariables),
      );
      console.log('data', data);

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

  const response = yield call(
    Signup,
    action.email,
    action.Password,
    action.birthMonth,
    action.birthYear,
    action.userName,
  );

  console.warn('response saga', response);
  // yield put(SignupAction.SignupResponse(response));
  // action.navigation.navigate('CreateProfile');
}

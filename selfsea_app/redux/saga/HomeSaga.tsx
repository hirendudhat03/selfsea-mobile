import { put, call } from 'redux-saga/effects';
import { api } from '../../services';
import { HomeResponse } from '../actions/HomeAction';
import { Alert } from 'react-native';
import GenerateNewToken from '../../services/GenerateNewToken';

export function* homeSaga(action) {
  const Home = async () => {
    console.log('call homeSaga : ', action);

    try {
      const response = await api.currentTermsAndConditions();
      console.log('response:', response);

      const currentUserData = await api.currentUser();

      return { ...response, ...currentUserData };
    } catch (e: unknown) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while loading the home page');
        return;
      }

      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken::', newToken);
        Home();
      } else {
        console.log('e:', e.response.errors[0].message);

        return null;
      }
    }
  };

  const response = yield call(Home);
  console.warn('HomeResponse saga', response);

  if (response === null) {
    yield put(HomeResponse(null, false));
  } else {
    yield put(HomeResponse(response, false));
  }
}

const isBadRequestError = (e: unknown): e is { response: any } =>
  !!e && typeof e === 'object' && 'code' in e;

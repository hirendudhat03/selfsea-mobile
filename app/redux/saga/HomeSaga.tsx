import { put, call } from 'redux-saga/effects';
import { api } from '../../services';
import { HomeResponse } from '../actions/HomeAction';
import { Alert } from 'react-native';

export function* homeSaga(action) {
  const Home = async () => {
    console.log('call homeSaga : ', action);

    try {
      const response = await api.currentTermsAndConditions();
      console.log('response:', response);

      const currentUserData = await api.currentUser();

      return { ...response, ...currentUserData };
    } catch (e) {
      console.log('e:', e);
      Alert.alert('something went wrong while loading the home page');
      return null;
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

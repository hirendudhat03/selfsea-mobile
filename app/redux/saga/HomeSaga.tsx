import { put, call } from 'redux-saga/effects';
import { api } from '../../services';

import { HomeResponse } from '../actions/HomeAction';
import {
  currentTermsAndConditionsQuery,
  currentUserQuery,
} from '../../graphql/queries/UserProfile';
import { Alert } from 'react-native';
export function* homeSaga(action) {
  const Home = async () => {
    console.log('call homeSaga : ', action);

    try {
      const response = await api.client.request(currentTermsAndConditionsQuery);
      console.log('response:', response);

      const currentUserData = await api.client.request(currentUserQuery);

      return { ...response, ...currentUserData };
    } catch (e) {
      console.log(e);
      Alert.alert(e);
      return null;
    }
  };

  const response = yield call(Home);
  console.warn('response saga', response);

  // action.navigation.navigate('Communities');
  if (response === null) {
    yield put(HomeResponse(null, false));
  } else {
    yield put(HomeResponse(response, false));
  }
}

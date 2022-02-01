import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userGenderQuery } from '../../graphql/queries/UserProfile';
import { GenderResponse } from '../actions/GenderAction';
import { Alert } from 'react-native';

export function* genderSaga(action) {
  const Gender = async () => {
    console.log('call genderSaga : ', action);

    try {
      const response = await api.client.request(userGenderQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      Alert.alert(e);
    }
  };

  const response = yield call(Gender);
  console.warn('response saga', response);
  if (response === null) {
    yield put(GenderResponse(null, false));
  } else {
    yield put(GenderResponse(response, false));
  }
}

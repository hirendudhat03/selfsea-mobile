import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import { api } from '../../services';

import { AcceptResponse } from '../actions/AcceptTermAction';

import { acceptCurrentTermsMutation } from '../../graphql/mutations/UserMutation';

export function* acceptSaga(action) {
  const Accept = async () => {
    console.log('call homeSaga : ', action);

    try {
      const data = await api.client.request(acceptCurrentTermsMutation);
      console.log('data accept:::::', data);

      return data;
    } catch (e) {
      console.log(e);
      Alert.alert('something went to wrong condition');
      return null;
    }
  };

  const response = yield call(Accept);
  console.warn('response saga', response);

  if (response === null) {
    yield put(AcceptResponse(null, false));
  } else {
    yield put(AcceptResponse(response, false));
  }
}

import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import { api } from '../../services';

import { AcceptResponse } from '../actions/AcceptTermAction';

export function* acceptSaga(action) {
  const Accept = async () => {
    console.log('call homeSaga : ', action);

    try {
      const data = await api.acceptCurrentTerms();
      console.log('data accept:::::', data);

      return data;
    } catch (e) {
      console.log(e);
      Alert.alert(
        "we're run into a system error, please contact support if you continue to experience issues",
      );
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

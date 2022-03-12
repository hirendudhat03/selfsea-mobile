import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import { api } from '../../services';

import { AcceptResponse } from '../actions/AcceptTermAction';
import GenerateNewToken from '../../services/GenerateNewToken';

export function* acceptSaga(action) {
  const Accept = async () => {
    console.log('call homeSaga : ', action);

    try {
      const data = await api.acceptCurrentTerms();
      console.log('data accept:::::', data);

      return data;
    } catch (e) {
      if (!isBadRequestError(e)) {
        Alert.alert(
          "we're run into a system error, please contact support if you continue to experience issues",
        );
        return;
      }
      console.log('e:', e.response.errors[0].message);

      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken::', newToken);
        Accept();
      } else {
        return null;
      }
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

const isBadRequestError = (e: unknown): e is { response: any } =>
  !!e && typeof e === 'object' && 'code' in e;

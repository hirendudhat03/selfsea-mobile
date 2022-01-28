import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userPronounsQuery } from '../../graphql/queries/UserProfile';
import { ProunounsResponse } from '../actions/PronounsAction';
import { Alert } from 'react-native';

export function* pronounsSaga(action) {
  const Pronouns = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.client.request(userPronounsQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      Alert.alert(e);
      return null;
    }
  };

  const response = yield call(Pronouns);
  console.warn('response saga', response);
  if (response === null) {
    yield put(ProunounsResponse(null, false));
  } else {
    yield put(ProunounsResponse(response, false));
  }
}

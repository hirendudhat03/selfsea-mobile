import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userEthnicityQuery } from '../../graphql/queries/UserProfile';
import * as EthnicityAction from '../actions/EthnicityAction';
import { Alert } from 'react-native';

export function* ethnicitySaga(action) {
  const Ethnicity = async () => {
    console.log('call ethnicitySaga : ', action);

    try {
      const response = await api.client.request(userEthnicityQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      Alert.alert(e);
    }
  };

  const response = yield call(Ethnicity);
  yield put(EthnicityAction.EthnicityResponse(response));
  console.warn('response saga', response);
}

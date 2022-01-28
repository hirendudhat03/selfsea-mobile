import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userOrientationQuery } from '../../graphql/queries/UserProfile';
import { OrientationResponse } from '../actions/OrientationAction';
import { Alert } from 'react-native';

export function* orientationSaga(action) {
  const Orientation = async () => {
    console.log('call orientationSaga : ', action);

    try {
      const response = await api.client.request(userOrientationQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      Alert.alert(e);
    }
  };

  const response = yield call(Orientation);

  console.warn('response saga', response);
  if (response === null) {
    yield put(OrientationResponse(null, false));
  } else {
    yield put(OrientationResponse(response, false));
  }
}

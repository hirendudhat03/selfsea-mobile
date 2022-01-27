import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userOrientationQuery } from '../../graphql/queries/UserProfile';
import * as OrientationAction from '../actions/OrientationAction';

export function* orientationSaga(action) {
  const Orientation = async () => {
    console.log('call orientationSaga : ', action);

    try {
      const response = await api.client.request(userOrientationQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
    }
  };

  const response = yield call(Orientation);
  yield put(OrientationAction.OrientationResponse(response));
  console.warn('response saga', response);
}

import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userGenderQuery } from '../../graphql/queries/UserProfile';
import * as GenderAction from '../actions/GenderAction';

export function* genderSaga(action) {
  const Gender = async () => {
    console.log('call genderSaga : ', action);

    try {
      const response = await api.client.request(userGenderQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
    }
  };

  const response = yield call(Gender);
  yield put(GenderAction.GenderResponse(response));
  console.warn('response saga', response);
}

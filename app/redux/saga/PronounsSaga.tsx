import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { userPronounsQuery } from '../../graphql/queries/UserProfile';
import * as PronounsAction from '../actions/PronounsAction';

export function* pronounsSaga(action) {
  const Pronouns = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.client.request(userPronounsQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
    }
  };

  const response = yield call(Pronouns);
  yield put(PronounsAction.ProunounsResponse(response));
  console.warn('response saga', response);
}

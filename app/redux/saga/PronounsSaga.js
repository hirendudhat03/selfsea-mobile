import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { createUserQuery } from '../../graphql/queries/UserProfile';
import * as PronounsAction from '../actions/PronounsAction';

export function* pronounsSaga(action) {
  const Pronouns = async () => {
    console.log('call pronounsSaga : ', action);

    // api.client.request(createUserQuery).then(res => {
    //   console.log('data::', JSON.stringify(res));
    // });
    //     console.log('url : ', email);
    //     console.log('payload : ', password);

    try {
      //   const response = await api.client.request(createUserQuery).then(() => {
      //     console.log('data::', JSON.stringify(response));
      //   });
      const response = await api.client.request(createUserQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      // alert(e);
    }
  };

  const response = yield call(Pronouns);
  yield put(PronounsAction.ProunounsResponse(response));
  console.warn('response saga', response);
}

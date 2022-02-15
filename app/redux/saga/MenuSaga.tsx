import { all, call, put } from 'redux-saga/effects';

import { api } from '../../services';
import {
  userPronounsQuery,
  userOrientationQuery,
  userGenderQuery,
  userEthnicityQuery,
} from '../../graphql/queries/UserProfile';
import { DropDownResponse } from '../actions/MenuAction';

export function* menuSaga(action) {
  const Pronouns = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.client.request(userPronounsQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };
  const Orientation = async () => {
    console.log('call orientationSaga : ', action);

    try {
      const response = await api.client.request(userOrientationQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };

  const Gender = async () => {
    console.log('call genderSaga : ', action);

    try {
      const response = await api.client.request(userGenderQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };
  const Ethnicity = async () => {
    console.log('call ethnicitySaga : ', action);

    try {
      const response = await api.client.request(userEthnicityQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };

  const response = yield all({
    Pronouns: call(Pronouns),
    Orientation: call(Orientation),
    Gender: call(Gender),
    Ethnicity: call(Ethnicity),
  });

  console.warn('dropdown saga', response);
  if (response === null) {
    yield put(DropDownResponse(null, false));
  } else {
    yield put(DropDownResponse(response, false));
  }
}

import { all, call, put } from 'redux-saga/effects';

import { api } from '../../services';
import {
  userPronounsQuery,
  userOrientationQuery,
  userGenderQuery,
  userEthnicityQuery,
} from '../../graphql/queries/UserProfile';
import {
  Ethnicity,
  Genders,
  Orientations,
  Pronouns,
} from '../../types/ProfileApiResponse';
import { DropDownResponse } from '../actions/MenuAction';

export function* menuSaga(action) {
  const getPronounces = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.client.request<Pronouns>(userPronounsQuery);
      console.log('response.data:', response.pronouns);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };
  const getOrientations = async () => {
    console.log('call orientationSaga : ', action);

    try {
      const response = await api.client.request<Orientations>(
        userOrientationQuery,
      );
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };

  const getGenders = async () => {
    console.log('call genderSaga : ', action);

    try {
      const response = await api.client.request<Genders>(userGenderQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };
  const getEthnicities = async () => {
    console.log('call ethnicitySaga : ', action);

    try {
      const response = await api.client.request<Ethnicity>(userEthnicityQuery);
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };

  const response = yield all({
    Pronouns: call(getPronounces),
    Orientation: call(getOrientations),
    Gender: call(getGenders),
    Ethnicity: call(getEthnicities),
  });

  console.warn('dropdown saga', response);
  if (response === null) {
    yield put(DropDownResponse(null, false));
  } else {
    yield put(DropDownResponse(response, false));
  }
}

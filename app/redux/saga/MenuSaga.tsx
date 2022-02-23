import { all, call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { DropDownResponse } from '../actions/MenuAction';

export function* menuSaga(action) {
  const getPronouns = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.getPronouns();
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
      const response = await api.getOrientations();
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
      const response = await api.getGenders();
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
      const response = await api.getEthnicities();
      console.log('response:', response);

      return response;
    } catch (e) {
      console.log('e : ', e);
      return null;
    }
  };

  const response = yield all({
    Pronouns: call(getPronouns),
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

import { all, call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { DropDownResponse } from '../actions/MenuAction';
import GenerateNewToken from '../../services/GenerateNewToken';
import { Alert } from 'react-native';

export function* menuSaga(action) {
  const getPronouns = async () => {
    console.log('call pronounsSaga : ', action);

    try {
      const response = await api.getPronouns();
      console.log('response.data:', response.pronouns);

      return response;
    } catch (e) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while loading the getPronouns ');
        return;
      }
      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken:::', newToken);
        getPronouns();
      } else {
        return null;
      }
    }
  };
  const getOrientations = async () => {
    console.log('call orientationSaga : ', action);

    try {
      const response = await api.getOrientations();
      console.log('response:', response);

      return response;
    } catch (e) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while loading the getOrientations ');
        return;
      }
      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken::', newToken);
        getOrientations();
      } else {
        return null;
      }
    }
  };

  const getGenders = async () => {
    console.log('call genderSaga : ', action);

    try {
      const response = await api.getGenders();
      console.log('response:', response);

      return response;
    } catch (e: unknown) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while loading the getGenders ');
        return;
      }
      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken:::', newToken);
        getGenders();
      } else {
        return null;
      }
    }
  };
  const getEthnicities = async () => {
    console.log('call ethnicitySaga : ', action);

    try {
      const response = await api.getEthnicities();
      console.log('response:', response);

      return response;
    } catch (e: unknown) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while loading the getEthnicity ');
        return;
      }
      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken::', newToken);
        getEthnicities();
      } else {
        return null;
      }
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

const isBadRequestError = (e: unknown): e is { response: any } =>
  !!e && typeof e === 'object' && 'code' in e;

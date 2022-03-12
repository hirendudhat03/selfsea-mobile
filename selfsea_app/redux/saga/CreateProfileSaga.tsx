import { put, call } from 'redux-saga/effects';

import { CreateProfileResponse } from '../actions/CreateProfileAction';

import { api } from '../../services';
import { Alert } from 'react-native';
import GenerateNewToken from '../../services/GenerateNewToken';

export function* createProfileSaga(action) {
  const CreateProfile = async (
    profile,
    selectPronounsDropDown,
    selectOrientationDropDown,
    selectGenderDropDown,
    selectRaceDropDown,
    selectLocationDropDown,
  ) => {
    console.log('call createProfileSaga : ', action);
    console.log('profile : ', profile);

    console.log('Pronouns : ', selectPronounsDropDown);
    console.log('Orientation : ', selectOrientationDropDown);
    console.log('Gender : ', selectGenderDropDown);
    console.log('Race : ', selectRaceDropDown);
    console.log('Location : ', selectLocationDropDown);

    try {
      const mutationVariables = {
        isPrivate: true,
        location: selectLocationDropDown[0].description,
        bio: 'required',
        pronouns: selectPronounsDropDown,
        orientations: selectOrientationDropDown,
        genders: selectGenderDropDown,
        ethnicities: selectRaceDropDown,
      };
      const data = await api.updateProfile(mutationVariables);
      console.log('create profile data : ', JSON.stringify(data));
      return { ...data, ...response };
    } catch (e: unknown) {
      if (!isBadRequestError(e)) {
        Alert.alert('something went wrong while creating your profile');

        return;
      }

      if (e.response.errors[0].message === 'Unauthorized') {
        console.log('cuurent user is Unauthorized');
        const newToken = await GenerateNewToken();
        console.log('newToken::', newToken);
        CreateProfile(
          profile,
          selectPronounsDropDown,
          selectOrientationDropDown,
          selectGenderDropDown,
          selectRaceDropDown,
          selectLocationDropDown,
        );
      } else {
        console.log('e:', e.response.errors[0].message);
        return null;
      }
    }
  };

  const response = yield call(
    CreateProfile,
    action.profile,
    action.selectPronounsDropDown,
    action.selectOrientationDropDown,
    action.selectGenderDropDown,
    action.selectRaceDropDown,
    action.selectLocationDropDown,
  );

  if (response === null) {
  } else {
    action.navigation.navigate('TabNavigator');
  }

  console.warn('createProfile response saga', JSON.stringify(response));
  if (response === null) {
    yield put(CreateProfileResponse(null, false));
  } else {
    yield put(CreateProfileResponse(response, false));
  }
}

const isBadRequestError = (e: unknown): e is { response: any } =>
  !!e && typeof e === 'object' && 'code' in e;

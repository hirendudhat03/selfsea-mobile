import { put, call } from 'redux-saga/effects';

import { CreateProfileResponse } from '../actions/CreateProfileAction';

import { api } from '../../services';
import { updateProfileMutation } from '../../graphql/mutations/UserMutation';
import { Alert } from 'react-native';

export function* createProfileSaga(action) {
  const CreateProfile = async (
    profile,
    selectPronounsDropDown,
    selectOrientationDropDown,
    selectGenderDropDown,
    selectRaceDropDown,
    selectLocationDropDown,
  ) => {
    console.log('call createprofileSaga : ', action);
    console.log('profile : ', profile);

    console.log('Pronouns : ', selectPronounsDropDown);
    console.log('Orientation : ', selectOrientationDropDown);
    console.log('Gender : ', selectGenderDropDown);
    console.log('Race : ', selectRaceDropDown);
    console.log('Location : ', selectLocationDropDown);

    try {
      const mutationVariables = {
        isPrivate: true,
        location: 'xyz',
        bio: 'abc',
      };
      const data = await api.client.request(
        updateProfileMutation,
        mutationVariables,
      );
      return { ...data, ...response };
    } catch (e) {
      console.log(e);
      Alert.alert(e);
      return null;
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

  if (response === undefined) {
  } else {
    action.navigation.navigate('TabNavigator');
  }

  console.warn('response saga', response);
  if (response === null) {
    yield put(CreateProfileResponse(null, false));
  } else {
    yield put(CreateProfileResponse(response, false));
  }
}

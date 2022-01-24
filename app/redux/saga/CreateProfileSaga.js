import { put, call } from 'redux-saga/effects';
//import { showMessage } from 'react-native-flash-message';
// import {Login} from '../api/method/Login';
import * as CreateProfileAction from '../actions/CreateProfileAction';
// import Constant from '../../theme/Constant'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* createProfileSaga(action) {
  const CreateProfile = async (
    profile,
    selectPronounsDropDown,
    selectOrientationDropDown,
  ) => {
    console.log('call createprofileSaga : ', action);
    console.log('profile : ', profile);

    console.log('Pronouns : ', selectPronounsDropDown);
    console.log('Orientation : ', selectOrientationDropDown);

    try {
      const response = {
        data: {
          userProfile: {
            id: 'string',
            isPrivate: 'boolean',
            yearOfBirth: 'integer',
            bio: 'string',
            state: 'string',
            city: 'string',
          },
        },
      };
      // await auth().signInWithEmailAndPassword(email, password)

      return response;
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const response = yield call(
    CreateProfile,
    action.profile,
    action.selectPronounsDropDown,
    action.selectOrientationDropDown,
  );

  if (response === undefined) {
  } else {
    AsyncStorage.setItem('user3', 'true');
    action.navigation.navigate('TabNavigator');
  }

  console.warn('response saga', response);
  yield put(CreateProfileAction.CreateProfileResponse(response));
}

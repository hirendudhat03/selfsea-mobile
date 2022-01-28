import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';

import { HomeResponse } from '../actions/HomeAction';

export function* homeSaga(action) {
  const Home = async () => {
    console.log('call homeSaga : ', action);

    try {
      const response = {
        data: {
          community: {
            id: 'string',
            name: 'string',
            description: 'string',
            maxMembers: 'integer',
            totalMembers: 'integer',
          },
        },
      };

      return response;
    } catch (e) {
      console.log(e);
      Alert.alert(e);
    }
  };

  const response = yield call(Home);
  console.warn('response saga', response);

  action.navigation.navigate('Communities');
  if (response === null) {
    yield put(HomeResponse(null, false));
  } else {
    yield put(HomeResponse(response, false));
  }
}

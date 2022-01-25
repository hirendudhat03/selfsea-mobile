import { put, call } from 'redux-saga/effects';
//import { showMessage } from 'react-native-flash-message';
// import {Login} from '../api/method/Login';
import * as HomeAction from '../actions/HomeAction';
// import Constant from '../../theme/Constant'

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

      // await auth().signInWithEmailAndPassword(email, password)

      return response;
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const response = yield call(Home);
  console.warn('response saga', response);
  yield put(HomeAction.HomeResponse(response));
  action.navigation.navigate('NavigationIdentity');
}

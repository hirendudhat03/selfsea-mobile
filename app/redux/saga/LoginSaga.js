import { put, call } from 'redux-saga/effects'
//import { showMessage } from 'react-native-flash-message';
// import {Login} from '../api/method/Login';
import * as LoginAction from '../actions/LoginAction'
// import Constant from '../../theme/Constant'
import auth from '@react-native-firebase/auth';

export function* loginSaga(action) {
    const Login = async (email, password) => {
        console.log('call loginSaga : ', action)

        console.log('url : ', email)
        console.log('payload : ', password)

        try {
            const response = await auth().signInWithEmailAndPassword(email, password)

            return response

        } catch (e) {
            console.log(e);
            alert(e)

        }
    }

    const response = yield call(Login, action.email, action.password)
    console.warn('response saga', response)
    yield put(LoginAction.LoginResponse(response))
    action.navigation.navigate('Home')
}

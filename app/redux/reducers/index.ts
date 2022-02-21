import { combineReducers } from 'redux';

import { LoginReducer } from './LoginReducer';
import { SignUpReducer } from './SignUpReducer';
import { CreateProfileReducer } from './CreateProfileReducer';
import { HomeReducer } from './HomeReducer';
import { MenuReducer } from './MenuReducer';
import { AcceptReducer } from './AcceptTermReducer';

export default combineReducers({
  LoginReducer,
  SignUpReducer,
  CreateProfileReducer,
  HomeReducer,
  MenuReducer,
  AcceptReducer,
});

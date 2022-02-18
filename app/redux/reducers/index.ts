import { combineReducers } from 'redux';

import { LoginReducer } from './LoginReducer';
import { SignupReducer } from './SignupReducer';
import { CreateProfileReducer } from './CreateProfileReducer';
import { HomeReducer } from './HomeReducer';
import { MenuReducer } from './MenuReducer';
import { AcceptReducer } from './AcceptTermReducer';

export default combineReducers({
  LoginReducer,
  SignupReducer,
  CreateProfileReducer,
  HomeReducer,
  MenuReducer,
  AcceptReducer,
});

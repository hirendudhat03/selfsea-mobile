import { combineReducers } from 'redux';

import { LoginReducer } from './LoginReducer';
import { SignupReducer } from './SignupReducer';
import { CreateProfileReducer } from './CreateProfileReducer';
import { HomeReducer } from './HomeReducer';
import { PronounsReducer } from './PronounsReducer';

export default combineReducers({
  LoginReducer,
  SignupReducer,
  CreateProfileReducer,
  HomeReducer,
  PronounsReducer,
});

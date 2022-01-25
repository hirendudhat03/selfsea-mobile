import { combineReducers } from 'redux';

import { LoginReducer } from './LoginReducer';
import { SignupReducer } from './SignupReducer';
import { CreateProfileReducer } from './CreateProfileReducer';
import { HomeReducer } from './HomeReducer';
import { PronounsReducer } from './PronounsReducer';
import { OrientationReducer } from './OrientationReducer';
import { GenderReducer } from './GenderReducer';
import { EthnicityReducer } from './EthnicityReducer';

export default combineReducers({
  LoginReducer,
  SignupReducer,
  CreateProfileReducer,
  HomeReducer,
  PronounsReducer,
  OrientationReducer,
  GenderReducer,
  EthnicityReducer,
});

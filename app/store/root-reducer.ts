import { combineReducers } from 'redux';
import userReducer from './user/reducer';

const appReducer = combineReducers({
  user: userReducer,
});

export default appReducer;

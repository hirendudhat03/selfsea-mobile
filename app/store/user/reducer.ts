import { createReducer } from 'typesafe-actions';
import { login } from './actions';

interface IUserState {
  isLoading: boolean;
  currentUser: null;
}

const userReducer = createReducer<IUserState>({
  isLoading: false,
  currentUser: null,
})
  .handleAction(login.request, (state, _action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(login.success, (state, _action) => ({
    ...state,
    isLoading: false,
    currentUser: null,
  }))
  .handleAction(login.failure, (state, _action) => ({
    ...state,
    isLoading: false,
    currentUser: null,
  }));

export default userReducer;

import { createAsyncAction } from 'typesafe-actions';

export const login = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
)<undefined, undefined, string>();

import { CurrentUserQuery } from 'app/generated/graphql';
import { IApiError } from 'app/services';
import { createAsyncAction } from 'typesafe-actions';

export const login = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
)<undefined, undefined, string>();

export const currentUser = createAsyncAction(
  'GET_CURRENT_USER_REQUEST',
  'GET_CURRENT_USER_SUCCESS',
  'GET_CURRENT_USER_FAILURE',
)<{}, CurrentUserQuery, IApiError>();

import { RootState } from 'typesafe-actions';

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

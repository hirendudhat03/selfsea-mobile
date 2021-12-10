import { filter, of, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { AppEpic } from '../index';
import { login } from './actions';

export const mockLogin: AppEpic = (action$, _state$, _services) =>
  action$.pipe(
    filter(isActionOf(login.request)),
    switchMap(() => of(login.failure('Not implemented'))),
  );

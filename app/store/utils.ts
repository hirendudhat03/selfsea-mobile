import {
  PayloadActionCreator,
  isActionOf,
  EmptyActionCreator,
} from 'typesafe-actions';
import { AppEpic, Services } from '.';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { parseApiError, IApiError } from 'app/services';

type ApiFunctionPropertyNames<R, S> = {
  [K in keyof Services['api']]: Services['api'][K] extends (
    params: R,
  ) => Promise<S>
    ? K
    : never;
}[keyof Services['api']];

/**
 * This is a utility for automatically generating a redux-observable epic
 * for a given async action and API function.
 *
 * @example ```ts
 * import { IApiError } from 'app/services';
 * const health = createAsyncAction(
 *   'HEALTH_REQUEST',
 *   'HEALTH_SUCCESS',
 *   'HEALTH_FAILURE',
 * )<HealthQueryVariables, HealthQuery, IApiError>();
 *
 * export const healthCheck = autoApiEpic(health, 'getHealth');
 * ```
 * @param actions The actions to use for this request (returned by
 * `createAsyncAction`)
 * @param request The name of the API call as exposed by `services/api`.
 * This _should_ auto-suggest names of API calls whose parameters match
 * the types in the actions.
 * @returns A new redux-observable epic
 */
export const autoApiEpic =
  <RequestPayload, SuccessPayload>(
    actions: {
      request:
        | PayloadActionCreator<string, RequestPayload>
        | EmptyActionCreator<string>;
      success: PayloadActionCreator<string, SuccessPayload>;
      failure: PayloadActionCreator<string, IApiError>;
    },
    request: ApiFunctionPropertyNames<RequestPayload, SuccessPayload>,
  ): AppEpic =>
  (action$, state$, { api }) =>
    action$.pipe(
      filter(isActionOf(actions.request)),
      switchMap((data: any) =>
        from(api[request](data.payload)).pipe(
          map(val => actions.success(val as any)),
          catchError((err: string | Error) =>
            of(actions.failure(parseApiError(err))),
          ),
        ),
      ),
    ) as any;

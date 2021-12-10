import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { RootAction, RootState } from 'typesafe-actions';
import * as services from 'app/services';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export type Services = typeof services;

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

// Utility type to represent an Epic with the correct actions, state, and
// services
export type AppEpic = Epic<RootAction, RootAction, RootState, Services>;

// Configure all of the redux middleware
const middleware = [epicMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

epicMiddleware.run(rootEpic);

// Define a utility to select from the redux store with the correct typings.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call OrientationReducer');

export const OrientationReducer = CreateReducer(initialState, {
  ['ORIENTATION_RESPONSE'](state, action) {
    console.log('call ORIENTATION_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['ORIENTATION_REQUEST'](state, action) {
    console.log('call ORIENTATION_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

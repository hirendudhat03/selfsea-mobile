import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
};

console.log('call OrientationReducer');

export const OrientationReducer = CreateReducer(initialState, {
  ['ORIENTATION_RESPONSE'](state, action) {
    console.log('call ORIENTATION_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
    };
  },
  ['ORIENTATION_REQUEST'](state, action) {
    console.log('call ORIENTATION_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
    };
  },
});

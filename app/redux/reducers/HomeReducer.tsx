import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call HomeReducer');

export const HomeReducer = CreateReducer(initialState, {
  ['HOME_RESPONSE'](state, action) {
    console.log('call HOME_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['HOME_REQUEST'](state, action) {
    console.log('call HOME_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

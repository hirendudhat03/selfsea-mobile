import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call CreateProfile');

export const SignupReducer = CreateReducer(initialState, {
  ['SIGNUP_RESPONSE'](state, action) {
    console.log('call SIGNUP_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['SIGNUP_REQUEST'](state, action) {
    console.log('call SIGNUP_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call CreateProfile');

export const SignUpReducer = CreateReducer(initialState, {
  ['SIGN_UP_RESPONSE'](state, action) {
    console.log('call SIGN_UP_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['SIGN_UP_REQUEST'](state, action) {
    console.log('call SIGN_UP_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
  ['PASSWORDLESS_SIGNUP_REQUEST'](state, action) {
    console.log('call SIGNUP_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

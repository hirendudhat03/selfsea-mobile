import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call createProfileReducer');

export const CreateProfileReducer = CreateReducer(initialState, {
  ['CREATE_PROFILE_RESPONSE'](state, action) {
    console.log('call CREATE_PROFILE_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['CREATE_PROFILE_REQUEST'](state, action) {
    console.log('call CREATE_PROFILE_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

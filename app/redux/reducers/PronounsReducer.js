import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
};

console.log('call PronounsReducer');

export const PronounsReducer = CreateReducer(initialState, {
  ['PRONOUNS_RESPONSE'](state, action) {
    console.log('call PRONOUNS_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
    };
  },
  ['PRONOUNS_REQUEST'](state, action) {
    console.log('call PRONOUNS_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
    };
  },
});

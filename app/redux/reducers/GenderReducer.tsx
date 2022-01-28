import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call GenderReducer');

export const GenderReducer = CreateReducer(initialState, {
  ['GENDER_RESPONSE'](state, action) {
    console.log('call GENDER_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['GENDER_REQUEST'](state, action) {
    console.log('call GENDER_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
};

console.log('call EthnicityReducer');

export const EthnicityReducer = CreateReducer(initialState, {
  ['ETHNICITY_RESPONSE'](state, action) {
    console.log('call ETHNICITY_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
    };
  },
  ['ETHNICITY_REQUEST'](state, action) {
    console.log('call  ETHNICITY__REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
    };
  },
});

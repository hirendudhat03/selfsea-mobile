import CreateReducer from './CreateReducer';

const initialState = {
  data: null,
  loader: false,
};

console.log('call AcceptTerm');

export const AcceptReducer = CreateReducer(initialState, {
  ['ACCEPT_RESPONSE'](state, action) {
    console.log('call ACCEPT_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      data: action.payload,
      loader: action.loader,
    };
  },
  ['ACCEPT_REQUEST'](state, action) {
    console.log('callACCEPT_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

import CreateReducer from './CreateReducer';

const initialState = {
  ethnicities: null,
  genders: null,
  orientations: null,
  pronouns: null,
  loader: false,
};

console.log('call menuReducer');

export const MenuReducer = CreateReducer(initialState, {
  ['DROPDOWN_RESPONSE'](state, action) {
    console.log('call DROPDOWN_RESPONSE');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      ethnicities: action.payload.Ethnicity.ethnicities,
      genders: action.payload.Gender.genders,
      orientations: action.payload.Orientation.orientations,
      pronouns: action.payload.Pronouns.pronouns,
      loader: action.loader,
    };
  },
  ['DROPDOWN_REQUEST'](state, action) {
    console.log('call DROPDOWN_REQUEST');
    console.log('state : ', state);
    console.log('action : ', action);
    return {
      action: action,
      loader: action.loader,
    };
  },
});

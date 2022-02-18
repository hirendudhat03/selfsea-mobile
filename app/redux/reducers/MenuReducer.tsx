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
      pronouns:
        action.payload.Pronouns === null
          ? []
          : action.payload.Pronouns.pronouns,
      orientations:
        action.payload.Orientation === null
          ? []
          : action.payload.Orientation.orientations,
      genders:
        action.payload.Gender === null ? [] : action.payload.Gender.genders,
      ethnicities:
        action.payload.Ethnicity === null
          ? []
          : action.payload.Ethnicity.ethnicities,

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

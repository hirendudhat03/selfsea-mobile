export function CreateProfileResponse(data, loader) {
  console.log('call SaveLoginResponse : ', data);

  return {
    type: 'CREATE_PROFILE_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function CreateProfileRequest(
  profile,
  selectPronounsDropDown,
  selectOrientationDropDown,
  selectGenderDropDown,
  selectRaceDropDown,
  selectLocationDropDown,
  navigation,
  loader?,
) {
  return {
    type: 'CREATE_PROFILE_REQUEST',
    profile: profile,
    selectPronounsDropDown: selectPronounsDropDown,
    selectOrientationDropDown: selectOrientationDropDown,
    selectGenderDropDown: selectGenderDropDown,
    selectRaceDropDown: selectRaceDropDown,
    selectLocationDropDown: selectLocationDropDown,
    navigation: navigation,
    loader: loader,
  };
}

export function CreateProfileResponse(data) {
  console.log('call SaveLoginResponse : ', data);

  return {
    type: 'CREATE_PROFILE_RESPONSE',
    payload: data,
  };
}

export function CreateProfileRequest(
  profile,
  selectPronounsDropDown,
  selectOrientationDropDown,
  navigation,
) {
  // console.log('call SaveLoginResponse : ', data)

  return {
    type: 'CREATE_PROFILE_REQUEST',
    profile: profile,
    selectPronounsDropDown: selectPronounsDropDown,
    selectOrientationDropDown: selectOrientationDropDown,
    navigation: navigation,
  };
}

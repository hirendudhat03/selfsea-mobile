export function SignupResponse(data, loader) {
  console.log('call SaveLoginResponse : ', data);

  return {
    type: 'SIGNUP_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function SignupRequest(
  email,
  Password,
  birthMonth,
  birthYear,
  userName,
  navigation,
  loader,
) {
  return {
    type: 'SIGNUP_REQUEST',
    email: email,
    Password: Password,
    birthMonth: birthMonth,
    birthYear: birthYear,
    userName: userName,
    navigation: navigation,
    loader: loader,
  };
}

export function SignupRequestWithoutPassword(
  email,
  birthMonth,
  birthYear,
  userName,
  navigation,
  loader,
  userInfo,
  platform,
  uid
) {
  return {
    type: 'PASSWORDLESS_SIGNUP_REQUEST',
    email: email,
    birthMonth: birthMonth,
    birthYear: birthYear,
    userName: userName,
    navigation: navigation,
    loader: loader,
    userInfo: userInfo,
    platform:platform,
    uid:uid
  };
}

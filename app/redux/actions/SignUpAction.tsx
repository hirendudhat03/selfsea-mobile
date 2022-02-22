export function SignUpResponse(data, loader) {
  console.log('call SaveLoginResponse : ', data);

  return {
    type: 'SIGN_UP_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function SignUpRequest(
  email,
  Password,
  birthMonth,
  birthYear,
  userName,
  navigation,
  loader?: unknown,
) {
  return {
    type: 'SIGN_UP_REQUEST',
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
  uid,
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
    platform: platform,
    uid: uid,
  };
}

export function LoginResponse(data, loader) {
  console.log('call SaveLoginResponse : ', data);

  return {
    type: 'LOGIN_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function LoginRequest(email, password, navigation, loader?: unknown) {
  return {
    type: 'LOGIN_REQUEST',
    email: email,
    password: password,
    navigation: navigation,
    loader: loader,
  };
}

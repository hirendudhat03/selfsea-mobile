export function HomeResponse(data) {
  console.log('call SaveHomeResponse : ', data);

  return {
    type: 'HOME_RESPONSE',
    payload: data,
  };
}

export function HomeRequest(navigation) {
  // console.log('call SaveLoginResponse : ', data)

  return {
    type: 'HOME_REQUEST',
    // email: email,
    // password:password,
    navigation: navigation,
  };
}

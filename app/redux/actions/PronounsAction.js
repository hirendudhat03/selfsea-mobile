export function ProunounsResponse(data) {
  console.log('call ProunounsResponse : ', data);

  return {
    type: 'PRONOUNS_RESPONSE',
    payload: data,
  };
}

export function ProunounsRequest() {
  // console.log('call SaveLoginResponse : ', data)
  // email, password, navigation
  return {
    type: 'PRONOUNS_REQUEST',
    //   email: email,
    //   password: password,
    //   navigation: navigation,
  };
}

export function HomeResponse(data, loader) {
  console.log('call SaveHomeResponse : ', data);

  return {
    type: 'HOME_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function HomeRequest(navigation, loader) {
  return {
    type: 'HOME_REQUEST',

    navigation: navigation,
    loader: loader,
  };
}

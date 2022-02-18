export function HomeResponse(data, loader) {
  console.log('call SaveHomeResponse : ', data);

  return {
    type: 'HOME_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function HomeRequest(loader) {
  return {
    type: 'HOME_REQUEST',

    loader: loader,
  };
}

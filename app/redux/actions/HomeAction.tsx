export function HomeResponse(data?: unknown, loader?: unknown) {
  console.log('call SaveHomeResponse : ', data);

  return {
    type: 'HOME_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function HomeRequest(loader?: unknown) {
  return {
    type: 'HOME_REQUEST',
    loader: loader,
  };
}

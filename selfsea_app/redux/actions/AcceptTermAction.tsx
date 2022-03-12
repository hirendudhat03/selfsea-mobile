export function AcceptResponse(data, loader) {
  console.log('call AcceptResponse : ', data);

  return {
    type: 'ACCEPT_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function AcceptRequest(loader?: unknown) {
  return {
    type: 'ACCEPT_REQUEST',
    loader: loader,
  };
}

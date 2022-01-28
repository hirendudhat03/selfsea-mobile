export function OrientationResponse(data, loader) {
  console.log('call OrientationResponse : ', data);
  return {
    type: 'ORIENTATION_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function OrientationRequest(loader) {
  return {
    type: 'ORIENTATION_REQUEST',
    loader: loader,
  };
}

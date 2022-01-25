export function OrientationResponse(data) {
  console.log('call OrientationResponse : ', data);
  return {
    type: 'ORIENTATION_RESPONSE',
    payload: data,
  };
}

export function OrientationRequest() {
  return {
    type: 'ORIENTATION_REQUEST',
  };
}

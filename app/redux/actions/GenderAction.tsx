export function GenderResponse(data, loader) {
  console.log('call GenderResponse : ', data);

  return {
    type: 'GENDER_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function GenderRequest(loader) {
  return {
    type: 'GENDER_REQUEST',
    loader: loader,
  };
}

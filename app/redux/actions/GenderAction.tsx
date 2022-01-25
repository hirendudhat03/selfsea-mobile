export function GenderResponse(data) {
  console.log('call GenderResponse : ', data);

  return {
    type: 'GENDER_RESPONSE',
    payload: data,
  };
}

export function GenderRequest() {
  return {
    type: 'GENDER_REQUEST',
  };
}

export function EthnicityResponse(data) {
  console.log('call EthnicityResponse : ', data);

  return {
    type: 'ETHNICITY_RESPONSE',
    payload: data,
  };
}

export function EthnicityRequest() {
  return {
    type: 'ETHNICITY_REQUEST',
  };
}

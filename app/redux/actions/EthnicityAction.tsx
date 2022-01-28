export function EthnicityResponse(data, loader) {
  console.log('call EthnicityResponse : ', data);

  return {
    type: 'ETHNICITY_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function EthnicityRequest(loader) {
  return {
    type: 'ETHNICITY_REQUEST',
    loader: loader,
  };
}

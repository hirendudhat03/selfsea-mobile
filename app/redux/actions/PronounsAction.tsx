export function ProunounsResponse(data, loader) {
  console.log('call ProunounsResponse : ', data);

  return {
    type: 'PRONOUNS_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function ProunounsRequest(loader) {
  return {
    type: 'PRONOUNS_REQUEST',
    loader: loader,
  };
}

export function ProunounsResponse(data) {
  console.log('call ProunounsResponse : ', data);

  return {
    type: 'PRONOUNS_RESPONSE',
    payload: data,
  };
}

export function ProunounsRequest() {
  return {
    type: 'PRONOUNS_REQUEST',
  };
}

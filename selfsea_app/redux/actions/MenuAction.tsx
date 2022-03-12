export function DropDownResponse(data, loader) {
  console.log('call DropDownResponse : ', data);

  return {
    type: 'DROPDOWN_RESPONSE',
    payload: data,
    loader: loader,
  };
}

export function DropDownRequest(loader?: unknown) {
  return {
    type: 'DROPDOWN_REQUEST',
    loader: loader,
  };
}

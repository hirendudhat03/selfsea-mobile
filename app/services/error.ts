export const parseApiError = (error: any): IApiError => {
  // TODO: Actual error parsing needs to be performed
  return {
    code: -1,
    message: error.toString(),
  };
};

export interface IApiError {
  // A code that should uniquely identify the error.
  code: number;

  // A human-readable message describing the error.
  message?: string;

  // Error details, not intended to be displayed
  details?: string;
}

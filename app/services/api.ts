import { GraphQLClient } from 'graphql-request';
import { environment } from '../environments/environment';
import { getSdk, SdkFunctionWrapper } from '../generated/graphql';
const errorWrapper: SdkFunctionWrapper = async action => {
  try {
    return await action();
  } catch (e) {
    throw e;
  }
};
export const api = (() => {
  const client = new GraphQLClient(environment.graphqlBaseUrl, {
    timeout: environment.graphqlTimeoutMs,
  });
  return {
    client,
    ...getSdk(client, errorWrapper),
    setAuthHeader: (token: string | null) =>
      token
        ? client.setHeader('Authorization', `Bearer ${token}`)
        : client.setHeader('Authorization', ''),
  };
})();

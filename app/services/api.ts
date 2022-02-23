import config from '../config';
import { GraphQLClient } from 'graphql-request';
import { getSdk, SdkFunctionWrapper } from '../generated/graphql';
const errorWrapper: SdkFunctionWrapper = async action => {
  try {
    return await action();
  } catch (e) {
    throw e;
  }
};
export const api = (() => {
  const client = new GraphQLClient(config.config.GRAPHQL_BASE_URL, {
    timeout: config.config.GRAPHQL_TIMEOUT_MS,
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

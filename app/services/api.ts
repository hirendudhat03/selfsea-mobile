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
        ? client.setHeader('Authorization', `Bearer ${'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZnNlYS1kZXYiLCJhdWQiOiJzZWxmc2VhLWRldiIsImF1dGhfdGltZSI6MTY0MzAxODE5NiwidXNlcl9pZCI6InI1N3BYSUFQN3FSU0c4Wk1uZ2w4eGxXNlhSYjIiLCJzdWIiOiJyNTdwWElBUDdxUlNHOFpNbmdsOHhsVzZYUmIyIiwiaWF0IjoxNjQzMDE4MTk2LCJleHAiOjE2NDMwMjE3OTYsImVtYWlsIjoiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fQ9_rzXV0oaPTfqMC8RR_8rLTO7YKLxU8JJK3k1OaLXLCWVF9mMqyjrtRevhYGXjfUdRR3AWVxXxy2rfZRvQFinyjZb3c_pZqdVc0M8Uix4KyxqW9xMF2iA-d0svwIgjBtlNHnhJ_CZwPG7Vn7CEefJTFudcRY7oMixPEuLdZnp2ws4KI2Ry9oIIahe5rhH2mKn2WuuKP4Vl153xqsU5lWkb28FxvgcxZVAVR2An0Hh5v-UDWHX2QgqCmJrLBmJHEWQuAoRjCnaJLPmw8m3N-dWs9d5GfNGo0bjmTHiCUjhbjznJRxzesA68sbIM-wSRaEvdQScCSdFYbLW48DHcrw'}`)
        : client.setHeader('Authorization', ''),
  };
})();

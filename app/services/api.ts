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
        ? client.setHeader('Authorization', `Bearer ${'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZnNlYS1kZXYiLCJhdWQiOiJzZWxmc2VhLWRldiIsImF1dGhfdGltZSI6MTY0MzAyMTQxOCwidXNlcl9pZCI6InI1N3BYSUFQN3FSU0c4Wk1uZ2w4eGxXNlhSYjIiLCJzdWIiOiJyNTdwWElBUDdxUlNHOFpNbmdsOHhsVzZYUmIyIiwiaWF0IjoxNjQzMDIxNDE4LCJleHAiOjE2NDMwMjUwMTgsImVtYWlsIjoiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.46a_ziAKItTE5UiEEINYt02l79wRR6bwbAtByadY-Pd1GTbb45es3adgviQRueJs2EVmCUF2n_d0m340DtkMc5z3VZfyt-G8bh7m2Tb55a0O7r2qH0LUKlraYe_vCbho0_mW-L3GGnQDWPYlUVve97An8RhvEYWLfYC3Zinm60v1DfBWjj8Dviu1pU71iwk6eDZJSWcjpvdxV-vl78mY9lAxoaKuzCmy1k2lu7v1pb6UP71L3ZMxCboTkCGYxAJszPNyphW9S3fCqggYlljzcOUrlksQT63MDVPWfN4SXgYddx5idfBoiJH-nIvispbjEl46lls2W-ncI59CHPzTzA'}`)
        : client.setHeader('Authorization', `Bearer ${'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZnNlYS1kZXYiLCJhdWQiOiJzZWxmc2VhLWRldiIsImF1dGhfdGltZSI6MTY0MzAyMTQxOCwidXNlcl9pZCI6InI1N3BYSUFQN3FSU0c4Wk1uZ2w4eGxXNlhSYjIiLCJzdWIiOiJyNTdwWElBUDdxUlNHOFpNbmdsOHhsVzZYUmIyIiwiaWF0IjoxNjQzMDIxNDE4LCJleHAiOjE2NDMwMjUwMTgsImVtYWlsIjoiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF5LnBvb2phcmFAdGVjaG5vaWRlbnRpdHkuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.46a_ziAKItTE5UiEEINYt02l79wRR6bwbAtByadY-Pd1GTbb45es3adgviQRueJs2EVmCUF2n_d0m340DtkMc5z3VZfyt-G8bh7m2Tb55a0O7r2qH0LUKlraYe_vCbho0_mW-L3GGnQDWPYlUVve97An8RhvEYWLfYC3Zinm60v1DfBWjj8Dviu1pU71iwk6eDZJSWcjpvdxV-vl78mY9lAxoaKuzCmy1k2lu7v1pb6UP71L3ZMxCboTkCGYxAJszPNyphW9S3fCqggYlljzcOUrlksQT63MDVPWfN4SXgYddx5idfBoiJH-nIvispbjEl46lls2W-ncI59CHPzTzA'}`)
  };
})();

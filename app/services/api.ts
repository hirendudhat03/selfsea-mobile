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
        ? client.setHeader('Authorization', `Bearer ${'AFxQ4_rclHicsKKl7GDw64S0zgKhIT0J0aiNM-gyvOzMaftHWIUDjKbN40aP5c_LZ_3ikm-vqdVv9N5CV0kwVdXJL_17V75_XiIbAB8Gg7U2teov_lXWNiPHwdIKNgrzJxttyu2iZnmvSjzM1OXPMpq1pwHCI8g14gOYx-7ZqKRtOfHHTzb_F4tpgCTj8u9cqT6Rp4hGmVVX8BKdfli3CNMgNzaEh5uJNQ'}`)
        : client.setHeader('Authorization', ''),
  };
})();

import { Environment } from './environment';

export const staging: Environment = {
  production: true,
  graphqlBaseUrl: 'https://selfsea-api-dev.sidebench.dev/graphql',
  graphqlTimeoutMs: 10000,
};

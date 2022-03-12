import { Environment } from './environment';

export const production: Environment = {
  production: true,
  graphqlBaseUrl: 'https://selfsea-api-dev.sidebench.dev/graphql',
  graphqlTimeoutMs: 10000,
};

import { Environment } from './environment';

export const staging: Environment = {
  production: true,
  graphqlBaseUrl: 'https://api.staging.selfsea.org/graphql',
  graphqlTimeoutMs: 10000,
};

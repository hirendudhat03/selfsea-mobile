import { Environment } from './environment';

export const production: Environment = {
  production: true,
  graphqlBaseUrl: 'https://api.selfsea.org/graphql',
  graphqlTimeoutMs: 10000,
};

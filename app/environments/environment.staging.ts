import { Environment } from './environment';

export const staging: Environment = {
  production: true,
  graphqlBaseUrl: 'https://api.staging.selfsea.org/graphql',
  // graphqlBaseUrl: 'http://selfseastagingapi-env.eba-zspdnj8e.us-west-2.elasticbeanstalk.com/graphql',
  graphqlTimeoutMs: 10000,
};

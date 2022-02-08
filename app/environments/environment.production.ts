import { Environment } from './environment';

export const production: Environment = {
  production: true,
  graphqlBaseUrl:
    'http://selfseastagingapi-env.eba-zspdnj8e.us-west-2.elasticbeanstalk.com/graphql',
  graphqlTimeoutMs: 10000,
};

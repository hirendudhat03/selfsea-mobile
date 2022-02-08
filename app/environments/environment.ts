import { production } from './environment.production';
import { staging } from './environment.staging';

const development = {
  production: false,
  graphqlBaseUrl:
    'https://selfsea-api-dev.sidebench.dev/graphql',
  graphqlTimeoutMs: 10000,
};

const nodeEnv = (process.env.NODE_ENV || 'development').toLowerCase();
const availableEnvironments = {
  development,
  staging,
  production,
};

export type Environment = typeof development;

export const environment =
  nodeEnv in availableEnvironments
    ? availableEnvironments[nodeEnv as keyof typeof availableEnvironments]
    : development;

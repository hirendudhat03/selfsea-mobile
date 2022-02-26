import Config from 'react-native-config';

export const config = {
  API_BASE_URL: Config.API_BASE_URL,
  GRAPHQL_BASE_URL: Config.API_BASE_URL + '/graphql',
  GRAPHQL_TIMEOUT_MS: parseInt(Config.GRAPHQL_TIMEOUT_MS, 10),
  PLACES_API_KEY: Config.PLACES_API_KEY,
  PLACES_SESSION_TOKEN: Config.PLACES_SESSION_TOKEN,
  GOOGLE_WEB_CLIENT_ID: Config.GOOGLE_WEB_CLIENT_ID,
};

export default config;

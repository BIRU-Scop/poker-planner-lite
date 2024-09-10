import { EnvironmentConfig, mqttDefaults } from './environment-type';

export const environment: EnvironmentConfig = {
  appVersion: '$RELEASE_VERSION',
  production: true,
  env: 'production',
  sentryOptions: {
    dsn: '$SENTRY_DSN',
    environment: '$SENTRY_ENVIRONMENT',
    release: '$RELEASE_VERSION',
  },

  defaultCountdown: 3,
  mqttConfigOptions: {
    ...mqttDefaults,
    hostname: '$MQTT_HOST',
    username: '$MQTT_USER',
    password: '$MQTT_PWD',
    protocol: 'wss',
    port: parseInt('$MQTT_PORT'),
  },
};

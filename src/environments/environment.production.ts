import { EnvironmentConfig, mqttDefaults } from './environment-type';

export const environment: EnvironmentConfig = {
  appVersion: '$RELEASE_VERSION',
  production: true,
  env: 'production',

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

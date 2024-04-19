import { EnvironmentConfig, mqttDefaults } from './environment-type'; // Included with Angular CLI.
export const environment: EnvironmentConfig = {
  appVersion: '$RELEASE_VERSION',
  production: true,
  env: 'staging',

  defaultCountdown: 3,
  mqttConfigOptions: {
    ...mqttDefaults,
    hostname: '$MQTT_HOST',
    username: '$MQTT_USER',
    password: '$MQTT_PWD',
  },
};

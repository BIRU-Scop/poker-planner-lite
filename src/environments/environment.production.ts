import { EnvironmentConfig, mqttDefaults } from './environment-type';

export const environment: EnvironmentConfig = {
  appVersion: '#RELEASE_VERSION',
  production: false,
  env: 'production',

  mqttConfigOptions: {
    ...mqttDefaults,
    hostname: '#MQTT_HOST',
    username: '#MQTT_USER',
    password: '#MQTT_PWD',
  },
};

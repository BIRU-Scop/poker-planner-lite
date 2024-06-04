import { EnvironmentConfig, mqttDefaults } from './environment-type';

export const environment: EnvironmentConfig = {
  appVersion: 'dev',
  production: false,
  env: 'dev',

  defaultCountdown: 3,
  mqttConfigOptions: {
    ...mqttDefaults,
    hostname: 'localhost',
    username: 'user',
    password: 'password',
    protocol: 'ws',
    port: 8080,
  },
};

import { InjectionToken } from '@angular/core';
import { IMqttServiceOptions } from 'ngx-mqtt';

export const ENVIRONMENT_CONFIG = new InjectionToken('ENVIRONMENT_CONFIG');

export interface EnvironmentConfig {
  appVersion: string;
  production: boolean;
  env: 'dev' | 'staging' | 'production';

  defaultCountdown: number; // in seconds
  mqttConfigOptions: IMqttServiceOptions;
}

export const mqttDefaults: IMqttServiceOptions = {
  port: 8084,
  protocol: 'wss',
  path: '/mqtt',
  protocolVersion: 5,
};

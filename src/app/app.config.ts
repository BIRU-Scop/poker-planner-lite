import {
  ApplicationConfig,
  importProvidersFrom,
  Injectable,
} from '@angular/core';
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import { Title } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MqttModule } from 'ngx-mqtt';
import { environment } from '../environments/environment';
import { provideMicroSentry } from '@micro-sentry/angular';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Poker Planner Lite | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideAnimationsAsync(),
    importProvidersFrom(MqttModule.forRoot(environment.mqttConfigOptions)),
    provideMicroSentry(environment.sentryOptions),
  ],
};

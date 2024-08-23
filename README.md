# PokerPlannerLite

Simple app to run poker planning session in a scrum team
![Demo Timeout](docs/demo.gif)

## Goal of the project

Inspiration: [PlanningPokerOnline](https://planningpokeronline.com/)

The goal was not to reproduce all features of this app;
we only wanted the ability to join a room and vote.
And vote. And vote again.
Simplicity and usability is a must!

We already have our own ticket tracker with weight that can be assigned to each issue.
We wanted a small supplementary tool just to run our poker planning session without needing any data retention in it.
Dev should be able to vote easily and Scrum Master or others should be able to observe the session.
No need for authentication since we will deploy only as an internal tool with access limited to specific users.

## Tech Stack

We use Angular for the frontend and communicate via websocket to a MQTT server supporting protocol version 5 (in our case we use EMQX).
We do not need to keep voting data for long, hence MQTT was a good solution to handle clients communication.

Just a SPA frontend and an MQTT server, nothing else.

## Project commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

### Development server

Run `ng serve` for a dev server.
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

Run `docker compose up` to launch the MQTT server.
MQTT dashboard will be available at http://localhost:18083/.
Login with "admin:public" (you will then be asked for a password)

### Storybook

Run `npm run storybook` for a dev server. Navigate to http://localhost:6006/.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

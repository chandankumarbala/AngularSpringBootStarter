# Read this to create the set up env

1)Install `npm` for windows
2)Install `angular-cli` using npm `npm install @angular/cli@latest`
3)Download and install STS `Spring tool suit` IDE for Spring.
4)Download and install `Visual Code` IDE for angular. 
5)Download and install Maven
6)Clone this project to a folder
7)Import project in STS as `Existing maven project` point to the cloaned folder containing pom.xml.
8)Open the `angularcode` folder in `visual code` IDE from the cloand project folder.

# Execution

1)Run  `mvn clean install` in STS/Console to download all dependencies.
2)Run `mvn clean spring-boot:run` to start the java server at `8080` port.
3)Now in visual code open `angularcode` directory then -> View -> Integrated Terminal (Will open power shell in the IDE)
4)in powershell `npm install`
5)In power shell `ng serve`. Wait for the server to start at `http://localhost:4200`
6)Hit `http://localhost:4200` should land u on the home page.

# Angularcode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

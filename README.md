# Farmers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Installation

- Download and install PostgreSQL
- Download and install Node.JS
- Run `npm install @angular/cl@7` to install Angular-cli 7
- Run `npm install` in the root of the project to install dependencies

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. 
It will create the database, tables and some dummy data before start the server. Check username and password to connect to your local postgres in `server/config/config.json` and change the values if necessary. 
Add new farmers in `server/seeders/seed-farmers.js`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Jest tests

Run `npm test`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

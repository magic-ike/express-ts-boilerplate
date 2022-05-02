<div align="center">
    <h1>Express TS Boilerplate</h1>
    <p>A complete template for building RESTful API services with Express (Node.js) and TypeScript</p>
    <br>
</div>

## Table of Contents

- [Included Tooling](#included-tooling)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Included Tooling

- [Express](https://github.com/expressjs/express) for rapid Node.js web app development
- [TypeScript](https://github.com/microsoft/TypeScript) for type checking and other tooling for JavaScript
- [Express Handlebars](https://github.com/express-handlebars/express-handlebars) for view rendering
- [Dotenv](https://github.com/motdotla/dotenv) for storing app configuration in the environment
- [Prettier](https://github.com/prettier/prettier) for enforcing consistent code style
- [ESLint](https://github.com/eslint/eslint) for linting, i.e., spotting problematic patterns in the TS codebase
- [Jest](https://github.com/facebook/jest) for testing the TS codebase
- [SuperTest](https://github.com/visionmedia/supertest) for HTTP integration tests

> This project also includes some initial configuration for the included tooling along with some example code.

## Getting Started

### Installing Yarn

This project uses [Yarn](https://github.com/yarnpkg/yarn) instead of [npm](https://github.com/npm/cli) to manage dependencies and run package scripts. To install Yarn, first make sure you have npm installed; npm comes bundled with [Node.js](https://nodejs.org/en/download/) when you install it on your system.

Once npm is installed, run the following to install Yarn:

```bash
npm install --global yarn
```

### Cloning the Repo

To clone the repo, run the following on your system:

```bash
git clone https://github.com/magic-ike/express-ts-boilerplate
cd express-ts-boilerplate
yarn
```

### Serving the App

Run the following to serve the app locally in development mode:

```bash
yarn dev
```

Here, you're using Yarn to run the `dev` script defined in the `package.json` file. Refer to the [**Scripts**](#scripts) section to view the full list of package scripts available out of the box.

### Making Changes

First, remember to configure the `package.json` file for your new project.

Then, if necessary, create a `.env` file at the root of the project to declare, as key-value pairs, any environment varables your app will need to run. As you update your `.env` file, your `.env.example` file should also be updated to look the same but with placeholder values (e.g., `XXX`) substituted for the real values. Also, remember to [**never commit the `.env` file to version control**](https://12factor.net/config) (the file will already be included in the project's `.gitignore` file, which will prevent this from happening).

Before adding your own code, refer to the [**Project Structure**](#project-structure) section as it explains which code should go where.

## Scripts

| Script              | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`start`**         | serves the app in production mode (from the `dist/` folder); will throw an error if the `dist/` folder doesn't exist, which is usually due to the app not yet being transpiled with the `build` script |
| **`dev`**           | serves the app in development mode (from the `src/` folder)                                                                                                                                            |
| **`build`**         | transpiles the app from the `src/` folder to the `dist/` folder (specifically, it transpiles the TypeScript files to ES2016 files then copies over the rest of the files)                              |
| **`lint`**          | lints all the TypeScript files in the project                                                                                                                                                          |
| **`lint:fix`**      | lints all the TypeScript files in the project **and** automatically fixes issues wherever possible                                                                                                     |
| **`test`**          | runs all the tests in the project                                                                                                                                                                      |
| **`test:coverage`** | runs all the tests in the project **and** collects and reports all the test coverage information in the output                                                                                         |

## Project Structure

This project's structure is based on the [Model-view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) design pattern. This pattern was chosen because it makes it easy to separate the responsibilities of the different parts of the app, thus making the project easier to maintain as it scales.

| File/folder          | Responsibility                                                                                                                                                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dist/**            | should contain the production build (the transpiled source code) of the app; the contents of this folder are generated by the `build` script and you should never edit them directly                                                                       |
| **src/**             | should contain the source code of the project which you _will_ be editing directly                                                                                                                                                                         |
| **src/@types/**      | should contain any custom TypeScript type definitions                                                                                                                                                                                                      |
| **src/config/**      | should contain the app configuration loaded from the environment variables, such as API keys and database connection strings                                                                                                                               |
| **src/controllers/** | should contain the controllers; the controllers get incoming requests from the routes, interact with the models to process and retrieve data, render and serve the views, and serve all other HTTP responses                                               |
| **src/interfaces/**  | should contain any custom TypeScript interfaces                                                                                                                                                                                                            |
| **src/middleware/**  | should contain any custom middleware; middleware is used to preprocess incoming requests                                                                                                                                                                   |
| **src/models/**      | should contain any models; the models represent the data in a database and implement all the business logic for handling this data                                                                                                                         |
| **src/public/**      | should contain the static files served by the app such as style sheets, images, and JavaScript files                                                                                                                                                       |
| **src/routes/**      | should contain the routes; the routes receive incoming requests and pass them along to the controllers                                                                                                                                                     |
| **src/utils/**       | should contain any utility code that should be shared across the app                                                                                                                                                                                       |
| **src/views/**       | should contain the views, which get rendered by the controllers                                                                                                                                                                                            |
| **tests/**           | should contain the tests you'll write for your code                                                                                                                                                                                                        |
| **.env**             | should be the file where you declare environment variables for storing app configuration; you'll be creating this file yourself and it should **never** be committed to version control                                                                    |
| **.env.example**     | should be the file where you use placeholder values to indicate the environment variables declared in `.env` without actually redeclaring them and committing them to version control                                                                      |
| **_misc_**           | _most of the other files in the root directory of the project are related to project configuration (different from app configuration) and will already have some initial setup; you'll most likely be changing this configuration as your project evolves_ |

## License

[MIT](LICENSE)

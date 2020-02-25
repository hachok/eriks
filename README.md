## Eriks

The compare page with the possibility to show/hide, remove products.

## Installation

In the project directory, you can run:

- `yarn install` - install dependencies
- `cp .env.example .env` - create .env file with env variables
- `yarn start` - run app

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Commands

- `yarn build` - builds the app for production to the build folder.
- `yarn start` - run app
- `yarn prettier` - run prettier for code formatting
- `yarn tslint:fix` - fix tslint
- `yarn pre-commit` - pre-commit hook with tslint and prettier

## Structure

```|-- actions
    |-- components
    |-- constants
    |-- reducers
    |-- sagas
    |-- selectors
    |-- services
    |-- styles
    |-- types
    |-- utils
```

## Technologies

- React 16.12
- Typescript 3.7.2
- Redux(redux-saga) 4.0.5
- Reselect 4.0.0
- Styled-components 5.0.1
